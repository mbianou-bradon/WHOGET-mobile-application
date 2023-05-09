import {
    ActivityIndicator,
  FlatList,
  Image,
  Pressable,
  ScrollView,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header/Header';
import {TextInput} from 'react-native-gesture-handler';
import {styles} from './AskScreen.screen.styles';
import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react';
import {
  categoryTempData,
  locationData,
  timeData,
} from '../../data/standardData';
import BackBtn from '../../components/backBtn/backBtn';
import Ionic from 'react-native-vector-icons/Ionicons';
import MdIcon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import {theme} from '../../theme/theme';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TabStackParams } from '../../../App';
import client from '../../config/axios';

export default function AskScreen() {
  const [openCategory, setOpenCategory] = React.useState(false);
  const [openLocation, setOpenLocation] = React.useState(false);
  const [openTime, setOpenTime] = React.useState(false);
  const [categoryValue, setCategoryValue] = React.useState(null);
  const [locationValue, setLocationValue] = React.useState(null);
  const [timeValue, setTimeValue] = React.useState(null);
  const [askMessage, setAskMessage] = React.useState("");

  const [categoryItems, setCategoryItems] = React.useState(categoryTempData);
  const [locationItems, setLocationItems] = React.useState(locationData);
  const [timeItems, setTimeItems] = React.useState(timeData);
  const [isLoading, setIsLoading] = React.useState<boolean>(false)


  const navigation = useNavigation<NativeStackNavigationProp<TabStackParams>>()


  function handleImageUpload() {
    console.log('handle Image executed');
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
    }).then(image => {
      console.log(image);
      SetSelectImageList(prevImage => [
        {
          fileName: image.filename,
          path: image.path,
          height: image.height,
          width: image.width,
          size: image.size,
        },
        ...prevImage,
      ]);
    });
  }
  

  function UploadPicture() {
    return (
      <Pressable
        style={[styles.dropdownContainer, styles.uploadContainer]}
        onPress={() => handleImageUpload()}>
        <Ionic name="cloud-upload-outline" size={20} />
        <Text>Upload picture</Text>
      </Pressable>
    );
  }

  const AddImageBtn = () => {
    return (
      <Pressable
        style={{
          width: 60,
          height: 60,
          borderWidth: 1,
          borderColor: theme.color.primary_blue_light,
          borderRadius: 10,
          backgroundColor: 'white',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={handleImageUpload}>
        <MdIcon
          name="add-photo-alternate"
          size={35}
          color={theme.color.primary_blue_light}
        />
      </Pressable>
    );
  };

  const [selectedImageList, SetSelectImageList] = React.useState<any[]>([
    <AddImageBtn />,
  ]);

  let refinedImagesArray;

  const refinedImages = () => {
    refinedImagesArray = Array.from(selectedImageList);
    refinedImagesArray.pop();
  }
  // Upload Picture Button
    let numOfImages: boolean = false;
  

  if (selectedImageList.length > 1) numOfImages = true;
  else numOfImages = false;

  const handleUploadImageToStore = async() => {
    console.log("Upload Image to FireStore is going on here");
    refinedImages()

    if(refinedImagesArray.length <=0){
      ToastAndroid.showWithGravity("No Image Selected", ToastAndroid.SHORT, ToastAndroid.CENTER)
      setIsLoading(false);
      return 0;
    }
    if(refinedImagesArray.length >3){
      ToastAndroid.showWithGravity("You CANNOT add more than 3 Images", ToastAndroid.SHORT, ToastAndroid.CENTER)
      setIsLoading(false);
      return 0;
    }
    else {
      console.log("You can Proceed!")
    }
  }

    const postAsk = () => {
        
        client.post('/asks',
        {
        message : askMessage,
        category: categoryValue,
        // image: "[]",
        duration: Number(timeValue),
        visibility: true,
        location: locationValue,
        userInfo: {
	        _id : "64426f22ecf3cf6ec153d070",
            userName: "Mbianou Bradon",
            userProfile: "https://cdn.hashnode.com/res/hashnode/image/upload/v1677841863722/ui0fi1r4b.png"
        }
    }) 
    .then((response) => {
        console.log("Ask successfully Posted!")
        setIsLoading(false);
        navigation.navigate("Home")
        return (console.log(response.data))
        }   
    )
    .catch((err) => {
        console.log("From AskScreen:", err)
        setIsLoading(false);
    })
  }

  const handlePostAndAsk = () => {
    setIsLoading(true)
    handleUploadImageToStore()
    .then(() => {
        postAsk();
    })
    
  }






  return (
    <View>
      <Header />
      <ScrollView
        style={styles.AskMainContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.AskSubContainerOne}>
          <BackBtn />
          <View style={styles.tipsContainer}>
            <Text>Tips</Text>
            <View style={styles.tipsSubContainer}>
              <View>
                <View></View>
                <Text style={styles.tipsText}>
                  Start your question with where, who etc
                </Text>
              </View>
              <View>
                <View></View>
                <Text style={styles.tipsText}>
                  Keep questions short and straight to the point
                </Text>
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
          <TextInput
            placeholder="Enter your question here"
            multiline
            style={styles.AskText}
            onChangeText={(value)=>setAskMessage(value)}
          />
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
            listMode="MODAL"
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
          {numOfImages ? (
            <FlatList
              data={selectedImageList}
              numColumns={4}
              ItemSeparatorComponent={() => {
                return <View style={{margin: 16}}></View>;
              }}
              renderItem={({item}) => {
                return item.path ? (
                  <View
                    style={{
                      width: 60,
                      height: 60,
                      borderRadius: 10,
                      marginHorizontal: 5,
                    }}>
                    <Image
                      source={{uri: item.path}}
                      style={{width: '100%', height: '100%', borderRadius: 10}}
                    />
                  </View>
                ) : (
                  item
                );
              }}
            />
          ) : (
            <UploadPicture />
          )}
        </View>

        <View>
          <View style={styles.askBtnContainer}>
            {
                !isLoading?
            
            (
                <TouchableOpacity style={styles.askBtn} onPress={handlePostAndAsk}>
                <Text style={styles.askBtnText}>Ask</Text> 
                </TouchableOpacity>
            ) :
            <View style={styles.askBtnInactive}>
                <Text style={styles.askBtnText}>Asking In Process</Text>
                <ActivityIndicator size="small" color={theme.color.primary_purple} />
            </View>
            }
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
