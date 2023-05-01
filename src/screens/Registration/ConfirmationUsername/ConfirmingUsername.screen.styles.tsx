import { StyleSheet } from "react-native";
import { theme } from "../../../theme/theme";


export const styles = StyleSheet.create({
    confirmationContainer: {
        height: "100%",
        paddingHorizontal: 17,
        backgroundColor: "white"
    },
    logoContainer : {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        marginBottom: 48,
    },
    confirmaionText: {
        fontSize: 10,
        color: "black",
        marginTop: 60,
        marginBottom: 10,
    },
    userName : {
        fontSize : 30,
        fontWeight: "500",
        lineHeight: 30,
        width: "85%",
    },
    changeUsernameContainer : {
        backgroundColor: theme.color.neutral_gray_light,
        borderRadius: 15,
    },
    usernameSubContainer : {
        marginBottom: 50,
    },
    continueBtnContainer: {
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    continueBtn: {
        height: "100%",
        width: "100%",
        backgroundColor: theme.color.primary_blue_light,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"

    },
    continueBtnText: {
        fontSize: 18,
        fontWeight: "500",
        color: "white"
    }
})