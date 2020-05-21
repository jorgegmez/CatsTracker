/* eslint-disable prettier/prettier */
import React, { createRef } from 'react';
import { connect } from 'react-redux';
import { SafeAreaView, ScrollView, StatusBar, View } from 'react-native';
import { Formik } from 'formik';
import { colorsGlobal as colors, stringsAuth, imagesGlobal, validations } from '@constants';
import { Titles, MainButton, Input, ProfilePicture, Loading, Card } from '@components';
import { registerUserInfoAction } from '@state/global/user/actions';
import DropdownAlert from 'react-native-dropdownalert';
import { handleSelectProfileImage } from '@helpers/handlerProfilePicture';
import { NavigationService } from '@services';
import universalUtils from '@helpers/universal';
import * as userSelectos from '@state/global/user/selector';
import _ from 'lodash';
import { userUpdateSchema } from './schema';

import styles from './styles';

type State = {
  themeOfButton: 'blue' | 'white' | 'gray';
  userProfileImage?: string;
  setProfilePicture: boolean;
  loading: boolean;
};

type Props = {
  userInfo: UserStateModel;
  registerUserInfo: (userInfo: UpdateUserStateModel) => void;
};

class Settings extends React.PureComponent<Props, State> {
  static navigationOptions = {
    headerTitle: () => <Titles.H3 customStyle={styles.headerNav} text={stringsAuth.UPDATE_USER_NAV_TITLE} />,
  };

  state: State = {
    themeOfButton: 'blue',
    userProfileImage: '',
    setProfilePicture: false,
    loading: false,
  };

  notificationRef = createRef<DropdownAlert>();

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

  public handleUpdateUserMethod = async ({ name, lastName, profilePicture }: UpdateUserStateModel) => {
    const {
      registerUserInfo,
    } = this.props;
    const newUser: UpdateUserStateModel = {
        name,
        lastName,
        profilePicture,
    };

    if (name && lastName && profilePicture) {
        registerUserInfo(newUser);
        this.showSuccessMessage();
        setTimeout(() => {
            NavigationService.home.goToCatsHome(0);
        }, 1000);
    }
  };

  private showSuccessMessage = () => {
    universalUtils.DropDownHolder.getDropDownRef().alertWithType('success', 'Success', validations.UPDATE__SUCCESS_MESSAGE || '');
  };

  render() {
    const {
      userInfo: {
        data: { name, lastName, profilePicture },
      },
    } = this.props;
    const { themeOfButton, userProfileImage, loading } = this.state;
    const imagePlacement = userProfileImage
      ? {
          uri: userProfileImage,
        }
      : profilePicture || imagesGlobal.ICON_AVATAR;
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
        <ScrollView alwaysBounceVertical={false} bounces={false} contentContainerStyle={styles.scrollView}>
          <Formik
            initialValues={{
              name,
              lastName,
              profilePicture: imagePlacement,
            }}
            validationSchema={userUpdateSchema}
            onSubmit={this.handleUpdateUserMethod}
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
                      label={stringsAuth.REGISTER_USER_NAME_TEXT}
                      hasError={!!props.errors.name}
                    />
                    <Input
                      onChange={props.handleChange('lastName')}
                      onBlur={props.handleBlur('lastName')}
                      value={props.values.lastName}
                      type="normal"
                      label={stringsAuth.REGISTER_USER_LASTNAME_TEXT}
                      hasError={!!props.errors.lastName}
                    />
                  </View>
                </Card>
                <View style={styles.buttonContainer}>
                  <MainButton
                    theme={themeOfButton}
                    text={stringsAuth.UPDATE_USER_BUTTON}
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
  userInfo: userSelectos.UserSelector(state),
});

const mapDispatchToProps = (dispatch: DispatchRSSA) => ({
  registerUserInfo: (data: UpdateUserStateModel) => dispatch(registerUserInfoAction(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Settings);
