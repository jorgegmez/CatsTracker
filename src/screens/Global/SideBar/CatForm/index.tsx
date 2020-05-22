/* eslint-disable prettier/prettier */
import React, { createRef } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, ScrollView, StatusBar, View, KeyboardAvoidingView, Platform } from 'react-native';
import DropdownAlert from 'react-native-dropdownalert';
import ImagePicker from 'react-native-image-picker';
import { Formik } from 'formik';
import { colorsGlobal as colors, stringsCat, imagesGlobal, validations } from '@constants';
import { Titles, MainButton, Input, ProfilePicture, Loading, Card } from '@components';
import { registerCatInfoRegisterAction } from '@state/global/user/actions';
import { resetCatFieldsAction, setCatPictureAction } from '@state/global/cat/actions';
import { handleUpdateCat, handleRegisterCat } from '@helpers/handlerCatsData';
import { NavigationService } from '@services';
import universalUtils from '@helpers/universal';
import _ from 'lodash';
import { catRegisterSchema } from './schema';
import * as catSelectors from '@state/global/cat/selector';
import * as userSelectos from '@state/global/user/selector';

import styles from './styles';

type State = {
  themeOfButton: 'blue' | 'white' | 'gray';
  userProfileImage?: string;
  setProfilePicture: boolean;
  loading: boolean;
};

type Props = {
  catInfo: CatStateModel;
  userInfo: UserStateModel;
  registerCatInfoRegister: (cats: CatPet[]) => void;
  resetCatFields: () => void;
  setCatPicture: (picture: UpdateCatStateModel) => void;
};

class CatForm extends React.PureComponent<Props, State> {
  static navigationOptions = {
    headerTitle: () => <Titles.H3 customStyle={styles.headerNav} text={stringsCat.REGISTER_CAT_BUTTON_TEXT} />,
  };

  state: State = {
    themeOfButton: 'blue',
    userProfileImage: '',
    setProfilePicture: false,
    loading: false,
  };

  notificationRef = createRef<DropdownAlert>();

  componentWillUnmount() {
    const { resetCatFields } = this.props;
    resetCatFields();
  }

  private selectProfileImage = async (fileName?: string) => {
    const { setCatPicture } = this.props;
    const options = {
      title: `Select ${fileName}`,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      this.setState({
        loading: true,
      });
      const source = { uri: response.uri };
      if (source.uri) {
        this.setState({
          loading: false,
          userProfileImage: source.uri,
        });
        const catPicture: UpdateCatStateModel = {
          picture: { uri: source.uri },
        };
        setCatPicture(catPicture);
      }
    });
  };

  public handleUpdateCatMethod = async ({ id, name, breed, age, description}: CatPet) => {

    const {
      registerCatInfoRegister,
      resetCatFields,
      userInfo: {
        data: { myCats },
      },
      catInfo: {
        data: { picture },
      },
    } = this.props;
    let cats: CatPet[];

    if (id && name && breed && age && description && picture) {
      cats = handleUpdateCat({ id, name, breed, age, description, picture }, myCats);
    } else {
      const cat: CatPet = {
        name,
        breed,
        age,
        description,
        picture,
      };
      cats = handleRegisterCat(cat, myCats);
    }
    this.showSuccessMessage();
    registerCatInfoRegister(cats);
    NavigationService.home.goToCatsHome(0);
    resetCatFields();
  };

  private showSuccessMessage = () => {
    universalUtils.DropDownHolder.getDropDownRef().alertWithType('success', 'Success', validations.UPDATE__SUCCESS_MESSAGE || '');
  };

  render() {
    const {
      catInfo: {
        data: { id, name, breed, age, description, picture: catPicture },
      },
    } = this.props;
    const { themeOfButton, userProfileImage, loading } = this.state;
    const imagePlacement = userProfileImage
      ? {
          uri: userProfileImage,
        }
      : catPicture || imagesGlobal.ICON_CAT_AVATAR;

    return (
      <KeyboardAvoidingView style={styles.keyboard} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={100}>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
          <ScrollView alwaysBounceVertical={false} bounces={false} contentContainerStyle={styles.scrollView}>
            <Formik
              initialValues={{
                id,
                name,
                breed,
                age,
                description,
                picture: catPicture || imagePlacement,
              }}
              validationSchema={catRegisterSchema}
              onSubmit={this.handleUpdateCatMethod}
            >
              {props => (
                <View style={styles.content}>
                  <Card customTextStyle={styles.customTextStyle} theme="white">
                    <View style={styles.firstSectionHeaderStyle}>
                      <ProfilePicture showEditIcon image={imagePlacement} onImageSelected={() => this.selectProfileImage('picture')} />
                    </View>
                    <View style={styles.secondSectionHeaderStyle}>
                      <Input
                        onChange={props.handleChange('name')}
                        onBlur={props.handleBlur('name')}
                        value={props.values.name}
                        type="normal"
                        label={stringsCat.REGISTER_CAT_NAME_TEXT}
                        hasError={!!props.errors.name}
                      />
                      <Input
                        onChange={props.handleChange('breed')}
                        onBlur={props.handleBlur('breed')}
                        value={props.values.breed}
                        type="normal"
                        label={stringsCat.REGISTER_CAT_BREED_TEXT}
                        hasError={!!props.errors.breed}
                      />
                      <Input
                        onChange={props.handleChange('age')}
                        onBlur={props.handleBlur('age')}
                        value={props.values.age}
                        type="numeric"
                        label={stringsCat.REGISTER_CAT_AGE_TEXT}
                        hasError={!!props.errors.age}
                      />
                      <Input
                        onChange={props.handleChange('description')}
                        onBlur={props.handleBlur('description')}
                        type="normal"
                        value={props.values.description}
                        label={stringsCat.REGISTER_CAT_DESCRIPTION_TEXT}
                        hasError={!!props.errors.description}
                      />
                    </View>
                  </Card>
                  <View style={styles.buttonContainer}>
                    <MainButton
                      theme={themeOfButton}
                      text={stringsCat.REGISTER_CAT_BUTTON_TEXT}
                      testID={_.uniqueId()}
                      customButtonStyle={styles.mainButton}
                      onPress={props.handleSubmit}
                    />
                  </View>
                </View>
              )}
            </Formik>
          </ScrollView>
          <Loading showModal={loading} />
        </SafeAreaView>
      </KeyboardAvoidingView>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  catInfo: catSelectors.CatSelector(state),
  userInfo: userSelectos.UserSelector(state),
});

const mapDispatchToProps = (dispatch: DispatchRSSA) => ({
  registerCatInfoRegister: (data: CatPet[]) => dispatch(registerCatInfoRegisterAction(data)),
  resetCatFields: () => dispatch(resetCatFieldsAction()),
  setCatPicture: (picture: UpdateCatStateModel) => dispatch(setCatPictureAction(picture)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CatForm);
