import React from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { GenericStyles } from './styles';
import { AppProvider } from './providers';

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={GenericStyles.flex1}>
      <AppProvider />
    </GestureHandlerRootView>
  );
}

export default App;
