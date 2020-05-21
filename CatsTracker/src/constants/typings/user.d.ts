type CatPet = {
  id?: string;
  name: string;
  breed: string;
  description: string;
  age: number;
  picture: number;
  coordinates?: LatLng;
};

interface UserStateModel extends ReduxStateModel {
  data: {
    name: string;
    lastName: string;
    profilePicture: number;
    myCats: CatPet[];
  };
}

interface UpdateUserStateModel {
  name?: string;
  lastName?: string;
  profilePicture: number;
  myCats: CatPet[];
}
