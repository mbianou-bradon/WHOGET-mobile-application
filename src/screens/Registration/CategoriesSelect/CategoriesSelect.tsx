import { FlatList, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Category from "../../../components/Category/Category";
import { CategoryType } from "../../../../dataType";
import { styles } from "./CategoriesSelect.screen.styles";
import Header from "../../../components/Header/Header";
import BackBtn from "../../../components/backBtn/backBtn";
import React from "react";
import { useAppDispatch } from "../../../redux/store/hooks";
import { createUserSlice } from "../../../redux/features/createUserSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NativeStackParams } from "../../../../App";


export default function CategoriesSelect(){
    const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
    const [categoriesArray, setCategoriesArray] = React.useState<string[]>([]);
    const navigation = useNavigation<NativeStackNavigationProp<NativeStackParams>>()
    const dispatch = useAppDispatch()

    React.useEffect(()=> {
        setCategoriesArray([...new Set(selectedCategories)])
        console.log("categoriesArray:",categoriesArray)
    },[selectedCategories])


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
        {
            _id : "14",
            name: "Designing"
        },
        {
            _id : "15",
            name: "Hair Dressing"
        },
        {
            _id : "16",
            name: "Cooking"
        },
        {
            _id : "17",
            name: "Education"
        },
        {
            _id : "18",
            name: "Copywriting"
        },
        {
            _id : "19",
            name: "Football"
        },
        {
            _id : "20",
            name: "Musics"
        },
        {
            _id : "21",
            name: "Mobile Phones"
        },

    ]
    const handleInterest = (name: string) => {
        setSelectedCategories(prevState =>[...prevState, name])
        console.log("selectedCategories:",selectedCategories)
        
    }
   
    const handleNextScreen = () => {
        dispatch(createUserSlice.actions.createNewUser({key:"category", value:`${categoriesArray}`}))
        navigation.navigate("HowToContact");
    }
    
    
    
    

    

    return (
        <View>
            <Header/>
            <View style={styles.categoriesSelectContainer}>
                <View style={styles.categoriesSelectDescContainer}>
                    <BackBtn />
                    <View style={styles.categoriesSelectDescSubContainerOne}>
                        <Text style={styles.categoriesSelectDesc}>What topics are you interested in?</Text>
                        <Text style={styles.categoriesSelectMinText}>Select at least two to continue</Text>
                    </View>
                </View>


                <View style={styles.flatListContainerStyle}>
                    <FlatList data={categoryTempData} numColumns={2} renderItem={(category) => <Category category={category.item} onPress={()=>handleInterest(category.item.name)}/>} keyExtractor={(item, index) => item._id}/>
                </View>

                <View style={styles.continueBtnContainer}>
                    <TouchableOpacity style={styles.continueBtn} onPress={handleNextScreen}>
                        <Text style={styles.continueBtnText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
        
    )
}