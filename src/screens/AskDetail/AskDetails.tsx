import {
  Image,
  Text,
  View,
  Linking,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import {styles} from './AskDetail.screen.styles';
import BackBtn from '../../components/backBtn/backBtn';
import Header from '../../components/Header/Header';
import React from 'react';
import client from '../../config/axios';
import {askType} from '../../../dataType';
import {theme} from '../../theme/theme';
import LoadingScreen from '../../components/Loading/Loading';
import {Link, RouteProp, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {NativeStackParams, TabStackParams} from '../../../App';
import { formatDistance, formatDistanceToNow } from 'date-fns';


type AskDetailsScreenRouteProp = RouteProp<NativeStackParams, "AskDetails">;

interface Props {
  route : AskDetailsScreenRouteProp
}

export default function AskDetails({route}:Props) {
  const [details, setDetails] = React.useState<askType>();
  const [isLoading, setIsLoading] = React.useState<boolean>(true);

  const navigation = useNavigation<NativeStackNavigationProp<TabStackParams>>();

  console.log(route.params);
  const id = route.params.id;

  const fetchAskDetails = () => {
    client
      .get(`/asks/${id}`)
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

    const createDate = new Date(details?.createdAt);
    const duration = (details?.duration * 86400000 ) || 0;
    const expiringDate = new Date(createDate.getTime() + duration);
    const whatsapp = details?.userWhatsapp;
    const phoneNumber = details?.userPhoneNumber;
    const email = details?.userEmail;
    const userName = details?.userName;

    const message = `Hello ${userName},\n
    I saw your ask you posted on ${createDate.toDateString()} and I can offer my services
    `
    const emailConf = {
      subject: `RESPONSE TO WHOGET ASK OF ${createDate.toDateString()}`,
      body : message
    }


  return (
    <View>
      <Header />
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <View style={styles.askDetailMain}>
          <View>
            <View style={styles.headerContainer}>
              <BackBtn />
              <View>
                <View style={styles.askHeaderStyle}>
                  <View style={styles.profileImageContainer}>
                    <Image
                      source={require('../../assets/icons/userIcon.png')}
                      style={styles.profileImage}
                    />
                  </View>
                  <View>
                    <Text style={styles.askerUsernameStyle}>
                      Mbianou Bradon
                    </Text>
                    <Text style={styles.askerCreationDate}>Buea-Cameroon</Text>
                  </View>
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
                <View></View>
                <View></View>
                <View></View>
                <View></View>
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
                <Pressable onPress={()=>{
                  Linking.openURL(`
                  mailto:${email}?subject=${encodeURIComponent(emailConf.subject)}&body=${encodeURIComponent(emailConf.body)}
                  `)
                }}>
                  <Image source={require('../../assets/icons/google_xl.png')} />
                </Pressable>
                }
                {whatsapp && <Pressable onPress={()=>{
                  Linking.openURL(`
                    https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}
                  `)
                }}>
                  <Image
                    source={require('../../assets/icons/whatsapp_xl.png')}
                  />
                </Pressable>}

                {phoneNumber && <Pressable onPress={()=>{Linking.openURL(`tel:${phoneNumber}`)}}>
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
