import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";


export const styles = StyleSheet.create({
    aboutMainContainer : {
        height : "100%",
        backgroundColor : theme.color.neutral_white,
        paddingHorizontal : 25,
        paddingBottom : 16,
    },
    textContainerOne : {
        marginTop : 20,
        gap: 20
    },
    aboutText : {
        fontSize : 16,
        fontWeight : "400",
        color : theme.color.neutral_black,
        lineHeight : 25,
    },
    logoContainer : {
        marginVertical : 30,
        justifyContent: "center",
        alignItems : "center"
    }
})