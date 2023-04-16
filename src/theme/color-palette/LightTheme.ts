import { MobileThemeType } from '../../enums';
import { IMobileTheme } from '../../types';
import { hexToRgb } from '../../utils';

const LightTheme: IMobileTheme = {
  type: MobileThemeType.Light,
  default: {
    transparent: 'transparent',
    primaryColor: '#FFFFFF',
    accentColor: '#9f3ade',
    secondaryColor: '#de3a9c',
    shadowColor: hexToRgb('#000000', 0.1),
    errorColor: '#D2201E',
    linkColor: '#1C6AB8',
    borderColor: '#0E2C39',
  },
  background: {
    primaryColor: '#FFFFFF',
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
      focusedColor: '#9f3ade',
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
    primaryColor: '#9f3ade',
    secondaryColor: '#de3a9c',
    textColor: '#FFFFFF',
    disableColor: '#DCDFE0',
    disableTextColor: '#969BA3',
  },
};

export { LightTheme };
