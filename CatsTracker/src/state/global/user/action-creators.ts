import {actionsUser as actions} from '@constants';

export const registerUserInfo = (payload: UserStateModel) => ({
  type: actions.IDENTIFY_USER_INFO,
  payload,
});
