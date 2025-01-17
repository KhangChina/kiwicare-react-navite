import { Assets as NavigationAssets } from '@react-navigation/elements';
import { Asset } from 'expo-asset';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { Navigation } from './navigation';
import { useFonts } from 'expo-font';
import { View, Text, StyleSheet } from 'react-native';
Asset.loadAsync([
  ...NavigationAssets,
  require('./assets/newspaper.png'),
  require('./assets/bell.png'),
]);

SplashScreen.preventAutoHideAsync();

export function App() {
  const [fontsLoaded] = useFonts({
    'Inter':require('./assets/fonts/static/Inter_18pt-Medium.ttf'),
    "Inter_18pt-Bold": require('./assets/fonts/static/Inter_18pt-Bold.ttf')
  });
  if (!fontsLoaded) {
    return null; // Hiển thị màn hình chờ nếu font chưa tải xong
  }
  return (
    <Navigation
      linking={{
        enabled: 'auto',
        prefixes: [
          // Change the scheme to match your app's scheme defined in app.json
          'helloworld://',
        ],
      }}
      onReady={() => {
        SplashScreen.hideAsync();
      }}
    />
  );
}
