import DropdownAlert from 'react-native-dropdownalert';

class DropDownHolder {
  static dropDownRef: DropdownAlert;

  static setDropDownRef(dropDownRef: DropdownAlert | null) {
    if (dropDownRef) {
      DropDownHolder.dropDownRef = dropDownRef;
    }
  }

  static getDropDownRef(): DropdownAlert {
    return DropDownHolder.dropDownRef;
  }
}

export default DropDownHolder;
