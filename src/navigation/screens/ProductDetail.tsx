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

const color = [
  {
    id: 1,
    name: "#1E1E1E",
  },
  {
    id: 2,
    name: "#71727A",
  },
  {
    id: 3,
    name: "#C5C6CC",
  },
  {
    id: 4,
    name: "#E8E9F1",
  },
];

export function ProductDetail() {
  const [selectedId, setSelectedId] = useState(null);
  const [selectedColorId, setSelectedColorId] = useState(null);
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
          <Text
            style={{
              fontSize: 10,
              color: "#FFFFFF",
              fontFamily: "Inter_18pt-Bold",
            }}
          >
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
        <Text
          style={{
            fontSize: 10,
            fontWeight: 600,
            color: "#006FFD",
            fontFamily: "Inter_18pt-Bold",
          }}
        >
          {item.item.name}
        </Text>
      </TouchableOpacity>
    );
  }

  function ColorItem(item: any) {
    return (
      <TouchableOpacity
        style={{ flexDirection: "row", marginTop: 5 }}
        onPress={() => handleSelectedColor(item.item.id)}
      >
        <View
          style={[
            styles.style_color,
            {
              backgroundColor: item.item.name,
              marginRight: selectedColorId == item.item.id ? 0 : 12,
            },
          ]}
        ></View>
        <View
          style={[
            styles.style_color_active,
            { display: selectedColorId == item.item.id ? "flex" : "none" },
          ]}
        >
          <Image
            source={require("../../assets/check.png")}
            style={{ width: 8, height: 8 }}
          />
        </View>
      </TouchableOpacity>
    );
  }

  function handleSelected(id: any) {
    setSelectedId(id); // Lưu ID của item được chọn
  }

  function handleSelectedColor(id: any) {
    setSelectedColorId(id); // Lưu ID của item được chọn
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
          <Text style={{ fontSize: 18, fontFamily: "Inter_18pt-Bold" }}>
            Amazing T-Shirt
          </Text>
          <Image
            source={require("../../assets/Heart.png")}
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        </View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: 400,
            marginBottom: 24,
            fontFamily: "Inter",
            color:"#1E1E1E"
          }}
        >
          VNĐ 12.00
        </Text>
        <Text style={{ fontSize: 12, fontWeight: 400, fontFamily: "Inter",color:"#71727A" }}>
          The perfect T-shirt for when you want to feel comfortable but still
          stylish. Amazing for all ocasions. Made of 100% cotton fabric in four
          colours. Its modern style gives a lighter look to the outfit. Perfect
          for the warmest days.
        </Text>
      </View>

      <View style={styles.container_size}>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Inter_18pt-Bold",
            marginBottom: 8,
          }}
        >
          Size
        </Text>
        <FlatList
          //   ref={flatListRef}
          data={dataSize}
          renderItem={({ item }) => <SizeItem item={item} />}
          horizontal
        />
      </View>

      <View style={styles.container_color}>
        <Text
          style={{
            fontSize: 12,
            fontFamily: "Inter_18pt-Bold",
            // marginBottom: 8,
          }}
        >
          Color
        </Text>
        <View style={{ height: 40 }}>
          <FlatList
            data={color}
            renderItem={({ item }) => <ColorItem item={item} />}
            horizontal
          />
        </View>
      </View>

      <TouchableOpacity style={styles.button_add}>
        <Image source={require("../../assets/add.png")} style={{width:12, height:12}} />
        <Text style={{ fontSize: 14, fontFamily: "Inter_18pt-Bold", color:"#FFFFFF" }}>
          Add to bag
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    justifyContent: "center",
    backgroundColor:"#FFFFFF"
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
  style_color: {
    width: 32,
    height: 32,
    // backgroundColor: "#1E1E1E",
    borderRadius: 100,
  },
  style_color_active: {
    borderWidth: 2,
    borderColor: "#FFFFFF",
    width: 16,
    height: 16,
    backgroundColor: "#006FFD",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    top: -3,
    left: -12,
  },
  container_color: {
    paddingTop: 40,
    paddingHorizontal: 24,
    // height: 35
  },
  button_add: {
    flexDirection: "row",
    height: 48,
    backgroundColor: "#006FFD",
    borderRadius: 12,
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    gap:8,
    marginTop:40,
    marginHorizontal:24
  },
});
