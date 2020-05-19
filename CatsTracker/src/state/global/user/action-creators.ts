import {actionsUser as actions} from '@constants';

export const registerUserInfo = (payload: UpdateUserStateModel) => ({
  type: actions.IDENTIFY_USER_INFO,
  payload,
});

export const setUserProfilePicture = (payload?: UpdateUserStateModel) => ({
  type: actions.IDENTIFY_SET_USER_PROFILEPICTURE,
  payload,
});

export const registerCatInfo = (payload: CatPet[]) => ({
  type: actions.REGISTER_CAT_INFO,
  payload,
});
