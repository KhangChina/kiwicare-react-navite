import {
  Button,
  Text,
  View,
  StyleSheet,
  Image,
  useWindowDimensions,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons"; // Sử dụng thư viện icon (Expo)

export default function Login() {
  const navigation = useNavigation();
  const [isFocused, setIsFocused] = useState(false);
  const [isFocusedPassword, setIsFocusedPassword] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const { width, height } = useWindowDimensions();
  async function login() {
    navigation.navigate("HomeTabs");
  }

  async function go_to_register() {
    navigation.navigate("HomeTabs");
  }

  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/1.png")}
        style={{ width: width, height: height * 0.4 }}
        resizeMode="cover"
      />
      <View style={styles.login_container}>
        <Text style={styles.text_welcome}>Welcome!</Text>
        <TextInput
          style={[
            styles.input,
            { borderColor: isFocused ? "#006FFD" : "#C5C6CC" },
          ]}
          placeholder="Email Address"
          placeholderTextColor="#8F9098"
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />

        <View
          style={[
            styles.input_password_container,
            { borderColor: isFocusedPassword ? "#006FFD" : "#C5C6CC" },
          ]}
        >
          <TextInput
            style={styles.input_password}
            placeholder="Password"
            placeholderTextColor="#8F9098"
            onFocus={() => setIsFocusedPassword(true)}
            onBlur={() => setIsFocusedPassword(false)}
            secureTextEntry={!isPasswordVisible}
          />

          <TouchableOpacity
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          >
            <Ionicons
              name={isPasswordVisible ? "eye" : "eye-off"} // Icon thay đổi
              size={24}
              color="#8F9098"
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.text_forgot}> Forgot password? </Text>

        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.text_button}>Login</Text>
        </TouchableOpacity>

        <View style={styles.register_container}>
          <Text style={styles.not_a_member_text}> Not a member? </Text>
          <TouchableOpacity onPress={go_to_register}>
            <Text style={styles.register_text}>Register now</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.line}></View>

        <Text style={styles.continue_with_text}> Or continue with </Text>

        <View style={styles.login_by}>
          <Image
            source={require("../../assets/google.png")}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/apple.png")}
            style={{ width: 40, height: 40 }}
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/fb.png")}
            style={{ width: 40, height: 40 }}
             resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  login_container: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
  text_welcome: {
    fontSize: 24,
    color: "#000000",
    fontFamily: 'Inter_18pt-Bold',
  },
  input: {
    borderWidth: 1,
    height: 48,
    borderRadius: 12,
    borderColor: "#C5C6CC",
    paddingHorizontal: 16,
    paddingVertical: 14,
    marginTop: 24,
    fontFamily:'Inter',
  },
  input_password_container: {
    flexDirection: "row",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 12,
    borderColor: "#C5C6CC",
    paddingHorizontal: 16,
    marginTop: 24,
  },
  input_password: {
    height: 48,
    width: "95%",
    fontFamily:'Inter'
  },
  text_forgot: {
    marginTop: 16,
    marginBottom: 24,
    color: "#006FFD",
    fontWeight: "600",
    fontFamily:'Inter_18pt-Bold',
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    height: 48,
    borderRadius: 12,
    backgroundColor: "#006FFD",
    marginBottom: 16,
  },
  text_button: {
    color: "#FFFFFF",
    fontSize: 12,
    fontFamily:'Inter_18pt-Bold',
  },

  register_container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  register_text: {
    color: "#006FFD",
    fontWeight: "600",
    fontFamily:'Inter_18pt-Bold',
  },

  not_a_member_text: {
    color: "#71727A",
    fontFamily:'Inter',
  },
  line: {
    borderTopWidth: 0.5,
    borderStyle: "solid",
    borderColor: "#D4D6DD",
    marginVertical: 24,
  },
  continue_with_text: {
    color: "#71727A",
    textAlign: "center",
    fontFamily:'Inter',
  },
  login_by: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop:16,
    gap: 12,
  },
});
