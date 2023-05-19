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
    const user = props.data.user
   let  message = props.data.message
   let anonymous = `Anomymous${user._id}`

   if(message.length > 100)
        message = message.slice(0, 50) + "..."
    if(anonymous.length > 30)
        anonymous = anonymous.slice(0, 13)
    return(
        <Pressable android_ripple={{color: theme.color.neutral_gray_light}} style={styles.askContainer} onPress={() => navigation.navigate("AskDetails", {id: props.data._id})}>
            <View>
                <View style={styles.askHeaderStyle}>
                    <View style={styles.profileImageContainer}>
                        {user.profileImage !=="" ||user.profileImage?
                            <Image source={{uri:user.profileImage}} style={styles.profileImage}/>
                            :
                            <Image
                            source={require('../../assets/icons/userIcon.png')}
                            style={styles.profileImage}
                            />
                      }
                        {/* <Image source={require("../../assets/icons/userIcon.png")} style={styles.profileImage}/> */}
                    </View>
                    <View>
                        <Text style={styles.askerUsernameStyle}>{user.username? `${user.username}` : `${anonymous}`}</Text>
                        <Text style={styles.askerCreationDate}>{formatDistanceToNow(new Date(createDate), {addSuffix:true})}</Text>
                    </View>
                </View>
                <View style={styles.askCategoryContainer}>
                    <Text style={styles.askCategoryText}>#{props.data.category}</Text>
                </View>
                <View>
                    <Text style={styles.askBodyText}>
                        {message}
                    </Text>
                </View>
                <View style={styles.askExpiringDateContainer}>
                    <Text style={styles.askExpiringDateText}>expires in {formatDistance(createDate, expiringDate)}</Text>
                </View>
            </View>
        </Pressable>
    )
}