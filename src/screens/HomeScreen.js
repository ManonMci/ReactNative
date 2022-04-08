import React, { } from 'react';
import {StyleSheet, View, Text, Button, Image} from 'react-native';

function HomeScreen({navigation}){
    return (
      <View style={styles.container}>
        <Image 
          style={styles.image}
          source={require('../../assets/user.png')}/>
        <Button
          title="Aller au profil"
          onPress={() => navigation.navigate('Profil')}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container:{
       flex:1,
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor:"white",
    },
    image:{
      width:100,
      height:100,
    },
  })

  export default HomeScreen;