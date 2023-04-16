import { StyleSheet } from 'react-native';
import { Colors, Spacing, hScale } from '../../../../styles';
import { IMobileTheme } from '../../../../types';

const buttonSize = hScale(64);

const Styles = (colors: IMobileTheme) => {
  return StyleSheet.create({
    fabContainer: {
      position: 'absolute',
      right: 16,
      bottom: 24,
      flexDirection: 'row',
      justifyContent: 'center',
    },
    fabButtonContainer: {
      height: buttonSize,
      width: buttonSize,
      borderRadius: buttonSize / 2,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: colors.default.shadowColor,
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.4,
      shadowRadius: 2,
      elevation: 5,
    },
    deleteButton: {
      backgroundColor: Colors.Fancy.COLOR_RED,
      marginLeft: Spacing.x16,
    },
    saveButton: { backgroundColor: colors.default.accentColor },
  });
};

export default Styles;
