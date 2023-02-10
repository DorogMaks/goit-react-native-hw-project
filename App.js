import { StatusBar } from 'expo-status-bar';
import { LoginScreen } from './src/Screens/LoginScreen/LoginScreen';
import { RegistrationScreen } from './src/Screens/RegistrationScreen/RegistrationScreen';
import React, { useCallback, useState, useEffect } from 'react';
import { View } from 'react-native';

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    async function prepare() {
      try {
        await Font.loadAsync({
          'Roboto-Regular': require('./src/fonts/Roboto-Regular.ttf'),
          'Roboto-Medium': require('./src/fonts/Roboto-Medium.ttf'),
        });
      } catch (error) {
        console.warn(error);
      } finally {
        setIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <StatusBar />
      <LoginScreen />
      {/* <RegistrationScreen /> */}
    </View>
  );
}
