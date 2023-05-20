import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Image, Pressable, View } from "react-native";
import { NativeStackParams, TabStackParams } from "../../../App";


export default function BackBtn(props: { dest: string, color? : string}){

    const navigation = useNavigation<NativeStackNavigationProp<TabStackParams>>()
    return (
        <Pressable onPress={()=>{
            if(props.dest === "Home")
                navigation.navigate("Home")
            else
                navigation.goBack();
        }}>
            <View>
                {
                    props.color?
                         <Image source={require("../../assets/icons/backarrow.png")}/>
                        :
                        <Image source={require("../../assets/icons/backarrow_white.png")}/>
                }
                
            </View>
        </Pressable>
    )
}