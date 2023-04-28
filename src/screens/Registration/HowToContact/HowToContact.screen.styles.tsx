import { StyleSheet } from "react-native";


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
        color: "#11A6DF",
        lineHeight: 37,
        textAlign: "center",
        marginBottom: 10,
    },
    howToContactMinText: {
        fontSize: 14,
        color: "#11A6DF",
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
        backgroundColor: "#EEEEEE",
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
        backgroundColor: "#11A6DF",
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