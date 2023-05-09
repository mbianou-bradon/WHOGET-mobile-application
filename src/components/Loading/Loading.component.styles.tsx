import { StyleSheet } from "react-native";
import { theme } from "../../theme/theme";


const styles = StyleSheet.create({
    loadingContainer: {
        backgroundColor:theme.color.primary_blue_light, 
        height:"100%", justifyContent:"center"
    },
    activityColor : {
        color : theme.color.neutral_white
    }
})

export default styles