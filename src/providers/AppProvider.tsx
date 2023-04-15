import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from '../theme';
import { StatusBar } from 'react-native';
import { Colors } from '../styles';
import HomeScreen from '../features/business-card/screens/home/HomeScreen';

export const AppProvider = () => {
  useEffect(() => {
    SplashScreen.hide();
    console.log('came here');
  }, []);

  return (
    <ThemeProvider>
      <StatusBar
        translucent
        backgroundColor={Colors.TRANSPARENT}
        barStyle="light-content"
      />
      <HomeScreen />
    </ThemeProvider>
  );
};

export default AppProvider;
