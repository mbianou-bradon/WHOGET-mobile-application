import { Image, Text, View, ScrollView } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "./Profile.screen.styles";
import Ionic from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcon from "react-native-vector-icons/EvilIcons"
import { theme } from "../../theme/theme";


export default function Profile(){

    return (
        <View>
            <Header/>
            <ScrollView>
                <View style={styles.headerContainer}>
                    <View style={styles.headerSubContainer}>
                        <View>
                            <Image source={require("../../assets/icons/backarrow_white.png")} />
                        </View>
                        <View style={styles.headerUsernameContainer}>
                            <Text style={styles.headerUsernameText}>Mbianou Bradon</Text>
                        </View>
                    </View>
                    <View style={styles.profileImageContainer}>
                        <View style={styles.profileImageSubContainer}>
                            <View></View>
                            <View style={styles.cameraContainer}>
                                <EvilIcon name="camera" size={38} color={theme.color.neutral_white}/>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.bodyContainer}>
                    <View style={styles.userInfoContainer}>
                        <Ionic name='person-circle-outline' size={25} color={styles.IconColor.color}/>
                        <View style={styles.userInfoSubContainer}>
                            <View>
                                <Text style={styles.smallHeaderText}>Username</Text>
                                <Text style={styles.userInfoText}>Bradon</Text>
                            </View>
                                
                            <MaterialCommunityIcon name='pencil-outline' color={theme.color.neutral_black}/>
                        </View>
                    </View>

                    <View style={styles.userInfoContainer}>
                        <View style={styles.IconContainer}>
                            <Image source={require("../../assets/icons/google.png")} style={styles.userIcon}/>
                        </View>
                        <View style={styles.userInfoSubContainer}>
                            <View>
                                <Text style={styles.smallHeaderText}>Email</Text>
                                <Text style={styles.userInfoText}>Mbianoubradon2000@gmail.com</Text>
                            </View>
                                
                            <MaterialCommunityIcon name='pencil-outline' color={theme.color.neutral_black}/>
                        </View>
                    </View>

                    <View style={styles.userInfoContainer}>
                        <MaterialCommunityIcon name='phone-settings' size={25} color={theme.color.neutral_black}/>
                        <View style={styles.userInfoSubContainer}>
                            <View>
                                <Text style={styles.smallHeaderText}>Number</Text>
                                <Text style={styles.userInfoText}>+237 672 029 789</Text>
                            </View>
                                
                            <MaterialCommunityIcon name='pencil-outline' color={theme.color.neutral_black}/>
                        </View>
                    </View>

                    <View style={styles.userInfoContainer}>
                        <Ionic name='location-outline' size={25} color={theme.color.neutral_black}/>
                        <View style={styles.userInfoSubContainer}>
                            <View>
                                <Text style={styles.smallHeaderText}>Location</Text>
                                <Text style={styles.userInfoText}>Buea - Cameroon</Text>
                            </View>
                                
                            <MaterialCommunityIcon name='pencil-outline' color={theme.color.neutral_black}/>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}