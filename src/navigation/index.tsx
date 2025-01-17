import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HeaderButton, Text } from "@react-navigation/elements";
import {
  createStaticNavigation,
  StaticParamList,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Image, TouchableOpacity, View } from "react-native";
import { Home } from "./screens/Home";
import { Settings } from "./screens/Settings";
import { Updates } from "./screens/Updates";
import { NotFound } from "./screens/NotFound";
import Login from "./screens/Login";
import Onboarding from "./screens/Onboarding";
import { HeaderRight } from "./headers/header-right";
import { HeaderLeft } from "./headers/header-left";
import { ProductDetail } from "./screens/ProductDetail";
import { HeaderDetailLeft } from "./headers/header-detail-left";

const render_main = (iconSource: any, labelText: any, textColor: any) => {
  return (
    <View
      style={{
        // flexDirection: "row",
        width: 82,
        // height:40,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Image
        source={iconSource}
        style={{
          width: 24,
          height: 24,
        }}
      />
      <Text
        style={{
          fontSize: 12,
          color: textColor,
          fontFamily:'Inter_18pt-Bold'
        }}
      >
        {labelText}
      </Text>
    </View>
  );
};

const render_contact_main = () => {
  return (
    <View
      style={{
        position: "absolute",
        bottom: 30,
        width: 80,
        height: 80,
        borderRadius: 100, // Giữ hình tròn
        backgroundColor: "white",
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000", // Màu bóng (đen)
        shadowOffset: { width: 0, height: 2 }, // Độ lệch của bóng
        shadowOpacity: 0.3, // Độ mờ của bóng
        shadowRadius: 5, // Độ lan tỏa của bóng
        elevation: 5, // Thêm hiệu ứng bóng cho Android
      }}
    >
      <Image
        source={require("../assets/service.png")}
        style={{
          width: 50,
          height: 50,
        }}
      />
    </View>
  );
};

const HomeTabs = createBottomTabNavigator({
  screenOptions: ({ route }) => ({
    tabBarIcon: ({ focused }) => {
      let iconName;
      let labelText;
      let textColor;
      switch (route.name) {
        case "Home":
          labelText = "Home";
          iconName = focused
            ? require("../assets/explore_active.png")
            : require("../assets/Explore.png");
          textColor = focused ? "#1F2024" : "#71727A";
          break;
        case "Categories":
          iconName = focused
            ? require("../assets/categories_active.png")
            : require("../assets/categories.png");
          labelText = "Categories";
          textColor = focused ? "#1F2024" : "#71727A";
          break;
        case "Stores":
          iconName = focused
            ? require("../assets/stores_active.png")
            : require("../assets/stores.png");
          labelText = "Stores";
          textColor = focused ? "#1F2024" : "#71727A";
          break;
        case "Profile":
          iconName = focused
            ? require("../assets/profiles_active.png")
            : require("../assets/profile.png");
          labelText = "Profile";
          textColor = focused ? "#1F2024" : "#71727A";
          break;
        case "Special":
          return render_contact_main();
        default:
          iconName = require("../assets/newspaper.png");
          labelText = "Menu";
          textColor = "#71727A";
      }
      return render_main(iconName, labelText, textColor);
    },
    tabBarStyle: {
      height: 88,
      justifyContent: "center",
      alignItems: "center",
      paddingTop: 30,
    },
    tabBarButton: (props: any) => (
      <TouchableOpacity {...props} activeOpacity={0.6}>
        {props.children}
      </TouchableOpacity>
    ),
    tabBarShowLabel: false,
  }),

  screens: {
    Home: {
      screen: Home,
      options: {
        headerShown: false,
      },
    },
    Categories: {
      screen: Updates,
      options: {
        headerShown: false,
      },
    },
    // Special: {
    //   screen: Updates,
    //   headerShown: false,
    // },
    Stores: {
      screen: Updates,
      options: {
        headerShown: false,
      },
    },
    Profile: {
      screen: Updates,
      options: {
        headerShown: false,
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
        title: "",
        headerLeft: () => HeaderLeft(),
        headerRight: () => HeaderRight(),
        headerShadowVisible : false
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
    ProductDetail: {
      screen: ProductDetail,
      options: ({ navigation }) => ({
        title: "",
        presentation: "modal",
        headerLeft:()=> HeaderDetailLeft(navigation),
        headerBackVisible : false,
        headerTransparent: true
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
