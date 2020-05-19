type CatPet = {
  id?: string;
  name: string;
  breed: string;
  description: string;
  age: number;
  picture?: string;
};

interface UserStateModel extends ReduxStateModel {
  data: {
    name: string;
    lastName: string;
    profilePicture: string;
    myCats: CatPet[];
  };
}

interface UpdateUserStateModel {
  name?: string;
  lastName?: string;
  profilePicture?: string;
}
