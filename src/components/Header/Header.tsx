import { Image, View } from "react-native";
import { styles } from "./Header.component.styles";


export default function Header(){

    return (
        <View style={styles.headerContainer}>
            <Image source={require("../../assets/images/logo_white.png")} style={styles.headerLogo}/>
        </View>
    )
}