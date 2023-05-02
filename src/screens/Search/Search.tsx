import { Text, View } from "react-native";
import Header from "../../components/Header/Header";
import AskDetails from "../AskDetail/AskDetails";


export default function Search() {

    return (
        <View>
            <Header/>
            {/* <Text>Search Screen</Text> */}
            <AskDetails/>
        </View>
    )
}