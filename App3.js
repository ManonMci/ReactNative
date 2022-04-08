/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {Component, useState } from 'react';
 import {SafeAreaView,ScrollView,StyleSheet,Text,View,TextInput} from 'react-native';
 
 /* Class state , plus utilisé*/
 class Profil extends Component{
   constructor(props){
     super(props);
       this.state = {
         prenom : this.props.prenom,
         nom: this.props.nom,
         age: this.props.age,
       };
     }
 
   onChangeText(newName){
     console.log(newName);
     this.setState({nom: newName})
   }
 
 
   render(){
     return(
       <View>
         <View>
           <Text> Prénom : {this.state.prenom}</Text>
           <Text>Nom :{this.state.nom}</Text>
           <Text>Age :{this.state.age}</Text>
           <Text>Saisir votre nouveau nom:</Text>
         </View>
         <View>
       <TextInput 
         placeholder="coucou"
         onChangeText={(newName) => this. 
         onChangeText(newName)}/>
       </View>
     </View>
     )
   }
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
     flex:1,
     justifyContent:"center",
     alignItems:"center",
   },
 })
 
 export default App;
 
 