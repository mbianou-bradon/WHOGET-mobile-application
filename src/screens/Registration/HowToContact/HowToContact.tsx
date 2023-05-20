import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./HowToContact.screen.styles";
import Header from "../../../components/Header/Header";
import BackBtn from "../../../components/backBtn/backBtn";
import React from "react";
import { useAppDispatch } from "../../../redux/store/hooks";
import { createUserSlice } from "../../../redux/features/createUserSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NativeStackParams } from "../../../../App";


export default function HowToContact(){
    const dispatch = useAppDispatch()
    const navigation = useNavigation<NativeStackNavigationProp<NativeStackParams>>()
    const [userPhoneNumber, setUserPhoneNumber] = React.useState("");
    const [userWhatsAppNumber, setUserWhatsAppNumber] = React.useState("")
    const [userEmail, setUserEmail] = React.useState("")

    const handleUserInput = async() => {
    
        dispatch(createUserSlice.actions.createNewUser({key:"phoneNumber", value:`${userPhoneNumber}`}));
        dispatch(createUserSlice.actions.createNewUser({key:"userWhatsapp", value:`${userWhatsAppNumber}`}));
        dispatch(createUserSlice.actions.createNewUser({key:"email", value:`${userEmail}`}));
        
    }

    const handleNextScreen = async() => {
        await handleUserInput();
        navigation.navigate("ConfirmationUsername");

    }



    return (
        <View>
            <Header/>
            <View style={styles.howToContactContainer}>
                <View style={styles.howToContactDescContainer}>
                    <BackBtn dest="Back" color="blue"/>
                    <View style={styles.howToContactDescSubContainerOne}>
                        <Text style={styles.howToContactDesc}>How can we get back to you?</Text>
                        <Text style={styles.howToContactMinText}>Fill atleast one field</Text>
                    </View>
                </View>
                <View style={styles.howToContactDescSubContainerTwo}>
                    <View style={styles.contactOptionsContainer}>
                        <View style={styles.contactOptions}>
                            <Image source={require("../../../assets/icons/phone.png")}/>
                            <TextInput placeholder="Enter Phone Number" keyboardType="numeric" maxLength={9} onChangeText={(value => setUserPhoneNumber(value))}/>
                        </View>

                        <View style={styles.contactOptions}>
                            <Image source={require("../../../assets/icons/whatsapp.png")}/>
                            <TextInput placeholder="Enter WhatsApp Number" keyboardType="numeric" maxLength={9} onChangeText={(value => setUserWhatsAppNumber(value))}/>
                        </View>

                        <View style={styles.contactOptions}>
                            <Image source={require("../../../assets/icons/google.png")} />
                            <TextInput placeholder="Enter Email address" onChangeText={(value => setUserEmail(value))}/>
                        </View>
                        
                    </View>


                    <View style={styles.continueBtnContainer}>
                        <TouchableOpacity style={styles.continueBtn} onPress={handleNextScreen}>
                            <Text style={styles.continueBtnText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                
            </View>
        </View>
    )
}