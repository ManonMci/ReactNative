import React, {useState, useEffect, useCallback } from 'react';
import {SafeAreaView,StyleSheet,Text,View,TextInput} from 'react-native';


/* hooks useEffect */
const Profil = (props) => {
    const [nom,setNom] = useState(props.nom);
    const [nomValide, setNomValide] = useState(true);
    
    /* useCallback */
    const validateName = useCallback( () => {
        if(nom.length == 0){
            setNomValide(false);
        }else{
            setNomValide(true);

        }
    },[nom, nomValide])

    const [prenom,setPrenom] = useState(props.prenom);
    const [age,setAge] = useState(props.age);

    const [texteUpdate, setTexteUpdate] = useState ("");

    /* useEffect */
    useEffect(() => {// cylcle de vie Update
      if(props.nom != nom){
        console.log('le nom a changé');
        setTexteUpdate("Vous avez modifié votre nom !");
      } else{
        setTexteUpdate("");
      }
    }, [nom]);

    useEffect(() => {//ComponentDidMount
        console.log("le composant est opérationnel...");
        return () => {//composentwillUnmount
        console.log("le composant va etre détruit...")};
    },[]);

    return(
        <View>
            <View>
                <Text>Mon prenom: {prenom}</Text>
                <Text>Mon Nom: {nom}</Text>
                <Text>Mon age: {age}</Text>
            </View>
          <View>
                <TextInput 
                    placeholder="Nouveau nom"
                    onChangeText={setNom}
                    style={[
                        styles.input, !nomValide? 
                        styles.errorInput: undefined
                    ]}
                    onEndEditing={validateName}>
                </TextInput>
          </View>
        </View>
      );
}

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
    input:{
        backgroundColor:"white",
        borderRadius:10,
    },
    errorInput:{
        borderColor:"red",
        borderWidth:2,
    },

  })

export default App;
