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
import MdIcon from 'react-native-vector-icons/MaterialIcons';
import ImagePicker from 'react-native-image-crop-picker';
import {theme} from '../../theme/theme';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TabStackParams} from '../../../App';
import client from '../../config/axios';
import {storage} from '../../config/firebaseConfig';
import {
  ref,
  uploadBytesResumable,
  getDownloadURL,
  uploadBytes,
} from 'firebase/storage';
import {v4} from 'uuid';
import AddImageBtn from '../../components/createAskBtns/AddImageBtn';
import UploadPicture from '../../components/createAskBtns/UploadPicture';

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

  const navigation = useNavigation<NativeStackNavigationProp<TabStackParams>>();
  const [selectedImageList, SetSelectImageList] = React.useState<any[]>([
    <AddImageBtn onPress={() => handleImageUpload()} />,
  ]);
  let refinedImagesArray: any[];

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

          const blob = await new Promise((resolve, reject) => {
            const xhr = new XMLHttpRequest();
            xhr.onload = function () {
              resolve(xhr.response);
            };
            xhr.onerror = function (e) {
              console.log(e);
              reject(new TypeError('Network request failed'));
            };
            xhr.responseType = 'blob';
            xhr.open('GET', uri, true);
            xhr.send(null);
          });

          const storageRef = ref(storage, `/whoget/usersImages/image-${v4()}`);
          const uploadTask = await uploadBytes(storageRef, blob);

          blob.close();

          const newURL = await getDownloadURL(storageRef);

          setImagesURL(prevURL => [newURL, ...prevURL]);
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  console.log('ImagesUrl:', imagesURL);
  const refinedUrl = imagesURL.filter((url) => url !==undefined);

  const postAsk = async () => {
    setIsLoading(true);
    await handleUploadImageToStore();
    client
      .post('/asks', {
        message: askMessage,
        category: categoryValue,
        image: refinedUrl,
        duration: Number(timeValue),
        visibility: true,
        location: locationValue,
        report: 0,
        userId: '64426f22ecf3cf6ec153d070',
        userName: 'Mbianou Bradon',
        userProfile: 'https://cdn.hashnode.com/res/hashnode/image/upload/v1677841863722/ui0fi1r4b.png',
        userPhone : "671242032",
        userWhatsApp : "671242032",
        userEmail : "mbianoubradon2000@gmail.com"
      })
      .then(response => {
        console.log('Ask successfully Posted!');
        setIsLoading(false);
        setAskMessage('');
        setImagesURL([]);
        navigation.navigate('Home');
        return console.log(response.data);
      })
      .catch(err => {
        console.log('From AskScreen:', err);
        setIsLoading(false);
      });
  };

  const handlePostAndAsk = async () => {
    postAsk();
  };

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
  );
}
