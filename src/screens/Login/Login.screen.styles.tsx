import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
    loginContainer : {
        height: "100%",
        width: "100%",
        paddingHorizontal: 10,
        paddingBottom: 10,
        position: "relative"
    },
    logoContainer : {
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 100,
        marginBottom: 48,
    },
    loginOptionsContainer : {
        marginTop: 50,
        gap: 20,

    },
    loginDescription : {
        fontSize : 24,
        fontWeight: "500",
        lineHeight: 30,
        width: "85%",
    },
    loginOptions: {
        flexDirection: "row",
        gap: 19,
        alignItems: "center",
        paddingVertical: 24,
        paddingHorizontal: 42,
        backgroundColor: "#EEEEEE",
        borderRadius: 15,
    },
    loginOptionsText : {
        fontSize: 14,
        fontWeight: "500",
        color: "#B6B4B4"
    },
    policyContainer : {
        width: "100%",
        justifyContent: "center",
        alignItems:"center",
        
    },
    policyText : {
        width: "85%",
        fontSize: 12,
        color: "black",
        fontWeight: "500",
    },

    footer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 0,
        paddingStart: 10,
        paddingBottom: 10,

    },
    footerText : {
        fontSize: 12,
        color: "black",
        fontWeight: "500"
    }
})