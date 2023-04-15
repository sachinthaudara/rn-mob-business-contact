import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../features/business-card/screens/home/HomeScreen';
import AddBCardScreen from '../features/business-card/screens/add-bcard/AddBCardScreen';
import { AppStackNavigationIds } from '../constants';

const RootStack = createNativeStackNavigator();

export function AppStackNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Group>
        <RootStack.Screen
          name={AppStackNavigationIds.home}
          component={HomeScreen}
        />
      </RootStack.Group>
      <RootStack.Group screenOptions={{ presentation: 'modal' }}>
        <RootStack.Screen
          name={AppStackNavigationIds.addBCard}
          component={AddBCardScreen}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
}

export default AppStackNavigator;
