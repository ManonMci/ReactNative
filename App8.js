import React, { } from 'react';
import {StyleSheet, Image, SafeAreaView, View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Installer icone dans le terminal (sans la librairie a la fin)
//import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './src/screens/HomeScreen';
import ProfilScreen from './src/screens/ProfilScreen';
import DetailsScreen from './src/screens/DetailsScreen';

/* Navigation par Tab */

const Tab = createBottomTabNavigator();
 const App = () => {
    return(
        <NavigationContainer>
                <Tab.Navigator
                style={styles.bar}
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                      let iconName;
          
                      if (route.name === 'Home') {
                        iconName = focused
                          ? 'home'
                          : 'home';
                      } else if (route.name === 'Profil') {
                        iconName = focused ? 'user' : 'user';
                      } else if (route.name === 'Details') {
                        iconName = focused ? 'list' : 'list';
                      }
          
                      // You can return any component that you like here!
                      return <FontAwesome name={iconName} size={size} color={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                  })}
                >
                    <Tab.Screen name="Home" component={HomeScreen} options={{title:"menu"}}/>
                    <Tab.Screen name="Profil" component={ProfilScreen}/>
                    <Tab.Screen name="Details" component={DetailsScreen}/>
                </Tab.Navigator>
        </NavigationContainer>
    )
  } 
  const styles = StyleSheet.create({
    container:{
       flex:1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor:"white",
    },
  })
  
  export default App;