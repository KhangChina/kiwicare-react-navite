import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderButton, Text } from "@react-navigation/elements";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, View } from "react-native";
import bell from "../assets/bell.png";
import newspaper from "../assets/newspaper.png";
import { Home } from "./screens/Home";
import { Settings } from "./screens/Settings";
import { Updates } from "./screens/Updates";
import { NotFound } from "./screens/NotFound";
import Login from "./screens/Login";
import Onboarding from "./screens/Onboarding";
import { HeaderRight } from "./headers/header-right";
import { HeaderLeft } from "./headers/header-left";
import { Ionicons } from "@expo/vector-icons";

const actionTab = (focused: any) => {
  console.log(focused);
  if (focused) {
    return (
      <Image
        source={require("../assets/explore_active.png")}
        // tintColor="#006FFD"
        style={{
          width: 24,
          height: 24,
        }}
      />
    );
  }
  return (
    <Image
      source={require("../assets/Explore.png")}
      //tintColor="#D4D6DD"
      style={{
        width: 24,
        height: 24,
      }}
    />
  );
};

const HomeTabs = createBottomTabNavigator({
  screens: {
    Home: {
      screen: Home,
      options: {
        // title: "Feed",
        headerShown: false,
        tabBarIcon: ({ focused }) => actionTab(focused),
        tabBarLabelStyle: {
          fontSize: 16,
          fontFamily: "Georgia",
          fontWeight: 300,
        },
        tabBarStyle:{
          height:88,
          justifyContent: 'center',
          alignItems:'center',
          paddingTop:16,
         },
      },
    },
    Updates: {
      screen: Updates,
      options: {
        tabBarIcon: ({ color, size }) => (
          <Image
            source={bell}
            tintColor={color}
            style={{
              width: size,
              height: size,
            }}
          />
        ),
      },
    },
  },
});

const RootStack = createNativeStackNavigator({
  screens: {
    Onboarding: {
      screen: Onboarding,
      options: {
        title: "Onboarding",
        headerShown: false,
      },
    },
    Login: {
      screen: Login,
      options: {
        title: "Login",
        headerShown: false,
      },
    },
    HomeTabs: {
      screen: HomeTabs,
      options: {
        // header: ()=>HeaderRight()
        // headerSearchBarOptions:{
        //  inputType:"text",
        //  placeholder: "Search product",
        //  statusBarTranslucent: false
        // },
        title: "",
        headerLeft: () => HeaderLeft(),
        // title: "Home",
        // headerShown: false,
        headerRight: () => HeaderRight(),
      },
    },
    Settings: {
      screen: Settings,
      options: ({ navigation }) => ({
        presentation: "modal",
        headerRight: () => (
          <HeaderButton onPress={navigation.goBack}>
            <Text>Close</Text>
          </HeaderButton>
        ),
      }),
    },
    NotFound: {
      screen: NotFound,
      options: {
        title: "404",
      },
      linking: {
        path: "*",
      },
    },
  },
});

export const Navigation = createStaticNavigation(RootStack);

type RootStackParamList = StaticParamList<typeof RootStack>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
