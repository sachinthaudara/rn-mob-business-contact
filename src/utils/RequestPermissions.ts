import { Platform } from 'react-native';
import Contacts from 'react-native-contacts';
import {
  PERMISSIONS,
  RESULTS,
  requestMultiple,
} from 'react-native-permissions';

export const requestPhoneContactPermissions = async (): Promise<boolean> => {
  try {
    if (Platform.OS === 'ios') {
      const status = await Contacts.requestPermission();
      return status === 'authorized';
    } else {
      const permissions = [
        PERMISSIONS.ANDROID.READ_CONTACTS,
        PERMISSIONS.ANDROID.WRITE_CONTACTS,
      ];

      const status = await requestMultiple(permissions);

      return (
        status[permissions[0]] === RESULTS.GRANTED &&
        status[permissions[1]] === RESULTS.GRANTED
      );
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};
