import React from 'react';
import type {PropsWithChildren} from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Image,
  StatusBar,
} from 'react-native';

import Login from './src/screens/Login/Login';
import CategoriesSelect from './src/screens/Registration/CategoriesSelect/CategoriesSelect';
import HowToContact from './src/screens/Registration/HowToContact/HowToContact';
import Home from './src/screens/Home/Home';
import Search from './src/screens/Search/Search';
import AskScreen from './src/screens/Ask/AskScreen';
import Notification from './src/screens/Notification/Notification';
import Profile from './src/screens/Profile/Profile';
import { theme } from './src/theme/theme';
import About from './src/screens/About/About';
import AskDetails from './src/screens/AskDetail/AskDetails';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ConfirmingUsername from './src/screens/Registration/ConfirmationUsername/ConfirmingUsername';
import Ionic from "react-native-vector-icons/Ionicons"
import { useAppSelector } from "./src/redux/store/hooks"
import SplashScreen from 'react-native-splash-screen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

export type TabStackParams = {
  Home: undefined;
  Search: undefined;
  Ask: undefined;
  Notification: undefined;
  Profile: undefined;
}

export type NativeStackParams = {
  Main : TabStackParams;
  AskDetails : undefined;
  Login : undefined;
  About : undefined;
  HowToContact : undefined;
  CategoriesSelect : undefined;
  ConfirmationUsername : undefined;
}



const Tab = createBottomTabNavigator<TabStackParams>()
const RootStack = createNativeStackNavigator<NativeStackParams>()

const TabNavigationRoute = () : JSX.Element => {

  const isAuth = useAppSelector(state => state.userReducer.isAuth)
  return (
    <Tab.Navigator initialRouteName='Home' 
      screenOptions={({route}) =>({
        headerShown: false,
        tabBarHideOnKeyboard : true,
        tabBarIcon: ({size, focused, color}) => {
          let iconName : string = "";
          if(route.name === 'Home') {
            iconName = focused? "home" : "home-outline";
          }
          else if(route.name === 'Search') {
            iconName = focused? "search-sharp" : "search-outline";
          }
          else if(route.name === 'Notification') {
            iconName = focused? "notifications" : "notifications-outline";
          }
          else if(route.name === 'Profile') {
            iconName = focused? "person-circle" : "person-circle-outline";
          }

          return <Ionic name={iconName} size={22} color={color} />
        },
        tabBarActiveTintColor : theme.color.primary_blue_light,
        tabBarInactiveTintColor : theme.color.primary_blue_light,
        tabBarStyle : {height : 60,paddingBottom:5}
      })}
    >
        <Tab.Screen name='Home' component={Home}/>
        <Tab.Screen name='Search' component={Search}/>
        {isAuth && <Tab.Screen 
          name='Ask' 
          component={AskScreen}
          options={{
            title: 'Ask',
            tabBarIcon : ({size, focused, color})=>{
              if(focused)
                return (
                  <Image source={require("./src/assets/images/ask_icon_active.png")}/>
                )
              return(
                <Image source={require("./src/assets/images/ask_icon.png")}/>
              )
            }
          }}
        />}
        {isAuth && 
        <Tab.Screen name='Notification' component={Notification}/> }
        {isAuth &&
        <Tab.Screen name='Profile' component={Profile}/>
        } 
    </Tab.Navigator>
  )
}



function App() :JSX.Element {

  React.useEffect(()=>{
    SplashScreen.hide();
  },[])

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={theme.color.primary_blue_light} />
      <RootStack.Navigator screenOptions={{headerShown : false}}>
        <RootStack.Screen name="Main" component={TabNavigationRoute} />
        <RootStack.Screen name="Login" component={Login} />
        <RootStack.Screen name="About" component={About}/>
        <RootStack.Screen name="AskDetails" component={AskDetails} />
        <RootStack.Screen name="HowToContact" component={HowToContact} />
        <RootStack.Screen name="CategoriesSelect" component={CategoriesSelect}/>
        <RootStack.Screen name="ConfirmationUsername" component={ConfirmingUsername} />
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
