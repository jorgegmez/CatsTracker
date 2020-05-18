import * as Yup from 'yup';
import { validation } from '../strings';

export const PHONE = Yup.string()
  .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/)
  .min(8)
  .max(8)
  .required();

export const EMAIL = Yup.string()
  .email()
  .min(6)
  .max(40)
  .required();

export const CODE = Yup.string()
  .matches(/^[0-9]/)
  .min(4)
  .max(6)
  .required();

export const PASSWORD = Yup.string()
  .matches(/^(?=\w*\d)(?=\w*[a-z])\S{8,16}$/)
  .min(8)
  .max(16)
  .required();

export const CARD_NUMBER = Yup.string()
  .matches(/(^4[0-9]{12}(?:[0-9]{3})?)|((?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12})$/)
  .required();

export const CARD_EXPIRATION = Yup.string()
  .matches(/^[0-9]/)
  .min(4)
  .max(4)
  .required();

export const CARD_CVV = Yup.string()
  .matches(/^[0-9]/)
  .min(3)
  .max(3)
  .required();

export const CARD_NAME = Yup.string()
  .matches(/^[a-zA-Z ]+$/)
  .min(3)
  .max(25)
  .required();

export const TEXT_FIELD = (customRequiredMessage?: string) =>
  Yup.string()
    .nullable()
    .required(customRequiredMessage || validation.TEXT_FIELD_REQUIRED_ERROR_MESSAGE);

export const DATE = (customRequiredMessage?: string, customValidMessage?: string) =>
  Yup.date()
    .required(customRequiredMessage || validation.TEXT_FIELD_REQUIRED_ERROR_MESSAGE)
    .isValid(customValidMessage || validation.DATE_FIELD_INVALID_DATE_ERROR_MESSAGE);

export const DATE_IN_PAST = (maxDate: Date, customRequiredMessage?: string, customValidMessage?: string, customDateMessage?: string) =>
  Yup.date()
    .required(customRequiredMessage || validation.TEXT_FIELD_REQUIRED_ERROR_MESSAGE)
    .max(maxDate, customDateMessage || validation.DATE_FIELD_INVALID_DATE_ERROR_MESSAGE);

export const DATE_IN_FUTURE = (minDate: Date, customRequiredMessage?: string, customValidMessage?: string, customDateMessage?: string) =>
  Yup.date()
    .required(customRequiredMessage || validation.TEXT_FIELD_REQUIRED_ERROR_MESSAGE)
    .min(minDate, customDateMessage || validation.DATE_FIELD_INVALID_DATE_ERROR_MESSAGE);

export const ID_NUMBER = (customRequiredMessage?: string, customInvalidMessage?: string) =>
  Yup.string()
    .matches(/^[0-9]/, customInvalidMessage || validation.TEXT_FIELD_INVALID_ERROR_MESSAGE)
    .min(9, customInvalidMessage || validation.TEXT_FIELD_INVALID_ERROR_MESSAGE)
    .max(9, customInvalidMessage || validation.TEXT_FIELD_INVALID_ERROR_MESSAGE)
    .required(customRequiredMessage || validation.TEXT_FIELD_REQUIRED_ERROR_MESSAGE);

export const YEAR = (customRequiredMessage?: string, customInvalidMessage?: string) =>
  Yup.string()
    .matches(/^[0-9]/, customInvalidMessage || validation.TEXT_FIELD_INVALID_ERROR_MESSAGE)
    .min(4, customInvalidMessage || validation.TEXT_FIELD_INVALID_ERROR_MESSAGE)
    .max(4, customInvalidMessage || validation.TEXT_FIELD_INVALID_ERROR_MESSAGE)
    .required(customRequiredMessage || validation.TEXT_FIELD_REQUIRED_ERROR_MESSAGE);

export const RESIDENT_ID_NUMBER = (customRequiredMessage?: string, customInvalidMessage?: string) =>
  Yup.string()
    .matches(/^[0-9]/, customInvalidMessage || validation.TEXT_FIELD_INVALID_ERROR_MESSAGE)
    .min(12, customInvalidMessage || validation.TEXT_FIELD_INVALID_ERROR_MESSAGE)
    .max(12, customInvalidMessage || validation.TEXT_FIELD_INVALID_ERROR_MESSAGE)
    .required(customRequiredMessage || validation.TEXT_FIELD_REQUIRED_ERROR_MESSAGE);

export const DRIVER_CODE = (customRequiredMessage?: string, customInvalidMessage?: string) =>
  Yup.string()
    .matches(/^[0-9]/, customInvalidMessage || validation.TEXT_FIELD_INVALID_ERROR_MESSAGE)
    .min(6, customInvalidMessage || validation.TEXT_FIELD_INVALID_ERROR_MESSAGE)
    .max(6, customInvalidMessage || validation.TEXT_FIELD_INVALID_ERROR_MESSAGE)
    .required(customRequiredMessage || validation.TEXT_FIELD_REQUIRED_ERROR_MESSAGE);

export const ONLY_LETTERS_FIELD = (customRequiredMessage?: string, customValidMessage?: string) =>
  Yup.string()
    .matches(/^[a-zA-Z]+$/, customValidMessage || validation.DATE_FIELD_INVALID_DATE_ERROR_MESSAGE)
    .required(customRequiredMessage || validation.TEXT_FIELD_REQUIRED_ERROR_MESSAGE);

export const USER_NAME_LAST_NAME = (customRequiredMessage?: string, customValidMessage?: string) =>
  Yup.string()
    .matches(/^[^0-9]+$/, customValidMessage || validation.DATE_FIELD_INVALID_DATE_ERROR_MESSAGE)
    .required(customRequiredMessage || validation.TEXT_FIELD_REQUIRED_ERROR_MESSAGE);

export const LICENSE_NUMBER = (conditionalValue: string, requiredMessage: string, invalidMessage: string) =>
  Yup.string()
    .when(conditionalValue, {
      is: 'national',
      then: ID_NUMBER(requiredMessage, invalidMessage),
    })
    .when(conditionalValue, {
      is: 'residence',
      then: RESIDENT_ID_NUMBER(requiredMessage, invalidMessage),
    });

export const VEHICLE_PLATE = (customRequiredMessage?: string, customInvalidMessage?: string) =>
  Yup.string()
    .required(customRequiredMessage || validation.TEXT_FIELD_REQUIRED_ERROR_MESSAGE)
    .max(10, customInvalidMessage || validation.TEXT_FIELD_INVALID_ERROR_MESSAGE);
