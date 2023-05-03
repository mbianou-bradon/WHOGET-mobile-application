import { Image, ScrollView, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "./Notification.screen.styles";
import NotificationComponent from "../../components/NotificationComponent/NotificationComponent";


export default function Notification(){

    return (
        <View>
            <Header/>
            <View style={styles.mainContainer}>
                <View>
                    <View style={styles.headerContainer}>
                        <View style={styles.profileImageContainer}>
                            <Image source={require("../../assets/icons/userIcon.png")} style={styles.profileImage}/>
                        </View>
                        <View style={styles.notificationContainer}>
                            <Text style={styles.notificationText}>Notification</Text>
                            <View style={styles.notificationCountContainer}>
                                <Text style={styles.notificationCountText}>17</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.markContainer}>
                        <Text style={styles.markText}>Mark as read</Text>
                    </View>
                </View>

               
                <ScrollView style={styles.notificationList}>
                    <NotificationComponent/>
                    <NotificationComponent/>
                    <NotificationComponent/>
                    <NotificationComponent/>
                    <NotificationComponent/>
                    <NotificationComponent/>
                    <NotificationComponent/>
                </ScrollView>
                
            </View>
        </View>
    )
}