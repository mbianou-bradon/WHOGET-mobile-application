import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";


export const styles = StyleSheet.create({
    filterContainer: {
        width: "100%",
        paddingTop : 40,
        paddingHorizontal: 15,
        backgroundColor : theme.color.primary_blue_light,
        borderRadius : 10
    },
    filterSubContainerOne : {
        marginBottom : 50
    },
    dropdownContainer : {
        borderWidth : 1,
        borderColor : theme.color.primary_blue_light,
        borderRadius : 15,
        height: 55,
        flexDirection: "row",
        alignItems : "center",
        marginBottom : 10
    },
    dropdownStyles : {
        marginTop : -8,
        marginBottom : 5,
        borderColor : theme.color.primary_blue_light,
        zIndex: 99
    },
    dropdownTextStyles : {
        color : theme.color.primary_blue_light
    },
    inputStyles : {
        color: theme.color.primary_blue_light
    },
    btnMainContainer : {
        flexDirection : "row",
        justifyContent : "space-between",
        marginBottom : 20,
    },
    btnContainer: {
        width: "45%",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
    },
    cancelBtn: {
        height: 40,
        width: "100%",
        backgroundColor: theme.color.neutral_white,
        borderWidth : 1,
        borderColor : theme.color.primary_blue_light,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center"

    },
    filterBtn: {
        height: 40,
        width: "100%",
        backgroundColor: theme.color.primary_blue_light,
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth:1,
        borderColor : theme.color.neutral_white

    },
    cancelBtnText: {
        fontSize: 14,
        fontWeight: "500",
        color: theme.color.primary_blue_light
    },
    filterBtnText: {
        fontSize: 14,
        fontWeight: "500",
        color: theme.color.neutral_white
    }
})