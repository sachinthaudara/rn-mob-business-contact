import { StyleSheet } from 'react-native';
import { hScale } from '../../styles/Scaling';
import { IMobileTheme } from '../../types/IMobileTheme';
import { FontSize } from '../../styles';

const buttonSize = hScale(64);

const Styles = (colors: IMobileTheme) => {
  return StyleSheet.create({
    fabContainer: {
      position: 'absolute',
      backgroundColor: colors.default.accentColor,
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
    fabText: {
      fontSize: FontSize.f32,
      color: colors.button.textColor,
    },
  });
};

export default Styles;
