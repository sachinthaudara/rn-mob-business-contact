import { StyleSheet } from 'react-native';
import { Colors, Spacing, hScale } from '../../../../styles';
import { IMobileTheme } from '../../../../types';

const buttonSize = hScale(64);

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
    saveButton: { backgroundColor: Colors.Fancy.COLOR_YELLOW },
  });
};

export default Styles;
