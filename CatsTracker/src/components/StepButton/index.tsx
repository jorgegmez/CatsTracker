import React, {ReactNode} from 'react';
import {TextStyle, Linking} from 'react-native';
import {Queue, Camera, PermissionsService} from '@services';
import {queue} from '@constants';
import DynamicButton from './DynamicButton';

type Props = {
  isVerificationBtn?: boolean;
  // General props for both Buttons
  text?: string;
  sufixComponent?: ReactNode;
  readonly customTextStyle?: TextStyle[] | TextStyle;
  readonly customButtonStyle?: TextStyle[] | TextStyle;
  readonly customIconStyle?: TextStyle[] | TextStyle;
  onPress?(): void;
  theme?: 'cream' | 'white';
  touched?: boolean;
  error?: string;
  testID?: string;
  // Verification Button Props
  verificationState?: boolean;
  placeholder?: string;
  // Dynamic Button Props
  leftIcon?: IconConfig;
  showLeftIcon?: boolean;
  showSUfixOnTheLeft?: boolean;
  fileName?: string;
  isPublicDocument?: boolean;
  onSelectImage?: (file: QueueItem) => void;
  cognitoId?: string;
  disable?: boolean;
};

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

const StepButton = ({
  onSelectImage,
  text,
  sufixComponent,
  customTextStyle,
  customButtonStyle,
  customIconStyle,
  onPress,
  theme,
  leftIcon,
  showLeftIcon,
  touched,
  error,
  testID,
  showSUfixOnTheLeft,
  fileName,
  disable = false,
}: Props) => {
  const handleOpenCamera = async (fileName?: string) => {
    const {builder} = Queue;
    if (fileName) {
      const hasPermissions = await getPermissions();

      if (hasPermissions) {
        const imageFile = await Camera.handleOpenGallery(fileName);

        if (imageFile.uri) {
          if (onSelectImage) {
            onSelectImage({
              ...imageFile,
              uri: `${imageFile.uri}::${imageFile.url}`,
            });
          }

          builder.addQueueItem(queue.REGISTER_QUEUE, imageFile);
        }
      }
    }
  };

  const handleDynamicButton = () => {
    if (disable) return;

    if (fileName) {
      handleOpenCamera(fileName);
    }
    if (onPress) {
      onPress();
    }
  };

  return (
    <DynamicButton
      text={text}
      sufixComponent={sufixComponent}
      customTextStyle={customTextStyle}
      customButtonStyle={customButtonStyle}
      onPress={handleDynamicButton}
      theme={theme}
      leftIcon={leftIcon}
      showLeftIcon={showLeftIcon}
      customIconStyle={customIconStyle}
      testID={testID}
      showSUfixOnTheLeft={showSUfixOnTheLeft}
      touched={touched}
      error={error}
    />
  );
};

export default StepButton;
