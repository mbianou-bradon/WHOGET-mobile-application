import { Pressable, Text } from "react-native";
import { styles } from "./Category.component.styles";
import { CategoryType } from "../../../dataType";


export default function Category(props : { category: CategoryType, onPress : any }){

    return (
        <Pressable style={styles.categoryContainer} onPress={()=>props.onPress()}>
            <Text style={styles.categoryText}>{props.category.name}</Text>
        </Pressable>
    )
}