import { Image, Text, View, ScrollView, Modal, Pressable, TouchableOpacity } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "./UserDetails.screen.styles";
import Ionic from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import EvilIcon from "react-native-vector-icons/EvilIcons"
import { theme } from "../../theme/theme";
import React from "react";
import ImagePicker from "react-native-image-crop-picker"
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import { useAppDispatch } from "../../redux/store/hooks";
import { createUserSlice } from "../../redux/features/createUserSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { TabStackParams } from "../../../App";
import { store } from "../../redux/store/store";
import client from "../../config/axios";
import { UserType } from "../../../dataType";


export default function UserDetails(){
    const profile = require("../../assets/icons/search.png")
    const [isProfileModalOpen, setIsProfileModalOpen] = React.useState(false)
    
    const dispatch = useAppDispatch();
    const navigation = useNavigation<NativeStackNavigationProp<TabStackParams>>()
    const [userProfileInfo, setUserProfileInfo] = React.useState<UserType>() 
    
    const currentUserInfo = store.getState().userReducer.currentUser
    console.log(currentUserInfo)
    const [profileImage, setProfileImage] = React.useState(currentUserInfo.profileImage);
    // const  id  = route.params.id

    const userId =  currentUserInfo._id

    React.useEffect(()=>{

        getUser()
        .then((response)=>{
           const data = response.data.data
           setUserProfileInfo(data);
        })
        .catch((err)=>console.log(err))
    },[])


    const getUser = () => client.get(`/users/${userId}`)
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
    
    const handleLogout = async() => {
        await GoogleSignin.signOut()
        .then(()=>{
            dispatch(createUserSlice.actions.globalAuth(false));
            dispatch(createUserSlice.actions.currentUser({}))
        })
        .catch((err)=> console.log(err))
        .finally(()=>{
            navigation.navigate("Home");
        })
    }

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
                            <Text style={styles.headerUsernameText}>{userProfileInfo?.username}</Text>
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
                                <Text style={styles.userInfoText}>{userProfileInfo?.username}</Text>
                            </View>
                                
                            {/* <MaterialCommunityIcon name='pencil-outline' color={theme.color.neutral_black}/> */}
                        </View>
                    </View>

                    <View style={styles.userInfoContainer}>
                        <View style={styles.IconContainer}>
                            <Image source={require("../../assets/icons/google.png")} style={styles.userIcon}/>
                        </View>
                        <View style={styles.userInfoSubContainer}>
                            <View>
                                <Text style={styles.smallHeaderText}>Email</Text>
                                <Text style={styles.userInfoText}>{userProfileInfo?.email}</Text>
                            </View>
                                
                            {/* <MaterialCommunityIcon name='pencil-outline' color={theme.color.neutral_black}/> */}
                        </View>
                    </View>

                    <View style={styles.userInfoContainer}>
                        <MaterialCommunityIcon name='phone-settings' size={25} color={theme.color.neutral_black}/>
                        <View style={styles.userInfoSubContainer}>
                            <View>
                                <Text style={styles.smallHeaderText}>Number</Text>
                                <Text style={styles.userInfoText}>+237 {userProfileInfo?.phoneNumber}</Text>
                            </View>
                                
                            {/* <MaterialCommunityIcon name='pencil-outline' color={theme.color.neutral_black}/> */}
                        </View>
                    </View>

                    <View style={styles.userInfoContainer}>
                        <Ionic name='location-outline' size={25} color={theme.color.neutral_black}/>
                        <View style={styles.userInfoSubContainer}>
                            <View>
                                <Text style={styles.smallHeaderText}>Location</Text>
                                <Text style={styles.userInfoText}>{`${userProfileInfo?.town} -`} Cameroon</Text>
                            </View>
                                
                            {/* <MaterialCommunityIcon name='pencil-outline' color={theme.color.neutral_black}/> */}
                        </View>
                    </View>

                    <TouchableOpacity style={{marginTop:40}} onPress={handleLogout}>
                        <Text style={{textAlign:"right", color:"red"}}>Log Out</Text>
                    </TouchableOpacity>
                </View>
                {/* <Image source={{uri:profileImage}}/> */}
            </ScrollView>
        </View>
    )
}