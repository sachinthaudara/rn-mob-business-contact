import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { ThemeProvider } from '../theme';
import { StatusBar } from 'react-native';
import { GenericStyles } from '../styles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RecoilRoot } from 'recoil';
import AppNavigationProvider from './AppNavigationProvider';
import RecoilNexus from 'recoil-nexus';

export const AppProvider = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ThemeProvider>
      <RecoilRoot>
        <RecoilNexus />
        <StatusBar translucent barStyle="default" />
        <SafeAreaView
          style={GenericStyles.flex1}
          edges={['right', 'bottom', 'left', 'top']}>
          <AppNavigationProvider />
        </SafeAreaView>
      </RecoilRoot>
    </ThemeProvider>
  );
};

export default AppProvider;
