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
    },
    categoryText : {
        fontSize: 18,
        fontWeight: "500",
        color: theme.color.primary_blue_light,
    }
})