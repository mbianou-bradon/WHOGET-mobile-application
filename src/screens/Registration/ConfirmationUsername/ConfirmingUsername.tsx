import {
  Alert,
  Image,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {LinearTextGradient} from 'react-native-text-gradient';
import {styles} from './ConfirmingUsername.screen.styles';
import React from 'react';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useAppDispatch, useAppSelector} from '../../../redux/store/hooks';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {TabStackParams} from '../../../../App';
import {createUserSlice} from '../../../redux/features/createUserSlice';
import client from '../../../config/axios';
import { store } from '../../../redux/store/store';
import LoadingScreen from '../../../components/Loading/Loading';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function ConfirmingUsername() {
  const navigation = useNavigation<NativeStackNavigationProp<TabStackParams>>();
  const [userName, setUserName] = React.useState('');
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const newUserInfoUsername = useAppSelector(
    state => state.userReducer.newUser.username,
  );
  const dispatch = useAppDispatch();

  const updateUserName = async () => {
    Alert.alert(
      'USERNAME CONFIRMATION',
      `Your username will be changed from ${newUserInfoUsername} to ${userName}`,
      [
        {
            text: "CANCEL"
        },
        {
          text: 'CONFIRM',
          onPress: () =>{
            dispatch(
              createUserSlice.actions.createNewUser({
                key: 'username',
                value: `${userName}`,
              }),
            )
          },
            
        },
      ],
    );
  };


const createNewUser = store.getState().userReducer.newUser;
  const registerUserToDatabase = async () => {
    setIsLoading(true);
    client.post("/users",createNewUser)
    .then((response)=>{
        const data = response.data.data
        console.log(data)
        AsyncStorage.setItem("@userInfo", JSON.stringify(data));
        dispatch(createUserSlice.actions.currentUser(data));
        setIsLoading(false);
        navigation.navigate("Home")
    })
    .catch((err)=>{
      console.log(err)
      ToastAndroid.showWithGravity(`${err.message}`, 
      ToastAndroid.SHORT,
        ToastAndroid.CENTER,
      )
      setIsLoading(false)
    })
    .finally
  }
  const text = "Registering User to the database. Please wait.";

  return (<>
    {isLoading? <LoadingScreen text={text}/> 
    :
    <View style={styles.confirmationContainer}>
        

        
            <View>
                <View style={styles.logoContainer}>
                    <Image source={require('../../../assets/images/logo_blue.png')} />
                </View>

                <LinearTextGradient
                    colors={['#00A0DD', '#776FB2']}
                    locations={[0, 1]}
                    start={{x: 0, y: 0}}
                    end={{x: 1, y: 0}}>
                    <Text style={styles.userName}>Welcome {newUserInfoUsername}</Text>
                </LinearTextGradient>

                <View style={styles.usernameSubContainer}>
                    <View>
                        <Text style={styles.confirmaionText}>
                        Do you want to proceed with this username?
                        </Text>
                    </View>
                    <View style={styles.changeUsernameContainer}>
                        <View></View>
                        <View>
                            <TextInput
                                placeholder={`${newUserInfoUsername}`}
                                onChangeText={value => setUserName(value)}
                                style={{paddingLeft: 10}}
                            />
                        </View>
                    </View>
                </View>

                <View style={styles.continueBtnContainer}>
                    <TouchableOpacity
                        style={styles.continueBtn}
                        onPress={registerUserToDatabase}>
                        <Text style={styles.continueBtnText}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>      
    </View>
}
    </>
  );
}
