import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, View, Image, TouchableOpacity } from 'react-native';
import { colorsGlobal as colors, imagesGlobal as images, icons } from '@constants';
import { Titles, MainButton, Icon } from '@components';
import _ from 'lodash';

import styles from './styles';
import { NavigationService } from '@services';

type Props = {
  title: string;
};

class LocateCat extends React.PureComponent<Props, {}> {
  static navigationOptions = {
    headerTitle: () => <Image source={images.CAT} style={styles.headerCat} />,
    headerLeft: () => (
      <TouchableOpacity onPress={() => NavigationService.home.goToHome()}>
        <Icon config={{ ...icons.HOME_OUTLINE, color: colors.WHITE, size: 30 }} style={styles.headerIcons} />
      </TouchableOpacity>
    ),
    headerRight: () => <Icon config={{ ...icons.HAMBURGER_MENU, color: colors.WHITE, size: 30 }} style={styles.headerIcons} />,
  };

  render() {
    const { title = 'Welcome here!' } = this.props;
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
        <Titles.H1 text={title} />
      </SafeAreaView>
    );
  }
}

export default LocateCat;
