import {Dispatch} from 'redux';
import * as actionCreators from './action-creators';

export const registerUserInfoAction = (payload: UpdateUserStateModel) => (
  dispatch: Dispatch,
) => {
  dispatch(actionCreators.registerUserInfo(payload));
};

export const setUserProfilePictureAction = (payload: UpdateUserStateModel) => (
  dispatch: Dispatch,
) => {
  dispatch(actionCreators.setUserProfilePicture(payload));
};
