import * as Yup from 'yup';
import { schemasGlobal, validations } from '@constants';

export const userUpdateSchema = Yup.object().shape({
  name: schemasGlobal.USER_NAME_LAST_NAME(validations.REGISTER_NAME_REQUIRED_ERROR, validations.REGISTER_NAME_INVALID_ERROR),
  lastName: schemasGlobal.USER_NAME_LAST_NAME(validations.REGISTER_USER_LASTNAME_REQUIRED_ERROR, validations.REGISTER_USER_LASTNAME_INVALID_ERROR),
  profilePicture: schemasGlobal.TEXT_FIELD(validations.REGISTER_PICTURE_REQUIRED_ERROR),
});
