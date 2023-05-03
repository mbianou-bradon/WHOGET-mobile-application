import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";


export const styles = StyleSheet.create({
    headerContainer : {
        height : 150,
        width : "100%",
        backgroundColor : theme.color.primary_blue_light,
        position : "relative",
    },
    headerSubContainer : {
        flexDirection : "row",
        alignItems : "center",
        paddingLeft : 30,
        marginTop : 15,
    },
    headerUsernameContainer : {
        width : "80%",
        flexDirection : "row",
        justifyContent : "center"
    },
    headerUsernameText : {
        fontSize : 24,
        fontWeight : "400",
        color : theme.color.neutral_white,
        textAlign : "center"
    },
    profileImageContainer : {
        width : 138,
        height : 138,
        borderWidth : 1,
        borderColor : theme.color.primary_blue_light,
        borderRadius : 80,
        backgroundColor : theme.color.neutral_white,
        position : "absolute",
        bottom : -68,
        left: 110,
    },
    profileImageSubContainer : {
        position : "relative"
    },
    cameraContainer : {
        width : 51,
        height : 51,
        borderRadius : 50,
        backgroundColor : theme.color.primary_blue_light,
        position : "absolute",
        bottom : -145,
        left : 85
    },
    camera : {
        width: "100%",
        height : "100%",
    },
    bodyContainer : {
        backgroundColor : theme.color.neutral_white,
        height : "100%",
        paddingHorizontal : 30,
        paddingVertical : 100,
        zIndex : -10,
        gap : 25,
    },
    userInfoContainer : {
        flexDirection : "row",
        alignItems : "center",
        gap : 16,
    },
    userInfoSubContainer : {
        width : "90%",
        // backgroundColor : "red",
        flexDirection : "row",
        alignItems : "flex-end",
        justifyContent : "space-between",
        // gap : 16,
    },
    IconContainer : {
        width: 22,
        height: 22,
        
    },
    userIconContainer : {
        borderWidth:1,
        borderRadius: 50,
        padding:2,
    },
    userIcon : {
        width: "100%",
        height: "100%",
    },
    locationIcon : {
        // padding : 2
        height: 23,
        width: 18
    },
    smallHeaderText : {
        fontSize : 14,
        color : theme.color.neutral_gray,
        fontWeight : "500"
    },
    userInfoText : {
        fontSize : 16,
        fontWeight : "500",
        color : theme.color.neutral_black
    },
    pencilIcon : {
        // paddingBottom : 10
    }
})