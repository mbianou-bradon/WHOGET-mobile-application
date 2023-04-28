import { Image, Text, View } from "react-native";
import { styles } from "./Ask.component.styles";


export default function Ask(){

    return(
        <View style={styles.askContainer}>
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
        </View>
    )
}