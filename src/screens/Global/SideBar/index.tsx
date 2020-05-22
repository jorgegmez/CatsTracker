import React from 'react';
import { View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import * as userSelectors from '@state/global/user/selector';
import { MainButton, ListItem, UserStateBox } from '@components';
import { NavigationService } from '@services';
import { stringsHome as strings, imagesGlobal } from '@constants';
import { logoutAction } from '@state/global/user/actions';

import styles from './styles';

type Props = {
  logout: () => void;
  userInfo: UserStateModel;
};

const SideBar = (props: Props) => {
  const {
    userInfo: {
      data: { name, lastName, profilePicture },
    },
  } = props;

  const mockedData = {
    userName: `${name} ${lastName}`,
  };

  const exitOfApp = () => {
    props.logout();
    NavigationService.boot.goBoot();
  };

  const goToCatsForm = () => {
    NavigationService.home.goToCatsHome(1);
  };

  const goToSettings = () => {
    NavigationService.home.goToCatsHome(4);
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.sideNavHeader}>
          <UserStateBox userBoxInfo={mockedData} profilePicture={profilePicture !== null ? profilePicture : imagesGlobal.ICON_AVATAR} />
        </View>
        <View>
          <ListItem onPress={goToSettings} title={strings.SIDE_BAR_GO_TO_SETTINGS} />
          <ListItem onPress={goToCatsForm} title={strings.SIDE_BAR_GO_TO_CATS_FORM} />
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <MainButton text={strings.SIDE_BAR_LOG_OUT_TEXT} flat customTextStyle={styles.flatButtonTextStyleHome} onPress={exitOfApp} />
      </View>
    </View>
  );
};

const mapStateToProps = (state: RootState) => ({
  userInfo: userSelectors.UserSelector(state),
});

const mapDispatchToProps = (dispatch: DispatchRSSA) => ({
  logout: () => dispatch(logoutAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);
