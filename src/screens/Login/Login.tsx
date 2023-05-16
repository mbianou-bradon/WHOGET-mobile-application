import { Alert, Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./Login.screen.styles";
import { LinearTextGradient } from "react-native-text-gradient";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NativeStackParams, TabStackParams } from "../../../App";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth"
import { useAppDispatch } from "../../redux/store/hooks";
import { createUserSlice } from "../../redux/features/createUserSlice";
import client from "../../config/axios";
import React from "react";
import LoadingScreen from "../../components/Loading/Loading";
import AsyncStorage from "@react-native-async-storage/async-storage";

GoogleSignin.configure({
    webClientId: "1041431862852-k0lm222rv53ffmsbd2n40hp2i5ksvoot.apps.googleusercontent.com",
    offlineAccess: true,
})


export default function Login(){
    const navigation = useNavigation<NativeStackNavigationProp<NativeStackParams>>()
    const tabNavigation = useNavigation<NativeStackNavigationProp<TabStackParams>>()
    const dispatch = useAppDispatch()
    const [isLoading, setIsLoading] = React.useState<boolean>(false)



    async function handleGoogleAuthBtn() {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();
        console.log(idToken);
        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    }
    const handleGoogleAuth = async () => {
            handleGoogleAuthBtn()
            .then( (response) => {
                const isNew =  response.additionalUserInfo?.isNewUser
                const userEmail = response.user.email
                console.log(userEmail);
                AsyncStorage.setItem("@userAuthToken", JSON.stringify(response.user.getIdToken()))
                if(isNew){
                    dispatch(createUserSlice.actions.createNewUser({key:"username", value:`${response.user.displayName}`}))
                    dispatch(createUserSlice.actions.globalAuth(true))
                    navigation.navigate("CategoriesSelect");
                }
                else {
                    setIsLoading(true);
                    client.get(`/users/email/${userEmail}`)
                    .then((response)=>{
                        const data = response.data.data
                        console.log(data);
                        dispatch(createUserSlice.actions.currentUser(data))
                        dispatch(createUserSlice.actions.globalAuth(true))
                        setIsLoading(false);
                    })
                    .catch((error) => {
                        console.log("KnownUser: ===>",error)
                    })
                    .finally(() => {
                        tabNavigation.navigate("Home");
                    })
                }
            })
            .catch(err => console.log("Auth ==>",err))
        
    }

    const handleFacebookAuthBtn = () => {
        Alert.alert(
            "FACEBOOK AUTHENTICATION",
            "Oops! Something went wrong, you might consider using Google Sign In instead.",
            [{text: "OK!"}]
        )
    }

    return (
        <>
        {isLoading? <LoadingScreen text="Getting User Info" />
        :
        <View style={styles.loginContainer}>
            <View style={styles.majorContainer}>
                <View style={styles.logoContainer}>
                    <Image source={require("../../assets/images/logo_blue.png")}/>
                </View>

                <LinearTextGradient colors={['#00A0DD', '#776FB2']} locations={[0,1]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.loginDescription}>
                    <Text>Do you have things you want to find and you don't know where to start?</Text>
                </LinearTextGradient>
                

                <View style={styles.loginOptionsContainer}>
                    <TouchableOpacity style={styles.loginOptions} onPress={handleGoogleAuth}>
                        <Image source={require("../../assets/icons/google.png")} />
                        <Text style={styles.loginOptionsText}>Sign in with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginOptions} onPress={handleFacebookAuthBtn}>
                        <Image source={require("../../assets/icons/facebook.png")} />
                        <Text style={styles.loginOptionsText}>Sign in with Facebook</Text>
                    </TouchableOpacity>

                    <View style={styles.policyContainer}>
                        <Text style={styles.policyText}>
                            By continuing you indicate that you agree to WhoGet's Terms of service and Privacy policy
                        </Text>
                    </View>

                </View>
            </View>
            <View style={styles.footer}>
                <View style={styles.innerFooterContainer}>
                    <Pressable onPress={()=>navigation.navigate("About")}><Text style={styles.footerText}>About</Text></Pressable>
                    <Text style={styles.footerText}>Language</Text>
                    <Text style={styles.footerText}>&copy; WhoGet, Inc 2023</Text>
                </View>
            </View>
            
        </View>
    }
    </>
    )
}