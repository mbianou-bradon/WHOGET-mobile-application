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
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import IonicIcon from 'react-native-vector-icons/Ionicons'
import ImagePicker from 'react-native-image-crop-picker';
import {theme} from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TabStackParams} from '../../../App';
import client from '../../config/axios';
import storage from "@react-native-firebase/storage";
import AddImageBtn from '../../components/createAskBtns/AddImageBtn';
import UploadPicture from '../../components/createAskBtns/UploadPicture';
import { store } from '../../redux/store/store';
import LoadingScreen from '../../components/Loading/Loading';
import getAsyncData from '../../utils/getAsyncStorage';

export default function AskScreen() {
  const [openCategory, setOpenCategory] = React.useState(false);
  const [openLocation, setOpenLocation] = React.useState(false);
  const [openTime, setOpenTime] = React.useState(false);
  const [categoryValue, setCategoryValue] = React.useState(null);
  const [locationValue, setLocationValue] = React.useState(null);
  const [timeValue, setTimeValue] = React.useState(null);
  const [askMessage, setAskMessage] = React.useState('');
  const [imagesURL, setImagesURL] = React.useState<string[]>([]);

  const [categoryItems, setCategoryItems] = React.useState(categoryTempData);
  const [locationItems, setLocationItems] = React.useState(locationData);
  const [timeItems, setTimeItems] = React.useState(timeData);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [loadingText, setLoadingText] = React.useState<string>("Ask In Progress!");

  const currentUserInfo = store.getState().userReducer.currentUser

  const navigation = useNavigation<NativeStackNavigationProp<TabStackParams>>();
  const [selectedImageList, SetSelectImageList] = React.useState<any[]>([
    <AddImageBtn onPress={() => handleImageUpload()} />,
  ]);
  let refinedImagesArray: any[];


  React.useEffect(()=> {
    getAsyncData("@categoryList")
      .then((response)=>{
          if(response !== null){
            const newResponse =  response.map((res : {_id : string, name: string}) => {
              return {
              key : res._id,
              value : res.name
            }})
              setCategoryItems(newResponse)

          } else {
              client.get('/category')
              .then((response)=>{
              const data = response.data
                  setCategoryItems(data)
              })
              .catch((err)=>{
                  ToastAndroid.showWithGravity(
                      `${err.message}`,
                      ToastAndroid.TOP,
                      ToastAndroid.LONG
                  )
              })
          }
      })
      .catch((err)=>console.log(err))
    },[])

  const refinedImages = () => {
    refinedImagesArray = Array.from(selectedImageList);
    refinedImagesArray.pop();
    refinedImagesArray = refinedImagesArray.map(image => image.path);
  };

  // Upload Picture Button
  let numOfImages: boolean = false;
  if (selectedImageList.length > 1) numOfImages = true;
  else numOfImages = false;

  function handleImageUpload() {
    console.log('handle Image executed');
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: false,
    }).then(image => {
      console.log(image.path);
      SetSelectImageList(prevImage => [
        {
          fileName: image.filename,
          path: image.path,
          height: image.height,
          width: image.width,
          size: image.size,
          id: Date.now().toString(),
        },
        ...prevImage,
      ]);
    });
  }

  const handleUploadImageToStore = async () => {
    console.log('Upload Image to FireStore is going on here');
    refinedImages();
    console.log(refinedImagesArray);
    if (refinedImagesArray.length <= 0) {
      return 0;
    } else if (refinedImagesArray.length > 4) {
      ToastAndroid.showWithGravity(
        'You CANNOT add more than 4 Images',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
      setIsLoading(false);
      return 0;
    } else {
      console.log('You can Proceed!');
      try {
        for (let i = 0; i < selectedImageList.length; i++) {
          const uri = refinedImagesArray[i];
          setLoadingText("Uploading Images to Storage")

          const { metadata } = await storage()
          .ref(`whoget/usersImages/upload_${Date.now().toString()}}.png`)
          .putFile(uri);

          const resultURL = await storage().ref(metadata.fullPath).getDownloadURL();
          setImagesURL(prevURL => [resultURL, ...prevURL]);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  console.log('ImagesUrl:', imagesURL);

  const postAsk = async () => {
    setIsLoading(true);
    await handleUploadImageToStore();
    console.log("Posting Ask Now");
    setLoadingText("ALMOST DONE: Posting Ask To Database")
    const newAsk = {
      message: askMessage,
      category: categoryValue,
      duration: Number(timeValue),
      visibility: true,
      location: locationValue,
      report: 0,
      user: currentUserInfo._id,
    }
    client
      .post('/asks', {...newAsk,  images:imagesURL })
      .then(response => {
        console.log('Ask successfully Posted!');
        setIsLoading(false);
        setAskMessage('');
        setImagesURL([]);
        setCategoryValue(null);
        setLocationValue(null);
        setTimeValue(null);
        numOfImages = false;
        SetSelectImageList([
          <AddImageBtn onPress={() => handleImageUpload()} />,
        ])
        navigation.navigate('Home');
        return console.log(response.data);
      })
      .catch(err => {
        console.log('From AskScreen:', err);
        setIsLoading(false);
      });
  };

  const handlePostAndAsk = async () => {
    if(askMessage.length < 20){
      ToastAndroid.showWithGravity(
        'Ask Message Should be atleast 20 Characters Long',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else if(categoryValue === null ){
      ToastAndroid.showWithGravity(
        'Please select a category',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else if(timeValue === null){
      ToastAndroid.showWithGravity(
        'Please select a Time duration',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else if(locationValue === null){
      ToastAndroid.showWithGravity(
        'Please Select a Location for the ask',
        ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      );
    } else {
      postAsk();
    }
    
  };

  return (
    <>{
      isLoading? <LoadingScreen text={loadingText}/>
      :
    
    <View>
      <Header />
      <ScrollView
        style={styles.AskMainContainer}
        showsVerticalScrollIndicator={false}>
        <View style={styles.AskSubContainerOne}>
          <BackBtn dest='Home' color='blue'/>
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
            onChangeText={value => setAskMessage(value)}
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
              <IonicIcon name="chevron-down" size={23} color={theme.color.primary_blue_light} />
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
            placeholder="Location"
            style={styles.dropdownContainer}
            ArrowDownIconComponent={() => (
              <IonicIcon name="chevron-down" size={23} color={theme.color.primary_blue_light} />
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
            placeholder="Latest date of need"
            style={styles.dropdownContainer}
            selectedItemLabelStyle={styles.inputStyles}
            ArrowDownIconComponent={() => (
              <IonicIcon name="chevron-down" size={23} color={theme.color.primary_blue_light} />
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
                      marginVertical: 1,
                      position: 'relative',
                    }}>
                    <Pressable
                      style={{
                        position: 'absolute',
                        top: -2,
                        right: -2,
                        zIndex: 99,
                        backgroundColor: theme.color.neutral_white,
                        borderRadius: 10,
                        width: 20,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                      onPress={() => {
                        SetSelectImageList(images => {
                          return images.filter(image => image.id !== item.id);
                        });
                      }}
                      >
                      <View>
                        <FontAwesomeIcon name="times" color={'red'} size={20} />
                      </View>
                    </Pressable>
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
            <UploadPicture onPress={() => handleImageUpload()} />
          )}
        </View>

        <View>
          <View style={styles.askBtnContainer}>
            {!isLoading ? (
              <TouchableOpacity
                style={styles.askBtn}
                onPress={handlePostAndAsk}>
                <Text style={styles.askBtnText}>Ask</Text>
              </TouchableOpacity>
            ) : (
              <View style={styles.askBtnInactive}>
                <Text style={styles.askBtnText}>Asking In Process</Text>
                <ActivityIndicator
                  size="small"
                  color={theme.color.primary_purple}
                />
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
}
</>
  );
}
