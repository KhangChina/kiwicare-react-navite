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
  FlatList,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SliderBox } from "react-native-image-slider-box";
export function Home() {
  const { width } = useWindowDimensions();
  const images_banner = [
    require("../../assets/1.png"),
    require("../../assets/1.png"),
    require("../../assets/1.png"),
    require("../../assets/1.png"),
    require("../../assets/1.png"),
  ];

  const navigation = useNavigation();

  const DATA = [
    {
      id: 1,
      title: "First Item",
    },
    {
      id: 2,
      title: "Second Item",
    },
    {
      id: 3,
      title: "Third Item",
    },
  ];
  const Item = ({ title }: any) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  function logout() {
    navigation.navigate("Login");
  }
  return (
    <ScrollView style={styles.container}>
      <View style={{ width: width }}>
        <SliderBox
          images={images_banner}
          ImageComponentStyle={{
            resizeMode: "cover",
          }}
        />
      </View>

      <View style={styles.container_perfect}>
        <View style={styles.container_text}>
          <Text style={styles.perfect_text}>Perfect for you</Text>

          <TouchableOpacity>
            <Text style={styles.see_more}>See more</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={DATA}
          renderItem={({ item }: any) => <Item title={item.title} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          keyExtractor={(item: any) => item.id}
        />
      </View>

      <View style={styles.container_summer}>
        <View style={styles.container_text}>
          <Text style={styles.perfect_text}>Perfect for you</Text>

          <TouchableOpacity>
            <Text style={styles.see_more}>See more</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={DATA}
          renderItem={({ item }: any) => <Item title={item.title} />}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          keyExtractor={(item: any) => item.id}
        />
      </View>

      <View style={styles.container_event}>
        <View style={styles.container_text}>
          <Text style={styles.perfect_text}>Your events</Text>

          {/* <TouchableOpacity>
            <Text style={styles.see_more}>See more</Text>
          </TouchableOpacity> */}
        </View>

        <View style={styles.list_events}>
          <View style={styles.item_event}>
            <Image
              source={require("../../assets/event.png")}
              style={styles.item_images_event}
            />
            <View style={styles.item_event_text}>
              <Text style={{ fontSize: 14, fontWeight: 700 }}>
                Michael Jackson
              </Text>
              <Text style={{ fontSize: 12, fontWeight: 400 }}>
                Recife, Brazil
              </Text>
            </View>
            <View style={{ justifyContent: "center", paddingRight: 16 }}>
              <Image
                source={require("../../assets/ArrowRight.png")}
                resizeMode="cover"
                style={{ width: 12, height: 12 }}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
  },
  container_perfect: {
    paddingTop: 24,
  },
  container_summer: {
    paddingTop: 40,
  },
  container_text: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 24,
  },
  perfect_text: {
    fontSize: 14,
    fontWeight: 700,
    color: "#000000",
  },
  see_more: {
    fontSize: 12,
    fontWeight: 600,
    color: "#006FFD",
  },
  item: {
    width: 200,
    backgroundColor: "#F8F9FE",
    marginRight: 12,
    height: 189,
    borderRadius: 16,
  },
  title: {
    fontSize: 32,
  },
  container_event: { paddingTop: 40 },
  list_events: {
    paddingHorizontal: 16,
  },
  item_event: {
    flexDirection: "row",
    height: 69,
    borderRadius: 16,
    backgroundColor: "#F8F9FE",
    justifyContent: "space-between",
  },
  item_event_text: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "flex-start",
    paddingLeft: 16,
    flex: 1,
  },
  item_images_event: {
    width: 80,
    height: 69,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
});
