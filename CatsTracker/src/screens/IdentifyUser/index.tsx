import React from 'react';
import {connect} from 'react-redux';
import {SafeAreaView, ScrollView, StatusBar, View} from 'react-native';
import {Formik} from 'formik';
import {colorsGlobal as colors, stringsAuth, imagesGlobal} from '@constants';
import {
  Titles,
  MainButton,
  Card,
  Input,
  ProfilePicture,
  Loading,
} from '@components';
import {
  setUserProfilePictureAction,
  registerUserInfoAction,
} from '@state/global/user/actions';
import {NavigationService} from '@services';
import {handleSelectProfileImage} from '@helpers/handlerProfilePicture';
import _ from 'lodash';
import {identifySchema} from './schema';

import styles from './styles';

type State = {
  themeOfButton: 'blue' | 'white' | 'gray';
  userProfileImage?: string;
  setProfilePicture: boolean;
  loading: boolean;
};

type Props = {
  setUserProfilePicture: (image: UpdateUserStateModel) => void;
  registerUserInfo: (user: UpdateUserStateModel) => void;
};

class IdentifyUser extends React.PureComponent<Props, State> {
  static navigationOptions = {
    headerTitle: () => (
      <Titles.H3
        customStyle={styles.headerNav}
        text={stringsAuth.AUTH_IDENTIFY_NAV_TEXT}
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
    const {setUserProfilePicture} = this.props;
    const {setProfilePicture} = this.state;
    const imageFile = handleSelectProfileImage({
      fileName,
      setProfilePicture: setUserProfilePicture,
      isHuman: true,
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

  public handleIdentifyUser = async ({
    name,
    lastName,
    profilePicture,
  }: UpdateUserStateModel) => {
    const {registerUserInfo} = this.props;
    if (name && lastName && profilePicture)
      registerUserInfo({name, lastName, profilePicture});
    NavigationService.home.goToHome();
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
              name: '',
              lastName: '',
              profilePicture: imagePlacement,
            }}
            validationSchema={identifySchema}
            onSubmit={this.handleIdentifyUser}>
            {props => (
              <View style={styles.content}>
                <Titles.H2
                  customStyle={styles.headerTitle}
                  text={stringsAuth.AUTH_TITLE_TEXT}
                  bold
                />
                <Card customTextStyle={styles.customTextStyle} theme="white">
                  <View style={styles.firstSectionHeaderStyle}>
                    <ProfilePicture
                      showEditIcon
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
                      label={stringsAuth.REGISTER_USER_NAME_TEXT}
                      hasError={!!props.errors.name}
                    />
                    <Input
                      onChange={props.handleChange('lastName')}
                      onBlur={props.handleBlur('lastName')}
                      type="normal"
                      label={stringsAuth.REGISTER_USER_LASTNAME_TEXT}
                      hasError={!!props.errors.lastName}
                    />
                  </View>
                </Card>
                <View style={styles.grow} />
                <MainButton
                  theme={themeOfButton}
                  text={stringsAuth.AUTH__IDENTIFY_BUTTON_TEXT}
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

const mapDispatchToProps = (dispatch: DispatchRSSA) => ({
  setUserProfilePicture: (imageUrl: UpdateUserStateModel) =>
    dispatch(setUserProfilePictureAction(imageUrl)),
  registerUserInfo: (data: UpdateUserStateModel) =>
    dispatch(registerUserInfoAction(data)),
});

export default connect(null, mapDispatchToProps)(IdentifyUser);
