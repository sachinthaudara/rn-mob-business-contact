import React, { useContext, useState } from 'react';
import { TextInput, View } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Label } from '../../../../typography';
import Styles from './TextInputView.styles';
import { InputFieldType } from '../../../../enums';
import { IInputField } from '../../../../types';
import { useTheme } from '../../../../theme';
import { AppConstants } from '../../../../constants';

interface TextInputViewProps {
  input: IInputField;
  onTextChange: (text: string, type: InputFieldType) => void;
}

export const TextInputView = ({
  input,
  onTextChange,
}: TextInputViewProps): JSX.Element => {
  const [focused, changeFocus] = useState(false);
  const { t } = useTranslation();
  const { theme } = useContext(useTheme);
  const styles = Styles(theme);

  const borderColor = focused
    ? theme.input.border.focusedColor
    : theme.input.border.defaultColor;

  return (
    <View style={styles.textInputContainer}>
      <TextInput
        testID={`${AppConstants.appNamePrefix}${InputFieldType[input.type]}`}
        style={[styles.textInput, { borderColor: borderColor }]}
        placeholderTextColor={theme.input.placeholderColor}
        keyboardType={input.keyboardType || 'default'}
        onChangeText={value => onTextChange(value, input.type)}
        value={input.value}
        onFocus={() => changeFocus(true)}
        onBlur={() => changeFocus(false)}
        placeholder={t(input.placeholder) || ''}
      />
      {input.error && (
        <Label style={styles.errorText}>{t(input.errorText)}</Label>
      )}
    </View>
  );
};
