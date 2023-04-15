import { StyleSheet } from 'react-native';
import { FontSize } from '../styles/FontSizes';
import { IMobileTheme } from '../types/IMobileTheme';
import { SharedMobileFontFamily } from './FontFamily';

const Styles = (colors: IMobileTheme) => {
  return StyleSheet.create({
    header: {
      color: colors.text.primaryColor,
      fontSize: FontSize.f24,
      fontFamily: SharedMobileFontFamily.Bold,
    },
    navHeader: {
      color: colors.text.primaryColor,
      fontSize: FontSize.f22,
      fontFamily: SharedMobileFontFamily.SemiBold,
    },
    title: {
      color: colors.text.primaryColor,
      fontSize: FontSize.f20,
      fontFamily: SharedMobileFontFamily.Bold,
    },
    subtitle: {
      color: colors.text.primaryColor,
      fontSize: FontSize.f18,
      fontFamily: SharedMobileFontFamily.Medium,
    },
    caption: {
      color: colors.text.primaryColor,
      fontSize: FontSize.f16,
      fontFamily: SharedMobileFontFamily.Regular,
    },
    text: {
      color: colors.text.primaryColor,
      fontSize: FontSize.f14,
      fontFamily: SharedMobileFontFamily.Regular,
    },
    label: {
      color: colors.text.primaryColor,
      fontSize: FontSize.f12,
      fontFamily: SharedMobileFontFamily.Regular,
    },
    smallText: {
      color: colors.text.primaryColor,
      fontSize: FontSize.f10,
      fontFamily: SharedMobileFontFamily.Regular,
    },
  });
};

export default Styles;
