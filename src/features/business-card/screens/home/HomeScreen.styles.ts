import { StyleSheet } from 'react-native';
import { IMobileTheme } from '../../../../types';
import { Spacing, hScale } from '../../../../styles';

const Styles = (colors: IMobileTheme) => {
  return StyleSheet.create({
    container: { marginHorizontal: Spacing.x16 },
    emptyAnimationContainer: { width: 220, height: 220 },
    emptyTextContainer: {
      marginTop: -Spacing.y24,
      alignItems: 'center',
      justifyContent: 'center',
    },
    emptyTextDescription: {
      textAlign: 'center',
      color: colors.text.tertiaryColor,
      marginTop: Spacing.y4,
    },
    addFirstBCardButton: {
      backgroundColor: colors.button.primaryColor,
      borderRadius: hScale(10),
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: Spacing.y32,
    },
    addFirstBCardText: {
      color: colors.button.textColor,
      marginVertical: Spacing.y14,
      marginHorizontal: Spacing.x16,
    },
  });
};

export default Styles;
