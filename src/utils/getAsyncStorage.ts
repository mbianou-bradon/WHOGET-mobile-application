import AsyncStorage from "@react-native-async-storage/async-storage"


const getAsyncData = async (data:string) => {
    try {
        const value = await AsyncStorage.getItem(data)
        return value != null ? JSON.parse(value) : null
    }
    catch(error){
        console.log(error)
    }
}

export default getAsyncData;