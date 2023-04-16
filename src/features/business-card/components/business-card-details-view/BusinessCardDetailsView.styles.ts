import { StyleSheet } from 'react-native';
import { IMobileTheme } from '../../../../types';
import { Spacing } from '../../../../styles';

const Styles = (colors: IMobileTheme) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      marginVertical: Spacing.y24,
      paddingHorizontal: Spacing.x16,
    },
    personalDetailView: {
      marginVertical: Spacing.y8,
      alignItems: 'center',
    },
    personalDetailText: {
      textAlign: 'center',
    },
    occupationText: {
      textAlign: 'center',
      marginBottom: Spacing.y4,
      color: colors.text.tertiaryColor,
    },
    contactContainer: {
      marginTop: Spacing.y32,
    },
    emailContainer: {
      marginVertical: Spacing.y24,
    },
  });
};

export default Styles;
