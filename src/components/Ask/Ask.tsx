import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./Ask.component.styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NativeStackParams } from "../../../App";
import { theme } from "../../theme/theme";


export default function Ask(){

    const navigation = useNavigation<NativeStackNavigationProp<NativeStackParams>>();

    return(
        <Pressable android_ripple={{color: theme.color.neutral_gray_light}} style={styles.askContainer} onPress={() => navigation.navigate("AskDetails")}>
            <View>
                <View style={styles.askHeaderStyle}>
                    <View style={styles.profileImageContainer}>
                        <Image source={require("../../assets/icons/userIcon.png")} style={styles.profileImage}/>
                    </View>
                    <View>
                        <Text style={styles.askerUsernameStyle}>Mbianou Bradon</Text>
                        <Text style={styles.askerCreationDate}>2 hours ago</Text>
                    </View>
                </View>
                <View style={styles.askCategoryContainer}>
                    <Text style={styles.askCategoryText}>#Rentals</Text>
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