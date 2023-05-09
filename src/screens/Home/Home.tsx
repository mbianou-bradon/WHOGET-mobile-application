import React from 'react';
import {
  Image,
  Modal,
  Pressable,
  SafeAreaView,
  ScrollView,
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
import axios from 'axios';
import client from '../../config/axios';

export default function Home() {
  // Fetch Params states
  const [category, setCategory] = React.useState('');
  const [search, setSearch] = React.useState('');
  const [page, setPage] = React.useState(1);
  const [limit, setLimit] = React.useState(10);


  const [hasProfile, setHasProfile] = React.useState<boolean>(true);
  const [filterModalIsOpen, setFilterModalIsOpen] = React.useState(false);
  const [allAsk, setAllAsk] = React.useState([]);
  const [allCategories, setAllCategories] = React.useState([]);
  
  
  const isAuth = useAppSelector(state => state.userReducer.isAuth);
  const nativeNavigation =
    useNavigation<NativeStackNavigationProp<NativeStackParams>>();
  const tabNavigation =
    useNavigation<NativeStackNavigationProp<TabStackParams>>();



  React.useEffect(() => {
    client
      .get(`/asks?category=${category}&limit=${limit}&page=${page}&search=${search}`)
      .then(response => {
        const data = response.data.asks;
        const CategoriesData = response.data.category;
        console.log(data.length);
        setAllAsk(data);
        setAllCategories(CategoriesData);
        setCategory("");
      })
      .catch(err => console.log('---->', err));
  }, [category,limit,search,page]);

  const handleFilterModal = () => {
    if (filterModalIsOpen) setFilterModalIsOpen(false);
    else setFilterModalIsOpen(true);
  };
  const handleAskQuestionHome = () => {
    if (isAuth) tabNavigation.navigate('Ask');
    else nativeNavigation.navigate('Login');
  };

  const handleFilterBtn = (category:string) => {
    setCategory(category)
    handleFilterModal();
  };

  return (
    <View>
      <Header />
      <View style={styles.homeContainer}>
        <View style={styles.homeSubContainerOne}>
          {hasProfile ? (
            <Ionic
              name="person-circle-outline"
              size={45}
              color={styles.IconColor.color}
            />
          ) : (
            <View style={styles.profileImageContainer}>
              <Image
                source={require('../../assets/icons/userIcon.png')}
                style={styles.profileImage}
              />
            </View>
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
            renderItem={({item}) => {
              return <Ask data={item} />;
            }}
            ListEmptyComponent={
              <View>
                <Text>Empty List</Text>
              </View>
            }
          />
        </View>
      </View>
    </View>
  );
}
