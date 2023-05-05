import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";


export const styles = StyleSheet.create({
    searchMainContainer : {
        height : "84%",
        backgroundColor : theme.color.neutral_gray_lighter
    },
    searchHeaderContainer : {
        width : "100%",
        height : 70,
        paddingLeft : 36,
        borderBottomWidth : 2,
        borderColor : theme.color.neutral_gray_light,
        flexDirection : "row",
        alignItems : "center",
        gap : 25,
    },
    searchText : {
        fontSize : 14,
        fontWeight : "400",
        color : theme.color.neutral_gray,
        width : "160%",
    },
})