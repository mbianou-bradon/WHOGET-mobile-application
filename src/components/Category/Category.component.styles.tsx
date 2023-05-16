import { StyleSheet } from "react-native"
import { theme } from "../../theme/theme"

export const styles = StyleSheet.create({
    categoryContainer: {
        borderWidth: 1,
        borderColor: theme.color.primary_blue_light,
        borderRadius: 15,
        width: 170,
        height: 55,
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 15,
        marginHorizontal: 3,
        position: "relative"
    },
    categoryText : {
        fontSize: 18,
        fontWeight: "500",
        color: theme.color.primary_blue_light,
    },
    checkStyles: {
        position: "absolute",
        top: 2,
        right: 2,
        width: 16,
        height: 16,
        backgroundColor: theme.color.primary_blue_light,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    }
})