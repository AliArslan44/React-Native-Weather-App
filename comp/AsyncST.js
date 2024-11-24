import AsyncStorage from "@react-native-async-storage/async-storage"

export const setData=async(id,val)=>{
    await AsyncStorage.setItem(id,val)
}
export const getData=async(id)=>{
    const value= await AsyncStorage.getItem(id).then((data)=>{
        return data;
    })
    return value;
}