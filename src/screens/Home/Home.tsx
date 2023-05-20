import React from 'react';
import {
  Image,
  Modal,
  Pressable,
  RefreshControl,
  Text,
  TextInput,
  View,
} from 'react-native';
import Header from '../../components/Header/Header';
import {styles} from './Home.screen.styles';
import Ask from '../../components/Ask/Ask';
import Feather from 'react-native-vector-icons/Feather';
import {theme} from '../../theme/theme';
import Filter from '../../components/filter/Filter';
import Ionic from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {NativeStackParams, TabStackParams} from '../../../App';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppSelector} from '../../redux/store/hooks';
import {FlatList} from 'react-native-gesture-handler';
import client from '../../config/axios';
import LoadingScreen from '../../components/Loading/Loading';
import { store } from '../../redux/store/store';
import AsyncStorage from '@react-native-async-storage/async-storage';
import getAsyncData from '../../utils/getAsyncStorage';
import { createUserSlice } from '../../redux/features/createUserSlice';


interface IParams {
  category: string | string[];
  location?: string;
  duration?: number;
  limit: number;
  page: number;
  search: string;
  hidden: boolean;
}

export default function Home() {
  // Fetch Params states
  const [category, setCategory] = React.useState<string | string[]>('');
  const [search, setSearch] = React.useState<string>('');
  const [page, setPage] = React.useState<number>(1);
  const [limit, setLimit] = React.useState<number>(50);
  const [location, setLocation] = React.useState<string>("");
  const [dateLimit, setDateLimit] = React.useState<number>();
  const hidden = true;


  // Data variables
  const [filterModalIsOpen, setFilterModalIsOpen] = React.useState(false);
  const [allAsk, setAllAsk] = React.useState([]);
  const [allCategories, setAllCategories] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState<boolean>(true);
  const [refreshing, setRefreshing] = React.useState<boolean>(false)
  
  // Navigation variables
  const isAuth = useAppSelector(state => state.userReducer.isAuth);
  const currentUser = store.getState().userReducer.currentUser
  const nativeNavigation =
    useNavigation<NativeStackNavigationProp<NativeStackParams>>();
  const tabNavigation =
    useNavigation<NativeStackNavigationProp<TabStackParams>>();
  const navigation = useNavigation();

  React.useEffect(() => {
    getAsyncData("@userInfo")
    .then((response)=>{
      console.log("Home Screen:",response);
      if(response === null){
         setCategory("");
      }
      else{
       
        store.dispatch(createUserSlice.actions.currentUser(response));
        console.log("Home screen userInfo:",response);

        store.dispatch(createUserSlice.actions.globalAuth(true));
      }
        
    })
  },[])

  React.useEffect(() => {

    const fetchAskData = async () => {
      setIsLoading(true)
      try {
        let  params : IParams = {
          category : category,
          limit: limit,
          page : page,
          search : search,
          hidden : hidden
        }
        console.log("Before filtering:", params);
        let endpoint = "/asks";
        if( location || dateLimit){
          endpoint = '/asks/filter';
          params = { 
            ...params,
            category: "",
          location : location,
          duration :dateLimit
          }
          if (category) {
            params.category = category;
          }
        }
        console.log("After:",params);
        const response = await client.get(endpoint, { params : params})
        const data = response.data.asks;
        const CategoriesData = response.data.category;
        AsyncStorage.setItem("@categoryList", JSON.stringify(CategoriesData));
        setAllAsk(data);
        setAllCategories(CategoriesData);

      } catch (error) {

        console.log('---->', error)
        setIsLoading(false);

      } finally {

        setIsLoading(false);

      }
    };


    if(isAuth){
      const currentUserCategory = currentUser.category;
      setCategory(currentUserCategory)
      const unsubscribe = navigation.addListener("focus",()=>{
      setCategory(currentUserCategory)
      })
      fetchAskData();
      return unsubscribe
        
    }
    else {
      const unsubscribe = navigation.addListener("focus",()=>{
      setCategory("")
      })
      fetchAskData();
      return unsubscribe
    }
    
      
  }, [category, location, dateLimit, limit, page, search, hidden, isAuth, currentUser, navigation]);


  const handleFilterModal = () => {
    if (filterModalIsOpen) setFilterModalIsOpen(false);
    else setFilterModalIsOpen(true);
  };
  const handleAskQuestionHome = () => {
    if (isAuth) tabNavigation.navigate('Ask');
    else nativeNavigation.navigate('Login');
  };

  const handleFilterBtn = async (category:string, location: string, date:number) => {
    setCategory(category)
    setLocation(location);
    setDateLimit(date);
    handleFilterModal();
  };

  const getAskData = async() => {
   const response = await client.get("/asks", {
      params: {
        category : category,
        limit: limit,
        page : page,
        search : search,
        hidden : hidden
      },
    })

    const refinedResponse = response.data.asks;

    return refinedResponse;
  }
  const onRefresh = React.useCallback(()=>{
    setRefreshing(true);
    getAskData()
    .then((response)=>{
      setAllAsk(response)
      setRefreshing(false);
    })
    .catch((error)=>{
      console.log(error)
      setRefreshing(false);
    });
  },[])


  return (
    <View>
      <Header />
      { isLoading? 
      <LoadingScreen text={"Getting Data from the database"}/> 
      :
      <View style={styles.homeContainer}>
        <View style={styles.homeSubContainerOne}>
          {currentUser.profileImage === ""? (
            <Ionic
              name="person-circle-outline"
              size={45}
              color={styles.IconColor.color}
            />
          ) : (
            <Pressable style={styles.profileImageContainer} onPress={()=> tabNavigation.navigate("Profile")}>
              <Image
                source={{uri : currentUser.profileImage}}
                style={styles.profileImage}
              />
            </Pressable>
          )}
          <View style={styles.searchContainer}>
            <View style={styles.searchIconContainer}>
              <Image
                source={require('../../assets/icons/search.png')}
                style={styles.searchIcon}
              />
            </View>
            <TextInput
              placeholder="Search"
              autoComplete="name"
              autoCorrect
              style={styles.searchText}
            />
          </View>

          <Pressable
            android_ripple={{color: theme.color.primary_blue_light}}
            onPress={handleFilterModal}>
            <Feather name="filter" size={35} />
          </Pressable>

          {filterModalIsOpen && (
            <Modal
              animationType="fade"
              visible={filterModalIsOpen}
              transparent
              onRequestClose={() => setFilterModalIsOpen(false)}
              style={{
                backgroundColor: theme.color.neutral_black,
                opacity: 0.2,
              }}>
              <View>
                <Filter
                  cancel={handleFilterModal}
                  filter={handleFilterBtn}
                  categoryData={allCategories}
                />

                <Pressable
                  onPress={handleFilterModal}
                  style={{height: '100%'}}></Pressable>
              </View>
            </Modal>
          )}
        </View>

        <Pressable
          style={styles.askQuestionContainer}
          onPress={handleAskQuestionHome}>
          <View style={styles.askQuestionSubContainer}>
            <Text style={styles.askQuestionSubContainerText}>
              Ask your question
            </Text>
          </View>
          <View style={styles.askQuestionSubContainerTwo}>
            <Text style={styles.askQuestionSubContainerTwoText}>Ask</Text>
          </View>
        </Pressable>

        <View style={styles.askContainer}>

          <FlatList
            data={allAsk}
            bounces
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => {
              return <Ask data={item} />;
            }}
            ListEmptyComponent={
              <View>
                <Text>Empty List</Text>
              </View>
            }
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} colors={[
                theme.color.primary_blue_light, theme.color.primary_purple, theme.color.secondary_green
              ]}/>
            }
          />
        </View>
      </View>
    }
    </View>
  );
}
