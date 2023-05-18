import { FlatList, Text, TouchableOpacity, View } from "react-native";
import Category from "../../../components/Category/Category";
import { styles } from "./CategoriesSelect.screen.styles";
import Header from "../../../components/Header/Header";
import React from "react";
import { useAppDispatch } from "../../../redux/store/hooks";
import { createUserSlice } from "../../../redux/features/createUserSlice";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { NativeStackParams } from "../../../../App";
import client from "../../../config/axios";


export default function CategoriesSelect(){
    const [categoryData, setCategoryData] = React.useState([])
    const [selectedCategories, setSelectedCategories] = React.useState<string[]>([]);
    const [categoriesArray, setCategoriesArray] = React.useState<string[]>([]);
    const navigation = useNavigation<NativeStackNavigationProp<NativeStackParams>>()
    const dispatch = useAppDispatch()

    React.useEffect(()=> {
        setCategoriesArray([...new Set(selectedCategories)])
        console.log("categoriesArray:",categoriesArray)
        client.get('/category')
        .then((response)=>{
           const data = response.data
            setCategoryData(data)
        })
    },[selectedCategories])

    const handleInterest = (name: string) => {
        if(selectedCategories.includes(name)){
            setSelectedCategories(selectedCategories.filter((c)=> c !== name));
        }
        else 
            setSelectedCategories(prevState =>[...prevState, name])
      
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
                    {/* <BackBtn /> */}
                    <View style={styles.categoriesSelectDescSubContainerOne}>
                        <Text style={styles.categoriesSelectDesc}>What topics are you interested in?</Text>
                        <Text style={styles.categoriesSelectMinText}>Select at least two to continue</Text>
                    </View>
                </View>


                <View style={styles.flatListContainerStyle}>
                    <FlatList data={categoryData} numColumns={2} renderItem={(category) => <Category category={category.item} onPress={()=>handleInterest(category.item.name)}/>} keyExtractor={(item, index) => item._id}/>
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