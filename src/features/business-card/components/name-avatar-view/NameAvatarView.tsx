import React, { useContext } from 'react';
import { View } from 'react-native';

import { FontWeight, Text } from '../../../../typography';
import Styles from './NameAvatarView.styles';
import { useTheme } from '../../../../theme';
import { FontSize, hScale } from '../../../../styles';

const nameAvatarSize = hScale(68);

interface NameAvatarViewProps {
  titleText: string;
  tintColor: string;
  fontSize?: number;
  size?: number;
}

export const NameAvatarView = ({
  fontSize = FontSize.f24,
  size = nameAvatarSize,
  titleText,
  tintColor,
}: NameAvatarViewProps): JSX.Element => {
  const { theme } = useContext(useTheme);
  const styles = Styles(theme);
  const nameTitle = `${titleText[0]}`.toUpperCase();

  return (
    <View
      style={[
        styles.nameAvatar,
        {
          height: size,
          width: size,
          borderRadius: size / 2,
        },
      ]}>
      <Text
        style={{ color: tintColor, fontSize: fontSize }}
        weight={FontWeight.ExtraBold}>
        {nameTitle}
      </Text>
    </View>
  );
};
