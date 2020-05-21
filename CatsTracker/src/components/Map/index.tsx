import { Geojson, MapView, Marker, PROVIDER_GOOGLE } from './MapView';
import React, { PureComponent } from 'react';
import { colorsGlobal as colors, imagesGlobal as icons } from '@constants';

import { View } from 'react-native';
import _ from 'lodash';
import styles from './styles';

type Props = {
  markers?: Array<Features> | null;
  userCoordinates?: LatLng | null;
  trace?: FeatureCollection | null;
};

const LATITUDE_DELTA = 0.02;
const LONGITUDE_DELTA = 0.02;

class Map extends PureComponent<Props> {
  state = {
    isMapReady: false,
  };

  public map = React.createRef<MapView>();

  public componentDidUpdate(prevProps: Props) {
    const { isMapReady } = this.state;
    const { userCoordinates } = this.props;
    if (userCoordinates !== prevProps.userCoordinates && isMapReady) {
      if (this.map.current && userCoordinates) {
        this.map.current.animateToRegion(this.getCoordinateZoom(userCoordinates));
      }
    }
  }

  public onMapLayout = () => {
    this.setState({ isMapReady: true });
  };

  public getCoordinateZoom = (userCoordinates: LatLng) => {
    return {
      latitude: userCoordinates.latitude,
      longitude: userCoordinates.longitude,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    };
  };

  public renderTraceLine = (data: FeatureCollection) => {
    const coordinates = _.get(data, 'features[0].geometry.coordinates', undefined);

    if (!coordinates) return null;

    const lastIndex = coordinates.length - 1;
    const firstCoordinate: [number, number] = coordinates[0];
    const lastCoordinate: [number, number] = coordinates[lastIndex];

    const startPoint = {
      latitude: firstCoordinate[1],
      longitude: firstCoordinate[0],
    };

    const endPoint = {
      latitude: lastCoordinate[1],
      longitude: lastCoordinate[0],
    };

    return (
      <View>
        <Geojson strokeColor={colors.PRIMARY} strokeWidth={5} geojson={data} />
        <Marker coordinate={startPoint}>
          <View style={styles.point} />
        </Marker>
        <Marker coordinate={endPoint}>
          <View style={styles.point} />
        </Marker>
      </View>
    );
  };

  public renderGeojsonPoints = (data: Array<Features>) => {
    return data.map((value: Features) => {
      const { geometry } = value;
      const coords: LatLng = {
        latitude: geometry.coordinates[1] as number,
        longitude: geometry.coordinates[0] as number,
      };

      return (
        <React.Fragment key={`item_${data.indexOf(value)}`}>
          <Marker coordinate={coords} image={icons.ICON_CAT_AVATAR} />
        </React.Fragment>
      );
    });
  };

  public render() {
    const { markers, userCoordinates, trace } = this.props;
    const { isMapReady } = this.state;

    if (!userCoordinates) {
      return null;
    }

    return (
      <MapView
        ref={this.map}
        style={styles.map}
        loadingEnabled
        showsUserLocation
        provider={PROVIDER_GOOGLE}
        onMapReady={this.onMapLayout}
        initialRegion={this.getCoordinateZoom(userCoordinates)}
      >
        {isMapReady && markers && this.renderGeojsonPoints(markers)}
        {isMapReady && trace && this.renderTraceLine(trace)}
        {isMapReady && userCoordinates && <Marker coordinate={userCoordinates} />}
      </MapView>
    );
  }
}

export default Map;
