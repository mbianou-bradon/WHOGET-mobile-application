import { Image, Text, TextInput, View } from "react-native";
import { LinearTextGradient } from "react-native-text-gradient";
import { styles } from "./ConfirmingUsername.screen.styles";


export default function ConfirmingUsername(){


    return (
        <View>
            <View>
                <View>
                    <Image source={require("../../../assets/images/logo_blue.png")}/>
                </View>

                <LinearTextGradient colors={['#00A0DD', '#776FB2']} locations={[0,1]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.userName}>
                    <Text>Welcome Mbianou</Text>
                </LinearTextGradient>

                <View style={styles.changeUsernameContainer}>
                    <View></View>
                    <View>
                        <TextInput placeholder="Mbianou" />
                    </View>
                </View>
            </View>
        </View>
    )
}