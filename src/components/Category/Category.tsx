import { Text, View } from "react-native";
import { styles } from "./Category.component.styles";
import { CategoryType } from "../../../dataType";


export default function Category(props : { category: CategoryType }){

    return (
        <View style={styles.categoryContainer}>
            <Text style={styles.categoryText}>{props.category.name}</Text>
        </View>
    )
}