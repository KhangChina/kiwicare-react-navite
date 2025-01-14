import { Button, View, StyleSheet, Image } from "react-native";

export function HeaderRight() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/Heart.png")}
        style={{ width: 24, height: 24 }}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/Bag.png")}
        style={{ width: 24, height: 24 }}
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
    gap: 16,
    paddingHorizontal: 24,
    height:72,
    paddingVertical:24
  }
});
