import { StatusBar } from "expo-status-bar";
import { useContext, useEffect, useRef, useState } from "react";
import {
  Animated,
  SafeAreaView,
  StyleSheet,
  Switch,
  Text,
  View,
  Image,
  PanResponder,
  ScrollView,
  Dimensions,
  PixelRatio,
  Easing,
} from "react-native";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { TouchableOpacity } from "react-native";
import * as Font from "expo-font";
import { Home } from "./comp/Home";

import { Weekweatherpage } from "./comp/Weekweatherpage";
import PagerView from "react-native-pager-view";
import { Themecontext, Themep } from "./comp/Themecontext";
import { First } from "./comp/First";
import { Comment } from "./comp/Comment";
import { Loading } from "./comp/Loading";

const { width, height } = Dimensions.get("window");
console.log(width);

export default function App() {
  const [scrollEnable, setscrollEnable] = useState(false);
  const [sayac, setsayac] = useState(0);

  useEffect(() => {
    if (sayac == 0) {
      console.log("calisti");
      setscrollEnable(false);
      setTimeout(() => {
        setscrollEnable(true);
      }, 10000);
      setsayac(1);
    }
  });

  return (
    //scrollEnabled={false}
    <SafeAreaView style={{flex:1}}>
      <Themecontext>
        <MainPage />
      </Themecontext>
    </SafeAreaView>
  );
}
const MainPage = () => {
  const { scrollable, setscrollable } = useContext(Themep);
  return (
    <PagerView style={{ flex: 1 }} scrollEnabled={scrollable}>
      <View style={styles.page}>
        <Home />
      </View>
      <View style={styles.page}>
        <Weekweatherpage />
      </View>
      <View style={styles.page}>
        <Comment />
      </View>
    </PagerView>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
