import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppStackNavigator } from '../navigator';
import { rehydrateRecoil } from '../recoil/RecoilManager';

export const AppNavigationProvider = () => {
  const [isRehydrateRecoilFinish, setIsRehydrateRecoilFinish] = useState(false);

  useEffect(() => {
    rehydrateRecoil().finally(() => {
      setIsRehydrateRecoilFinish(true);
    });
  }, []);

  if (!isRehydrateRecoilFinish) {
    return null;
  }

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
