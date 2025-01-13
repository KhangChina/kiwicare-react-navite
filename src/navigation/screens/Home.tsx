import { Text } from "@react-navigation/elements";
import { Button, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";



export function Home() {
  const navigation = useNavigation();
  function logout() {
    navigation.navigate("Login");
  }
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
      <Text>Open up 'src/App.tsx' to start working on your app!</Text>
      <Button title="logout" onPress={logout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
});
