import {
  Image,
  Text,
  View,
  Linking,
  Pressable,
} from 'react-native';
import {styles} from './AskDetail.screen.styles';
import BackBtn from '../../components/backBtn/backBtn';
import Header from '../../components/Header/Header';
import React from 'react';
import client from '../../config/axios';
import {askType} from '../../../dataType';
import LoadingScreen from '../../components/Loading/Loading';
import {RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NativeStackParams, TabStackParams} from '../../../App';
import { formatDistance, formatDistanceToNow } from 'date-fns';
import { useAppSelector } from '../../redux/store/hooks';
import { FlatList } from 'react-native-gesture-handler';


type AskDetailsScreenRouteProp = RouteProp<NativeStackParams, "AskDetails">;

interface Props {
  route : AskDetailsScreenRouteProp
}

export default function AskDetails({route}:Props) {
  const [details, setDetails] = React.useState<askType>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const isAuth = useAppSelector(state => state.userReducer.isAuth)
  const navigation = useNavigation<NativeStackNavigationProp<TabStackParams>>();
  const nativeNavigation = useNavigation<NativeStackNavigationProp<NativeStackParams>>()

  const id = route.params.id;


  const user = details?.user
  const fetchAskDetails = () => {
    client
      .get(`/asks/${id}?hidden=false`)
      .then(response => {
        const data = response.data.data;
        console.log(data);
        setDetails(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log(err);
        setIsLoading(false);
        navigation.goBack();
      });
  };

  React.useEffect(() => {
    fetchAskDetails();
  }, [id]);

    const createDate = new Date(details?.updatedAt!);
    const duration = (Number(details?.duration) * 86400000 ) || 0;
    const expiringDate = new Date(createDate.getTime() + duration);

    const images = details?.image!
    const whatsapp = user?.userWhatsapp
    const phoneNumber = user?.phoneNumber
    const email = user?.email
    const userName = user?.username
    let url = ""
    const message = `Hello ${userName}, I saw your ask you posted on ${createDate.toDateString()} and I can offer my services`
    const emailConf = {
      subject: `RESPONSE TO WHOGET ASK OF ${createDate.toDateString()}`,
      body : message
    }
     let anonymous = `Anomymous${user?._id}`
    if(anonymous.length > 30)
        anonymous = anonymous.slice(0, 20)

        
      const handleAuthBeforeEmailResponse = () =>{ 
        if(isAuth){
        url = `mailto:${email}?subject=${encodeURIComponent(emailConf.subject)}&body=${encodeURIComponent(emailConf.body)}`
        Linking.canOpenURL(url)
        .then((supported)=>{
          if(supported){
            return Linking.openURL(url)
          }
          else {
            console.log(`Cannot open URL: ${url}`)
          }
        })
        .catch((err)=>console.log(`Error opening URL: ${err}`))
          
      }
      else{
        nativeNavigation.navigate("Login");
      }
    }
      const handleAuthBeforePhoneResponse = () =>{ 
        if(isAuth){
        url = `tel:${phoneNumber}`
        Linking.canOpenURL(url)
        .then((supported)=>{
          if(supported){
            return Linking.openURL(url)
          }
          else {
            console.log(`Cannot open URL: ${url}`)
          }
        })
        .catch((err)=>console.log(`Error opening URL: ${err}`))
      }
      else{
        nativeNavigation.navigate("Login");
      }
    }
    const handleAuthBeforeWhatsAppResponse = () =>{ 
      if(isAuth){
      url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
      Linking.canOpenURL(url)
      .then((supported)=>{
        if(supported){
          return Linking.openURL(url)
        }
        else {
          console.log(`Cannot open URL: ${url}`)
        }
      })
      .catch((err)=>console.log(`Error opening URL: ${err}`))
      }
      else{
      nativeNavigation.navigate("Login");
    }
    }


    console.log(user?.username)
  return (
    <View>
      <Header />
      {isLoading ? (
        <LoadingScreen text={"Getting Ask Details From Database"}/>
      ) : (
        <View style={styles.askDetailMain}>
          <View>
            <View style={styles.headerContainer}>
              <BackBtn dest={'Home'} color='blue'/>
              <View>
                <View style={styles.askHeaderStyle}>
                  <View style={styles.profileImageContainer}>
                   {user?.profileImage !=="" || user.profileImage?
                   <Image source={{uri:user?.profileImage}} style={styles.profileImage}/>
                   :
                    <Image
                      source={require('../../assets/icons/userIcon.png')}
                      style={styles.profileImage}
                    />
                   }
                  </View>
                  <Pressable onPress={()=> nativeNavigation.navigate("UserDetails", {id: user?._id!})}>
                    <Text style={styles.askerUsernameStyle} >
                      {user?.username? `${user.username}` : `${anonymous}`}
                    </Text>
                    <Text style={styles.askerCreationDate}>{`${details?.location} -`}Cameroon</Text>
                  </Pressable>
                </View>
              </View>
            </View>

            <View style={styles.bodyContainer}>
              <View style={styles.askTextContainer}>
                <View style={styles.askCategoryContainer}>
                  <Text style={styles.askCategoryText}>
                    #{details?.category}
                  </Text>
                </View>
                <View>
                  <Text style={styles.askText}>{details?.message}</Text>
                </View>
              </View>

              <View style={styles.askImageContainer}>
                { images?.length !== 0 ?
                  <FlatList data={images} numColumns={images?.length} renderItem={({item}) => {
                    return <Image source={{uri: item}} style={{width:250, height: 250}}/>
                  }}/>
                  :
                  <View></View>
                }
                
              </View>

              <View style={styles.askTimeContainer}>
                <View style={styles.askTimeSubContainer}>
                  <Text style={styles.askTimeText}>Posted {formatDistanceToNow(new Date(createDate), {addSuffix:true})}</Text>
                  <Text style={styles.askTimeText}>Expires in {formatDistance(createDate, expiringDate)}</Text>
                </View>
              </View>

              <View style={styles.contactIconsContainer}>
                {
                email && 
                <Pressable onPress={handleAuthBeforeEmailResponse}>
                  <Image source={require('../../assets/icons/google_xl.png')} />
                </Pressable>
                }
                {whatsapp && <Pressable onPress={handleAuthBeforeWhatsAppResponse}>
                  <Image
                    source={require('../../assets/icons/whatsapp_xl.png')}
                  />
                </Pressable>}

                {phoneNumber && <Pressable onPress={handleAuthBeforePhoneResponse}>
                    <Image source={require("../../assets/icons/phone_xl.png")} />
                </Pressable>}
              </View>

              <View>
                <View style={styles.reportContainer}>
                  <View>
                    <Image
                      source={require('../../assets/icons/thumbsdown.png')}
                    />
                  </View>
                  <Text style={styles.reportText}>Report</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
}
