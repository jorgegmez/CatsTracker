import { ActivityIndicator } from 'react-native';
import Modal from 'react-native-modal';
import React, { PureComponent } from 'react';
import { colorsGlobal as colors } from '@constants';

type Props = {
  showModal: boolean;
};

class Loading extends PureComponent<Props> {
  render() {
    const { showModal } = this.props;
    return (
      <Modal isVisible={showModal}>
        <ActivityIndicator size="large" color={colors.PRIMARY} />
      </Modal>
    );
  }
}

export default Loading;
