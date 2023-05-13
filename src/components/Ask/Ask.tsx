import { Image, Pressable, Text, View } from "react-native";
import { styles } from "./Ask.component.styles";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NativeStackParams } from "../../../App";
import { theme } from "../../theme/theme";
import { askType } from "../../../dataType";
import { formatDistance, formatDistanceToNow } from "date-fns";


export default function Ask(props : {data : askType}){

    const navigation = useNavigation<NativeStackNavigationProp<NativeStackParams>>();
    const createDate = new Date(props.data.createdAt);
    const duration = (props.data.duration * 86400000 ) || 0;
    const expiringDate = new Date(createDate.getTime() + duration);

    return(
        <Pressable android_ripple={{color: theme.color.neutral_gray_light}} style={styles.askContainer} onPress={() => navigation.navigate("AskDetails", {id: props.data._id})}>
            <View>
                <View style={styles.askHeaderStyle}>
                    <View style={styles.profileImageContainer}>
                        <Image source={require("../../assets/icons/userIcon.png")} style={styles.profileImage}/>
                    </View>
                    <View>
                        <Text style={styles.askerUsernameStyle}>Mbianou Bradon</Text>
                        <Text style={styles.askerCreationDate}>{formatDistanceToNow(new Date(createDate), {addSuffix:true})}</Text>
                    </View>
                </View>
                <View style={styles.askCategoryContainer}>
                    <Text style={styles.askCategoryText}>#{props.data.category}</Text>
                </View>
                <View>
                    <Text style={styles.askBodyText}>
                        {props.data.message}
                    </Text>
                </View>
                <View style={styles.askExpiringDateContainer}>
                    <Text style={styles.askExpiringDateText}>expires in {formatDistance(createDate, expiringDate)}</Text>
                </View>
            </View>
        </Pressable>
    )
}