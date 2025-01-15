import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  ViewStyle,
  useWindowDimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SliderBox } from "react-native-image-slider-box";
export function Home() {
  const { width } = useWindowDimensions();
  const views1 = [require("../../assets/1.png"), require("../../assets/1.png")];

  const navigation = useNavigation();
  function logout() {
    navigation.navigate("Login");
  }
  return (
    <View style={styles.container}>
      <View  style={[styles.slider_box, {width: width}]}>
        <SliderBox
          images={views1}
          ImageComponentStyle={{
            resizeMode: "cover",
          }}
        />
      </View>
      <Text>Home Screen</Text>
      <Text>Open up 'src/App.tsx' to start working on your app!</Text>
      <Button title="logout" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  slider_box: {
    height: 241,
  },
});
