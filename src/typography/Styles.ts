import { StyleSheet } from 'react-native';
import { FontSize } from '../styles/FontSizes';
import { IMobileTheme } from '../types/IMobileTheme';
import { SharedMobileFontFamily } from './FontFamily';

const Styles = (colors: IMobileTheme) => {
  return StyleSheet.create({
    header: {
      color: colors.text.primaryColor,
      fontSize: FontSize.f24,
      fontFamily: SharedMobileFontFamily.ExtraBold,
    },
    navHeader: {
      color: colors.text.primaryColor,
      fontSize: FontSize.f22,
      fontFamily: SharedMobileFontFamily.Bold,
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
      fontFamily: SharedMobileFontFamily.SemiBold,
    },
    text: {
      color: colors.text.primaryColor,
      fontSize: FontSize.f14,
      fontFamily: SharedMobileFontFamily.SemiBold,
    },
    label: {
      color: colors.text.primaryColor,
      fontSize: FontSize.f12,
      fontFamily: SharedMobileFontFamily.SemiBold,
    },
    smallText: {
      color: colors.text.primaryColor,
      fontSize: FontSize.f10,
      fontFamily: SharedMobileFontFamily.SemiBold,
    },
  });
};

export default Styles;
