import { Button, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";


export default function Login() {
    const navigation = useNavigation();
    async function login() {
        navigation.navigate('HomeTabs')
    }

    return (
      <View>
        <Text>Login</Text>
        <Button title="Login"  onPress={login}/>
      </View>
    );
  }
  