interface CatStateModel extends ReduxStateModel {
  data: {
    id: string;
    name: string;
    breed: string;
    description: string;
    age: number;
    picture: number;
  };
}

interface UpdateCatStateModel {
  id: string;
  name?: string;
  breed?: string;
  description?: string;
  age?: number;
  picture: number;
}
