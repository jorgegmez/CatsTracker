import { PERMISSIONS, RESULTS, check, request } from 'react-native-permissions';
import { Platform, PermissionsAndroid, Permission } from 'react-native';
import messaging from '@react-native-firebase/messaging';

const getPlatform = () => (Platform.OS === 'ios' ? 'IOS' : 'ANDROID');
const PERMISSON_GRANTED_MESSAGE = 'Permission is granted';
const PERMISSON_NOT_GRANTED_MESSAGE = 'Permission is not granted';

export const checkPermission = async (permission: Permission): Promise<PermissionsResponse> => {
  const result = await check(permission);
  const response: PermissionsResponse = {
    status: true,
    message: '',
    statusCode: '',
  };
  switch (result) {
    case RESULTS.UNAVAILABLE:
      response.status = false;
      response.message = 'feature not available on this device';
      break;
    case RESULTS.DENIED:
      response.status = false;
      response.message = 'Permission has not been requested';
      break;
    case RESULTS.BLOCKED:
      response.status = false;
      response.message = 'Permission denied an not requestable anymore';
      response.statusCode = result;
      break;
    case RESULTS.GRANTED:
      response.status = true;
      response.message = 'Permission is granted';
      break;
    default:
      response.status = false;
      response.message = 'Unknown error';
  }
  return response;
};

export const requestPermission = async (permission: Permission): Promise<PermissionsResponse> => {
  const result = await request(permission);
  if (result === 'granted') {
    return {
      status: true,
      message: 'Permission is granted',
    };
  }
  return {
    status: false,
    message: 'Permission is not granted',
  };
};

export const checkOrRequestPermission = async (permission: Permission): Promise<PermissionsResponse> => {
  const result = await check(permission);
  let requestResult = '';
  const response: PermissionsResponse = {
    status: true,
    message: '',
    statusCode: '',
  };
  switch (result) {
    case RESULTS.UNAVAILABLE:
      response.status = false;
      response.message = 'feature not available on this device';
      break;
    case RESULTS.DENIED:
      response.status = false;
      response.message = 'Permission has not been requested';
      requestResult = await request(permission);

      if (requestResult === 'granted') {
        response.status = true;
        response.message = 'Permission is granted';
      } else {
        response.status = false;
        response.message = 'Permission is not granted';
      }
      break;
    case RESULTS.BLOCKED:
      response.status = false;
      response.message = 'Permission denied an not requestable anymore';
      response.statusCode = result;
      break;
    case RESULTS.GRANTED:
      response.status = true;
      response.message = 'Permission is granted';
      break;
    default:
      response.status = false;
      response.message = 'Unknown error';
  }
  return response;
};

export const checkOrRequestAndroidPermission = async (permission: Permission): Promise<PermissionsResponse> => {
  const response: PermissionsResponse = {
    status: false,
    message: '',
  };
  const hasPermission = await PermissionsAndroid.check(permission);
  if (hasPermission) {
    response.status = true;
    response.message = 'Permission is granted';
  } else {
    const status = await PermissionsAndroid.request(permission);
    if (status === PermissionsAndroid.RESULTS.GRANTED) {
      response.status = true;
      response.message = 'Permission is granted';
    }
    if (status === PermissionsAndroid.RESULTS.DENIED) {
      response.status = false;
      response.message = 'Permission has not been requested';
    } else if (status === PermissionsAndroid.RESULTS.NEVER_ASK_AGAIN) {
      response.status = false;
      response.message = 'Permission denied an not requestable anymore';
    }
  }
  return response;
};

export const checkOrRequestCamera = async (): Promise<PermissionsResponse> => {
  return checkOrRequestPermission(PERMISSIONS[getPlatform()].CAMERA as Permission);
};

export const checkOrRequestAndroidStorage = async (): Promise<PermissionsResponse> => {
  return checkOrRequestAndroidPermission(PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE);
};

export const checkCameraPermissions = async (): Promise<PermissionsResponse> => {
  return checkPermission(PERMISSIONS[getPlatform()].CAMERA as Permission);
};

export const checkOrRequestFineLocation = async (): Promise<PermissionsResponse> => {
  if (Platform.OS === 'ios') {
    const result = await requestPermission(PERMISSIONS.IOS.LOCATION_WHEN_IN_USE as Permission);
    return result;
  }
  const androidResult = await checkOrRequestAndroidPermission(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
  return androidResult;
};

export const checkForRemoteNotificationsFCM = async (currentPlatform: string): Promise<PermissionsResponse> => {
  const response: PermissionsResponse = {
    status: true,
    message: PERMISSON_GRANTED_MESSAGE,
  };

  if (currentPlatform === 'ios') {
    const permissions = await messaging().requestPermission();

    if (!permissions) {
      response.status = false;
      response.message = PERMISSON_NOT_GRANTED_MESSAGE;
      return response;
    }
  }

  return response;
};
