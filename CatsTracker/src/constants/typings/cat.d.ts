interface CatStateModel extends ReduxStateModel {
  data: {
    name: string;
    breed: string;
    description: string;
    age: number;
    picture?: string;
  };
}
