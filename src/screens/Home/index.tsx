/* eslint-disable prettier/prettier */
import React from 'react';
import { SafeAreaView, StatusBar, View, Image, FlatList, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native';
import { connect } from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import { Formik } from 'formik';
import _ from 'lodash';
import { colorsGlobal as colors, imagesGlobal as images, stringsHome, imagesGlobal, stringsCat, icons, validations } from '@constants';
import { Titles, MainButton, CustomHeader, Loading, Input, ProfilePicture, StepButton, Icon, BodyText, Card, ThinButton, Modal } from '@components';
import { registerCatInfoRegisterAction } from '@state/global/user/actions';
import { updateCurrentCatAction, setCatPictureAction } from '@state/global/cat/actions';
import * as userSelectors from '@state/global/user/selector';
import * as catSelectors from '@state/global/cat/selector';
import { handleRegisterCat, handleDeleteCat } from '@helpers/handlerCatsData';
import { NavigationService } from '@services';
import { catRegisterSchema } from './schema';

import styles from './styles';
import { ScrollView } from 'react-native-gesture-handler';

type Props = {
  titleScreen: string;
  userInfo: UserStateModel;
  catInfo: CatStateModel;
  registerCatInfoRegister: (cat: CatPet[]) => void;
  updateCurrentCat: (cat?: CatPet) => void;
  setCatPicture: (picture: UpdateCatStateModel) => void;
};

type State = {
  themeOfButton: 'blue' | 'white' | 'gray';
  userProfileImage?: string;
  setProfilePicture: boolean;
  loading: boolean;
  isCatSelect: boolean;
  currentCatId?: string;
  showModal: boolean;
};

class Home extends React.PureComponent<Props, State> {
  static navigationOptions = {
    headerTitle: () => <Image source={images.CAT} style={styles.headerCat} />,
    headerRight: () => (
      <TouchableOpacity onPress={() => NavigationService.core.toggleSideMenu()} style={styles.burgerMenuIcon}>
        <Icon config={{ ...icons.HAMBURGER_MENU, size: 20, color: colors.WHITE }} />
      </TouchableOpacity>
    ),
  };

  state: State = {
    themeOfButton: 'blue',
    userProfileImage: '',
    setProfilePicture: false,
    loading: false,
    isCatSelect: false,
    currentCatId: '',
    showModal: false,
  };

  private selectProfileImage = async (fileName?: string) => {
    const { setCatPicture } = this.props;
    const options = {
      title: `Select ${fileName}`,
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      const source = { uri: response.uri };
      this.setState({
        loading: true,
      });
      if (source.uri) {
        this.setState({
          loading: false,
          userProfileImage: source.uri,
        });
        const catPicture: UpdateCatStateModel = {
          picture: { uri: source.uri },
        };
        setCatPicture(catPicture);
      }
    });
  };


  public handleRegisterCatMethod = async ({ name, breed, age, description }: CatPet) => {
    const {
      registerCatInfoRegister,
      userInfo: {
        data: { myCats },
      },
      catInfo: {
        data: { picture },
      },
    } = this.props;
    if (name && breed && age && description && picture) {
      const cats = handleRegisterCat({ name, breed, age, description, picture }, myCats);
      registerCatInfoRegister(cats);
    }
  };

  showCatDescription = (catId?: string) => {
    const { isCatSelect } = this.state;
    this.setState({
      isCatSelect: !isCatSelect,
      currentCatId: catId,
    });
  };

  callModalCofirmation = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  }

  deleteCat = () => {
    const {
      userInfo: {
        data: { myCats },
      },
      registerCatInfoRegister,
    } = this.props;
    const { currentCatId } = this.state;
    const newCats = handleDeleteCat(currentCatId, myCats);
    registerCatInfoRegister(newCats);
    this.callModalCofirmation();
  };

  updateCatInfo = (catId?: string) => {
    const {
      userInfo: {
        data: { myCats },
      },
      updateCurrentCat,
    } = this.props;
    const currentCat = myCats.find(cat => cat.id === catId);
    updateCurrentCat(currentCat);
    NavigationService.home.goToCatsHome(1);
  };

  handleCatLocation = (cat: CatPet) => {
    NavigationService.home.goToCatsHome(3, { name: cat.name, coordinates: cat.coordinates });
  };

  render() {
    const { themeOfButton, userProfileImage, loading, isCatSelect, currentCatId, showModal } = this.state;
    const {
      userInfo: {
        data: { myCats },
      },
    } = this.props;
    const imagePlacement = userProfileImage
      ? {
          uri: userProfileImage,
        }
      : imagesGlobal.ICON_CAT_AVATAR;
    console.log('imagePlacement', imagePlacement);
    return (
      <SafeAreaView style={styles.safeArea}>
        <StatusBar backgroundColor={colors.PRIMARY} barStyle="light-content" />
        <View>
          {myCats.length ? (
            <View>
              <Titles.H1 customStyle={styles.homeHaveCatsSubTitle} text={stringsCat.REGISTER_HAVE_CATS_SUBTIBLE} bold />
              <View style={styles.cardContainer}>
                <FlatList
                  data={myCats}
                  renderItem={cat => (
                    <View style={styles.stepButtonContainer}>
                      <StepButton
                        sufixComponent={<Image style={styles.imageButton} source={cat.item.picture} />}
                        customButtonStyle={styles.stepButton}
                        rigthIcon={
                          isCatSelect && currentCatId === cat.item.id
                            ? {
                                ...icons.ARROW_DOWN_THIN,
                                color: colors.DARK_GRAY,
                                size: 22,
                              }
                            : {
                                ...icons.ARROW_RIGHT,
                                color: colors.DARK_GRAY,
                                size: 22,
                              }
                        }
                        showRigthIcon
                        theme="cream"
                        text={`${cat.item.name}`}
                        customTextStyle={styles.stepButtonText}
                        onPress={() => this.showCatDescription(cat.item.id)}
                      />
                      {isCatSelect && currentCatId === cat.item.id && (
                        <Card theme="grey">
                          <View style={styles.catInfoContainer}>
                            <Titles.H3 customStyle={styles.catInfoLabels} text={stringsCat.HOME_CAT_BREED_LABEL} bold />
                            <BodyText customStyle={styles.catInfoText} text={cat.item.breed} />
                          </View>
                          <View style={styles.catInfoContainer}>
                            <Titles.H3 customStyle={styles.catInfoLabels} text={stringsCat.HOME_CAT_AGE_LABEL} bold />
                            <BodyText customStyle={styles.catInfoText} text={`${cat.item.age} years old`} />
                          </View>
                          <View style={styles.catInfoContainer}>
                            <Titles.H3 customStyle={styles.catInfoLabels} text={stringsCat.HOME_CAT_DESCRIPTION_LABEL} bold />
                            <BodyText customStyle={styles.catInfoText} text={cat.item.description} />
                          </View>
                          <View style={styles.buttonsContainer}>
                            <ThinButton
                              onPress={this.callModalCofirmation}
                              customStyleLinkText={styles.linkButtonDelete}
                              text={stringsCat.HOME_CAT_DELETE_BUTTON}
                            />
                            <ThinButton
                              onPress={() => this.updateCatInfo(cat.item.id)}
                              customStyleLinkText={styles.linkButtonUpdate}
                              text={stringsCat.HOME_CAT_UPDATE_BUTTON}
                            />
                            <ThinButton
                              onPress={() => this.handleCatLocation(cat.item)}
                              customStyleLinkText={styles.linkButtonLocate}
                              text={stringsCat.HOME_CAT_LOCATE_BUTTON}
                            />
                          </View>
                        </Card>
                      )}
                    </View>
                  )}
                />
              </View>
            </View>
          ) : (
            <KeyboardAvoidingView style={styles.keyboard} behavior={Platform.OS === 'ios' ? 'padding' : undefined} keyboardVerticalOffset={100}>
              <ScrollView contentContainerStyle={styles.safeArea} bounces={false}>
                <CustomHeader
                  logo={imagesGlobal.ICON_SAD_CAT}
                  title={stringsHome.HOME_NO_CATS_TITLE_TEXT}
                  info={stringsHome.HOME_NO_CATS_SUBTITLE_TEXT}
                />
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
                  onSubmit={this.handleRegisterCatMethod}
                >
                  {props => (
                    <View style={styles.content}>
                      <Card customTextStyle={styles.customTextStyle} theme="white">
                        <View style={styles.firstSectionHeaderStyle}>
                          <ProfilePicture showEditIcon image={imagePlacement} onImageSelected={() => this.selectProfileImage('picture')} />
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
                      </Card>
                    </View>
                  )}
                </Formik>
              </ScrollView>
            </KeyboardAvoidingView>
          )}
        </View>
        <Loading showModal={loading} />
        {showModal && (<Modal
          showModal={showModal}
          icon={imagesGlobal.ICON_WARNING}
          title={validations.CONFIRMATION_DELETE_CAT}
          info={validations.COMFIRMATION_DELETE_CAT_SUBTITLE}
          textButtonOk={validations.CONFIRMATION_DELETE_BUTTON}
          textButtonCancel={validations.CANCEL_DELETE_ACTION_BUTTON}
          onPressOk={this.deleteCat}
          onPressCancel={this.callModalCofirmation}
        />)}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: RootState) => ({
  userInfo: userSelectors.UserSelector(state),
  catInfo: catSelectors.CatSelector(state),
});
// updateCurrentCatAction
const mapDispatchToProps = (dispatch: DispatchRSSA) => ({
  registerCatInfoRegister: (pet: CatPet[]) => dispatch(registerCatInfoRegisterAction(pet)),
  updateCurrentCat: (pet?: CatPet) => dispatch(updateCurrentCatAction(pet)),
  setCatPicture: (picture: UpdateCatStateModel) => dispatch(setCatPictureAction(picture)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
