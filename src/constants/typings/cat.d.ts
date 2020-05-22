interface CatStateModel extends ReduxStateModel {
  data: {
    id: string;
    name: string;
    breed: string;
    description: string;
    age: number;
    picture: ImageURISource | number | string;
    coordinates: LatLng;
  };
}

interface UpdateCatStateModel {
  id?: string;
  name?: string;
  breed?: string;
  description?: string;
  age?: number;
  picture?: ImageURISource | number | string;
  coordinates?: LatLng;
}
