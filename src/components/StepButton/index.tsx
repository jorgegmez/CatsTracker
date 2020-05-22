import React, { ReactNode } from 'react';
import { TextStyle } from 'react-native';
import DynamicButton from './DynamicButton';

type Props = {
  isVerificationBtn?: boolean;
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
  // Dynamic Button Props
  rigthIcon?: IconConfig;
  showRigthIcon?: boolean;
  isPublicDocument?: boolean;
  cognitoId?: string;
  disable?: boolean;
};

const StepButton = ({
  text,
  sufixComponent,
  customTextStyle,
  customButtonStyle,
  customIconStyle,
  onPress,
  theme,
  rigthIcon,
  showRigthIcon,
  touched,
  error,
  testID,
  disable = false,
}: Props) => {

  const handleDynamicButton = () => {
    if (disable) return;

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
      rigthIcon={rigthIcon}
      showRigthIcon={showRigthIcon}
      customIconStyle={customIconStyle}
      testID={testID}
      touched={touched}
      error={error}
    />
  );
};

export default StepButton;
