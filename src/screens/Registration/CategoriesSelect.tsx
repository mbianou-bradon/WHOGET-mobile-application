import { FlatList, ScrollView, View } from "react-native";
import Category from "../../components/Category/Category";
import { CategoryType } from "../../../dataType";
import { styles } from "../../../CategoriesSelect.screen.styles";


export default function CategoriesSelect(){

    const categoryTempData : CategoryType[] = [
        {
            _id : "1",
            name: "Photography"
        },
        {
            _id : "2",
            name: "Food"
        },
        {
            _id : "3",
            name: "Travel"
        },
        {
            _id : "4",
            name: "Electronics"
        },
        {
            _id : "5",
            name: "Furniture"
        },
        {
            _id : "6",
            name: "Movies"
        },
        {
            _id : "7",
            name: "Rentals"
        },
        {
            _id : "9",
            name: "Pets"
        },
        {
            _id : "10",
            name: "Health"
        },
        {
            _id : "11",
            name: "Sports"
        },
        {
            _id : "12",
            name: "Military"
        },
        {
            _id : "13",
            name: "Web Development"
        },

    ]


    return (
        <View>
            <FlatList data={categoryTempData} numColumns={2} renderItem={(category) => <Category category={category.item}/>} keyExtractor={(item, index) => item._id}/>
            {/* <ScrollView style={styles.scrollViewContainerStyle} col>
                {
                    categoryTempData.map(category => <Category key={category._id} category={category}/>)
                }
            </ScrollView> */}
        </View>
        
    )
}