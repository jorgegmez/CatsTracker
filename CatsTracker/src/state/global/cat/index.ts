import { actionsCat as actions, reducersNameCat as reducersName } from '@constants';

export const initialState: CatStateModel = {
  data: {
    name: '',
    breed: '',
    description: '',
    picture: '',
    age: 0,
  },
  pending: false,
  error: { ok: true, text: '' },
};

const reducer = (state: CatStateModel = initialState, action: Action) => {
  switch (action.type) {
    case actions.SET_CAT_PICTURE:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };

    case actions.UPDATE_CURRENT_CAT_INFO:
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
