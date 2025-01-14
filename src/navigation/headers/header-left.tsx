import { Button, View, StyleSheet, Image } from "react-native";

export function HeaderLeft() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Search.png")}
        style={{ width: 20, height: 20 }}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection:"row",
    justifyContent:"center",
    alignContent: "center",
    paddingLeft:10,
  }
});
