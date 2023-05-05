import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./HowToContact.screen.styles";
import Header from "../../../components/Header/Header";
import BackBtn from "../../../components/backBtn/backBtn";


export default function HowToContact(){

    return (
        <View>
            <Header/>
            <View style={styles.howToContactContainer}>
                <View style={styles.howToContactDescContainer}>
                    <BackBtn />
                    <View style={styles.howToContactDescSubContainerOne}>
                        <Text style={styles.howToContactDesc}>How can we get back to you?</Text>
                        <Text style={styles.howToContactMinText}>Fill atleast one field</Text>
                    </View>
                </View>
                <View style={styles.howToContactDescSubContainerTwo}>
                    <View style={styles.contactOptionsContainer}>
                        <View style={styles.contactOptions}>
                            <Image source={require("../../../assets/icons/phone.png")}/>
                            <TextInput placeholder="Enter Phone Number" keyboardType="numeric" maxLength={9}/>
                        </View>

                        <View style={styles.contactOptions}>
                            <Image source={require("../../../assets/icons/whatsapp.png")}/>
                            <TextInput placeholder="Enter WhatsApp Number" keyboardType="numeric" maxLength={9}/>
                        </View>

                        <View style={styles.contactOptions}>
                            <Image source={require("../../../assets/icons/google.png")}/>
                            <TextInput placeholder="Enter Email address"/>
                        </View>
                        
                    </View>


                    <View style={styles.continueBtnContainer}>
                        <TouchableOpacity style={styles.continueBtn}>
                            <Text style={styles.continueBtnText}>Continue</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                
            </View>
        </View>
    )
}