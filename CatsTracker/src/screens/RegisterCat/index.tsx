import React from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {Formik} from 'formik';
import {colorsGlobal as colors, imagesGlobal, stringsCat} from '@constants';
import {
  Titles,
  MainButton,
  Input,
  ProfilePicture,
  Loading,
  RegisterForm,
} from '@components';
import {registerCatInfoRegisterAction} from '@state/global/user/actions';
import {handleSelectProfileImage} from '@helpers/handlerProfilePicture';
import {handleRegisterCat} from '@helpers/handlerCatsData';
import _ from 'lodash';
import {catRegisterSchema} from '../Home/schema';
import * as userSelectors from '@state/global/user/selector';

import styles from './styles';

type State = {
  themeOfButton: 'blue' | 'white' | 'gray';
  userProfileImage?: string;
  setProfilePicture: boolean;
  loading: boolean;
};

type Props = {
  userInfo: UserStateModel;
  registerCatInfoRegister: (cats: CatPet[]) => void;
};

class RegisterCat extends React.PureComponent<Props, State> {
  static navigationOptions = {
    headerTitle: () => (
      <Titles.H3
        customStyle={styles.headerNav}
        text={stringsCat.REGISTER_CAT_BUTTON_TEXT}
      />
    ),
  };

  state: State = {
    themeOfButton: 'blue',
    userProfileImage: '',
    setProfilePicture: false,
    loading: false,
  };

  private selectProfileImage = async (fileName?: string) => {
    const {setProfilePicture} = this.state;
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

  public handleRegisterCat = async ({
    id,
    name,
    breed,
    age,
    description,
    picture,
  }: CatPet) => {
    const {
      registerCatInfoRegister,
      userInfo: {
        data: {myCats},
      },
    } = this.props;
    if (name && breed && age && description && picture) {
      const cats = handleRegisterCat(
        {id, name, breed, age, description, picture},
        myCats,
      );
      registerCatInfoRegister(cats);
    }
  };

  render() {
    const {themeOfButton, userProfileImage, loading} = this.state;
    const imagePlacement = userProfileImage
      ? {
          uri: userProfileImage,
        }
      : imagesGlobal.ICON_AVATAR;
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
        <ScrollView
          alwaysBounceVertical={false}
          bounces={false}
          contentContainerStyle={styles.scrollView}>
          <Formik
            initialValues={{
              id: '',
              name: '',
              breed: '',
              age: 0,
              description: '',
              picture: imagePlacement,
            }}
            validationSchema={catRegisterSchema}
            onSubmit={this.handleRegisterCat}>
            {props => (
              <View style={styles.content}>
                <RegisterForm
                  customTextStyle={styles.customTextStyle}
                  theme="white">
                  <View style={styles.firstSectionHeaderStyle}>
                    <ProfilePicture
                      image={imagePlacement}
                      onImageSelected={() =>
                        this.selectProfileImage('profilePicture')
                      }
                    />
                  </View>
                  <View style={styles.secondSectionHeaderStyle}>
                    <Input
                      onChange={props.handleChange('name')}
                      onBlur={props.handleBlur('name')}
                      type="normal"
                      label={stringsCat.REGISTER_CAT_NAME_TEXT}
                      hasError={!!props.errors.name}
                    />
                    <Input
                      onChange={props.handleChange('breed')}
                      onBlur={props.handleBlur('breed')}
                      type="normal"
                      label={stringsCat.REGISTER_CAT_BREED_TEXT}
                      hasError={!!props.errors.breed}
                    />
                    <Input
                      onChange={props.handleChange('age')}
                      onBlur={props.handleBlur('age')}
                      type="numeric"
                      label={stringsCat.REGISTER_CAT_AGE_TEXT}
                      hasError={!!props.errors.breed}
                    />
                    <Input
                      onChange={props.handleChange('description')}
                      onBlur={props.handleBlur('description')}
                      type="normal"
                      label={stringsCat.REGISTER_CAT_DESCRIPTION_TEXT}
                      hasError={!!props.errors.breed}
                    />
                  </View>
                </RegisterForm>
                <View style={styles.grow} />
                <MainButton
                  theme={themeOfButton}
                  text={stringsCat.REGISTER_CAT_BUTTON_TEXT}
                  testID={_.uniqueId()}
                  customButtonStyle={styles.mainButton}
                  onPress={props.handleSubmit}
                />
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
  userInfo: userSelectors.UserSelector(state),
});

const mapDispatchToProps = (dispatch: DispatchRSSA) => ({
  registerCatInfoRegister: (data: CatPet[]) =>
    dispatch(registerCatInfoRegisterAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegisterCat);
