import { StyleSheet } from 'react-native';
import { hScale } from '../../styles/Scaling';
import { IMobileTheme } from '../../types/IMobileTheme';

const Styles = (colors: IMobileTheme) => {
  return StyleSheet.create({
    flex1: { flex: 1 },
    container: {
      backgroundColor: colors.background.primaryColor,
      borderColor: colors.default.borderColor,
      borderRadius: 8,
      borderWidth: 1,
      shadowOffset: { width: 0, height: 1 },
      shadowColor: colors.default.shadowColor,
      shadowRadius: 10,
      shadowOpacity: 0.5,
      width: hScale(132),
      height: hScale(132),
    },
  });
};

export default Styles;
