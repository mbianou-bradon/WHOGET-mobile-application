import { Image, Text, View } from "react-native";
import { styles } from "./AskDetail.screen.styles";
import BackBtn from "../../components/backBtn/backBtn";



export default function AskDetails(){


    return (
        <View style={styles.askDetailMain}>
            <View>
                <View style={styles.headerContainer}>
                    <BackBtn/>
                    <View>
                        <View style={styles.askHeaderStyle}>
                            <View style={styles.profileImageContainer}>
                                <Image source={require("../../assets/icons/userIcon.png")} style={styles.profileImage}/>
                            </View>
                            <View>
                                <Text style={styles.askerUsernameStyle}>Mbianou Bradon</Text>
                                <Text style={styles.askerCreationDate}>Buea-Cameroon</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.bodyContainer}>
                    <View style={styles.askTextContainer}>
                        <View style={styles.askCategoryContainer}>
                            <Text style={styles.askCategoryText}>#Rentals</Text>
                        </View>
                        <View>
                            <Text style={styles.askText}>
                                Where can I find a beautiful two rooms apartment in Buea for 35k
                            </Text>
                        </View>
                    </View>
                    

                    <View style={styles.askImageContainer}>
                        <View></View>
                        <View></View>
                        <View></View>
                        <View></View>
                    </View>

                    <View style={styles.askTimeContainer}>
                        <View style={styles.askTimeSubContainer}>
                            <Text style={styles.askTimeText}>Posted 2 hours ago</Text>
                            <Text style={styles.askTimeText}>Expires in 22 hours</Text>
                        </View>
                    </View>

                    <View style={styles.contactIconsContainer}>
                        <View>
                            <Image source={require("../../assets/icons/google_xl.png")} />
                        </View>
                        <View>
                            <Image source={require("../../assets/icons/whatsapp_xl.png")} />
                        </View>
                        <View>
                            <Image source={require("../../assets/icons/phone_xl.png")} />
                        </View>
                    </View>

                    <View>
                        <View style={styles.reportContainer}>
                            <View>
                                <Image source={require("../../assets/icons/thumbsdown.png")}/>
                            </View>
                            <Text style={styles.reportText}>Report</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}