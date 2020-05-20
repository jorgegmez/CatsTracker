import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { connect } from 'react-redux';

import * as userSelectors from '@state/global/user/selector';

import { NavigationService } from '@services';
import styles from './styles';

type Props = {
  userInfo: UserStateModel;
};

class Boot extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
    // JJ: the navigation may not be injected immediately.
    setTimeout(this.bootstrapAsync, 1000);
  }

  public bootstrapAsync = async () => {
    const {
      userInfo: {
        data: { name, lastName },
      },
    } = this.props;
    if (name !== '' || lastName !== '') {
      NavigationService.home.goToHome();
    } else {
      NavigationService.auth.goToIdentifyUser(0);
    }
  };

  public render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  userInfo: userSelectors.UserSelector(state),
});

export default connect(mapStateToProps, null)(Boot);
