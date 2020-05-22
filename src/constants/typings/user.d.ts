type CatPet = {
  id?: string;
  name: string;
  breed: string;
  description: string;
  age: number;
  picture?: ImageURISource | number | string;
  coordinates?: LatLng;
};

interface UserStateModel extends ReduxStateModel {
  data: {
    name: string;
    lastName: string;
    profilePicture?: ImageURISource | number | string;
    myCats: CatPet[];
  };
}

interface UpdateUserStateModel {
  name?: string;
  lastName?: string;
  profilePicture?: ImageURISource | number | string;
  myCats?: CatPet[];
}
