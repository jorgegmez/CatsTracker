import {Linking} from 'react-native';
import {PermissionsService, Camera} from '@services';
import {imagesGlobal as images} from '@constants';

const getPermissions = async () => {
  const result = await PermissionsService.checkOrRequestCamera();

  if (result.status) {
    return true;
  }

  if (result.statusCode === 'blocked') {
    Linking.openURL('app-settings:');
    return false;
  }
  return false;
};

export const handleSelectProfileImage = async ({
  fileName,
}: {
  fileName?: string;
}) => {
  if (fileName) {
    const hasPermissions = await getPermissions();
    if (hasPermissions) {
      const imageFile = await Camera.handleOpenGallery(fileName);
      if (imageFile.uri && imageFile.url) {
        // const {uri, url} = imageFile;
        return imageFile.uri;
      }
    }
  }
  return undefined;
};
