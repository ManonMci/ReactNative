import React, { } from 'react';
import {StyleSheet, SafeAreaView, View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import ProfilScreen from './src/screens/ProfilScreen';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createNativeStackNavigator();

/* navigation par stack */

 const App = () => {
    return(
        <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen} options={{title:"menu"}}/>
                    <Stack.Screen name="Profil" component={ProfilScreen}/>
                    <Stack.Screen name="Details" component={DetailsScreen}/>
                </Stack.Navigator>
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