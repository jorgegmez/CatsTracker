import {
  actionsCat as actions,
  reducersNameCat as reducersName,
} from '@constants';

export const initialState: CatStateModel = {
  data: {
    name: '',
    breed: '',
    description: '',
    picture: '',
  },
  pending: false,
  error: {ok: true, text: ''},
};

const reducer = (state: CatStateModel = initialState, action: Action) => {
  switch (action.type) {
    case actions.REGISTER_CAT_INFO:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};
export default reducer;

export const NAME = reducersName.CAT;
