import { StyleSheet, Text, View } from "react-native";
import React, { createContext, useState, useContext, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getData } from "./AsyncST";
import firebase from "firebase/compat/app";
import {
  collection,
  doc,
  getDoc,
  getDocs,
  QuerySnapshot,
  setDoc,
} from "firebase/firestore";
import { db } from "../firebaseconfig";
import { onValue, ref } from "firebase/database";
export const Themep = createContext();

export const Themecontext = ({ children }) => {
  const [theme, settheme] = useState(true);
  const [text, setext] = useState("Samsun");
  const [apa, setapa] = useState();
  const [API, setAPI] = useState();
  const [APIcontroller, setAPIcontroller] = useState();
  const [respons, setrespons] = useState();
  const [apikey, setapikey] = useState();
  const [sayac, setsayac] = useState(0);
  const [loaded, setloaded] = useState(true)
  const [scrollable, setscrollable] = useState(false)
  const getApi = async () => {
    setloaded(true);
    console.log("Api yükleniyor");

    try {
      onValue(
        ref(
          db,
          "weatherapi"
        ),
        (snapshot) => {
          const data =snapshot.val();
          setAPI(data);
        }
      );
    } catch (error) {
      console.log(error);
    } finally {
      setloaded(false);
      console.log("Api yüklendi");
    }
  };
  useEffect(() => {});
  useEffect(() => {
    getApi();
    console.log("data:" + API);
  }, [API]);
  useEffect(() => {
    if (!loaded) {
      console.log("Api was loaded " + API);
    }
  }, [loaded]);
  return (
    <Themep.Provider
      value={{
        theme,
        settheme,
        text,
        setext,
        API,
        setAPI,
        APIcontroller,
        setAPIcontroller,
        scrollable,
        setscrollable
      }}
    >
      {children}
    </Themep.Provider>
  );
};

const styles = StyleSheet.create({});
