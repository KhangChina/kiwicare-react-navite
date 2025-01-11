import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";
import { View, Text, StyleSheet, Button } from "react-native";
import { TextInput } from "react-native-gesture-handler";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  //CSS is here
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      // alignItems: "center",
      // justifyContent: "center",
      paddingHorizontal: 4,
    },
    header: {
     
      textAlign: "center",
      fontSize: 30,
      backgroundColor: "#ffff00",
    },
    text_input : {
      borderWidth : 1,
      borderRadius: 5,
      borderColor: "#0066ff",
      height: 40,
    }
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>Todo APP</View>

      <View>
        <Text >Input data </Text>
        <TextInput style={styles.text_input} />
      </View>

      <View>
        <Text>List </Text>
      </View>
    </View>
  );
}
