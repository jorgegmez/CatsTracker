import {
  actionsUser as actions,
  reducersNameUser as reducersName,
} from '@constants';

export const initialState: UserStateModel = {
  data: {
    name: '',
    lastName: '',
    profilePicture: '',
  },
  pending: false,
  error: {ok: true, text: ''},
};

const reducer = (state: UserStateModel = initialState, action: Action) => {
  switch (action.type) {
    case actions.IDENTIFY_USER_INFO:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
      };

    case actions.IDENTIFY_SET_USER_PROFILEPICTURE:
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

export const NAME = reducersName.USER;
