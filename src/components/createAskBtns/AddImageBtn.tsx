import { Pressable } from "react-native";
import MdIcon from "react-native-vector-icons/MaterialIcons"
import { styles } from "./AddImageBtn.component.styles";
import { theme } from "../../theme/theme";

interface ChildProps {
    onPress : () => void
}

export default function AddImageBtn(props:{onPress: any}) {
    return (
      <Pressable
        style={styles.addImageBtn}
        onPress={()=>props.onPress()}>
        <MdIcon
          name="add-photo-alternate"
          size={35}
          color={theme.color.primary_blue_light}
        />
      </Pressable>
    );
  };