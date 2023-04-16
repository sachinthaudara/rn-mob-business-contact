import { StyleSheet } from 'react-native';
import { Spacing, hScale } from '../../../../styles';
import { IMobileTheme } from '../../../../types';

const Styles = (colors: IMobileTheme) => {
  return StyleSheet.create({
    bodyContainer: {
      flex: 1,
      paddingVertical: Spacing.y24,
      paddingHorizontal: Spacing.x16,
    },
    welcomeContainer: {
      marginBottom: Spacing.y24,
    },
    scrollView: {
      margin: 0,
    },
    descriptionText: {
      marginTop: Spacing.y8,
      color: colors.text.tertiaryColor,
    },
    saveBCardButtonContainer: {
      paddingVertical: Spacing.y24,
    },
    saveBCardButton: {
      backgroundColor: colors.button.primaryColor,
      borderRadius: hScale(10),
      justifyContent: 'center',
      alignItems: 'center',
    },
    saveBCardText: {
      color: colors.button.textColor,
      marginVertical: Spacing.y14,
      marginHorizontal: Spacing.x16,
    },
  });
};

export default Styles;
