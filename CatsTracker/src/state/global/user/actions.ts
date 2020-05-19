import {Dispatch} from 'redux';
import * as actionCreators from './action-creators';

export const registerUserInfoAction = (payload: UpdateUserStateModel) => (
  dispatch: Dispatch,
) => {
  dispatch(actionCreators.registerUserInfo(payload));
};

export const setUserProfilePictureAction = (payload?: UpdateUserStateModel) => (
  dispatch: Dispatch,
) => {
  dispatch(actionCreators.setUserProfilePicture(payload));
};

export const registerCatInfoRegisterAction = (payload: CatPet[]) => (
  dispatch: Dispatch,
) => {
  dispatch(actionCreators.registerCatInfo(payload));
};
