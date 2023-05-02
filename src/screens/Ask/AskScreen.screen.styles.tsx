import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";


export const styles = StyleSheet.create({
    AskMainContainer : {
        height : "100%", 
        paddingHorizontal : 10,

    },
    AskSubContainerOne : {
        flexDirection : "row",
        alignItems : "center",
        gap : 15,
        paddingVertical : 14
    },
    tipsContainer : {
        width : "90%",
        backgroundColor : theme.color.neutral_white,
        paddingVertical : 8,
        paddingHorizontal : 13,
    },
    tipsSubContainer : {
        paddingHorizontal : 8,
    },
    tipsText : {
        fontSize : 10,
        color : theme.color.neutral_black,
    },
    AskTextContainer : {
        height: 150,
        backgroundColor: theme.color.neutral_white,
        marginBottom : 12,
        borderRadius : 10, 
        paddingHorizontal : 5,
    },
    AskText : {
        fontSize : 12,
        
    },
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
    inputStyles : {
        color: theme.color.neutral_gray
    },
    noticeContainer : {
        marginTop : -10,
        marginBottom : 12,
        paddingHorizontal : 14,
    },
    noticeText : {
        fontSize : 8,
        color : theme.color.neutral_black
    },
    uploadContainer : {
        justifyContent : "center",
        alignItems : "center",
        gap : 10
    },
    askBtnContainer: {
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        marginVertical : 10
    },
    askBtn: {
        height: "100%",
        width: "80%",
        backgroundColor: theme.color.primary_blue_light,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"

    },
    askBtnText: {
        fontSize: 18,
        fontWeight: "500",
        color: theme.color.neutral_white
    }
})