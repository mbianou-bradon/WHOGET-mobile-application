import { Image, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "./Ntofication.screen.styles";


export default function Notification(){

    return (
        <View>
            <Header/>
            <View>
                <View>
                    <View style={styles.profileImageContainer}>
                        <Image source={require("../../assets/icons/userIcon.png")} style={styles.profileImage}/>
                    </View>
                </View>
            </View>
        </View>
    )
}