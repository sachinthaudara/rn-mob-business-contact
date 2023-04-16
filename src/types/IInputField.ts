import { KeyboardTypeOptions } from 'react-native';
import { InputFieldType } from '../enums';

export interface IInputField {
  keyboardType?: KeyboardTypeOptions;
  type: InputFieldType;
  value: string;
  placeholder: string;
  errorText: string;
  error: boolean;
}
