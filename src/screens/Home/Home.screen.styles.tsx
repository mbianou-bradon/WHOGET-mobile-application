import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";


export const styles = StyleSheet.create({
    homeContainer : {
        height: "85%",
        paddingHorizontal: 10,
        backgroundColor: "#F0F0F0",
    },
    homeSubContainerOne : {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 15,
    },

    profileImageContainer : {
        width: 42,
        height: 42,
        borderWidth:1,
        borderRadius: 50,
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
        backgroundColor: theme.color.neutral_white,
        width: "65%",
        height: 42,
        paddingHorizontal: 15,
        borderRadius: 10
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
        backgroundColor: theme.color.neutral_white,
        height: 44,
        borderRadius: 10,
        justifyContent: "space-between"
    },
    askQuestionSubContainer: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30
    },
    askQuestionSubContainerText : {
        fontSize: 18,
        fontWeight: "500",
        color: "#B6B4B4"
    },
    askQuestionSubContainerTwo: {
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 30,
        backgroundColor: theme.color.primary_blue_light,
        borderRadius: 10,
    },
    askQuestionSubContainerTwoText : {
        fontSize: 20,
        fontWeight: "500",
        color: theme.color.neutral_white
    },
    askContainer : {
        marginVertical: 20
    }
})