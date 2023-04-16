import React from 'react';
import { Text } from 'react-native';
import { BaseView } from '../../../../components';
import { NavigationProp } from '@react-navigation/core';

interface ManageBCardScreenProps {
  navigation: NavigationProp<any, any>;
}

const ManageBCardScreen = ({
  navigation,
}: ManageBCardScreenProps): JSX.Element => {
  return (
    <BaseView
      testID="test"
      screenTitle={'Manage Business Card'}
      goBackHandler={() => {
        navigation.goBack();
      }}>
      <Text>Add B Card</Text>
    </BaseView>
  );
};

export default ManageBCardScreen;
