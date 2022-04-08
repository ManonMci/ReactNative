import React, {useState, useEffect, useCallback } from 'react';
import {StyleSheet,Alert, Text, View, SafeAreaView, Image, ScrollView, TouchableOpacity, TextInput, KeyboardAvoidingView} from 'react-native';

const Stack = createNativeStackNavigator();

const Profil = (props) => {
    const [nom,setNom] = useState(props.nom);
    const [nomValide, setNomValide] = useState(true);
    const validateName = useCallback( () => {
        if(nom == undefined || nom.length < 3){
            setNomValide(false);
        }else{
            setNomValide(true);
        }
    },[nom, nomValide])

    const [prenom,setPrenom] = useState(props.prenom);
    const [prenomValide, setPrenomValide] = useState(true);
    const validatePrenom = useCallback( () => {
        if(prenom == undefined || prenom.length < 3){
            setPrenomValide(false);
        }else{
            setPrenomValide(true);
        }
    },[prenom, prenomValide])

    const [mdp,setMdp] = useState(props.mdp);
    const [mdpValide, setMdpValide] = useState(true);
    const validateMdp = useCallback( () => {
        if(mdp == undefined || mdp.length < 6){
            setMdpValide(false);
        } else {
            setMdpValide(true);
        }
    },[mdp, mdpValide])

    const [confirmerMdp,setconfMdp] = useState(props.confMdp);
    
    const [confMdpValide, setconfMdpValide] = useState(true);
    const validateconfMdp = useCallback( () => {
        if(confirmerMdp == undefined || confirmerMdp.length < 6){
            setconfMdpValide(false);
        } else {
            setconfMdpValide(true);
        }
    },[confMdpValide])
    
    useEffect(() => {
        if(mdp === confirmerMdp){
            setMdpValide(true);
            setconfMdpValide(true);
        }else{
            setMdpValide(false);
            setconfMdpValide(false);
        }
    },[mdp,confirmerMdp])

    const onSubmit = useCallback(() => {
        if (nom && prenom && mdp && confirmerMdp){
            return(
                Alert.alert('Inscription', 'Bienvenu ' + prenom + ' ' + nom)
            )
        } else{
            Alert.alert("Erreur","Vous n'avez pas remplie le formulaire correctement !")
        }

    },[alert])
    return (
        <View style={style.box2}>
            <TextInput
                placeholder="Nom" 
                onChangeText={setNom}
                style={[
                    style.input, !nomValide? 
                    style.errorInput: undefined
                ]}
                onEndEditing={validateName}>{nom}</TextInput>
            <TextInput 
                placeholder="Prenom" 
                onChangeText={setPrenom}
                style={[
                    style.input, !prenomValide? 
                    style.errorInput: undefined
                ]}
                onEndEditing={validatePrenom}>{prenom}</TextInput>
            <TextInput 
                secureTextEntry
                placeholder='Mot de passe'
                onChangeText={setMdp}
                style={[
                    style.input, !mdpValide? 
                    style.errorInput: undefined
                ]}
                onEndEditing={validateMdp}></TextInput>
            <TextInput 
                secureTextEntry
                placeholder='Confirmer le Mot de passe'
                onChangeText={setconfMdp}
                style={[
                    style.input, !confMdpValide? 
                    style.errorInput: undefined
                ]}
                onEndEditing={validateconfMdp}></TextInput>
            <TouchableOpacity style={style.bouton} onPress={onSubmit}>
                <Text style={style.envoyer}>Envoyer</Text>
            </TouchableOpacity>
        </View>
    )
}
const App = () => {
    return (
        <SafeAreaView style={style.container}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : 10} style={{flex:1}}></KeyboardAvoidingView>
                <ScrollView>
                    <View style={style.box1}>
                        <Text style={style.inscription}>Inscription</Text>
                            <Image
                                style={style.logo}
                                source={require('./assets/user.png')}
                            />
                    </View>
                <Profil/>
           </ScrollView>
        </SafeAreaView>


    );
}
   
 const style = StyleSheet.create({
    container:{
        flex:0.87,
    },
    box1:{
       
        alignItems: "center",
    },
    inscription:{
        fontWeight:"bold",
        flex:0,
        fontSize:25,
        justifyContent:"center",
        marginBottom:30,
        textAlign:"center",
    },
    logo:{
        width:190,
        height:190,
    },
    box2:{
        flexDirection:"column",
        alignItems:"center",
    },
    input:{
        width:290,
        height:40,
        marginTop:8,
        borderWidth:1,
        borderColor:"white",
        borderRadius:5,
        backgroundColor:'#dcdcdc',
        color:"black",
        fontSize:15,
        paddingLeft:10,
    },
    bouton:{
        marginTop:10,
        width:160,
        height:45,
        borderWidth:1,
        borderColor:"grey",
        borderRadius:15,
        flex:0,
        justifyContent:"center",
        color:"black",
    },
    envoyer:{
        textAlign:"center",
        fontSize:15,
        fontWeight:"bold",
    },
    errorInput:{
        borderColor:"red",
        borderWidth:2,
    },
 })
   export default App;