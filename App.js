import React, { useCallback, useState, useEffect } from 'react';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';

import { useRoute } from './src/router';

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

  const routing = useRoute(false);

  return (
    <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
      <NavigationContainer>{routing}</NavigationContainer>
    </View>
  );
}
