import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Pressable, View } from "react-native";
import { NativeStackParams } from "../../../App";


export default function BackBtn(){

    const navigation = useNavigation<NativeStackNavigationProp<NativeStackParams>>()
    return (
        <Pressable onPress={()=>navigation.goBack()}>
            <View>
                <Image source={require("../../assets/icons/backarrow.png")}/>
            </View>
        </Pressable>
    )
}