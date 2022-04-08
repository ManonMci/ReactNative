import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from "@react-navigation/drawer";
import 'react-native-gesture-handler';

import React from 'react';
import {
  StyleSheet,
  Image,
  SafeAreaView,
  View,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer, DrawerActions,} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

//import {AnimatedLoader}  from "@react-native-animated-loader";
//Installer icone dans le terminal (sans la librairie a la fin)

import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


//import Video from '@react-native-video';
//import LinearGradient from 'react-native-linear-gradient';

import HomeScreen from './src/screens/HomeScreen';
import ProfilScreen from './src/screens/ProfilScreen';
import DetailsScreen from './src/screens/DetailsScreen';

/* Navigation avec Tab + stack */

/* animation */

/* DRAWER */
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}
      />
      <DrawerItem
        label="Toggle drawer"
        onPress={() => props.navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </DrawerContentScrollView>
  );
}

  const Drawer = createDrawerNavigator();
  function DrawerNavigator() {
   return (
    <Drawer.Navigator
    drawerContent={(props) => <CustomDrawerContent {...props} />}
>
 <Drawer.Screen name="Feed" component={HomeScreen} options={{drawerLabel: 'Home' }} />
 <Drawer.Screen name="Article" component={DetailsScreen} />
</Drawer.Navigator>
   );
  }

/* TAB */
const Tab = createBottomTabNavigator();
function Home() {
  return (
    <Stack.Navigator
    screenOptions={({route}) => ({
      headerShown: false,
    })}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Profil" component={ProfilScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
    <Stack.Screen name="Drawner" component={DrawerNavigator} />
    </Stack.Navigator>
    );
  }
  
  /* STACK*/
  const Stack = createNativeStackNavigator();
  const App = () => {
    return (
      <NavigationContainer>
      <Tab.Navigator
      screenOptions={({route, navigation}) => ({
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        //headerBackground: () => (
          //left:10,
        //<LinearGradient 
        //  colors={['#ffffff', '#003ca3', '#003ca3']} 
          //</NavigationContainer>style={styles.linearGradient}>
       // </LinearGradient>
        //),
        /* deplacer le titre */
        headerTitleContainerStyle: {
          //right:10,
        },
        headerTitleAlign: 'center',
        headerLeft: () => (
          <TouchableOpacity
            style={styles.bouton}
            //onPress={() => navigation.navigate('Drawner')}
            //component={DrawerNavigator}
          >
            <FontAwesome
            name="bars"
            size={20}
            color="white"
            colorActive="red"/>
          </TouchableOpacity>
        ),
        headerRight: () => (
          <TouchableOpacity
          style={styles.bouton}
          onPress={() => navigation.navigate('Profil')}>
          <FontAwesome
          name="info"
          size={25}
          color="grey"
          colorActive="red"
          />
          </TouchableOpacity>
          ),
          //headerLeft: () => (
            //<Image
            //style={styles.logo}
           // source={require('./assets/logocefii.jpg')}
           // />
           // ),
           
            /* barre du bas style */
            tabBarStyle: {
              backgroundColor: 'white',
              height: 70,
              borderTopRightRadius: 10,
              borderTopLeftRadius: 10,
            },

              tabBarIcon: ({focused, color, size}) => {
                let iconName;
                if (route.name === 'Home') {
                  iconName = focused ? 'home' : 'home';
                } else if (route.name === 'Profil') {
                  iconName = focused ? 'user' : 'user';
                } else if (route.name === 'Details') {
                  iconName = focused ? 'list' : 'list';
                }
                // You can return any component that you like here!
                return <FontAwesome name={iconName} size={size} color={color} />;
                
              },
              tabBarActiveTintColor: 'rgb(92, 149, 221)',
              tabBarInactiveTintColor: 'grey',
            })}>

            <Tab.Screen
            name="Home"
            component={Home}
            options={{
              title: '',
              headerShadowVisible: true,
              boxShadowOpacity: 0,
              headerStyle: {
                backgroundColor: 'white',
                height: 90,
                elevation: 1, // remove shadow on Android
                //shadowOpacity: 0, // remove shadow on iOS
                borderBottomWidth: 2,
                borderBottomColor: 'rgb(92, 149,)',
                borderBottomLeftRadius: 10,
                borderBottomRightRadius: 10,
              },
            }}
            />
            <Tab.Screen
            name="Profil"
            component={ProfilScreen}
            options={{
              title: "",
              headerShadowVisible: true,
              boxShadowOpacity: 0,
              headerStyle: {
                backgroundColor: 'grey',
                height: 90,
                elevation: 1, // remove shadow on Android
                //shadowOpacity: 0, // remove shadow on iOS
                borderBottomWidth: 2,
                borderBottomColor: 'rgba(0, 0.3, 0.2, 0.2)',
              },
              /* deplacer le titre a gauche */
            }}
            />
            </Tab.Navigator>
            </NavigationContainer>
            );
          };
          
const styles = StyleSheet.create({
            container: {
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
            },
            logo: {
              width: 60,
              height: 60,
              resizeMode: 'contain',
              marginLeft: 20,
              borderRadius: 10,
            },
            bouton: {
              marginRight: 20,
              borderWidth: 1,
              borderColor: 'grey',
              borderRadius: 30,
              width: 50,
              height: 50,
              paddingHorizontal: 10,
              justifyContent: 'center',
              alignItems: 'center',
            },
            linearGradient: {
              flex: 1,
              borderBottomLeftRadius: 5,
              borderBottomRightRadius: 5,
            },
          });
          
          export default App;
