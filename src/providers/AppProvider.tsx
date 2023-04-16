import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from '../theme';
import { StatusBar } from 'react-native';
import { GenericStyles } from '../styles';
import HomeScreen from '../features/business-card/screens/home/HomeScreen';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';

export const AppProvider = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <RecoilRoot>
      <ThemeProvider>
        <StatusBar translucent barStyle="default" />
        <SafeAreaView
          style={GenericStyles.flex1}
          edges={['right', 'bottom', 'left', 'top']}>
          <HomeScreen />
        </SafeAreaView>
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default AppProvider;
