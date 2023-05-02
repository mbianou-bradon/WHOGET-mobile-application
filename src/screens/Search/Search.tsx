import { Image, TextInput, View } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "./Search.screen.styles";



export default function Search() {

    return (
        <View>
            <Header/>
            <View style={styles.searchMainContainer}>
                <View style={styles.searchHeaderContainer}>
                    <View>
                        <Image source={require("../../assets/icons/backarrow.png")} />
                    </View>
                    <View>
                        <TextInput placeholder="Search all ask on WhoGet" style={styles.searchText}/>
                    </View>
                </View>
                
            </View>
        </View>
    )
}