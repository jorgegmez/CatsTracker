interface UserStateModel extends ReduxStateModel {
  data: {
    name: string;
    lastName: string;
    profilePicture: string;
  };
}

interface UpdateUserStateModel {
  name?: string;
  lastName?: string;
  profilePicture?: string;
}
