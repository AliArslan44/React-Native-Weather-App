import { ActivityIndicator, StyleSheet, Text, View,Animated } from 'react-native'
import React,{useState,useRef, useEffect} from 'react'

export const Loading = () => {
  const loadfont = async () => {
    await Font.loadAsync({
      Font: require("../assets/Fredoka-VariableFont_wdth,wght.ttf"),
    });
  };
  const OpacityText=useRef(new Animated.Value(1)).current;
  const [randomInfoIndex, setrandomInfoIndex] = useState(0)
  const interval=5000;
  const [infoList, setinfoList] = useState(['Uygulama yüklenirken uygulamadan ayrılmayın.',"Dünyada her yıl 8 milyondan fazla ağaç kesiliyor.",
    "Bir yıldızın ışığı, Dünya’ya ulaşmak için milyonlarca yıl sürebilir.",
    "İlk cep telefonu 1973 yılında Martin Cooper tarafından icat edildi.",
    "Dünya genelinde 5 milyardan fazla aktif cep telefonu kullanıcısı var.",
    "Günlük en az 30 dakika egzersiz yaparak sağlığınızı iyileştirebilirsiniz.",
    "Bol su içmek, enerji seviyenizi artırabilir.",
    "Başarı, hazır olmanın ve fırsatları değerlendirebilmenin birleşimidir.",
    "Büyük hayaller, büyük hedeflerden doğar.",
    "Dünyada 3.000’den fazla türde balina ve yunus bulunmaktadır.",
    "Kutup ayıları, suyun altında 2 dakika boyunca nefeslerini tutabilirler.",
    "Dünya genelinde 7.000'den fazla dil konuşulmaktadır.",
    "Japonya'da her yıl milyonlarca kiraz çiçeği festivali düzenlenir."])
  const changeTextAnimation=()=>{
    Animated.timing(OpacityText,{
      toValue:0,
      duration:2000,
      useNativeDriver:true,
    }).start();
    setTimeout(()=>{
      setrandomInfoIndex(Math.floor(Math.random()*infoList.length))
    },interval)
  }
  useEffect(()=>{
   changeTextAnimation();
  },[randomInfoIndex])
  return (

    <View style={{flex:1,backgroundColor:'black',justifyContent:'center',alignItems:'center'}}>
      <ActivityIndicator color={'white'} size={50}/>
      <Text style={{fontFamily:'Font',color:'white',fontSize:20}}>Yükleniyor</Text>
      <Text style={{fontFamily:'Font',color:'white',fontSize:17,width:400,textAlign:'center'}}>{infoList[randomInfoIndex]}</Text>
    </View>
  )
}


const styles = StyleSheet.create({})