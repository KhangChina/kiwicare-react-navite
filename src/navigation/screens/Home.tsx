import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
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

  const data_fake = [
    {
      id: 1,
      name: "Amazing T-shirt",
      price: "VND 12.00",
      image: require("../../assets/image_list.png"),
    },
    {
      id: 2,
      name: "Faboulous Pants",
      price: "VND 15.00",
      image: require("../../assets/image_list.png"),
    },
    {
      id: 3,
      name: "Spectacular Dress",
      price: "VND 20.00",
      image: require("../../assets/image_list.png"),
    },
  ];
  // const Item = () => console.log(name);

  function nav_product_detail(item: any)
  {
    navigation.navigate("ProductDetail")
    //console.log("nav")
  }

  function Item({ name, price, image }: any) {
    return (
      <TouchableOpacity style={styles.item} 
      onPress={() => nav_product_detail({ name, price, image }) } >
        <Image
          source={image}
          style={{
            height: 120,
            width: "100%",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
          }}
          resizeMode="cover"
        />
        <View style={{ flexDirection: "column", padding: 16 }}>
          <Text style={{ fontSize: 12, fontWeight: 400, fontFamily:'Inter' }}>{name}</Text>
          <Text style={{ fontSize: 14, fontFamily:'Inter_18pt-Bold', }}>{price}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  function ItemEvent( item : any) {
    return (
      <View style={styles.item_event}>
        <Image
          source={require("../../assets/event.png")}
          style={styles.item_images_event}
        />
        <View style={styles.item_event_text}>
          <Text style={{ fontSize: 14, fontFamily:'Inter_18pt-Bold' }}>Michael Jackson</Text>
          <Text style={{ fontSize: 12, fontWeight: 400, fontFamily:'Inter'}}>Recife, Brazil</Text>
        </View>
        <View style={{ justifyContent: "center", paddingRight: 16 }}>
          <Image
            source={require("../../assets/ArrowRight.png")}
            resizeMode="cover"
            style={{ width: 12, height: 12 }}
          />
        </View>
      </View>
    );
  }
  // function logout() {
  //   navigation.navigate("Login");
  // }
  return (
    <ScrollView style={styles.container}>
      <View style={{ width: width }}>
        <SliderBox
          images={images_banner}
          ImageComponentStyle={{
            resizeMode: "cover",
          }}
          autoplay={true}
          circleLoop= {true}
          autoplayInterval= {3000}
          dotColor={"#006FFD"}
          inactiveDotColor={"#8F9098"}
          paginationBoxVerticalPadding = {15}
          dotStyle= {{
            borderRadius: 24, 
            width: 8,
            height: 8,
            marginHorizontal: -8,
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
          data={data_fake}
          renderItem={({ item }: any) => (
            <Item name={item.name} price={item.price} image={item.image} />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          keyExtractor={(item: any) => item.id}
        />
      </View>

      <View style={styles.container_summer}>
        <View style={styles.container_text}>
          <Text style={styles.perfect_text}>For this summer</Text>

          <TouchableOpacity>
            <Text style={styles.see_more}>See more</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={data_fake}
          renderItem={({ item }: any) => (
            <Item name={item.name} price={item.price} image={item.image} />
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 16 }}
          keyExtractor={(item: any) => item.id}
        />
      </View>

      <View style={styles.container_event}>
        <View style={styles.container_text}>
          <Text style={styles.perfect_text}>Your events</Text>
        </View>

        <View style={styles.list_events}>
          {data_fake.map((item) => (
            <ItemEvent  key={item.id} item={item} />
          ))}
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
    color: "#000000",
    fontFamily:'Inter_18pt-Bold',
    marginBottom:16
  },
  see_more: {
    fontSize: 12,
    color: "#006FFD",
    fontFamily:'Inter_18pt-Bold',
  },
  item: {
    flexDirection: "column",
    width: 200,
    backgroundColor: "#F8F9FE",
    marginRight: 12,
    height: 189,
    borderRadius: 16,
  },
  name: {
    fontSize: 12,
    fontWeight: 400,
  },
  container_event: { paddingTop: 40 },
  list_events: {
    paddingHorizontal: 16,
    gap: 12,
    paddingBottom: 12,
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
