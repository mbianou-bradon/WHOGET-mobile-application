import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";


export const styles = StyleSheet.create({
    dropdownContainer : {
        height : 50,
        backgroundColor : theme.color.neutral_white,
        marginBottom : 12,
        paddingHorizontal : 14,
        flexDirection : "row",
        alignItems : "center",
        borderWidth : 0,
        borderRadius : 10
    },
    uploadContainer : {
        justifyContent : "center",
        alignItems : "center",
        gap : 10
    },
})