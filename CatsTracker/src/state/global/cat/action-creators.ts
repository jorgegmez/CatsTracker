import {actionsCat as actions} from '@constants';

export const setCatPicture = (payload?: UpdateCatStateModel) => ({
  type: actions.SET_CAT_PICTURE,
  payload,
});

export const updateCurrentCat = (payload?: UpdateCatStateModel) => ({
  type: actions.UPDATE_CURRENT_CAT_INFO,
  payload,
});
