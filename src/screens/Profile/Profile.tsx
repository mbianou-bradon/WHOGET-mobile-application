import { Text, View } from "react-native";
import Header from "../../components/Header/Header";
import Filter from "../../components/filter/Filter";



export default function Profile(){

    return (
        <View>
            <Header/>
            {/* <Text>Profile Screen</Text> */}

            <Filter />
        </View>
    )
}