import * as Yup from 'yup';
import { validations } from '../strings';

export const TEXT_FIELD = (customRequiredMessage?: string) =>
  Yup.string()
    .nullable()
    .required(customRequiredMessage || validations.TEXT_FIELD_REQUIRED_ERROR);

export const ONLY_LETTERS_FIELD = (customRequiredMessage?: string, customValidMessage?: string) =>
  Yup.string()
    .matches(/^[a-zA-Z]+$/, customValidMessage)
    .required(customRequiredMessage || validations.TEXT_FIELD_REQUIRED_ERROR);

export const USER_NAME_LAST_NAME = (customRequiredMessage?: string, customValidMessage?: string) =>
  Yup.string()
    .matches(/^[^0-9]+$/, customValidMessage)
    .required(customRequiredMessage || validations.TEXT_FIELD_REQUIRED_ERROR);

export const CAT_AGE_ONLY_NUMBERS = (customRequiredMessage?: string, customValidMessage?: string) =>
  Yup.string()
    .matches(/^[0-9]+$/, customValidMessage)
    .required(customRequiredMessage || validations.TEXT_FIELD_REQUIRED_ERROR);
