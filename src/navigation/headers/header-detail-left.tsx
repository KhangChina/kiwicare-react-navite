import {  TouchableOpacity, StyleSheet, Image } from "react-native";

export function HeaderDetailLeft(navigation : any) {
  return (
    <TouchableOpacity style={styles.container} onPress={navigation.goBack}>
      <Image
        source={require("../../assets/close.png")}
        style={{ width: 20, height: 20 }}
        resizeMode="contain"
      />
    </TouchableOpacity>
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
