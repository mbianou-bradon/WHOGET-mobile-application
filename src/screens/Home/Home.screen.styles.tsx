import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";


export const styles = StyleSheet.create({
    homeContainer : {
        height: "100%",
        paddingHorizontal: 10,
        backgroundColor: "#F0F0F0"
    },
    homeSubContainerOne : {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 21,
    },

    profileImageContainer : {
        width: 42,
        height: 42,
        borderWidth:1,
        borderRadius: 50,
        backgroundColor: "white",
        padding:2
    },
    profileImage : {
        width: "100%",
        height: "100%",
    },
    searchContainer: {
        flexDirection: "row",
        gap: 5,
        alignItems: "center",
        backgroundColor: "white",
        width: "65%",
        height: 42,
        paddingHorizontal: 15,
        borderRadius: 15
    },
    searchIconContainer : {
        width: 15,
        height: 15,
        padding: 0.5,
    },
    searchIcon: {
        width: "100%",
        height: "100%"
    },
    searchText : {
        color: "#B6B4B4",
        fontWeight: "500",
        width: "100%"
    },
    askQuestionContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        height: 54,
        borderRadius: 15,
        justifyContent: "space-between"
    },
    askQuestionSubContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30
    },
    askQuestionSubContainerText : {
        fontSize: 20,
        fontWeight: "500",
        color: "#B6B4B4"
    },
    askQuestionSubContainerTwo: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
        backgroundColor: theme.color.primary_blue_light,
        borderRadius: 15,
    },
    askQuestionSubContainerTwoText : {
        fontSize: 20,
        fontWeight: "500",
        color: "white"
    },
    askContainer : {
        marginVertical: 20
    }
})