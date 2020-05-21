interface LatLng {
  latitude: number;
  longitude: number;
}
interface Features {
  type: string;
  geometry: Geometry;
  properties?: object;
}

interface FeatureCollection {
  type: string;
  features: Array<Features>;
  properties: object;
}

interface RequestUpdateDriverPosition {
  status: string;
  vehicleCategoryCode: string;
  rating: number;
  position: LatLng;
  deviceToken?: string;
  idRide?: number;
}
