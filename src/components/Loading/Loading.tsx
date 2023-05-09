import { ActivityIndicator, View } from "react-native"
import styles from "./Loading.component.styles"


const LoadingScreen = () => {
    return (
    <View>
        <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color={styles.activityColor.color}/>
        </View>
    </View>
    )
}

export default LoadingScreen