import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";


export const styles = StyleSheet.create({
    askDetailMain : {
        paddingHorizontal : 10,
        backgroundColor : "#F5F5F5",
        height : "100%",
        marginTop: 30,
    },
    headerContainer : {
        flexDirection : "row",
        alignItems : "center",
        gap : 24
    },
    askHeaderStyle : {
        flexDirection: "row",
        gap: 5,
        alignItems: "center"
    },
    profileImageContainer : {
        width: 35,
        height: 35,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: theme.color.neutral_white,
        padding:2,
    },
    profileImage : {
        width: "100%",
        height: "100%",
    },
    askerUsernameStyle : {
        fontSize: 16,
        fontWeight: "500",
        color: theme.color.neutral_black,
    },
    askerCreationDate : {
        fontSize: 10,
        fontWeight: "400"
    },
    askCategoryContainer : {
        marginBottom : 12,
    },
    askCategoryText : {
        fontSize : 10,
        color : theme.color.neutral_black
    },
    askTextContainer : {
        marginVertical : 36
    },
    askText : {
        fontSize : 20,
        color : theme.color.neutral_black,
        lineHeight: 25
    },
    askImageContainer : {
        flexDirection : "row",
        flexWrap: "wrap",
        gap: 10
    },
    askTimeContainer : {
        flexDirection : "row",
        justifyContent : "flex-end",
        alignItems : "flex-end",
    },
    askTimeSubContainer : {
        flexDirection : "row",
        gap: 15
    },
    askTimeText : {
        fontSize: 10,
        color : theme.color.neutral_black
    },
    contactIconsContainer : {
        flexDirection : "row",
        justifyContent: "center",
        alignItems : "center",
        gap : 70,
        marginVertical : 40
    },
    reportContainer : {
        flexDirection: "row",
        alignItems : "center",
        gap : 10
    },
    reportText : {
        fontSize : 18, 
        color : "red"
    }
})