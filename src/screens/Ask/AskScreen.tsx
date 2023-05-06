import { FlatList, Image, Pressable, ScrollView, Text, TouchableOpacity, View } from "react-native";
import Header from "../../components/Header/Header";
import { TextInput } from "react-native-gesture-handler";
import { styles } from "./AskScreen.screen.styles";
import DropDownPicker from "react-native-dropdown-picker";
import React from "react";
import { categoryTempData, locationData, timeData } from "../../data/standardData";
import BackBtn from "../../components/backBtn/backBtn";
import Ionic from "react-native-vector-icons/Ionicons"
import ImagePicker from "react-native-image-crop-picker"


export default function AskScreen(){
    const [openCategory, setOpenCategory] = React.useState(false);
    const [openLocation, setOpenLocation] = React.useState(false);
    const [openTime, setOpenTime] = React.useState(false);
    const [categoryValue, setCategoryValue] = React.useState(null);
    const [locationValue, setLocationValue] = React.useState(null);
    const [timeValue, setTimeValue] = React.useState(null);

    const [categoryItems, setCategoryItems] = React.useState(categoryTempData);
    const [locationItems, setLocationItems] = React.useState(locationData);
    const [timeItems, setTimeItems] = React.useState(timeData);


    function handleImageUpload(){
        console.log("handle Image executed")
        ImagePicker.openPicker({
            // width : 300,
            // height : 400,
            cropping : false,
        })
        .then(image => {
            console.log(image.filename)
            SetSelectImageList((prevImage)=>[
                {
                    fileName: image.filename,
                    path: image.path,
                    height: image.height,
                    width: image.width,
                    size: image.size
                },
                ...prevImage
            ])
        })
    }

    // Upload Picture Button

    function UploadPicture(){

        return(
            <Pressable style={[styles.dropdownContainer,styles.uploadContainer]} onPress={()=>handleImageUpload()}>
                <Ionic name='cloud-upload-outline' size={20}/>
                <Text>Upload picture</Text>
            </Pressable>
        )
    } 

    const [selectedImageList, SetSelectImageList] = React.useState<any[]>([<UploadPicture/>])

    return (
        <View>
            <Header/>
            <ScrollView style={styles.AskMainContainer} showsVerticalScrollIndicator={false}>
                <View style={styles.AskSubContainerOne}>
                    <BackBtn/>
                    <View style={styles.tipsContainer}>
                        <Text>Tips</Text>
                        <View style={styles.tipsSubContainer}>
                            <View>
                                <View></View>
                                <Text style={styles.tipsText}>Start your question with where, who etc</Text>
                            </View>
                            <View>
                                <View></View>
                                <Text style={styles.tipsText}>Keep questions short and straight to the point</Text>
                            </View>
                            <View>
                                <View></View>
                                <Text style={styles.tipsText}>Check Spelling</Text>
                            </View>
                        </View>  
                    </View>
                </View>
                

                {/* Question area for the ask */}
                <View style={styles.AskTextContainer}>
                    <TextInput placeholder="Enter your question here" multiline style={styles.AskText}/>
                </View>
                <View>
                    
                    {/* Category dropdown */}
                    <DropDownPicker
                        schema={{label: 'value', value: 'key'}}
                        open={openCategory}
                        value={categoryValue}
                        items={categoryItems}
                        setOpen={setOpenCategory}
                        setValue={setCategoryValue}
                        setItems={setCategoryItems}
                        listMode="FLATLIST"
                        searchable
                        placeholder="Category"
                        style={styles.dropdownContainer}
                        ArrowDownIconComponent={() => (
                        <Image source={require('../../assets/icons/downarrow.png')} />
                        )}
                        placeholderStyle={styles.inputStyles}
                    />

                        {/* Location dropdown */}
                    <DropDownPicker
                        schema={{label: 'value', value: 'key'}}
                        open={openLocation}
                        value={locationValue}
                        items={locationItems}
                        setOpen={setOpenLocation}
                        setValue={setLocationValue}
                        setItems={setLocationItems}
                        listMode="MODAL"
                        searchable
                        placeholder="Location"
                        style={styles.dropdownContainer}
                        ArrowDownIconComponent={() => (
                        <Image source={require('../../assets/icons/downarrow.png')} />
                        )}
                        placeholderStyle={styles.inputStyles}
                    />


                    {/* How long ask will last dropdown */}
                    <DropDownPicker
                        schema={{label: 'value', value: 'key'}}
                        open={openTime}
                        value={timeValue}
                        items={timeItems}
                        setOpen={setOpenTime}
                        setValue={setTimeValue}
                        setItems={setTimeItems}
                        listMode="MODAL"
                        searchable
                        placeholder="Latest date of need"
                        style={styles.dropdownContainer}
                        selectedItemLabelStyle={styles.inputStyles}
                        ArrowDownIconComponent={() => (
                        <Image source={require('../../assets/icons/downarrow.png')} />
                        )}
                        placeholderStyle={styles.inputStyles}
                    />
                </View>

                {/* Upload picture */}
                <View>
                    <FlatList 
                        data={selectedImageList}
                        renderItem={
                            ({item})=> {
                                return item.path? (
                                <View>
                                    <Image source={{ uri: item.path }}/>
                                </View>
                                ) : (
                                    item
                                );
                            }
                        }
                    />
                </View>
                
                <View>
                    <View style={styles.askBtnContainer}>
                        <TouchableOpacity style = {styles.askBtn}>
                            <Text style={styles.askBtnText}>Ask</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}