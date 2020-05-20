import ImagePicker, { ImagePickerResponse } from 'react-native-image-picker';
import { queue } from '@constants';
import { setUserProfilePictureAction } from '@state/global/user/actions';

// Custom options for the showImagePicker function. See API reference
// https://github.com/react-native-community/react-native-image-picker

const options = {
  quality: 0.8,
  maxWidth: 1000,
  maxHeight: 1000,
  storageOptions: {
    skipBackup: true,
  },
};

export const handleOpenGallery = async (fileName: string): Promise<QueueItem> => {
  return new Promise((resolve, reject) => {
    ImagePicker.showImagePicker(options, (response: ImagePickerResponse) => {
      const { error, type, uri } = response;
      if (error) reject(error);

      // Add url string with cognito details
      const imageData = {
        file: '',
        uri,
        name: fileName,
        retry: 2,
        type: type || '',
        queue: queue.REGISTER_QUEUE,
      };
      // call a helper method later
      console.log('from camera', imageData);
      return imageData;
      // setUserProfilePictureAction({ profilePicture: imageData.uri });
    });
  });
};

export function toBase64(imageFile: QueueItem): QueueItem {
  const { type, file: base64Data } = imageFile;
  const formatString = `data:${type};base64,${base64Data}`;
  return { ...imageFile, file: formatString };
}
