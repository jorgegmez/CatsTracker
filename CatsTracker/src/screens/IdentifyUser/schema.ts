import * as Yup from 'yup';
import {schemasGlobal, stringValidation} from '@constants';

export const identifySchema = Yup.object().shape({
  name: schemasGlobal.USER_NAME_LAST_NAME(
    stringValidation.REGISTER_USER_NAME_REQUIRED_ERROR,
    stringValidation.REGISTER_USER_NAME_INVALID_ERROR,
  ),
  lastName: schemasGlobal.USER_NAME_LAST_NAME(
    stringValidation.REGISTER_USER_LASTNAME_REQUIRED_ERROR,
    stringValidation.REGISTER_USER_LASTNAME_INVALID_ERROR,
  ),
  profilePicture: schemasGlobal.TEXT_FIELD(
    stringValidation.REGISTER_USER_PICTURE_REQUIRED_ERROR,
  ),
});
