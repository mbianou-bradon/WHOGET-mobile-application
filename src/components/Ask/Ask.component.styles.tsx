import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    askContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: "white",
        marginBottom: 9,
    },
    askHeaderStyle : {
        flexDirection: "row",
        gap: 5,
        alignItems: "center"
    },
    profileImageContainer : {
        width: 42,
        height: 42,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: "white",
        padding:2,
    },
    profileImage : {
        width: "100%",
        height: "100%",
    },
    askerUsernameStyle : {
        fontSize: 16,
        fontWeight: "500",
        color: "black"
    },
    askerCreationDate : {
        fontSize: 10,
        fontWeight: "400"
    },
    askCategoryContainer: {
        paddingVertical: 7
    },
    askCategoryText : {
        fontSize: 10,
        color: "#11A6DF"
    },
    askBodyContainer: {},
    askBodyText : {
        fontSize: 20,
        fontWeight: "400",
        color: "black",
        lineHeight: 25
    },
    askExpiringDateContainer : {
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        paddingRight: 60,
        paddingTop: 4,
    },
    askExpiringDateText: {
        fontSize: 10,
        fontWeight: "400",
        color: "#11A6DF",
    }
})