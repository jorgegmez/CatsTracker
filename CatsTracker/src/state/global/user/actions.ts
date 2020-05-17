import {Dispatch} from 'redux';
import * as actionCreators from './action-creators';

export const registerUserInfoAction = (payload: UserStateModel) => (
  dispatch: Dispatch,
) => {
  dispatch(actionCreators.registerUserInfo(payload));
};
