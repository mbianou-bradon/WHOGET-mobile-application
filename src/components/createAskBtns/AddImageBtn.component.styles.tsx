import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";


export const styles = StyleSheet.create({
    addImageBtn : {
        width: 60,
        height: 60,
        borderWidth: 1,
        borderColor: theme.color.primary_blue_light,
        borderRadius: 10,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
    },
})