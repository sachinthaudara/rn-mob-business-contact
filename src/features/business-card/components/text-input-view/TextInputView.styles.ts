import { StyleSheet } from 'react-native';
import { IMobileTheme } from '../../../../types';
import { FontSize, Spacing } from '../../../../styles';
import { AppFontFamily } from '../../../../typography';

const Styles = (colors: IMobileTheme) => {
  return StyleSheet.create({
    textInputContainer: {
      marginVertical: Spacing.y12,
    },
    textInput: {
      height: Spacing.y50,
      borderWidth: 1,
      color: colors.input.textColor,
      padding: Spacing.x10,
      borderRadius: 6,
      fontFamily: AppFontFamily.SemiBold,
      fontSize: FontSize.f16,
    },
    errorText: {
      marginLeft: Spacing.x4,
      marginTop: Spacing.y4,
      color: colors.default.errorColor,
    },
  });
};

export default Styles;
