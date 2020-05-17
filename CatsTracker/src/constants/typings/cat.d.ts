interface CatStateModel extends ReduxStateModel {
  data: {
    name: string;
    breed: string;
    description: string;
    picture?: string;
  };
}
