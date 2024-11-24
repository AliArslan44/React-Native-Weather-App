import { StatusBar } from "expo-status-bar";
import { useEffect, useRef, useState, useContext } from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  Animated,
  StyleSheet,
  Text,
  View,
  Image,
  PanResponder,
  ScrollView,
  Dimensions,
  PixelRatio,
  TextInput,
} from "react-native";
import { BlurView } from "expo-blur";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import Ionicons from "@expo/vector-icons/Ionicons";
import Fontisto from "@expo/vector-icons/Fontisto";
import { TouchableOpacity } from "react-native";
import * as Font from "expo-font";
import axios from "axios";
import { Themep, useTheme } from "./Themecontext";
import { First } from "./First";
import { Loading } from "./Loading";

const { width, height } = Dimensions.get("window");

export const Home = () => {
  const { text, setext, API, setAPI, APIcontroller, setAPIcontroller,scrollable,setscrollable } =
    useContext(Themep);
  const [weatherIcon, setweatherIcon] = useState();
  const [tempature, settempature] = useState(0);
  const [city, setcity] = useState();
  const [region, setregion] = useState();
  const [weather, setweather] = useState();
  const [sunrise, setsunrise] = useState();
  const [sunset, setsunset] = useState();
  const [windspeed, setwindspeed] = useState();
  const [winddirection, setwinddirection] = useState();
  const [humidity, sethumidity] = useState();
  const [country, setcountry] = useState();
  const [cityname, setcityname] = useState(text);
  const [switc, toggleswitch] = useState(theme);
  const [uv, setuv] = useState(0);
  const [uvcol, setuvcol] = useState("");
  const [uvlevel, setuvlevel] = useState("");
  const [uvmessage, setuvmes] = useState("");
  const [iserror, setiserror] = useState(false);
  const col = useRef(new Animated.Value(0)).current;
  const translateX = useRef(new Animated.Value(0)).current;
  const contbarY = useRef(new Animated.Value(height / 2)).current;
  const Searchbar = useRef(new Animated.Value(-149)).current;
  const [isScrooled, setisScrooled] = useState(false);
  const translateY = useRef(new Animated.Value(-150)).current;
  const [sayac, setsayac] = useState(0);
  const [sayacforfetch, setsayacforfetch] = useState(1);
  const [hourtime, sethourtime] = useState([]);
  const [iconweather, seticonweather] = useState([]);
  const [cityNotFound, setcityNotFound] = useState(false);
  const [api, setapi] = useState(API);
  const { theme, settheme } = useContext(Themep);
const [loading, setloading] = useState(true);

  const loadfont = async () => {
    await Font.loadAsync({
      Font: require("../assets/Fredoka-VariableFont_wdth,wght.ttf"),
    });
  };

  const getTextSearch = (text) => {
    setcityname(text);
  };
  useEffect(() => {
   
    if(API != undefined){
      fetch(text);
      tabboxrender(text);
      console.log("Api geldi" + API);
    setapi(API);
    }
    
  }, [API]);

  const handleClickSearch = () => {
    if(API != undefined){
    fetch(cityname);
    tabboxrender(cityname);
    setsayacforfetch(1);
    setcityNotFound(false);
    if (!cityNotFound) {
      setext(cityname);
    }
  }
  };

  const formatTime = (timelapse) => {
    const date = new Date(timelapse + "UTC");
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };
  const fetchHour = async (cityn) => {
    if (API != undefined) {
      try {
        if (sayacforfetch == 1) {
          const liste = [];
          const iconliste = [];
          const resp = await axios.get(
            "https://api.weatherapi.com/v1/forecast.json?key=" +
              api +
              "&q=" +
              cityname +
              "&days=7"
          );
          for (let i = 0; i < 24; i++) {
            liste.push(resp.data.forecast.forecastday[0].hour[i].temp_c);
            iconliste.push(
              resp.data.forecast.forecastday[0].hour[i].condition.icon
            );
          }

          sethourtime(liste);
          seticonweather(iconliste);
          setsayacforfetch(2);
        }
      } catch {
        setcityNotFound(true);
      }
    }
  };
  useEffect(() => {
    if(API != undefined){
      uvcontroller();
    }
    
  }, [uv]);
  useEffect(() => {
    if(API != undefined){
      fetch(cityname);
      tabboxrender(cityname);
      console.log("dondu");
    }
      
    
  }, [city]);
  const tabboxrender = (cityn) => {
    if (API != undefined) {
      const list = [];
      fetchHour(cityn);

      for (let i = 0; i < 24; i++) {
        list.push(
          <View
            style={[
              styles.tabbox,
              {
                width: 140,
                backgroundColor: !switc ? "black" : "white",
                borderColor: switc ? "black" : "white",
              },
            ]}
          key={i}>
            <Text
              style={[styles.tabboxtext, { color: switc ? "black" : "white" }]}
            >
              {parseInt(hourtime[i])}°
            </Text>
            <Image
              source={{ uri: "https:" + iconweather[i] }}
              style={styles.tabboximg}
            />
            <Text
              style={[styles.tabboxtext, { color: switc ? "black" : "white" }]}
            >
              {i < 10 ? "0" + i + ":00" : i + ":00"}
            </Text>
          </View>
        );
      }

      return list;
    }
  };
  const fetch = async (cityn) => {
    if (API != undefined) {
      try {
        console.log("Yukleniyor...");
        setscrollable(false)
        setloading(true);
        const wresponse = await axios.get(
          "https://api.weatherapi.com/v1/forecast.json?key=" +
            API +
            "&q=" +
            cityn +
            "&days=7"
        );
        const response = await axios.get(
          "https://api.weatherapi.com/v1/current.json?key=" +
            API +
            "&q=" +
            cityn
        );
      
        settempature(response.data.current.temp_c);

        setcountry(response.data.location.country);

        setcity(response.data.location.name);
        setweather(response.data.current.condition.text);

        setsunrise(wresponse.data.forecast.forecastday[0].astro.sunrise);
        setsunset(wresponse.data.forecast.forecastday[0].astro.sunset);
        setweatherIcon(response.data.current.condition.icon);
        setcountry(response.data.location.country);
        setregion(response.data.location.region);
        setuv(response.data.current.uv);

        setwindspeed(response.data.current.wind_kph);
        setwinddirection(response.data.current.wind_degree);
        sethumidity(response.data.current.humidity);
      } catch {

        setAPIcontroller(false);
      } finally {
        setloading(false);
        console.log("Yuklendi");
        setscrollable(true);
      }
    }
    else{
      fetch()
    }
  };
  useEffect(() => {
    if(API != undefined){
      loadfont();
    fetch(text);
    tabboxrender(text);
    }
    
  }, []);
  let interpolatecol;
  const animation = () => {
    Animated.timing(col, {
      toValue: switc ? 0 : 1,
      duration: 400,
      useNativeDriver: true,
    }).start();
    Animated.timing(translateX, {
      toValue: switc ? 0 : 41,
      duration: 300,
      useNativeDriver: true,
    }).start();
    switchValue = switc;
    toggleswitch(!switc);
    settheme((p) => !p);
  };

  interpolatecol = col.interpolate({
    inputRange: [0, 1],
    outputRange: ["black", "white"],
  });
  const searchBarAnimation = () => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  };
  const handlescrol = (event) => {
    const scrooly = event.nativeEvent.contentOffset.y;
    if (Math.round(scrooly) > 100) {
      setisScrooled(true);
      if (sayac == 0) {
        Animated.timing(contbarY, {
          toValue: (height * 60) / 100,
          duration: 500,
          useNativeDriver: false,
        }).start();
        setsayac(1);
      }
    } else if (Math.round(scrooly) == 0) {
      setisScrooled(false);
      Animated.timing(contbarY, {
        toValue: height / 2,
        duration: 500,
        useNativeDriver: false,
      }).start();
      setsayac(0);
    }
  };
  const uvcontroller = () => {
    if (uv <= 2.0) {
      setuvmes(
        "Güneşten korunma gerekmiyor; dışarıda güvenle vakit geçirebilirsiniz."
      );
      setuvlevel("Düşük");
      setuvcol("rgb(0, 128, 0)");
    }
    else if (uv <= 5.0) {
      setuvlevel("Orta");
      setuvmes(
        "Orta seviyede UV ışınına maruz kalıyorsunuz; güneş kremi kullanarak korunmaya dikkat edin."
      );
      setuvcol("rgb(255, 255, 0)");
    }
    else if (uv <= 7.0) {
      setuvmes(
        "UV ışınları yüksek; uzun süre güneşte kalmaktan kaçının ve koruyucu giysiler giyin."
      );
      setuvlevel("Yüksek");
      setuvcol("rgb(255, 165, 0)");
    }
    else if (uv <= 10.0) {
      setuvmes(
        " Ekstra koruma şart; mümkünse gölgede kalın ve güneşten uzak durun."
      );
      setuvlevel("Çok Yüksek");
      setuvcol("rgb(255, 0, 0)");
    }
    else if (uv >= 11.0) {
      setuvmes(
        "UV ışınları son derece tehlikeli; dışarı çıkmaktan kaçının ve güneşten tamamen uzak durun."
      );
      setuvlevel("Aşırı");
      setuvcol("rgb(128, 0, 128)");
    }
  };

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gestureState) => {},
      onPanResponderRelease: (event, gets) => {
        if (gets.dy > 0) {
          Animated.timing(translateY, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start();
        }
        if (gets.dy < 0) {
          Animated.timing(translateY, {
            toValue: -150,
            duration: 500,
            useNativeDriver: true,
          }).start();
        }
      },
    })
  ).current;
  const renderElement=()=>{
    return(
      <>
      <StatusBar hidden={true} />
      <Animated.View
        style={[
          {
            //SEARCH
            width: "90%",
            height: 150,
            alignSelf: "center",
            borderRadius: 25 / PixelRatio.getFontScale(),
            backgroundColor: !switc ? "black" : "white",
            justifyContent: "center",
            alignItems: "center",
            position: "absolute",
            zIndex: 100,
            borderWidth: 1,
            borderColor: switc ? "black" : "white",
            justifyContent: "center",
            alignItems: "center",
            elevation: 15,
          },
          { transform: [{ translateY: translateY }] },
        ]}
      >
        <Text
          style={
            cityNotFound
              ? {
                  fontFamily: "Font",
                  fontSize: 20 / PixelRatio.getFontScale(),
                  color: "red",
                }
              : {
                  fontFamily: "Font",
                  fontSize: 20 / PixelRatio.getFontScale(),
                  color: switc ? "black" : "white",
                }
          }
        >
          {cityNotFound ? "Şehir Bulunamadı" : "Şehir Ara"}
        </Text>
        <View
          style={{
            width: "80%",
            height: 40 / PixelRatio.getFontScale(),
            backgroundColor: !switc ? "black" : "white",
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
            borderColor: switc ? "black" : "white",
            borderWidth: 1,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 5,
              backgroundColor: !switc ? "black" : "white",
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
            }}
          >
            <TextInput
              onChangeText={getTextSearch}
              value={cityname}
              style={{
                flex: 1,
                fontSize: 15 / PixelRatio.getFontScale(),
                color: switc ? "black" : "white",
                fontFamily: "Font",
                paddingLeft: 15 / PixelRatio.getFontScale(),
              }}
              placeholder="Enter a city"
              placeholderTextColor={switc ? "gray" : "lightgray"}
            />
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: !switc ? "black" : "white",
              borderLeftColor: switc ? "black" : "white",
              borderLeftWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity onPress={handleClickSearch}>
              <FontAwesome
                name="search"
                size={20 / PixelRatio.getFontScale()}
                color={switc ? "black" : "white"}
              />
            </TouchableOpacity>
          </View>
        </View>
      </Animated.View>
      <Animated.View
        style={{
          width: 80,
          height: 40,
          borderRadius: 20,
          borderWidth: 1,
          alignItems: "center",
          flexDirection: "row",
          borderColor: switc ? "black" : "white",
          justifyContent: "space-between",
          marginTop: 20,
          position: "absolute",
          top: 0,
          zIndex: 99,
        }}
      >
        <Animated.View
          style={[
            { borderRadius: 20, transform: [{ translateX: translateX }] },
            { backgroundColor: interpolatecol },
          ]}
        >
          <Feather
            name={switc ? "sun" : "moon"}
            size={24}
            color={switc ? "black" : "white"}
            style={{ borderRadius: 15, padding: 5 }}
            onPress={animation}
          />
        </Animated.View>
      </Animated.View>

      <Animated.View
        style={[
          styles.tabar,
          {
            backgroundColor: interpolatecol,
            borderBottomColor: switc ? "black" : "white",
            borderBottomWidth: 1,
          },
        ]}
      >
        <View
          style={{ width: "100%", alignItems: "center" }}
          {...panResponder.panHandlers}
        >
          <Image
            source={{ uri: "https:" + weatherIcon }}
            style={styles.image}
          />

          <Animated.Text
            style={[
              {
                fontSize: 55 / PixelRatio.getFontScale(),
                fontFamily: "Font",
              },
              { color: switc ? "black" : "white" },
            ]}
          >
            {tempature}°
          </Animated.Text>
          <Animated.Text
            style={[
              {
                fontSize: 20 / PixelRatio.getFontScale(),
                fontFamily: "Font",
                textAlign: "center",
              },
              { color: switc ? "black" : "white" },
            ]}
          >
            {city == region
              ? country + "," + city
              : country + "," + region + "," + city}
          </Animated.Text>
        </View>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {tabboxrender(cityname)}
        </ScrollView>
      </Animated.View>
      <Animated.View
        style={[
          { position: "absolute", bottom: 0, width: "100%" },
          { borderTopColor: switc ? "black" : "white", borderTopWidth: 1 },
          { height: contbarY },
        ]}
      >
        <View
          style={{
            alignItems: "center",
            width: "100%",
          }}
        >
          <ScrollView
            style={{ width: "100%" }}
            contentContainerStyle={{ flexGrow: 1 }}
            onScroll={handlescrol}
          >
            <BlurView
              style={styles.blurContainer}
              intensity={400}
              tint={switc ? "extraLight" : "systemMaterialDark"}
            >
              <View
                style={{ flexDirection: "row", width: "100%", height: 100 }}
              >
                <Animated.View
                  style={{
                    flex: 0.35,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather
                    name="sunrise"
                    color={switc ? "black" : "white"}
                    size={30 / PixelRatio.getFontScale()}
                  />
                </Animated.View>
                <Animated.View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Animated.Text
                    style={{
                      fontFamily: "Font",
                      fontSize: 17 / PixelRatio.getFontScale(),
                      color: switc ? "black" : "white",
                    }}
                  >
                    Gün Doğumu
                  </Animated.Text>
                  <Animated.Text
                    style={{
                      fontFamily: "Font",
                      fontSize: 20 / PixelRatio.getFontScale(),
                      color: switc ? "black" : "white",
                    }}
                  >
                    {sunrise}
                  </Animated.Text>
                </Animated.View>

                <Animated.View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Animated.Text
                    style={{
                      fontFamily: "Font",
                      fontSize: 17 / PixelRatio.getFontScale(),
                      color: switc ? "black" : "white",
                    }}
                  >
                    Gün Batımı
                  </Animated.Text>
                  <Animated.Text
                    style={{
                      fontFamily: "Font",
                      fontSize: 20 / PixelRatio.getFontScale(),
                      color: switc ? "black" : "white",
                    }}
                  >
                    {sunset}
                  </Animated.Text>
                </Animated.View>
                <Animated.View
                  style={{
                    flex: 0.35,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather
                    name="sunset"
                    color={switc ? "black" : "white"}
                    size={30 / PixelRatio.getFontScale()}
                  />
                </Animated.View>
                <Animated.View></Animated.View>
              </View>
            </BlurView>

            <BlurView
              style={styles.blurContainer}
              intensity={400}
              tint={switc ? "extraLight" : "systemMaterialDark"}
            >
              <Animated.View
                style={{ flexDirection: "row", width: "100%", height: 100 }}
              >
                <Animated.View
                  style={{
                    flex: 0.35,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Feather
                    name="wind"
                    color={switc ? "black" : "white"}
                    size={30}
                  />
                </Animated.View>
                <Animated.View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Animated.Text
                    style={{
                      color: switc ? "black" : "white",
                      fontSize: 20 / PixelRatio.getFontScale(),
                      fontFamily: "Font",
                    }}
                  >
                    Rüzgar Hızı
                  </Animated.Text>
                  <Animated.Text
                    style={{
                      color: switc ? "black" : "white",
                      fontSize: 18 / PixelRatio.getFontScale(),
                      fontFamily: "Font",
                    }}
                  >
                    {parseInt(windspeed)} km/h
                  </Animated.Text>
                </Animated.View>
                <Animated.View
                  style={{
                    flex: 1,
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Animated.View
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      width: "100%",
                      alignItems: "center",
                    }}
                  >
                    <Feather
                      name="arrow-up-left"
                      color={switc ? "black" : "white"}
                      style={{
                        transform: [{ rotate: winddirection + 43 + "deg" }],
                      }}
                      size={35 / PixelRatio.getFontScale()}
                    />
                  </Animated.View>
                  <Animated.Text
                    style={{
                      color: switc ? "black" : "white",
                      fontSize: 20 / PixelRatio.getFontScale(),
                      fontFamily: "Font",
                    }}
                  >
                    Rüzgar Yönü
                  </Animated.Text>
                  <Animated.Text
                    style={{
                      fontSize: 17 / PixelRatio.getFontScale(),
                      color: switc ? "black" : "white",
                      fontFamily: "Font",
                    }}
                  >
                    {winddirection >= 0 && winddirection <= 45
                      ? "KuzeyDoğu"
                      : winddirection > 45 && winddirection <= 90
                      ? "Doğu"
                      : winddirection > 90 && winddirection <= 135
                      ? "GüneyDoğu"
                      : winddirection > 135 && winddirection <= 180
                      ? "Güney"
                      : winddirection > 180 && winddirection <= 225
                      ? "GüneyBatı"
                      : winddirection > 225 && winddirection <= 270
                      ? "Batı"
                      : winddirection > 270 && winddirection <= 315
                      ? "KuzeyBatı"
                      : winddirection > 315 && winddirection <= 360
                      ? "Kuzey"
                      : ""}
                  </Animated.Text>
                </Animated.View>
              </Animated.View>
            </BlurView>

            <BlurView
              style={styles.blurContainer}
              intensity={400}
              tint={switc ? "extraLight" : "systemMaterialDark"}
            >
              <View
                style={{ flexDirection: "row", width: "100%", height: 100 }}
              >
                <Animated.View
                  style={{
                    flex: 0.35,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="water"
                    color={switc ? "black" : "white"}
                    size={30 / PixelRatio.getFontScale()}
                  />
                </Animated.View>

                <Animated.View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Animated.Text
                    style={{
                      color: switc ? "black" : "white",
                      fontSize: 15 / PixelRatio.getFontScale(),
                      fontFamily: "Font",
                    }}
                  >
                    Nem
                  </Animated.Text>
                  <Animated.Text
                    style={{
                      color: switc ? "black" : "white",
                      fontSize: 22 / PixelRatio.getFontScale(),
                      fontFamily: "Font",
                    }}
                  >
                    {humidity}%
                  </Animated.Text>
                </Animated.View>

                <Animated.View
                  style={{
                    flex: 1,
                    position: "relative",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Animated.Text
                    style={{
                      color: switc ? "black" : "white",
                      fontSize: 15 / PixelRatio.getFontScale(),
                      fontFamily: "Font",
                    }}
                  >
                    Çiy Noktası
                  </Animated.Text>
                  <Animated.Text
                    style={{
                      color: switc ? "black" : "white",
                      fontFamily: "Font",
                      fontSize: 22 / PixelRatio.getFontScale(),
                    }}
                  >
                    19°
                  </Animated.Text>
                </Animated.View>

                <Animated.View
                  style={{
                    flex: 0.35,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="water-outline"
                    color={switc ? "black" : "white"}
                    size={30}
                  />
                </Animated.View>
              </View>
            </BlurView>

            <BlurView
              style={styles.blurContainer}
              intensity={400}
              tint={switc ? "extraLight" : "systemMaterialDark"}
            >
              <Animated.View style={{ width: "100%", height: 300 }}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <Fontisto
                    name="sun"
                    size={50 / PixelRatio.getFontScale()}
                    color={switc ? "black" : "white"}
                  />
                  <Text
                    style={{
                      fontFamily: "Font",
                      color: switc ? "black" : "white",
                      fontSize: 30 / PixelRatio.getFontScale(),
                      marginTop: 10,
                    }}
                  >
                    Uv İndeksi
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Font",
                      fontSize: 25 / PixelRatio.getFontScale(),
                      color: uvcol,
                      marginTop: 10,
                    }}
                  >
                    {uv}
                  </Text>
                  <Text
                    style={{
                      fontFamily: "Font",
                      fontSize: 25 / PixelRatio.getFontScale(),
                      color: uvcol,
                      marginTop: 10,
                    }}
                  ></Text>
                  <Text
                    style={{
                      fontFamily: "Font",
                      fontSize: 20 / PixelRatio.getFontScale(),
                      color: switc ? "black" : "white",
                      marginTop: 10,
                      textAlign: "center",
                    }}
                  >
                    {uvmessage}
                  </Text>
                </View>
              </Animated.View>
            </BlurView>
          </ScrollView>
        </View>
      </Animated.View>
      </>
    )
  }
  return (
    <>
      <First />

      <Animated.View
      style={[
        { position: "relative", flex: 1 },
        { backgroundColor: interpolatecol },
      ]}
    >{API != undefined && loading==false ? renderElement():<Loading/>}</Animated.View>
    </>
  );
};
const styles = StyleSheet.create({
  tabar: {
    height: height / 2,
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
  },
  container: {
    flex: 0.6,
    alignItems: "center",
  },
  image: {
    height: 128,
    width: 128,
  },
  tabbox: {
    backgroundColor: "white",

    width: 100,
    height: 128,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
    justifyContent: "center",

    elevation: 15,
    shadowRadius: 10,
    borderRadius: 10,
    margin: 10,
  },
  tabboximg: {
    width: 75 / PixelRatio.getFontScale(),
    height: 75 / PixelRatio.getFontScale(),
  },
  tabboxtext: {
    fontSize: 21 / PixelRatio.getFontScale(),
    fontFamily: "Font",
  },
  blurContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
