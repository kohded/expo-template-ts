// react-native-gesture-handler must be at the very top with nothing else before it.
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { Provider } from 'react-redux';
import { BottomTab } from '../../navigation/BottomTab/BottomTab';
import { store } from '../../store';
import { fetchFonts } from '../../styles';

enableScreens();

export const App = (): JSX.Element => {
  const [isAppInitialized, setIsAppInitialized] = useState(false);

  const initializeApp = async () => {
    await Promise.all([fetchFonts]).catch((error) => error);
  };

  return (
    <>
      {isAppInitialized ? (
        <Provider store={store}>
          <SafeAreaProvider>
            <StatusBar />
            <NavigationContainer>
              <BottomTab />
              {/* <Drawer /> */}
            </NavigationContainer>
          </SafeAreaProvider>
        </Provider>
      ) : (
        <AppLoading
          onError={() => console.error}
          onFinish={() => setIsAppInitialized(true)}
          startAsync={initializeApp}
        />
      )}
    </>
  );
};
