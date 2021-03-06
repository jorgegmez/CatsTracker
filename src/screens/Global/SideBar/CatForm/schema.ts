import * as Yup from 'yup';
import { schemasGlobal, validations } from '@constants';

export const catRegisterSchema = Yup.object().shape({
  name: schemasGlobal.USER_NAME_LAST_NAME(validations.REGISTER_NAME_REQUIRED_ERROR, validations.REGISTER_NAME_INVALID_ERROR),
  breed: schemasGlobal.USER_NAME_LAST_NAME(validations.REGISTER_USER_LASTNAME_REQUIRED_ERROR, validations.REGISTER_USER_LASTNAME_INVALID_ERROR),
  description: schemasGlobal.USER_NAME_LAST_NAME(validations.REGISTER_USER_LASTNAME_REQUIRED_ERROR, validations.REGISTER_USER_LASTNAME_INVALID_ERROR),
  age: schemasGlobal.CAT_AGE_ONLY_NUMBERS(validations.REGISTER_CAT_AGE_REQUIRED_ERROR, validations.REGISTER_CAT_AGE_INVALID_ERROR),
  picture: schemasGlobal.TEXT_FIELD(validations.REGISTER_PICTURE_REQUIRED_ERROR),
});
