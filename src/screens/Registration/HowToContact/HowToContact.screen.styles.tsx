import { StyleSheet } from "react-native";
import { theme } from "../../../theme/theme";


export const styles = StyleSheet.create({
    howToContactContainer: {
        height: "100%",
        paddingHorizontal: 5,
        paddingVertical: 30,
    },
    howToContactDescContainer: {
        paddingBottom: 34,
    },
    howToContactDescSubContainerOne: {
        justifyContent: "center",
        alignItems: "center",
    },
    howToContactDescSubContainerTwo: {
        paddingHorizontal: 35,
    },
    howToContactDesc: {
        width: "80%",
        fontSize: 28,
        color: theme.color.primary_blue_light,
        lineHeight: 37,
        textAlign: "center",
        marginBottom: 10,
    },
    howToContactMinText: {
        fontSize: 14,
        color: theme.color.primary_blue_light,
        textAlign: "center",
    },
    contactOptionsContainer: {
        gap: 22,
        marginBottom: 60
    },
    contactOptions: {
        flexDirection: "row",
        gap: 19,
        alignItems: "center",
        height: 62,
        paddingHorizontal: 22,
        backgroundColor: theme.color.neutral_gray_light,
        borderRadius: 15,
    },
    continueBtnContainer: {
        height: "15%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    continueBtn: {
        height: 55,
        width: "100%",
        backgroundColor: theme.color.primary_blue_light,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"

    },
    continueBtnText: {
        fontSize: 20,
        fontWeight: "500",
        color: "white"
    }
})