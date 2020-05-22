/* eslint-disable prettier/prettier */
import React from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { Formik } from 'formik';
import { colorsGlobal as colors, stringsAuth, imagesGlobal } from '@constants';
import { Titles, MainButton, Card, Input, ProfilePicture, Loading } from '@components';
import { registerUserInfoAction, setUserProfilePictureAction } from '@state/global/user/actions';
import * as userSelectos from '@state/global/user/selector';
import { NavigationService } from '@services';
import _ from 'lodash';
import { identifySchema } from './schema';


import styles from './styles';

type State = {
  themeOfButton: 'blue' | 'white' | 'gray';
  userProfileImage?: string;
  setProfilePicture: boolean;
  loading: boolean;
};

type Props = {
  userInfo: UserStateModel;
  registerUserInfo: (user: UpdateUserStateModel) => void;
  setUserProfilePicture: (picture: UpdateUserStateModel) => void;
};

class IdentifyUser extends React.PureComponent<Props, State> {
  static navigationOptions = {
    headerTitle: () => <Titles.H3 customStyle={styles.headerNav} text={stringsAuth.AUTH_IDENTIFY_NAV_TEXT} />,
  };

  state: State = {
    themeOfButton: 'blue',
    userProfileImage: '',
    setProfilePicture: false,
    loading: false,
  };

  private selectProfileImage = async (fileName?: string) => {
    const { setUserProfilePicture } = this.props;
    const options = {
      title: `Select ${fileName}`,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      const source = { uri: response.uri };
      this.setState({
        loading: true,
      });
      if (source.uri) {
        this.setState({
          loading: false,
          userProfileImage: source.uri,
        });
        const userPicture: UpdateUserStateModel = {
          profilePicture: { uri: source.uri }
        };
        setUserProfilePicture(userPicture);
      }
    });
  };

  public handleIdentifyUser = async ({ name, lastName }: UpdateUserStateModel) => {
    const {
      registerUserInfo,
      userInfo: { data: { profilePicture } },
    } = this.props;
    if (name && lastName && profilePicture) registerUserInfo({ name, lastName, profilePicture });
    NavigationService.home.goToHome();
  };

  render() {
    const { themeOfButton, userProfileImage } = this.state;
    const imagePlacement = userProfileImage
      ? {
          uri: userProfileImage,
        }
      : imagesGlobal.ICON_AVATAR;
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
        <ScrollView alwaysBounceVertical={false} bounces={false} contentContainerStyle={styles.scrollView}>
          <Formik
            initialValues={{
              name: '',
              lastName: '',
              profilePicture: imagePlacement,
            }}
            validationSchema={identifySchema}
            onSubmit={this.handleIdentifyUser}
          >
            {props => (
              <View style={styles.content}>
                <Titles.H2 customStyle={styles.headerTitle} text={stringsAuth.AUTH_TITLE_TEXT} bold />
                <Card customTextStyle={styles.customTextStyle} theme="white">
                  <View style={styles.firstSectionHeaderStyle}>
                    <ProfilePicture showEditIcon image={imagePlacement} onImageSelected={() => this.selectProfileImage('profilePicture')} />
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
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  userInfo: userSelectos.UserSelector(state),
});

const mapDispatchToProps = (dispatch: DispatchRSSA) => ({
  registerUserInfo: (data: UpdateUserStateModel) => dispatch(registerUserInfoAction(data)),
  setUserProfilePicture: (picture: UpdateUserStateModel) => dispatch(setUserProfilePictureAction(picture)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IdentifyUser);
