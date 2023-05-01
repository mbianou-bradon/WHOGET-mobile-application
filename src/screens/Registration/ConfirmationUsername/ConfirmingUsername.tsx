import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { LinearTextGradient } from "react-native-text-gradient";
import { styles } from "./ConfirmingUsername.screen.styles";


export default function ConfirmingUsername(){


    return (
        <View style={styles.confirmationContainer}>
            <View>
                <View style={styles.logoContainer}>
                    <Image source={require("../../../assets/images/logo_blue.png")}/>
                </View>

                <LinearTextGradient colors={['#00A0DD', '#776FB2']} locations={[0,1]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} >
                    <Text style={styles.userName}>Welcome Mbianou</Text>
                </LinearTextGradient>

                <View style={styles.usernameSubContainer}>
                    <View>
                        <Text style={styles.confirmaionText}>Do you want to proceed with this username?</Text>
                    </View>
                    <View style={styles.changeUsernameContainer}>
                        <View></View>
                        <View>
                            <TextInput placeholder="Mbianou" />
                        </View>
                    </View>
                </View>

                <View style={styles.continueBtnContainer}>
                    <TouchableOpacity style={styles.continueBtn}>
                        <Text style={styles.continueBtnText}>Continue</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )
}