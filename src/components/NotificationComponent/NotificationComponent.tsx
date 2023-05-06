import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./NotificationComponent.component.styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NativeStackParams } from "../../../App";


export default function NotificationComponent(){

    const navigation = useNavigation<NativeStackNavigationProp<NativeStackParams>>()
    return(
        <Pressable style={styles.notificationContainer} onPress={()=> navigation.navigate("AskDetails")}>
            <View>
                <View style={styles.notificationSubContainer}>
                    <View style={styles.notificationHeaderStyle}>
                        <View style={styles.profileImageContainer}>
                            <Image source={require("../../assets/icons/userIcon.png")} style={styles.profileImage}/>
                        </View>
                        <View>
                            <Text style={styles.askerUsernameStyle}>Mbianou Bradon</Text>
                            <Text style={styles.askerCreationDate}>2 hours ago</Text>
                        </View>
                    </View>
                    <View style={styles.threedotsContainer}>
                        <Image source={require("../../assets/icons/threedots.png")} style={styles.threedotsIcon}/>
                    </View>
                    
                </View>
                <View style={styles.askCategoryContainer}>
                    <Text style={styles.askCategoryText}>#Rentals</Text>
                    <Text style={styles.askCategoryText}>Posted in a category you subscribed to</Text>
                </View>
                <View>
                    <Text style={styles.askBodyText}>
                        Where can I find a beautiful two rooms apartment in Buea for 35k
                    </Text>
                </View>
                <View style={styles.askExpiringDateContainer}>
                    <Text style={styles.askExpiringDateText}>expires in 22 hours</Text>
                </View>
            </View>
        </Pressable>
    )
}