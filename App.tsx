import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Login from './src/screens/Login/Login';
import Category from './src/components/Category/Category';
import CategoriesSelect from './src/screens/Registration/CategoriesSelect/CategoriesSelect';
import HowToContact from './src/screens/Registration/HowToContact/HowToContact';
import Home from './src/screens/Home/Home';
import Search from './src/screens/Search/Search';
import AskScreen from './src/screens/Ask/AskScreen';
import Notification from './src/screens/Notification/Notification';
import Profile from './src/screens/Profile/Profile';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export type RootStackParams = {
  Home: undefined;
  Search: undefined;
  Ask: undefined;
  Notification: undefined;
  Profile: undefined;
}


const RootStack = createBottomTabNavigator<RootStackParams>()

function App() :JSX.Element {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={"#11A6DF"} />
      <RootStack.Navigator initialRouteName='Home' screenOptions={{headerShown: false}}>
          <RootStack.Screen name='Home' component={Home}/>
          <RootStack.Screen name='Search' component={Search}/>
          <RootStack.Screen name='Ask' component={AskScreen}/>
          <RootStack.Screen name='Notification' component={Notification}/>
          <RootStack.Screen name='Profile' component={Profile}/>
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App;












































































// function Section({children, title}: SectionProps): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';
//   return (
//     <View style={styles.sectionContainer}>
//       <Text
//         style={[
//           styles.sectionTitle,
//           {
//             color: isDarkMode ? Colors.white : Colors.black,
//           },
//         ]}>
//         {title}
//       </Text>
//       <Text
//         style={[
//           styles.sectionDescription,
//           {
//             color: isDarkMode ? Colors.light : Colors.dark,
//           },
//         ]}>
//         {children}
//       </Text>
//     </View>
//   );
// }

// function App(): JSX.Element {
//   const isDarkMode = useColorScheme() === 'dark';

//   const backgroundStyle = {
//     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
//   };

//   return (
//     <View style={backgroundStyle}>
//       <StatusBar
//         // barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        
//         // backgroundColor={backgroundStyle.backgroundColor}
//         backgroundColor={"#11A6DF"}
//         // translucent={true}
//       />

//         <View
//           style={{
//             backgroundColor: isDarkMode ? Colors.black : Colors.white,
//           }}>
//          {/* <Login/> */}
//          <Home/>
//         </View>
//     </View>
//   );
// }


// export default App;
