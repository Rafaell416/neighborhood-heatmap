import React from "react";
import { useEffect, useCallback } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {
  Mulish_600SemiBold, Mulish_400Regular, Mulish_700Bold
} from "@expo-google-fonts/mulish";
import * as Font from "expo-font"; import * as SplashScreen from 'expo-splash-screen';

import Navigation from './src/navigation';

export default function App() {
  const [appIsReady, setAppIsReady] = React.useState(false);

  React.useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync({ Mulish_600SemiBold, Mulish_400Regular, Mulish_700Bold });
      }
      catch (error) {

      }
      finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  const onLayout = React.useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View onLayout={onLayout} style={{ flex: 1 }}>
      <Navigation />
    </View>
  );
}
