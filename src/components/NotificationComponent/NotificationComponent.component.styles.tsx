import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";


export const styles = StyleSheet.create({
    notificationContainer: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: theme.color.neutral_gray_lighter,
        marginBottom: 5,
    },
    notificationSubContainer : {
        flexDirection: "row",
        alignItems: "center",
        justifyContent : "space-between",
    },
    notificationHeaderStyle : {
        flexDirection: "row",
        gap: 5,
        alignItems: "center"
    },
    profileImageContainer : {
        width: 32,
        height: 32,
        borderWidth: 1,
        borderRadius: 50,
        // backgroundColor: theme.color.neutral_white,
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
    threedotsContainer : {
        width : 40,
        height : 30,
    },
    threedotsIcon : {
        width : "100%",
        height : "100%",
        transform: [{rotate: '90deg'}]
    },
    askCategoryContainer: {
        paddingVertical: 7,
        flexDirection : "row",
        gap : 5
    },
    askCategoryText : {
        fontSize: 10,
        color: theme.color.primary_blue_light
    },
    askBodyContainer: {},
    askBodyText : {
        fontSize: 20,
        fontWeight: "400",
        color: theme.color.neutral_black,
        lineHeight: 25
    },
    askExpiringDateContainer : {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingRight: 20,
        paddingTop: 4,
    },
    askExpiringDateText: {
        fontSize: 10,
        fontWeight: "400",
        color: theme.color.primary_blue_light,
    }
})