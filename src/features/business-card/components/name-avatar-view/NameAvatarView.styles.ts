import { StyleSheet } from 'react-native';
import { IMobileTheme } from '../../../../types';

const Styles = (colors: IMobileTheme) => {
  return StyleSheet.create({
    nameAvatar: {
      backgroundColor: colors.background.tertiaryColor,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
};

export default Styles;
