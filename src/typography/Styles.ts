import { StyleSheet } from 'react-native';
import { FontSize } from '../styles/FontSizes';
import { IMobileTheme } from '../types/IMobileTheme';
import { AppFontFamily } from './FontFamily';

const Styles = (colors: IMobileTheme) => {
  return StyleSheet.create({
    header: {
      color: colors.text.primaryColor,
      fontSize: FontSize.f24,
      fontFamily: AppFontFamily.ExtraBold,
    },
    navHeader: {
      color: colors.text.primaryColor,
      fontSize: FontSize.f22,
      fontFamily: AppFontFamily.Bold,
    },
    title: {
      color: colors.text.primaryColor,
      fontSize: FontSize.f20,
      fontFamily: AppFontFamily.Bold,
    },
    subtitle: {
      color: colors.text.primaryColor,
      fontSize: FontSize.f18,
    },
    caption: {
      color: colors.text.primaryColor,
      fontSize: FontSize.f16,
    },
    text: {
      color: colors.text.primaryColor,
      fontSize: FontSize.f14,
    },
    label: {
      color: colors.text.primaryColor,
      fontSize: FontSize.f12,
    },
    smallText: {
      color: colors.text.primaryColor,
      fontSize: FontSize.f10,
    },
  });
};

export default Styles;
