import { Dispatch } from 'redux';
import * as actionCreators from './action-creators';

export const setCatPictureAction = (payload: UpdateCatStateModel) => (dispatch: Dispatch) => {
  dispatch(actionCreators.setCatPicture(payload));
};

export const updateCurrentCatAction = (payload?: CatPet) => (dispatch: Dispatch) => {
  dispatch(actionCreators.updateCurrentCat(payload));
};

export const resetCatFieldsAction = () => (dispatch: Dispatch) => {
  dispatch(actionCreators.resetCatFields());
};
