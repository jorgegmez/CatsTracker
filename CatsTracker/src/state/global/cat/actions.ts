import {Dispatch} from 'redux';
import * as actionCreators from './action-creators';

export const registerCatInfoRegister = (payload: CatStateModel) => (
  dispatch: Dispatch,
) => {
  dispatch(actionCreators.registerCatInfo(payload));
};
