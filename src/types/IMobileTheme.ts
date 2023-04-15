import { MobileThemeType } from '../enums';

export interface IMobileTheme {
  type: MobileThemeType;
  default: {
    transparent: string;
    primaryColor: string;
    secondaryColor: string;
    accentColor: string;
    shadowColor: string;
    borderColor?: string;
    linkColor?: string;
    errorColor?: string;
  };
  background: {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
    dimColor: string;
  };
  text: {
    primaryColor: string;
    secondaryColor: string;
    tertiaryColor: string;
  };
  button: {
    primaryColor: string;
    secondaryColor: string;
    disableColor: string;
    textColor: string;
    disableTextColor: string;
  };
  input: {
    border: {
      defaultColor: string;
      focusedColor: string;
    };
    background: {
      defaultColor: string;
      disabledColor: string;
    };
    textColor: string;
    placeholderColor: string;
    errorColor: string;
  };
}
