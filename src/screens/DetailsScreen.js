import React, { } from 'react';
import {StyleSheet, SafeAreaView, View, Text, Button, ScrollView, Image} from 'react-native';

function DetailsScreen({route, navigation}) {
    return (
      <View style={style.container}>
        <Image style={style.image}
          source={{uri: route.params.coverUri}}/>
        <Text>{route.params.title}</Text>
        <Text>{route.params.subtitle}</Text>
      <Button title="Revenir à la page d'accueil" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}

const style = StyleSheet.create({ 
  container:{
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  image:{
    width:150, 
    height:150,
    resizeMode:"contain",
  }
});

export default DetailsScreen;
