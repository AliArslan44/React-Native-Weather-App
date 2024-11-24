import {
    PixelRatio,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
  } from "react-native";
  import React, { useContext, useEffect, useState } from "react";
  import { getDatabase, ref, set, onValue } from "firebase/database";
  import { Themep } from "./Themecontext";
  import * as Font from "expo-font";
  import { TouchableOpacity } from "react-native";
  import { db } from "../firebaseconfig";
  export const Comment = () => {
    const loadfont = async () => {
      await Font.loadAsync({
        Font: require("../assets/Fredoka-VariableFont_wdth,wght.ttf"),
      });
    };
    const { theme, settheme } = useContext(Themep);
    const [commentText, setcommentText] = useState();
    const [comList, setcomList] = useState(['data']);
    const sendComment = async () => {
   
        try {
          onValue(ref(db, "Yorumlar/liste"), (snapshot) => {
            const data = snapshot.val();
            setcomList(data)
          });
        } catch (error) {
          console.log(error);
        }
      
    };
  useEffect(()=>{
    sendComment();
  },[])
    const handleClickSubmitButton = () => {
      sendComment();
      comList.push(commentText);
      console.log(comList);
      
      set(ref(db, "Yorumlar/"), {
        liste: comList,
      });
      setcommentText("");
    };
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: theme ? "black" : "white",
        }}
      >
        <Text
          style={{
            color: !theme ? "black" : "white",
            fontSize: 24 / PixelRatio.getFontScale(),
            fontFamily: "Font",
          }}
        >
          Uygulamamızı değerlendirin
        </Text>
        <Text
          style={{
            color: !theme ? "black" : "white",
            fontSize: 17 / PixelRatio.getFontScale(),
            fontFamily: "Font",
            textAlign: "center",
            marginTop: 20,
          }}
        >
          Uygulamamız için yaptğınız şikayet ve öneriler, uygulamamızın gelişimine
          katkı sağlar.
        </Text>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <TextInput
            placeholder="Yorumunuzu Yazın"
            placeholderTextColor={"lightgray"}
            style={{
              fontFamily: "Font",
              color: !theme ? "black" : "white",
              fontSize: 16 / PixelRatio.getFontScale(),
              borderWidth: 0.5,
              borderColor: !theme ? "black" : "lightgray",
              borderRadius: 15,
              width: 300,
              padding: 10,
              marginTop: 40,
            }}
            value={commentText}
            multiline={true}
            numberOfLines={4}
            onChangeText={(text) => {
              setcommentText(text);
            }}
            autoCapitalize="sentences"
          />
        </TouchableWithoutFeedback>
        <TouchableOpacity onPress={handleClickSubmitButton}>
          <View
            style={{
              width: 150,
              height: 40,
              borderRadius: 5,
              borderColor: !theme ? "black" : "white",
              marginTop: 20,
              borderWidth: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: !theme ? "black" : "lightgray",
                fontFamily: "Font",
                fontSize: 18,
              }}
            >
              Gönder
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({});
  