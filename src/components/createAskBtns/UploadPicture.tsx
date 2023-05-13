import { Pressable, Text } from "react-native";
import Ionic from "react-native-vector-icons/Ionicons"
import { styles } from "./UploadPicture.component.styles";

interface ChildProps {
    onPress : () => void
}

export default  function UploadPicture(props: {onPress : any}) {
    return (
      <Pressable
        style={[styles.dropdownContainer, styles.uploadContainer]}
        onPress={() => props.onPress()}>
        <Ionic name="cloud-upload-outline" size={20} />
        <Text>Upload picture</Text>
      </Pressable>
    );
  }