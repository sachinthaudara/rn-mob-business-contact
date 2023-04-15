import React from 'react';
import { Text } from 'react-native';
import { BaseView } from '../../../../components';
import { AppTestIDs } from '../../../../constants';

const HomeScreen = (): JSX.Element => {
  return (
    <BaseView testID={AppTestIDs.home.homeScreen} screenTitle={'Home Screen'}>
      <Text>Hello World</Text>
    </BaseView>
  );
};

export default HomeScreen;
