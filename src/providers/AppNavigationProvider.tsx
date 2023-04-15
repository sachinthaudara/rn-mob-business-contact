import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStackNavigator } from '../navigator';

export const AppNavigationProvider = () => {
  return (
    <NavigationContainer
      onReady={() => {
        return;
      }}>
      <AppStackNavigator />
    </NavigationContainer>
  );
};

export default AppNavigationProvider;
