import React, { useContext } from 'react';
import { TouchableOpacity } from 'react-native';

import { useTheme } from '../../theme/ThemeProvider';
import Styles from './FabButton.styles';
import { RNViewStyleProps } from '../../types';
import { Text } from '../../typography';

export interface FabButtonProps {
  icon: string;
  style?: RNViewStyleProps;
  onPress: () => void;
}

export const FabButton = ({ icon, style, onPress }: FabButtonProps) => {
  const { theme } = useContext(useTheme);
  const styles = Styles(theme);

  return (
    <TouchableOpacity onPress={onPress} style={[styles.fabContainer, style]}>
      <Text style={styles.fabText}>{icon}</Text>
    </TouchableOpacity>
  );
};
