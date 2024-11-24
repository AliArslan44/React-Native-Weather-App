import {
  PixelRatio,
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState, useRef, useContext } from "react";
import { useFonts } from "expo-font";
import { Themep } from "./Themecontext";

import axios from "axios";
import { getData, setData } from "./AsyncST";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const First = () => {
  const [display, setdisplay] = useState("block");
  const [sayac, setsayac] = useState(0);
  const [t, sett] = useState(0);
  const [stopTimer, setstopTimer] = useState(false);
  const textOp = useRef(new Animated.Value(0)).current;
  const contOp = useRef(new Animated.Value(1)).current;
  const { API, setAPI, APIcontroller, setAPIcontroller } = useContext(Themep);
const [click, setclick] = useState(false)
  const textOpacityAnimation = () => {
    Animated.timing(textOp, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,

    }).start();
  };
  const contOpacityAnimation = () => {
    Animated.timing(contOp, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: true,
    }).start();
  };

  useEffect(() => {
    if (t == 0) {
      textOpacityAnimation();
      sett(1);
    }

    let timer1 = setInterval(() => {
      setsayac((p) => p + 1);
      if (stopTimer) {
        clearInterval(timer1);
      }
    }, 1000);
  }, []);
  useEffect(() => {
    if (sayac >= 3) {
      contOpacityAnimation();
      setdisplay("none");
      setstopTimer(true);
    }
  }, [sayac]);

  const handleClick = () => {
    fetchControlData();
    setclick(true);
    if(click){
      setAPIcontroller(true);
    }
  
  };
  const getText = (text) => {
    setinput(text);
  };
  const screenSelector = () => {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          position: "absolute",
          zIndex: 99,

        }}
      >
        <Text
          style={{
            fontSize: 20,
            fontFamily: "Font",
            color: error ? "red" : "lightgreen",
          }}
        >
          Api key geçersiz Yeni Key girin
        </Text>
        <TextInput
          placeholder={"Key Girin"}
          placeholderTextColor={"lightgray"}
          style={{
            width: "80%",
            padding: 10,
            borderWidth: 1,
            borderColor: "lightgray",
            borderRadius: 20,
            fontSize: 17,
            fontFamily: "Font",
            marginTop: 20,
            color: "white",
          }}
          onChangeText={getText}
        />
        <TouchableOpacity onPress={handleClick}>
          <Text
            style={{
              color: "white",
              fontSize: 17,
              fontFamily: "Font",
              padding: 10,
              borderWidth: 1,
              borderColor: "lightgray",
              width: 150,
              textAlign: "center",
              borderRadius: 20,
              marginTop: 20,
            }}
          >
            Giriş
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <>
      <Animated.View
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          position: "absolute",
          zIndex: 100,
          justifyContent: "center",
          alignItems: "center",
          opacity: contOp,
          display: display,
        }}
      >
        <Animated.Text
          style={{
            fontFamily: "Font",
            color: "white",
            fontSize: 20 / PixelRatio.getFontScale(),
            opacity: textOp,
            textAlign: "center",
            display: display,
          }}
        >
          Bu uygulama Fazlı Uludoğan Tarafından geliştirilmiştir.
        </Animated.Text>
        <Animated.View
          style={{
            width: 150,
            position: "absolute",
            flexDirection: "row",
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "Font",
              fontSize: 15 / PixelRatio.getFontScale(),
            }}
          >
            Veri Sunucusu
          </Text>
          <Image
            source={require("../assets/weatherapi_logo.webp")}
            style={{ marginLeft: 10 }}
          />
          <Text
            style={{
              color: "white",
              fontFamily: "Font",
              fontSize: 15 / PixelRatio.getFontScale(),
              marginLeft: 10,
            }}
          >
            Tarafından Sağlanmaktadır.
          </Text>
        </Animated.View>
      </Animated.View>
      {}
    </>
  );
};

const styles = StyleSheet.create({});
