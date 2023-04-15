import { MobileThemeType } from '../../enums';
import { IMobileTheme } from '../../types';
import { hexToRgb } from '../../utils';

const LightTheme: IMobileTheme = {
  type: MobileThemeType.Light,
  default: {
    transparent: 'transparent',
    primaryColor: '#FFFFFF',
    accentColor: '#0D1845',
    secondaryColor: '#E2231A',
    shadowColor: hexToRgb('#000000', 0.1),
    errorColor: '#D2201E',
    linkColor: '#1C6AB8',
    borderColor: '#0E2C39',
  },
  background: {
    primaryColor: '#001F5F',
    secondaryColor: '#FFFFFF',
    tertiaryColor: '#E5E5E5',
    dimColor: hexToRgb('#000000', 0.4),
  },
  text: {
    primaryColor: '#202020',
    secondaryColor: '#595959',
    tertiaryColor: '#969BA3',
  },
  input: {
    border: {
      defaultColor: '#A4A9B2',
      focusedColor: '#001F5F',
    },
    background: {
      defaultColor: '#FFFFFF',
      disabledColor: '#DDDDDD',
    },
    textColor: '#202020',
    placeholderColor: '#A4A9B2',
    errorColor: '#D2201E',
  },
  button: {
    primaryColor: '#E2231A',
    secondaryColor: '#001F5F',
    textColor: '#FFFFFF',
    disableColor: '#DCDFE0',
    disableTextColor: '#969BA3',
  },
};

export { LightTheme };
