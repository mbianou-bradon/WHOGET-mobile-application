import { Image, TextInput, View } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "./Search.screen.styles";
import BackBtn from "../../components/backBtn/backBtn";



export default function Search() {

    return (
        <View>
            <Header/>
            <View style={styles.searchMainContainer}>
                <View style={styles.searchHeaderContainer}>
                    <BackBtn/>
                    <View>
                        <TextInput placeholder="Search all ask on WhoGet" style={styles.searchText} autoFocus={true} placeholderTextColor={styles.searchTextPlaceholderTextColor.color}/>
                    </View>
                </View>
                
            </View>
        </View>
    )
}