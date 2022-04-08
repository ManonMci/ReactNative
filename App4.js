/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

/* function state a utiliser */
 import React, {useState} from 'react';
 import {SafeAreaView,StyleSheet,Text,TextInput,View,} from 'react-native';
 
 const Profil = (props) => {

   const [nom,setNom] = useState(props.nom);
   const [prenom,setPrenom] = useState(props.prenom)
   const [age,setAge] = useState(props.age)
   return(
     <View>
       <Text>Mon prenom : {prenom}</Text>
       <Text>Mon Nom: {nom}</Text>
       <Text>Mon age: {age}</Text>
       <View>
        <TextInput 
          placeholder="Nouveau nom"
          onChangeText={setNom}
        />
        <TextInput 
          placeholder="Nouveau prénom"
          onChangeText={setPrenom}
        />
        <TextInput 
          placeholder="age"
          onChangeText={setAge}
        />
       </View>
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