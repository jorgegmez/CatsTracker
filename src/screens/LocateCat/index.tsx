import React from 'react';
import { SafeAreaView, StatusBar, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { connect } from 'react-redux';
import { colorsGlobal as colors, imagesGlobal as images, icons, imagesGlobal } from '@constants';
import { Icon } from '@components';
import * as catSelectors from '@state/global/cat/selector';

import styles from './styles';
import { NavigationService } from '@services';

type Props = {
  catInfo: CatPet;
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
    const { catInfo } = this.props;
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 9.863889,
            longitude: -83.912778,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            tracksViewChanges
            title={catInfo.name}
            coordinate={{
              latitude: catInfo.coordinates ? catInfo.coordinates.latitude : 9.863889,
              longitude: catInfo.coordinates ? catInfo.coordinates.longitude : -83.912778,
            }}
            image={imagesGlobal.ICON_CAT_MAP_AVATAR}
          />
        </MapView>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  catInfo: catSelectors.CatSelector(state).data,
});

export default connect(mapStateToProps, null)(LocateCat);
