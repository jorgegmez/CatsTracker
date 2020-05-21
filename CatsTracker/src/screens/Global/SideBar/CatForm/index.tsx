import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { Formik } from 'formik';
import { colorsGlobal as colors, stringsCat, imagesGlobal } from '@constants';
import { Titles, MainButton, Input, ProfilePicture, Loading, Card } from '@components';
import { registerCatInfoRegisterAction } from '@state/global/user/actions';
import { resetCatFieldsAction } from '@state/global/cat/actions';
import { handleSelectProfileImage } from '@helpers/handlerProfilePicture';
import { handleUpdateCat, handleRegisterCat } from '@helpers/handlerCatsData';
import { NavigationService } from '@services';
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

  private selectProfileImage = async (fileName?: string) => {
    const { setProfilePicture } = this.state;
    const imageFile = handleSelectProfileImage({
      fileName,
    });

    if (imageFile) {
      this.setThumbnailImage(await imageFile);
      this.setState({
        loading: false,
        setProfilePicture: !setProfilePicture,
      });
    }
  };

  private setThumbnailImage = (imageUri?: string) => {
    this.setState({
      loading: true,
      userProfileImage: imageUri,
    });
  };

  public handleUpdateCatMethod = async ({ id, name, breed, age, description, picture }: CatPet) => {
    const {
      registerCatInfoRegister,
      resetCatFields,
      userInfo: {
        data: { myCats },
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
        picture: picture || imagesGlobal.ICON_CAT_AVATAR,
      };
      cats = handleRegisterCat(cat, myCats);
    }

    registerCatInfoRegister(cats);
    NavigationService.home.goToCatsHome(0);
    resetCatFields();
  };

  render() {
    const {
      catInfo: {
        data: { id, name, breed, age, description, picture },
      },
    } = this.props;
    const { themeOfButton, userProfileImage, loading } = this.state;
    const imagePlacement = userProfileImage
      ? {
          uri: userProfileImage,
        }
      : picture || imagesGlobal.ICON_CAT_AVATAR;
    return (
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
              picture,
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
});

export default connect(mapStateToProps, mapDispatchToProps)(CatForm);
