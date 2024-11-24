import {
  Image,
  PixelRatio,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useContext, useState, useEffect, useRef } from "react";
import { Themep } from "./Themecontext";
import * as Font from "expo-font";
import AntDesign from "@expo/vector-icons/AntDesign";
import axios from "axios";
export const Weekweatherpage = () => {
  const { text, setext, API, setAPI } = useContext(Themep);
  if (API != undefined) {
   
    const loadfont = async () => {
      await Font.loadAsync({
        Font: require("../assets/Fredoka-VariableFont_wdth,wght.ttf"),
      });
    };
    const [iconlist, seticonlist] = useState([]);
    const [statelist, setstatelist] = useState([]);
    const [asyncsayac, setasyncsayac] = useState(0);
    const [api, setapi] = useState(API);
    const [daylist, setdaylist] = useState([
      "Pazartesi",
      "Salı",
      "Çarşamba",
      "Perşembe",
      "Cuma",
      "Cumartesi",
      "Pazar",
    ]);
    const [url, seturl] = useState(
      "https://api.weatherapi.com/v1/forecast.json?key=" +
        api +
        "&q=" +
        text +
        "&days=7"
    );

    useEffect(() => {
      loadfont();
    }, []);
    useEffect(() => {
      setapi(API);
      console.log("Api geldi weather" + API);
      fetchData("Samsun");
    }, [API]);
    const [downlist0, setdownlist0] = useState([]);
    const [downlist1, setdownlist1] = useState([]);
    const [downlist2, setdownlist2] = useState([]);
    const [downlist3, setdownlist3] = useState([]);
    const [downlist4, setdownlist4] = useState([]);
    const [downlist5, setdownlist5] = useState([]);
    const [downlist6, setdownlist6] = useState([]);
    const [downlist0icon, setdownlist0icon] = useState([]);
    const [downlist1icon, setdownlist1icon] = useState([]);
    const [downlist2icon, setdownlist2icon] = useState([]);
    const [downlist3icon, setdownlist3icon] = useState([]);
    const [downlist4icon, setdownlist4icon] = useState([]);
    const [downlist5icon, setdownlist5icon] = useState([]);
    const [downlist6icon, setdownlist6icon] = useState([]);
    const rotateval0 = useRef(new Animated.Value(0)).current;
    const [rotate0, setrotate0] = useState(1);

    const rotateval1 = useRef(new Animated.Value(0)).current;
    const [rotate1, setrotate1] = useState(1);

    const rotateval2 = useRef(new Animated.Value(0)).current;
    const [rotate2, setrotate2] = useState(1);

    const rotateval3 = useRef(new Animated.Value(0)).current;
    const [rotate3, setrotate3] = useState(1);

    const rotateval4 = useRef(new Animated.Value(0)).current;
    const [rotate4, setrotate4] = useState(1);

    const rotateval5 = useRef(new Animated.Value(0)).current;
    const [rotate5, setrotate5] = useState(1);
    const [loading, setloading] = useState(true);
    const rotateval6 = useRef(new Animated.Value(0)).current;
    const [rotate6, setrotate6] = useState(1);
    const heightanm0 = useRef(new Animated.Value(0)).current;
    const heightanm1 = useRef(new Animated.Value(0)).current;
    const heightanm2 = useRef(new Animated.Value(0)).current;
    const heightanm3 = useRef(new Animated.Value(0)).current;
    const heightanm4 = useRef(new Animated.Value(0)).current;
    const heightanm5 = useRef(new Animated.Value(0)).current;
    const heightanm6 = useRef(new Animated.Value(0)).current;
    const heightan0 = () => {
      Animated.timing(heightanm0, {
        toValue: rotate0 == 1 ? 120 : 0,
        duration: 400,
        useNativeDriver: false,
      }).start();
    };
    const heightan1 = () => {
      Animated.timing(heightanm1, {
        toValue: rotate1 == 1 ? 120 : 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    };
    const heightan2 = () => {
      Animated.timing(heightanm2, {
        toValue: rotate2 == 1 ? 120 : 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    };
    const heightan3 = () => {
      Animated.timing(heightanm3, {
        toValue: rotate3 == 1 ? 120 : 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    };
    const heightan4 = () => {
      Animated.timing(heightanm4, {
        toValue: rotate4 == 1 ? 120 : 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    };
    const heightan5 = () => {
      Animated.timing(heightanm5, {
        toValue: rotate5 == 1 ? 120 : 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    };
    const heightan6 = () => {
      Animated.timing(heightanm6, {
        toValue: rotate6 == 1 ? 120 : 0,
        duration: 500,
        useNativeDriver: false,
      }).start();
    };
    const rotateAn0 = () => {
      heightan0();
      Animated.timing(rotateval0, {
        toValue: rotate0,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setrotate0(rotate0 == 1 ? 0 : 1);
    };
    const rotatevalinterpolate0 = rotateval0.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "90deg"],
    });
    //1
    const rotateAn1 = () => {
      heightan1();
      Animated.timing(rotateval1, {
        toValue: rotate1,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setrotate1(rotate1 == 1 ? 0 : 1);
    };
    const rotatevalinterpolate1 = rotateval1.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "90deg"],
    });
    //2
    const rotateAn2 = () => {
      heightan2();
      Animated.timing(rotateval2, {
        toValue: rotate2,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setrotate2(rotate2 == 1 ? 0 : 1);
    };
    const rotatevalinterpolate2 = rotateval2.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "90deg"],
    });
    //3
    const rotateAn3 = () => {
      heightan3();
      Animated.timing(rotateval3, {
        toValue: rotate3,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setrotate3(rotate3 == 1 ? 0 : 1);
    };
    const rotatevalinterpolate3 = rotateval3.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "90deg"],
    });
    //4
    const rotateAn4 = () => {
      heightan4();
      Animated.timing(rotateval4, {
        toValue: rotate4,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setrotate4(rotate4 == 1 ? 0 : 1);
    };
    const rotatevalinterpolate4 = rotateval4.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "90deg"],
    });
    //5
    const rotateAn5 = () => {
      heightan5();
      Animated.timing(rotateval5, {
        toValue: rotate5,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setrotate5(rotate5 == 1 ? 0 : 1);
    };
    const rotatevalinterpolate5 = rotateval5.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "90deg"],
    });
    //6
    const rotateAn6 = () => {
      heightan6();
      Animated.timing(rotateval6, {
        toValue: rotate6,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setrotate6(rotate6 == 1 ? 0 : 1);
    };
    const rotatevalinterpolate6 = rotateval6.interpolate({
      inputRange: [0, 1],
      outputRange: ["0deg", "90deg"],
    });

    useEffect(() => {
      setasyncsayac(0);
      fetchData(text);
      loadfont();
    }, [text]);
    useEffect(() => {
      console.log("load da çalıştı");
      fetchData("Samsun");
    }, []);

    const fetchData = async (contextCityData) => {
      if (API != undefined) {
        const ilist = [];
        const slist = [];
        const downData0 = [];
        const downData1 = [];
        const downData2 = [];
        const downData3 = [];
        const downData4 = [];
        const downData5 = [];
        const downData6 = [];
        const downData0icon = [];
        const downData1icon = [];
        const downData2icon = [];
        const downData3icon = [];
        const downData4icon = [];
        const downData5icon = [];
        const downData6icon = [];

        try {
          console.log("Yükleniyor...");
          setloading(true);
          const response = await axios.get(
            "https://api.weatherapi.com/v1/forecast.json?key=" +
              api +
              "&q=" +
              contextCityData +
              "&days=7"
          );

          for (let i = 0; i < 7; i++) {
            ilist.push(
              response.data.forecast.forecastday[i].day.condition.icon
            );
            slist.push(
              parseInt(response.data.forecast.forecastday[i].day.avgtemp_c)
            );
          }
          for (let j = 0; j < 24; j++) {
            downData0.push(
              response.data.forecast.forecastday[0].hour[j].temp_c
            );
            downData1.push(
              response.data.forecast.forecastday[1].hour[j].temp_c
            );
            downData2.push(
              response.data.forecast.forecastday[2].hour[j].temp_c
            );
            downData3.push(
              response.data.forecast.forecastday[3].hour[j].temp_c
            );
            downData4.push(
              response.data.forecast.forecastday[4].hour[j].temp_c
            );
            downData5.push(
              response.data.forecast.forecastday[5].hour[j].temp_c
            );
            downData6.push(
              response.data.forecast.forecastday[6].hour[j].temp_c
            );
            downData0icon.push(
              response.data.forecast.forecastday[0].hour[j].condition.icon
            );
            downData1icon.push(
              response.data.forecast.forecastday[1].hour[j].condition.icon
            );
            downData2icon.push(
              response.data.forecast.forecastday[2].hour[j].condition.icon
            );
            downData3icon.push(
              response.data.forecast.forecastday[3].hour[j].condition.icon
            );
            downData4icon.push(
              response.data.forecast.forecastday[4].hour[j].condition.icon
            );
            downData5icon.push(
              response.data.forecast.forecastday[5].hour[j].condition.icon
            );
            downData6icon.push(
              response.data.forecast.forecastday[6].hour[j].condition.icon
            );
          }
          setdownlist0(downData0);
          setdownlist1(downData1);
          setdownlist2(downData2);
          setdownlist3(downData3);
          setdownlist4(downData4);
          setdownlist5(downData5);
          setdownlist6(downData6);
          setdownlist0icon(downData0icon);
          setdownlist1icon(downData1icon);
          setdownlist2icon(downData2icon);
          setdownlist3icon(downData3icon);
          setdownlist4icon(downData4icon);
          setdownlist5icon(downData5icon);
          setdownlist6icon(downData6icon);
          seticonlist(ilist);
          setstatelist(slist);
        } catch (e) {
          
        } finally {
          console.log("Yüklendi...data" + statelist[0]);
          setloading(false);
        }
      }
    };
    useEffect(() => {
      if (!loading) {
        console.log("listye elemanlar atadındı" + statelist);
      }
    }, [statelist]);
    const renderBox0 = () => {
      const list0 = [];
      for (let i = 0; i < 24; i++) {
        list0.push(
          <View
            key={i}
            style={{
              width: 100,
              height: 100,
              backgroundColor: theme ? "black" : "white",
              borderWidth: 1,
              borderColor: "white",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Font",
              margin: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={{ uri: "https:" + downlist0icon[i] }}
              style={{ width: 55, height: 55 }}
            />
            <Text
              style={{
                color: theme ? "white" : "black",
                fontSize: 19 / PixelRatio.getFontScale(),
                fontFamily: "Font",
              }}
            >
              {downlist0[i]}°
            </Text>
            <Text
              style={{
                color: theme ? "white" : "black",
                fontSize: 19 / PixelRatio.getFontScale(),
                fontFamily: "Font",
              }}
            >
              {i < 10 ? "0" + i + ":00" : i + ":00"}
            </Text>
          </View>
        );
      }
      return list0;
    };

    const renderBox1 = () => {
      const list0 = [];
      for (let i = 0; i < 24; i++) {
        list0.push(
          <View
            key={i}
            style={{
              width: 100,
              height: 100,
              backgroundColor: theme ? "black" : "white",
              borderWidth: 1,
              borderColor: "white",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Font",
              margin: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={{ uri: "https:" + downlist1icon[i] }}
              style={{ width: 55, height: 55 }}
            />
            <Text
              style={{
                color: theme ? "white" : "black",
                fontSize: 19 / PixelRatio.getFontScale(),
                fontFamily: "Font",
              }}
            >
              {downlist1[i]}°
            </Text>
            <Text
              style={{
                color: theme ? "white" : "black",
                fontSize: 19 / PixelRatio.getFontScale(),
                fontFamily: "Font",
              }}
            >
              {i < 10 ? "0" + i + ":00" : i + ":00"}
            </Text>
          </View>
        );
      }
      return list0;
    };
    const renderBox2 = () => {
      const list0 = [];
      for (let i = 0; i < 24; i++) {
        list0.push(
          <View
            key={i}
            style={{
              width: 100,
              height: 100,
              backgroundColor: theme ? "black" : "white",
              borderWidth: 1,
              borderColor: "white",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Font",
              margin: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={{ uri: "https:" + downlist2icon[i] }}
              style={{ width: 55, height: 55 }}
            />
            <Text
              style={{
                color: theme ? "white" : "black",
                fontSize: 19 / PixelRatio.getFontScale(),
                fontFamily: "Font",
              }}
            >
              {downlist2[i]}°
            </Text>
            <Text
              style={{
                color: theme ? "white" : "black",
                fontSize: 19 / PixelRatio.getFontScale(),
                fontFamily: "Font",
              }}
            >
              {i < 10 ? "0" + i + ":00" : i + ":00"}
            </Text>
          </View>
        );
      }
      return list0;
    };
    const renderBox3 = () => {
      const list0 = [];
      for (let i = 0; i < 24; i++) {
        list0.push(
          <View
            key={i}
            style={{
              width: 100,
              height: 100,
              backgroundColor: theme ? "black" : "white",
              borderWidth: 1,
              borderColor: "white",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Font",
              margin: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={{ uri: "https:" + downlist3icon[i] }}
              style={{ width: 55, height: 55 }}
            />
            <Text
              style={{
                color: theme ? "white" : "black",
                fontSize: 19 / PixelRatio.getFontScale(),
                fontFamily: "Font",
              }}
            >
              {downlist3[i]}°
            </Text>
            <Text
              style={{
                color: theme ? "white" : "black",
                fontSize: 19 / PixelRatio.getFontScale(),
                fontFamily: "Font",
              }}
            >
              {i < 10 ? "0" + i + ":00" : i + ":00"}
            </Text>
          </View>
        );
      }
      return list0;
    };
    const renderBox4 = () => {
      const list0 = [];
      for (let i = 0; i < 24; i++) {
        list0.push(
          <View
            key={i}
            style={{
              width: 100,
              height: 100,
              backgroundColor: theme ? "black" : "white",
              borderWidth: 1,
              borderColor: "white",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Font",
              margin: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={{ uri: "https:" + downlist4icon[i] }}
              style={{ width: 55, height: 55 }}
            />
            <Text
              style={{
                color: theme ? "white" : "black",
                fontSize: 19 / PixelRatio.getFontScale(),
                fontFamily: "Font",
              }}
            >
              {downlist4[i]}°
            </Text>
            <Text
              style={{
                color: theme ? "white" : "black",
                fontSize: 19 / PixelRatio.getFontScale(),
                fontFamily: "Font",
              }}
            >
              {i < 10 ? "0" + i + ":00" : i + ":00"}
            </Text>
          </View>
        );
      }
      return list0;
    };
    const renderBox5 = () => {
      const list0 = [];
      for (let i = 0; i < 24; i++) {
        list0.push(
          <View
            key={i}
            style={{
              width: 100,
              height: 100,
              backgroundColor: theme ? "black" : "white",
              borderWidth: 1,
              borderColor: "white",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Font",
              margin: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={{ uri: "https:" + downlist5icon[i] }}
              style={{ width: 55, height: 55 }}
            />
            <Text
              style={{
                color: theme ? "white" : "black",
                fontSize: 19 / PixelRatio.getFontScale(),
                fontFamily: "Font",
              }}
            >
              {downlist5[i]}°
            </Text>
            <Text
              style={{
                color: theme ? "white" : "black",
                fontSize: 19 / PixelRatio.getFontScale(),
                fontFamily: "Font",
              }}
            >
              {i < 10 ? "0" + i + ":00" : i + ":00"}
            </Text>
          </View>
        );
      }
      return list0;
    };
    const renderBox6 = () => {
      const list0 = [];
      for (let i = 0; i < 24; i++) {
        list0.push(
          <View
            key={i}
            style={{
              width: 100,
              height: 100,
              backgroundColor: theme ? "black" : "white",
              borderWidth: 1,
              borderColor: "white",
              justifyContent: "center",
              alignItems: "center",
              fontFamily: "Font",
              margin: 10,
              borderRadius: 10,
            }}
          >
            <Image
              source={{ uri: "https:" + downlist6icon[i] }}
              style={{ width: 55, height: 55 }}
            />
            <Text
              style={{
                color: theme ? "white" : "black",
                fontSize: 19 / PixelRatio.getFontScale(),
                fontFamily: "Font",
              }}
            >
              {downlist6[i]}°
            </Text>
            <Text
              style={{
                color: theme ? "white" : "black",
                fontSize: 19 / PixelRatio.getFontScale(),
                fontFamily: "Font",
              }}
            >
              {i < 10 ? "0" + i + ":00" : i + ":00"}
            </Text>
          </View>
        );
      }
      return list0;
    };
    const reRender = () => {
      return (
        <ScrollView>
          <View
            style={{
              width: "100%",
              height: 100,
              borderBottomColor: theme ? "lightgray" : "black",
              borderBottomWidth: 1,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 0.8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: "https://" + iconlist[0] }}
                style={{ width: 60, height: 60 }}
              />
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: theme ? "white" : "black",
                    fontSize: 22 / PixelRatio.getFontScale(),
                    fontFamily: "Font",
                  }}
                >
                  {daylist[0]}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: theme ? "white" : "black",
                    fontSize: 23 / PixelRatio.getFontScale(),
                    fontFamily: "Font",
                  }}
                >
                  Ortalama Sıcaklık: <Text>{statelist[0]}°</Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={rotateAn0}>
                <Animated.View
                  style={{ transform: [{ rotate: rotatevalinterpolate0 }] }}
                >
                  <AntDesign
                    name="right"
                    size={20}
                    color={theme ? "white" : "black"}
                  />
                </Animated.View>
              </TouchableOpacity>
            </View>
          </View>
          <Animated.View
            style={[
              {
                width: "100%",
                backgroundColor: theme ? "black" : "white",
                justifyContent: "center",
                alignItems: "center",
              },
              { height: heightanm0 },
            ]}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {renderBox0()}
            </ScrollView>
          </Animated.View>
          <View
            style={{
              width: "100%",
              height: 100,
              borderBottomColor: theme ? "lightgray" : "black",
              borderBottomWidth: 1,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 0.8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: "https://" + iconlist[1] }}
                style={{ width: 60, height: 60 }}
              />
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: theme ? "white" : "black",
                    fontSize: 22 / PixelRatio.getFontScale(),
                    fontFamily: "Font",
                  }}
                >
                  {daylist[1]}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: theme ? "white" : "black",
                    fontSize: 23 / PixelRatio.getFontScale(),
                    fontFamily: "Font",
                  }}
                >
                  Ortalama Sıcaklık: <Text>{statelist[1]}°</Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={rotateAn1}>
                <Animated.View
                  style={{ transform: [{ rotate: rotatevalinterpolate1 }] }}
                >
                  <AntDesign
                    name="right"
                    size={20}
                    color={theme ? "white" : "black"}
                  />
                </Animated.View>
              </TouchableOpacity>
            </View>
          </View>
          <Animated.View
            style={[
              {
                width: "100%",
                backgroundColor: theme ? "black" : "white",
                justifyContent: "center",
                alignItems: "center",
              },
              { height: heightanm1 },
            ]}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {renderBox1()}
            </ScrollView>
          </Animated.View>
          <View
            style={{
              width: "100%",
              height: 100,
              borderBottomColor: theme ? "lightgray" : "black",
              borderBottomWidth: 1,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 0.8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: "https://" + iconlist[2] }}
                style={{ width: 60, height: 60 }}
              />
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: theme ? "white" : "black",
                    fontSize: 22 / PixelRatio.getFontScale(),
                    fontFamily: "Font",
                  }}
                >
                  {daylist[2]}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: theme ? "white" : "black",
                    fontSize: 23 / PixelRatio.getFontScale(),
                    fontFamily: "Font",
                  }}
                >
                  Ortalama Sıcaklık: <Text>{statelist[2]}°</Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={rotateAn2}>
                <Animated.View
                  style={{ transform: [{ rotate: rotatevalinterpolate2 }] }}
                >
                  <AntDesign
                    name="right"
                    size={20}
                    color={theme ? "white" : "black"}
                  />
                </Animated.View>
              </TouchableOpacity>
            </View>
          </View>
          <Animated.View
            style={[
              {
                width: "100%",
                backgroundColor: theme ? "black" : "white",
                justifyContent: "center",
                alignItems: "center",
              },
              { height: heightanm2 },
            ]}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {renderBox2()}
            </ScrollView>
          </Animated.View>
          <View
            style={{
              width: "100%",
              height: 100,
              borderBottomColor: theme ? "lightgray" : "black",
              borderBottomWidth: 1,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 0.8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: "https://" + iconlist[3] }}
                style={{ width: 60, height: 60 }}
              />
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: theme ? "white" : "black",
                    fontSize: 22 / PixelRatio.getFontScale(),
                    fontFamily: "Font",
                  }}
                >
                  {daylist[3]}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: theme ? "white" : "black",
                    fontSize: 23 / PixelRatio.getFontScale(),
                    fontFamily: "Font",
                  }}
                >
                  Ortalama Sıcaklık: <Text>{statelist[3]}°</Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={rotateAn3}>
                <Animated.View
                  style={{ transform: [{ rotate: rotatevalinterpolate3 }] }}
                >
                  <AntDesign
                    name="right"
                    size={20}
                    color={theme ? "white" : "black"}
                  />
                </Animated.View>
              </TouchableOpacity>
            </View>
          </View>
          <Animated.View
            style={[
              {
                width: "100%",
                backgroundColor: theme ? "black" : "white",
                justifyContent: "center",
                alignItems: "center",
              },
              { height: heightanm3 },
            ]}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {renderBox3()}
            </ScrollView>
          </Animated.View>
          <View
            style={{
              width: "100%",
              height: 100,
              borderBottomColor: theme ? "lightgray" : "black",
              borderBottomWidth: 1,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 0.8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: "https://" + iconlist[4] }}
                style={{ width: 60, height: 60 }}
              />
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: theme ? "white" : "black",
                    fontSize: 22 / PixelRatio.getFontScale(),
                    fontFamily: "Font",
                  }}
                >
                  {daylist[4]}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: theme ? "white" : "black",
                    fontSize: 23 / PixelRatio.getFontScale(),
                    fontFamily: "Font",
                  }}
                >
                  Ortalama Sıcaklık: <Text>{statelist[4]}°</Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={rotateAn4}>
                <Animated.View
                  style={{ transform: [{ rotate: rotatevalinterpolate4 }] }}
                >
                  <AntDesign
                    name="right"
                    size={20}
                    color={theme ? "white" : "black"}
                  />
                </Animated.View>
              </TouchableOpacity>
            </View>
          </View>
          <Animated.View
            style={[
              {
                width: "100%",
                backgroundColor: theme ? "black" : "white",
                justifyContent: "center",
                alignItems: "center",
              },
              { height: heightanm4 },
            ]}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {renderBox4()}
            </ScrollView>
          </Animated.View>
          <View
            style={{
              width: "100%",
              height: 100,
              borderBottomColor: theme ? "lightgray" : "black",
              borderBottomWidth: 1,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 0.8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: "https://" + iconlist[5] }}
                style={{ width: 60, height: 60 }}
              />
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: theme ? "white" : "black",
                    fontSize: 22 / PixelRatio.getFontScale(),
                    fontFamily: "Font",
                  }}
                >
                  {daylist[5]}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: theme ? "white" : "black",
                    fontSize: 23 / PixelRatio.getFontScale(),
                    fontFamily: "Font",
                  }}
                >
                  Ortalama Sıcaklık: <Text>{statelist[5]}°</Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={rotateAn5}>
                <Animated.View
                  style={{ transform: [{ rotate: rotatevalinterpolate5 }] }}
                >
                  <AntDesign
                    name="right"
                    size={20}
                    color={theme ? "white" : "black"}
                  />
                </Animated.View>
              </TouchableOpacity>
            </View>
          </View>
          <Animated.View
            style={[
              {
                width: "100%",
                backgroundColor: theme ? "black" : "white",
                justifyContent: "center",
                alignItems: "center",
              },
              { height: heightanm5 },
            ]}
          >
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            >
              {renderBox5()}
            </ScrollView>
          </Animated.View>
          <View
            style={{
              width: "100%",
              height: 100,
              borderBottomColor: theme ? "lightgray" : "black",
              borderBottomWidth: 1,
              flexDirection: "row",
            }}
          >
            <View
              style={{
                flex: 0.8,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={{ uri: "https://" + iconlist[6] }}
                style={{ width: 60, height: 60 }}
              />
            </View>
            <View
              style={{
                flex: 2,
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "flex-start",
                }}
              >
                <Text
                  style={{
                    color: theme ? "white" : "black",
                    fontSize: 22 / PixelRatio.getFontScale(),
                    fontFamily: "Font",
                  }}
                >
                  {daylist[6]}
                </Text>
              </View>
              <View style={{ flex: 1 }}>
                <Text
                  style={{
                    color: theme ? "white" : "black",
                    fontSize: 23 / PixelRatio.getFontScale(),
                    fontFamily: "Font",
                  }}
                >
                  Ortalama Sıcaklık: <Text>{statelist[6]}°</Text>
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 0.5,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={rotateAn6}>
                <Animated.View
                  style={{ transform: [{ rotate: rotatevalinterpolate6 }] }}
                >
                  <AntDesign
                    name="right"
                    size={20}
                    color={theme ? "white" : "black"}
                  />
                </Animated.View>
              </TouchableOpacity>
            </View>
          </View>
          <Animated.View
            style={[
              {
                width: "100%",
                backgroundColor: theme ? "black" : "white",
                justifyContent: "center",
                alignItems: "center",
              },
              { height: heightanm6 },
            ]}
          >
            <ScrollView
              horizontal={true}
              h
              showsHorizontalScrollIndicator={false}
            >
              {renderBox6()}
            </ScrollView>
          </Animated.View>
        </ScrollView>
      );
    };
    const { theme, settheme } = useContext(Themep);
    //BURASİ RENDER KISMI ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: theme ? "black" : "white",
        }}
      >
        {!loading != undefined ? reRender() : null}
      </View>
    );
  }
};
const styles = StyleSheet.create({});
