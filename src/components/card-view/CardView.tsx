import React, { useContext } from 'react';

import { View } from 'react-native';
import { useTheme } from '../../theme/ThemeProvider';
import Styles from './CardView.styles';
import { RNViewStyleProps } from '../../types';

export interface CardViewProps {
  children?: React.ReactNode;
  style?: RNViewStyleProps;
}

export const CardView = (props: CardViewProps) => {
  const { theme } = useContext(useTheme);
  const styles = Styles(theme);

  return <View style={[styles.container, props.style]}>{props.children}</View>;
};
