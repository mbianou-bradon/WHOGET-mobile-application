import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./Login.screen.styles";
import { LinearTextGradient } from "react-native-text-gradient";



export default function Login(){

    return (
        <View style={styles.loginContainer}>
            <View style={styles.majorContainer}>
                <View style={styles.logoContainer}>
                    <Image source={require("../../assets/images/logo_blue.png")}/>
                </View>

                <LinearTextGradient colors={['#00A0DD', '#776FB2']} locations={[0,1]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.loginDescription}>
                    <Text>Do you have things you want to find and you don't know where to start?</Text>
                </LinearTextGradient>
                

                <View style={styles.loginOptionsContainer}>
                    <Pressable style={styles.loginOptions}>
                        <Image source={require("../../assets/icons/google.png")} />
                        <Text style={styles.loginOptionsText}>Sign in with Google</Text>
                    </Pressable>
                    <Pressable style={styles.loginOptions}>
                        <Image source={require("../../assets/icons/facebook.png")} />
                        <Text style={styles.loginOptionsText}>Sign in with Facebook</Text>
                    </Pressable>

                    <View style={styles.policyContainer}>
                        <Text style={styles.policyText}>
                            By continuing you indicate that you agree to WhoGet's Terms of service and Privacy policy
                        </Text>
                    </View>

                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.footerText}>About</Text>
                <Text style={styles.footerText}>Language</Text>
                <Text style={styles.footerText}>&copy; WhoGet, Inc 2023</Text>
            </View>
        </View>
    )
}