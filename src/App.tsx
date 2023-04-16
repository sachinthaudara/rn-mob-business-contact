import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { GenericStyles } from './styles';
import { AppProvider } from './providers';
import { initI18n } from './i18n';

// Init the i18n language
initI18n();

const App = (): JSX.Element => {
  return (
    <GestureHandlerRootView style={GenericStyles.flex1}>
      <AppProvider />
    </GestureHandlerRootView>
  );
};

export default App;
