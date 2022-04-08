/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View,} from 'react-native';
 
 const Profil = ( props ) => {
   return(
     <View>
       <Text>{props.prenom}</Text>
       <Text>{props.nom}</Text>
       <Text>{props.age}</Text>
     </View>
   );
 }
 
 /* view */
 const App = () => {
   return(
     <SafeAreaView style={styles.container}>
       <Profil nom="Mucchielli" prenom="Manon" age="27"/>
     </SafeAreaView>
   )
 } 
 
 
 
 const styles = StyleSheet.create({
   container:{
     backgroundColor:"pink",
   },
 })
 
 export default App;
 
 