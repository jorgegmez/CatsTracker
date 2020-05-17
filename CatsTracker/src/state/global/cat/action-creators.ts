import {actionsCat as actions} from '@constants';

export const registerCatInfo = (payload: CatStateModel) => ({
  type: actions.REGISTER_CAT_INFO,
  payload,
});
