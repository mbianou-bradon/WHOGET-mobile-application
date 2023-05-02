import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { styles } from "./Filter.component.styles";



export default function Filter() {
    const [selectedCategory, setSelectedCategory] = React.useState("");
    const [selectedLocation, setSelectedLocation] = React.useState("");
    const [selectedTime, setSelectedTime] = React.useState("");


    const categoryTempData = [
        {
            key : "1",
            value: "Photography"
        },
        {
            key : "2",
            value: "Food"
        },
        {
            key : "3",
            value: "Travel"
        },
        {
            key : "4",
            value: "Electronics"
        },
        {
            key : "5",
            value: "Furniture"
        },
        {
            key : "6",
            value: "Movies"
        },
        {
            key : "7",
            value: "Rentals"
        },
        {
            key : "9",
            value: "Pets"
        },
        {
            key : "10",
            value: "Health"
        },
        {
            key : "11",
            value: "Sports"
        },
        {
            key : "12",
            value: "Military"
        },
        {
            key : "13",
            value: "Web Development"
        },
        {
            key : "14",
            value: "Designing"
        },
        {
            key : "15",
            value: "Hair Dressing"
        },
        {
            key : "16",
            value: "Cooking"
        },
        {
            key : "17",
            value: "Education"
        },
        {
            key : "18",
            value: "Copywriting"
        },
        {
            key : "19",
            value: "Football"
        },
        {
            key : "20",
            value: "Musics"
        },
        {
            key : "21",
            value: "Mobile Phones"
        },

    ];

    const locationData = [
        {
            key : "1",
            value: "Bafoussam"
        },
        {
            key : "2",
            value: "Bamenda"
        },
        {
            key : "3",
            value: "Bamenda"
        },
        {
            key : "4",
            value: "Bertoua"
        },
        {
            key : "5",
            value: "Buea"
        },
        {
            key : "6",
            value: "Douala"
        },
        {
            key : "7",
            value: "Ebolowa"
        },
        {
            key : "8",
            value: "Maroua"
        },
        {
            key : "9",
            value: "Garoua"
        },
        {
            key : "10",
            value: "Yaounde"
        },
    ];

    const timeData = [
        {
            key : "1",
            value : "1 day"
        },
        {
            key : "2",
            value : "2 days"
        },
        {
            key : "3",
            value : "3 days"
        },
        {
            key : "4",
            value : "4 days"
        },
        {
            key : "5",
            value : "5 days"
        },
        {
            key : "6",
            value : "6 days"
        },
        {
            key : "7",
            value : "7 days"
        },
    ]

    return (
        <View style={styles.filterContainer}>
            <View>
                <View style={styles.filterSubContainerOne}>
                    <SelectList setSelected={(val : string)=>setSelectedCategory(val)} 
                        data={categoryTempData} save="value" 
                        boxStyles={styles.dropdownContainer} 
                        placeholder="Category"
                        maxHeight={100}
                        dropdownStyles={styles.dropdownStyles}
                        dropdownTextStyles={styles.dropdownTextStyles}
                        inputStyles={styles.inputStyles}
                        arrowicon={<Image source={require("../../assets/icons/downarrow.png")}/>}
                        notFoundText="No Result Found!"
                    />

                    <SelectList setSelected={(val : string)=>setSelectedLocation(val)} 
                        data={locationData} save="value"  
                        placeholder="Location"
                        boxStyles={styles.dropdownContainer} 
                        maxHeight={100}
                        dropdownStyles={styles.dropdownStyles}
                        dropdownTextStyles={styles.dropdownTextStyles}
                        inputStyles={styles.inputStyles}
                        arrowicon={<Image source={require("../../assets/icons/downarrow.png")}/>}
                        notFoundText="No Result Found!"
                    />

                    <SelectList setSelected={(val : string)=>setSelectedTime(val)} 
                        data={timeData} save="value" 
                        boxStyles={styles.dropdownContainer} 
                        placeholder = "Latest date of need" 
                        maxHeight={100}
                        dropdownStyles={styles.dropdownStyles}
                        dropdownTextStyles={styles.dropdownTextStyles}
                        inputStyles={styles.inputStyles}
                        arrowicon={<Image source={require("../../assets/icons/downarrow.png")}/>}
                        notFoundText="No Result Found!"
                    />
                </View>

                <View style={styles.btnMainContainer}>
                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.cancelBtn}>
                            <Text style={styles.cancelBtnText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.btnContainer}>
                        <TouchableOpacity style={styles.filterBtn}>
                            <Text style={styles.filterBtnText}>Apply filter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                
            </View>
        </View>
    )
}