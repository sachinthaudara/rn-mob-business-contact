import React from 'react';
import { Text } from 'react-native';
import { BaseView } from '../../../../components';
import { NavigationProp } from '@react-navigation/core';

interface AddBCardScreenProps {
  navigation: NavigationProp<any, any>;
}

const AddBCardScreen = ({ navigation }: AddBCardScreenProps): JSX.Element => {
  return (
    <BaseView
      testID="test"
      screenTitle={'Add Business Card'}
      goBackHandler={() => {
        navigation.goBack();
      }}>
      <Text>Add B Card</Text>
    </BaseView>
  );
};

export default AddBCardScreen;
