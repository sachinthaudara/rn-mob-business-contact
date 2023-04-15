import React from 'react';
import { Text as RNText, TextProps } from 'react-native';
import ConnectStyle from './ConnectStyle';
import { FontClass } from './FontClass';

const StyledText = (props: TextProps) => {
  return <RNText {...props} />;
};

const Header = ConnectStyle(FontClass.Header)(StyledText);
const NavHeader = ConnectStyle(FontClass.NavHeader)(StyledText);
const Title = ConnectStyle(FontClass.Title)(StyledText);
const Subtitle = ConnectStyle(FontClass.Subtitle)(StyledText);
const Caption = ConnectStyle(FontClass.Caption)(StyledText);
const Text = ConnectStyle(FontClass.Text)(StyledText);
const Label = ConnectStyle(FontClass.Label)(StyledText);
const SmallText = ConnectStyle(FontClass.SmallText)(StyledText);

export { Header, NavHeader, Title, Subtitle, Caption, Text, Label, SmallText };
