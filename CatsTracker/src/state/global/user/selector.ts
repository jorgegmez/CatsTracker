import {reducersNameUser as reducersName} from '@constants';

export const UserSelector = (state: RootState) => state[reducersName.USER];
