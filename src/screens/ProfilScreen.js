import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import data from '../data/data.json';
import {useNavigation} from '@react-navigation/native';

const axios = require('axios');

/* afficher les categories */
const Categorie = ({title}) => (
  <View>
    <Text style={style.liste}>{title}</Text>
  </View>
);
const renderCategories = ({item}) => <Categorie title={item.title} />;

/* Afficher une liste d'image */
//const srcImage = ({item}) => (
//<View >
//<Image
//style={style.image}
//source={{uri: item.coverUri}}
///>
//</View>
//)

/* afficher language */

const Activities = ({item}) => {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            title: item.title,
            subtitle: item.subtitle,
            coverUri: item.coverUri,
          })
        }>
        <Image style={style.image} source={{uri: item.coverUri}} />
      </TouchableOpacity>
      <Text style={style.titre}>{item.title}</Text>
      <Text style={style.description}>{item.subtitle}</Text>
    </View>
  );
};

const renderActivites = ({item}) => <Activities item={item} />;

/* afficher tendance */
const Activities2 = ({item}) => (
  <View>
    <Image style={style.image} source={{uri: item.coverUri}} />
    <Text style={style.titre}>{item.title}</Text>
    <Text style={style.description}>{item.subtitle}</Text>
  </View>
);
const rendertrendActivites = ({item}) => <Activities2 item={item} />;

/* favoris */
const Favoris = ({item}) => (
  <View>
    <Image style={style.image} source={{uri: item.coverUri}} />
    <Text style={style.titre}>{item.title}</Text>
    <Text style={style.description}>{item.subtitle}</Text>
  </View>
);
const renderFavoris = ({item}) => <Favoris item={item} />;

/* requete API article wordpress */
/* use effect -> afficher */
/* use callback  -> click */
//$api_url = 'http://localhost:8888/APIReact/Article/read.php';


const renderListe = ({item}) => (
  <Deck item={item}/>
)

const Deck = ({item}) => (
  <View>
    <Text style={style.titre2}>{item.post_content}</Text>
  </View>
)

function Profil(navigation) {
  const [listeDeck,setListeDeck] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://www.cefii-developpements.fr/manon1197/APIReact/Article/read.php',
      )
      .then(function (response) {
        setListeDeck(response.data);
      });
  }, []);
  console.log(listeDeck[0]);

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.box3}>
          <Image
            style={style.image2}
            source={require('../../assets/logocefii.jpg')}
          />
        </View>
        <View style={style.box1}>
          <FlatList
            data={data.categories}
            renderItem={renderCategories}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
        {/*<View style={style.box2}> 
                <FlatList
                    data={data.activities}
                    renderItem={srcImage}
                    keyExtractor={item => item.id}
                    horizontal={true}
                />
              </View>*/}
        <View style={style.box2}>
          <FlatList
            data={data.activities}
            renderItem={renderActivites}
            keyExtractor={item => item.ID}
            horizontal={true}
          />
        </View>
        <View>
          <Text style={style.titre2}> 🙊 Tendance</Text>
        </View>
        <View style={style.box2}>
          <FlatList
            data={data.trendActivities}
            renderItem={rendertrendActivites}
            keyExtractor={item => item.id}
            horizontal={true}
          />
        </View>
        <View>
          <Text style={style.titre2}> 😍 Mes Favoris</Text>
        </View>
        <View style={style.box2}>
          <FlatList
            data={data.favoriteActivities}
            renderItem={renderFavoris}
            keyExtractor={item => item.ID}
            horizontal={true}
          />
        </View>

        <View>
          <Text style={style.titre2}> Mes Articles Wordpress</Text>
        </View>
        <View style={style.box2}>
           <FlatList
            data={listeDeck}
            renderItem={renderListe}
            keyExtractor={item => item.ID}
            horizontal={true}
          /> 
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    paddingTop: 10,
  },
  box1: {
    paddingTop: 20,
    marginBottom: 20,
    height: 65,
  },
  liste: {
    fontSize: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 10,
    backgroundColor: 'rgb(198, 200, 200)',
    flex: 1,
    width: 200,
    padding: 5,
    margin: 5,
  },
  box2: {
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 200,
    resizeMode: 'contain',
    borderRadius: 10,
  },
  box3: {
    borderBottomWidth: 1,
    borderColor: 'grey',
  },
  image2: {
    width: 100,
    height: 100,
  },
  titre: {
    color: 'orange',
    fontWeight: 'bold',
    marginTop: 20,
    margin: 10,
    fontSize: 18,
  },
  description: {
    width: 260,
    marginTop: 0,
    marginRight: 10,
    marginLeft: 10,
    fontSize: 15,
  },
  titre2: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 10,
  },
  titre3:{
    color:"black",
    fontSize:15,
  }
});

export default Profil;
