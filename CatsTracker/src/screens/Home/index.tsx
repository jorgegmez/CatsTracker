import React from 'react';
import {SafeAreaView, ScrollView, StatusBar, View, Image} from 'react-native';
import {connect} from 'react-redux';
import {
  colorsGlobal as colors,
  imagesGlobal as images,
  stringsHome,
  icons,
  imagesGlobal,
} from '@constants';
import {Titles, MainButton, Icon} from '@components';
import * as userSelectors from '@state/global/user/selector';
import _ from 'lodash';

import styles from './styles';

// e.g.: definition of properties
type Props = {
  titleScreen: string;
  title: string;
  userInfo: UserStateModel;
};

// e.g.: definition of state
type State = {
  themeOfButton: 'blue' | 'white' | 'gray';
};

class Home extends React.PureComponent<Props, State> {
  // navigation header
  static navigationOptions = {
    headerTitle: () => <Image source={images.CAT} style={styles.headerOMNI} />,
  };

  // e.g.: initialization of state values
  state: State = {
    themeOfButton: 'blue',
  };

  render() {
    const {themeOfButton} = this.state;
    const {
      userInfo: {
        data: {myCats = []},
      },
      title = 'Welcome here!',
    } = this.props;
    return (
      // SafeAreaView is required for iPhone X and greater
      <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
        <ScrollView
          alwaysBounceVertical={false}
          bounces={false}
          contentContainerStyle={styles.scrollView}>
          {/* put your components after this view */}
          <View style={styles.content}>
            {myCats.length ? (
              <View>
                <Titles.H1 text={title} bold />

                {/* this view push all the component to the bottom */}
                <View style={styles.grow} />
                {/* button on the bottom */}
                <MainButton
                  theme={themeOfButton}
                  text="Start"
                  testID={_.uniqueId()}
                  customButtonStyle={styles.mainButton}
                />
              </View>
            ) : (
              <View>
                <Image source={imagesGlobal.ICON_SAD_CAT} style={styles.sadCat} />
                <Titles.H2 text={stringsHome.HOME_NO_CATS_TITLE_TEXT} bold />
                <Titles.H3 text={stringsHome.HOME_NO_CATS_SUBTITLE_TEXT} bold />
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  userInfo: userSelectors.UserSelector(state),
});

export default connect(mapStateToProps, null)(Home);
