import { Image, Text, View } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "./Profile.screen.styles";



export default function Profile(){

    return (
        <View>
            <Header/>
            <View>
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
                                <Image source={require("../../assets/icons/camera.png")} style={styles.camera}/>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.bodyContainer}>
                    <View style={styles.userInfoContainer}>
                        <View style={[styles.IconContainer, styles.userIconContainer]}>
                            <Image source={require("../../assets/icons/userIcon.png")} style={styles.userIcon}/>
                        </View>
                        <View style={styles.userInfoSubContainer}>
                            <View>
                                <Text style={styles.smallHeaderText}>Username</Text>
                                <Text style={styles.userInfoText}>Bradon</Text>
                            </View>
                                
                            <View>
                                <Image source={require("../../assets/icons/pencil.png")} />
                            </View>
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
                                
                            <View>
                                <Image source={require("../../assets/icons/pencil.png")} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.userInfoContainer}>
                        <View style={styles.IconContainer}>
                            <Image source={require("../../assets/icons/phone_xl.png")} style={styles.userIcon}/>
                        </View>
                        <View style={styles.userInfoSubContainer}>
                            <View>
                                <Text style={styles.smallHeaderText}>Number</Text>
                                <Text style={styles.userInfoText}>+237 672 029 789</Text>
                            </View>
                                
                            <View>
                                <Image source={require("../../assets/icons/pencil.png")} />
                            </View>
                        </View>
                    </View>

                    <View style={styles.userInfoContainer}>
                        <View style={[styles.IconContainer,styles.locationIcon]}>
                            <Image source={require("../../assets/icons/location.png")} style={styles.userIcon}/>
                        </View>
                        <View style={styles.userInfoSubContainer}>
                            <View>
                                <Text style={styles.smallHeaderText}>Location</Text>
                                <Text style={styles.userInfoText}>Buea - Cameroon</Text>
                            </View>
                                
                            <View>
                                <Image source={require("../../assets/icons/pencil.png")} />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}