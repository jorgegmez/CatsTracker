import React from 'react';
import {SafeAreaView, StatusBar, View, Image, FlatList} from 'react-native';
import {connect} from 'react-redux';
import {Formik} from 'formik';
import _ from 'lodash';
import {
  colorsGlobal as colors,
  imagesGlobal as images,
  stringsHome,
  imagesGlobal,
  stringsCat,
} from '@constants';
import {
  Titles,
  MainButton,
  CustomHeader,
  Loading,
  RegisterForm,
  Input,
  ProfilePicture,
  StepButton,
} from '@components';
import {handleSelectProfileImage} from '@helpers/handlerProfilePicture';
import {registerCatInfoRegisterAction} from '@state/global/user/actions';
import * as userSelectors from '@state/global/user/selector';
import {handleRegisterCat} from '@helpers/handlerCatsData';
import {catRegisterSchema} from './schema';

import styles from './styles';
import {ScrollView} from 'react-native-gesture-handler';

type Props = {
  titleScreen: string;
  title: string;
  userInfo: UserStateModel;
  catInfo: CatStateModel;
  registerCatInfoRegister: (cat: CatPet[]) => void;
};

type State = {
  themeOfButton: 'blue' | 'white' | 'gray';
  userProfileImage?: string;
  setProfilePicture: boolean;
  loading: boolean;
};

class Home extends React.PureComponent<Props, State> {
  static navigationOptions = {
    headerTitle: () => <Image source={images.CAT} style={styles.headerCat} />,
  };

  state: State = {
    themeOfButton: 'blue',
    userProfileImage: '',
    setProfilePicture: false,
    loading: false,
  };

  private selectProfileImage = async (fileName?: string) => {
    const {setProfilePicture} = this.state;
    const imageFile = handleSelectProfileImage({
      fileName,
    });

    if (imageFile) {
      this.setThumbnailImage(await imageFile);
      this.setState({
        loading: false,
        setProfilePicture: !setProfilePicture,
      });
    }
  };

  private setThumbnailImage = (imageUri?: string) => {
    this.setState({
      loading: true,
      userProfileImage: imageUri,
    });
  };

  public handleRegisterCatMethod = async ({
    name,
    breed,
    age,
    description,
    picture,
  }: CatPet) => {
    const {
      registerCatInfoRegister,
      userInfo: {
        data: {myCats},
      },
    } = this.props;
    console.log('handleRegisterCat --> name', name);
    if (name && breed && age && description && picture) {
      const cats = handleRegisterCat(
        {name, breed, age, description, picture},
        myCats,
      );
      registerCatInfoRegister(cats);
    }
  };

  render() {
    const {themeOfButton, userProfileImage, loading} = this.state;
    const {
      userInfo: {
        data: {
          myCats = [
            {
              id: 'cat-1',
              name: 'fito',
              breed: 'siames',
              description: 'small',
              age: 2,
            },
          ],
        },
      },
      title = 'Welcome here!',
    } = this.props;
    const imagePlacement = userProfileImage
      ? {
          uri: userProfileImage,
        }
      : imagesGlobal.ICON_CAT_AVATAR;
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
        <View>
          {!myCats.length ? (
            <View>
              <Titles.H1 text={stringsCat.REGISTER_HAVE_CATS_TITLE} bold />
              <Titles.H2 text={stringsCat.REGISTER_HAVE_CATS_SUBTIBLE} bold />
              <FlatList
                data={[
                  {
                    id: 'cat-1',
                    name: 'fito',
                    breed: 'siames',
                    description: 'small',
                    age: 2,
                  },
                ]}
                renderItem={cat => (
                  <StepButton
                    customButtonStyle={styles.pendingStepButton}
                    showLeftIcon
                    leftIcon={{
                      ...icons.CLOCK,
                      color: colors.DARK_GRAY,
                      size: 22,
                    }}
                    theme="cream"
                    text={`${cat.item.name} ${cat.item.breed} ${cat.item.age}`}
                    customTextStyle={styles.stepButtonText}
                  />
                )}
              />
            </View>
          ) : (
            <ScrollView bounces={false}>
              <CustomHeader
                logo={imagesGlobal.ICON_SAD_CAT}
                title={stringsHome.HOME_NO_CATS_TITLE_TEXT}
                info={stringsHome.HOME_NO_CATS_SUBTITLE_TEXT}
              />
              <RegisterForm
                customTextStyle={styles.customTextStyle}
                theme="white">
                <Formik
                  initialValues={{
                    id: '',
                    name: '',
                    breed: '',
                    age: 0,
                    description: '',
                    picture: imagePlacement,
                  }}
                  validationSchema={catRegisterSchema}
                  onSubmit={this.handleRegisterCatMethod}>
                  {props => (
                    <View>
                      <View style={styles.firstSectionHeaderStyle}>
                        <ProfilePicture
                          image={imagePlacement}
                          onImageSelected={() =>
                            this.selectProfileImage('picture')
                          }
                        />
                      </View>
                      <View style={styles.secondSectionHeaderStyle}>
                        <Input
                          onChange={props.handleChange('name')}
                          onBlur={props.handleBlur('name')}
                          type="normal"
                          label={stringsCat.REGISTER_CAT_NAME_TEXT}
                          hasError={!!props.errors.name}
                        />
                        <Input
                          onChange={props.handleChange('breed')}
                          onBlur={props.handleBlur('breed')}
                          type="normal"
                          label={stringsCat.REGISTER_CAT_BREED_TEXT}
                          hasError={!!props.errors.breed}
                        />
                        <Input
                          onChange={props.handleChange('age')}
                          onBlur={props.handleBlur('age')}
                          type="numeric"
                          label={stringsCat.REGISTER_CAT_AGE_TEXT}
                          hasError={!!props.errors.age}
                        />
                        <Input
                          onChange={props.handleChange('description')}
                          onBlur={props.handleBlur('description')}
                          type="normal"
                          label={stringsCat.REGISTER_CAT_DESCRIPTION_TEXT}
                          hasError={!!props.errors.description}
                        />
                      </View>
                      <View style={styles.buttonContainer}>
                        <MainButton
                          theme={themeOfButton}
                          text={stringsCat.REGISTER_CAT_BUTTON_TEXT}
                          testID={_.uniqueId()}
                          customButtonStyle={styles.mainButton}
                          onPress={props.handleSubmit}
                        />
                      </View>
                    </View>
                  )}
                </Formik>
              </RegisterForm>
            </ScrollView>
          )}
        </View>
        <Loading showModal={loading} />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  userInfo: userSelectors.UserSelector(state),
});

const mapDispatchToProps = (dispatch: DispatchRSSA) => ({
  registerCatInfoRegister: (pet: CatPet[]) =>
    dispatch(registerCatInfoRegisterAction(pet)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
