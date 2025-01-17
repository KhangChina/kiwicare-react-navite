import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
const images_banner = [
  require("../../assets/1.png"),
  require("../../assets/1.png"),
  require("../../assets/1.png"),
  require("../../assets/1.png"),
  require("../../assets/1.png"),
];
const dataSize = [
  {
    id: 1,
    name: "XS",
  },
  {
    id: 2,
    name: "S",
  },
  {
    id: 3,
    name: "M",
  },
  {
    id: 4,
    name: "L",
  },
  {
    id: 5,
    name: "XL",
  },
];

export function ProductDetail() {
  const [selectedId, setSelectedId] = useState(null);
  function SizeItem(item: any) {
    if (selectedId == item.item.id) {
      return (
        <TouchableOpacity
          style={{
            width: 38,
            height: 24,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 12,
            backgroundColor: "#006FFD",
            marginRight: 8,
          }}
          onPress={() => handleSelected(item.item.id)}
        >
          <Text style={{ fontSize: 10, fontWeight: 600, color: "#FFFFFF" }}>
            {item.item.name}
          </Text>
        </TouchableOpacity>
      );
    }
    return (
      <TouchableOpacity
        style={{
          width: 38,
          height: 24,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 12,
          backgroundColor: "#EAF2FF",
          marginRight: 8,
        }}
        onPress={() => handleSelected(item.item.id)}
      >
        <Text style={{ fontSize: 10, fontWeight: 600, color: "#006FFD" }}>
          {item.item.name}
        </Text>
      </TouchableOpacity>
    );
  }

  function handleSelected(id: any) {
    setSelectedId(id); // Lưu ID của item được chọn
    console.log("Selected ID:", id); // Xử lý logic khác nếu cần
  }

  const { width } = useWindowDimensions();
  return (
    <View style={styles.container}>
      <View style={{ width: width }}>
        <SliderBox
          sliderBoxHeight={346}
          images={images_banner}
          ImageComponentStyle={{
            resizeMode: "cover",
          }}
          autoplay={true}
          circleLoop={true}
          autoplayInterval={3000}
          dotColor={"#006FFD"}
          inactiveDotColor={"#8F9098"}
          paginationBoxVerticalPadding={15}
          dotStyle={{
            borderRadius: 24,
            width: 8,
            height: 8,
            marginHorizontal: -8,
          }}
        />
      </View>

      <View style={styles.container_product}>
        <View style={styles.text_name_product}>
          <Text style={{ fontSize: 18, fontWeight: 800 }}>Amazing T-Shirt</Text>
          <Image
            source={require("../../assets/Heart.png")}
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        </View>
        <Text style={{ fontSize: 16, fontWeight: 400, marginBottom: 24 }}>
          VND 12.00
        </Text>
        <Text style={{ fontSize: 12, fontWeight: 400 }}>
          The perfect T-shirt for when you want to feel comfortable but still
          stylish. Amazing for all ocasions. Made of 100% cotton fabric in four
          colours. Its modern style gives a lighter look to the outfit. Perfect
          for the warmest days.
        </Text>
      </View>

      <View style={styles.container_size}>
        <Text style={{ fontSize: 12, fontWeight: 700 }}>Size</Text>
        <FlatList
          //   ref={flatListRef}
          data={dataSize}
          renderItem={({ item }) => <SizeItem item={item} />}
          horizontal
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
  },
  container_product: {
    paddingTop: 24,
    paddingHorizontal: 24,
  },
  text_name_product: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container_size: {
    paddingTop: 40,
    paddingHorizontal: 24,
  },
});
