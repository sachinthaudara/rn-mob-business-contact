import { StyleSheet } from 'react-native';
import { FontSize, Spacing, hScale } from '../../../../styles';
import { IMobileTheme } from '../../../../types';

const buttonSize = hScale(64);

const Styles = (colors: IMobileTheme) => {
  return StyleSheet.create({
    listViewContentContainer: {
      paddingVertical: Spacing.y24,
      paddingHorizontal: Spacing.x16,
    },
    addFABContainer: {
      position: 'absolute',
      right: Spacing.x16,
      backgroundColor: colors.default.accentColor,
      height: buttonSize,
      width: buttonSize,
      borderRadius: buttonSize / 2,
      bottom: 24,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.4,
      shadowRadius: 2,
      elevation: 5,
    },
    addFABText: {
      fontSize: FontSize.f32,
      color: colors.button.textColor,
    },
  });
};

export default Styles;
