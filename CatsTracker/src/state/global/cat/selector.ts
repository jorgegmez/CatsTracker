import {reducersNameCat as reducersName} from '@constants';

export const CatSelector = (state: RootState) => state[reducersName.CAT];
