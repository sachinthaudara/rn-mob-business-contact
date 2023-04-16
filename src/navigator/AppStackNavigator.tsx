import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../features/business-card/screens/home/HomeScreen';
import AddBCardScreen from '../features/business-card/screens/add-bcard/AddBCardScreen';
import { AppStackNavigationIds } from '../constants';
import ManageBCardScreen from '../features/business-card/screens/manage-bcard/ManageBCardScreen';

const RootStack = createNativeStackNavigator();

export function AppStackNavigator() {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen
        name={AppStackNavigationIds.home}
        component={HomeScreen}
      />
      <RootStack.Screen
        name={AppStackNavigationIds.manageBCard}
        component={ManageBCardScreen}
      />
      <RootStack.Screen
        name={AppStackNavigationIds.addBCard}
        component={AddBCardScreen}
      />
    </RootStack.Navigator>
  );
}

export default AppStackNavigator;
