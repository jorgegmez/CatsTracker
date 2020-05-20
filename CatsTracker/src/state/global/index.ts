import catReducer, { NAME as catReducerName } from './cat';
import userReducer, { NAME as userReducerName } from './user';

export default {
  [catReducerName]: catReducer,
  [userReducerName]: userReducer,
};
