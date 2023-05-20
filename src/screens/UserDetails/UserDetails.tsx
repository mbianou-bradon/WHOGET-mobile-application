import { Image, Text, View, ScrollView, Pressable } from "react-native";
import Header from "../../components/Header/Header";
import { styles } from "./UserDetails.screen.styles";
import Ionic from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcon from "react-native-vector-icons/MaterialCommunityIcons";
import { theme } from "../../theme/theme";
import React from "react";
import client from "../../config/axios";
import { UserType } from "../../../dataType";
import { NativeStackParams } from "../../../App";
import { RouteProp } from "@react-navigation/native";


type AskDetailsScreenRouteProp = RouteProp<NativeStackParams, "UserDetails">;

interface Props {
  route : AskDetailsScreenRouteProp
}

export default function UserDetails({route} : Props){


    const [userProfileInfo, setUserProfileInfo] = React.useState<UserType>() 

    const  id  = route.params.id

    const userId =  id;

    React.useEffect(()=>{

        getUser()
        .then((response)=>{
           const data = response.data.data
           setUserProfileInfo(data);
        })
        .catch((err)=>console.log(err))
    },[id])


    const getUser = () => client.get(`/users/${userId}`);


    return (
        <View>
            <Header/>
            <ScrollView showsVerticalScrollIndicator={false}>
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
                            <View style={{backgroundColor:'white', height:125,width:125,borderRadius:80}}>
                                {
                                    userProfileInfo?.profileImage !== "" || userProfileInfo?.profileImage !== null? <Image source={{uri:userProfileInfo?.profileImage}} style={{width:"100%",height:"100%",borderRadius:80}}/>
                                    : 
                                    <Image source={require("../../assets/images/cloud.png")} style={{width:"100%",height:"100%",borderRadius:80}}/>
                                }
                                
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
                                <Text style={styles.userInfoText}>{userProfileInfo?.username}</Text>
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
                                <Text style={styles.userInfoText}>{userProfileInfo?.email}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.userInfoContainer}>
                        <MaterialCommunityIcon name='phone-settings' size={25} color={theme.color.neutral_black}/>
                        <View style={styles.userInfoSubContainer}>
                            <View>
                                <Text style={styles.smallHeaderText}>Number</Text>
                                <Text style={styles.userInfoText}>+237 {userProfileInfo?.phoneNumber}</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.userInfoContainer}>
                        <Ionic name='location-outline' size={25} color={theme.color.neutral_black}/>
                        <View style={styles.userInfoSubContainer}>
                            <View>
                                <Text style={styles.smallHeaderText}>Location</Text>
                                <Text style={styles.userInfoText}>{`${userProfileInfo?.town} -`} Cameroon</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}