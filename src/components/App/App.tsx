// react-native-gesture-handler must be at the very top with nothing else before it.
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { LogBox } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { enableScreens } from 'react-native-screens';
import { RecoilRoot } from 'recoil';
import { BottomTab } from '../../navigation/BottomTab/BottomTab';
import { fetchFonts } from '../../styles';
import { ErrorBoundary } from '../ErrorBoundary/ErrorBoundary';

// https://github.com/facebook/react-native/issues/12981
// https://github.com/facebookexperimental/Recoil/issues/1030
LogBox.ignoreLogs(['Setting a timer for a long period of time']);
enableScreens();

export const App = (): JSX.Element => {
  const [isAppInitialized, setIsAppInitialized] = useState(false);

  const initializeApp = async () => {
    await Promise.all([fetchFonts]).catch((error) => error);
  };

  return (
    <ErrorBoundary>
      {isAppInitialized ? (
        <RecoilRoot>
          <SafeAreaProvider>
            <StatusBar />
            <NavigationContainer>
              <BottomTab />
              {/* <Drawer /> */}
            </NavigationContainer>
          </SafeAreaProvider>
        </RecoilRoot>
      ) : (
        <AppLoading
          onError={() => console.error}
          onFinish={() => setIsAppInitialized(true)}
          startAsync={initializeApp}
        />
      )}
    </ErrorBoundary>
  );
};
