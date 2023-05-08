import { Image, Text, View, ScrollView, Modal, Pressable } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "./Profile.screen.styles";
import Ionic from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcon from "react-native-vector-icons/EvilIcons"
import { theme } from "../../theme/theme";
import React from "react";
import ImagePicker from "react-native-image-crop-picker"


export default function Profile(){
    const profile = require("../../assets/icons/search.png")
    const [isProfileModalOpen, setIsProfileModalOpen] = React.useState(false)
    const [profileImage, setProfileImage] = React.useState('file:///storage/emulated/0/Android/data/com.whogetmobileapplication/files/Pictures/image-3053ca79-f298-4d1e-93b7-b85f258dccd92343739600252528079.jpg');

    const handleProfileModal = () => {
        if(isProfileModalOpen)
            setIsProfileModalOpen(!isProfileModalOpen)
        else
            setIsProfileModalOpen(!isProfileModalOpen)
    }

    const handleCameraImage = () => {
        ImagePicker.openCamera({
            width: 300,
            height: 400,
            cropping: false,
        })
        .then(image => {
        console.log(image);
        setProfileImage(image.path);
        setIsProfileModalOpen(false)
        console.log(profileImage)
        });
        
    }

    const handleProfileImageUpload = ()=> {
        ImagePicker.openPicker({
            width: 300,
            height: 400,
            cropping: false
        })
        .then(image => {
            console.log(image);
            setProfileImage(image.path);
            setIsProfileModalOpen(false)
        });
        
    }
    
    // console.log(profileImage)

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
                            <View style={{backgroundColor:'red', height:125,width:125,borderRadius:80}}>
                                <Image source={{uri:profileImage}} style={{width:"100%",height:"100%",borderRadius:80}}/>
                            </View>
                            <Pressable style={styles.cameraContainer} onPress={handleProfileModal}>
                                <EvilIcon name="camera" size={38} color={theme.color.neutral_white}/>
                            </Pressable>
                        </View>
                    </View>
                </View>
                {
                    isProfileModalOpen &&
                    <Modal 
                        transparent
                        visible={isProfileModalOpen}
                        animationType="fade"
                        onRequestClose={()=>setIsProfileModalOpen(false)}
                    >
                        <View style={styles.profileModalContainer}>
                            <Pressable style={{height:"100%", backgroundColor:"black",opacity:0.4}} onPress={handleProfileModal}></Pressable>
                            <View style={styles.profileModalContainerChooses}>
                                <Pressable style={styles.modalChooses} android_ripple={{color : theme.color.primary_blue_light}} onPress={handleCameraImage}>
                                    <Text>Take photo</Text>
                                </Pressable>
                                <Pressable style={styles.modalChooses} android_ripple={{color : theme.color.primary_blue_light}} onPress={handleProfileImageUpload}>
                                    <Text>Choose existing photo</Text>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                }

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

                {/* <Image source={{uri:profileImage}}/> */}
            </ScrollView>
        </View>
    )
}