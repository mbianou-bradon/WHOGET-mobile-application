import {FlatList, Text, TextInput, View} from 'react-native';
import Header from '../../components/Header/Header';
import {styles} from './Search.screen.styles';
import BackBtn from '../../components/backBtn/backBtn';
import React from 'react';
import client from '../../config/axios';
import LoadingScreen from '../../components/Loading/Loading';
import Ask from '../../components/Ask/Ask';

export default function Search() {
  // Fetch Params states
  const [category, setCategory] = React.useState<string | string[]>('');
  const [search, setSearch] = React.useState<string>('');
  const [page, setPage] = React.useState<number>(1);
  const [limit, setLimit] = React.useState<number>(50);

  const hidden = true;
  // Data variables
  const [allAsk, setAllAsk] = React.useState([]);

  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    client
      .get(
        `/asks?category=${category}&limit=${limit}&page=${page}&search=${search}&hidden=${hidden}`,
      )
      .then(response => {
        const data = response.data.asks;
        console.log(data.length);
        setAllAsk(data);
        setIsLoading(false);
      })
      .catch(err => {
        console.log('Search Error ---->', err);
        setIsLoading(false);
      });
  }, [search]);

  const handleSearch = () => {
    setSearch(search);
    
  }

  return (
    <View>
      <Header />
      <View style={styles.searchMainContainer}>
        {isLoading ? (
          <LoadingScreen text="Getting the best Match for your Search" />
        ) : (
          <>
            <View style={styles.searchHeaderContainer}>
              <BackBtn />
              <View>
                <TextInput
                  placeholder="Search all ask on WhoGet"
                  style={styles.searchText}
                  autoFocus={true}
                  placeholderTextColor={
                    styles.searchTextPlaceholderTextColor.color
                  }
                  onChangeText={value => setSearch(value)}
                  onSubmitEditing={handleSearch}
                />
              </View>
            </View>
            <View>
              <FlatList
                data={allAsk}
                renderItem={({item}) => {
                  return <Ask data={item} />;
                }}
                ListEmptyComponent={
                  <View>
                    <Text>No Match Found!</Text>
                  </View>
                }
              />
            </View>
          </>
        )}
      </View>
    </View>
  );
}
