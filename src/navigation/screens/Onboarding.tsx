
import React, { useRef, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  useWindowDimensions,
  Image,
  TouchableOpacity,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
const slides = [
  {
    id: "1",
    image: require("../../assets/1.png"),
    title: "Create a prototype in just a few minutes 1",
    description:
      "Enjoy these pre-made components and worry only about creating the best product ever.",
  },
  {
    id: "2",
    image:  require("../../assets/1.png"),
    title: "Create a prototype in just a few minutes 2",
    description:
      "Enjoy these pre-made components and worry only about creating the best product ever.",
  },
  {
    id: "3",
    image:  require("../../assets/1.png"),
    title: "Create a prototype in just a few minutes 3",
    description:
      "Enjoy these pre-made components and worry only about creating the best product ever.",
  },
];
const count = slides.length;
export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList>(null);
  const [textButton, setTextButton] = useState("Next");
  const navigation = useNavigation();
  const { width } = useWindowDimensions();

  const handleScrollNext = () => {
    if (textButton == "Login") {
        navigation.navigate('Login')
    }
    if (currentIndex < count - 1) {
      const nextIndex = currentIndex + 1;
      flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      //flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
      if (nextIndex == count - 1) {
        setTextButton("Login");
      } else {
        setTextButton("Next");
      }
    }
  };
  
  const handleScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    const index = Math.round(offsetX / width);
    setCurrentIndex(index);
    if (index == count - 1) {
      setTextButton("Login");
    } else {
      setTextButton("Next");
    }
  };

  return (
    <View style={styles.onboarding}>
      <FlatList
        ref={flatListRef}
        data={slides}
        renderItem={({ item }) => <OnboardingItem item={item} count={count} />}
        keyExtractor={(item) => item.id}
        pagingEnabled
        horizontal
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={handleScrollEnd}
        //Web
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />
      <View style={styles.submit}>
        <TouchableOpacity style={styles.button} onPress={handleScrollNext}>
          <Text style={styles.text_button}>{textButton}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export function OnboardingItem({ item, count }: { item: any; count: any }) {
  const { width, height } = useWindowDimensions();
  return (
    <View style={[styles.item, { width: width }]}>
      <Image
        source={item.image}
        style={[styles.image, { width: width, height: height * 0.6 }]}
        resizeMode="cover"
      />
      <View style={[styles.text_banner, { width: width }]}>
        <Paginator data={item} count={count} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );
}

export function Paginator({ data, count }: { data: any; count: any }) {
  return (
    <View style={styles.paginator}>
      {Array.from({ length: count }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.dot,
            index === data.id - 1 && styles.activeDot, // Kiểm tra và áp dụng style active
          ]}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  onboarding: {
    flex: 1,
    flexDirection: "column",
  },
  item: {
    flexDirection: "column",
    flex: 1,
  },
  image: {},
  text_banner: {
    flex: 1,
    flexDirection: "column",
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  paginator: {
    paddingTop: 16,
    flexDirection: "row",
    flex: 1,
    height: 24,
    paddingBottom: 24,
  },
  dot: {
    height: 8,
    width: 8,
    borderRadius: 24,
    backgroundColor: "#8F9098",
    marginRight: 8,
  },
  activeDot: {
    backgroundColor: "#006FFD",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000",
  },
  description: {
    paddingTop: 24,
    color: "#71727A",
    fontSize: 12,
    width: 290,
  },
  submit: {
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 12,
    height: 48,
    backgroundColor: "#006FFD",
  },
  text_button: {
    color: "#FFFFFF",
    fontWeight: "bold",
    fontSize: 12,
  },
});