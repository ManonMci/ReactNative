screenOptions={({route, navigation}) => ({
    headerTintColor: 'white',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    //headerBackground: () => (
      //left:10,
    //<LinearGradient 
    //  colors={['#ffffff', '#003ca3', '#003ca3']} 
      //</NavigationContainer>style={styles.linearGradient}>
   // </LinearGradient>
    //),
    /* deplacer le titre */
    headerTitleContainerStyle: {
      //right:10,
    },
    headerTitleAlign: 'center',
    headerLeft: () => (
      <TouchableOpacity
        style={styles.bouton}
        //onPress={() => navigation.navigate('Drawner')}
        //component={DrawerNavigator}
      >
        <FontAwesome
        name="bars"
        size={20}
        color="white"
        colorActive="red"/>
      </TouchableOpacity>
    ),
    headerRight: () => (
      <TouchableOpacity
      style={styles.bouton}
      onPress={() => navigation.navigate('Profil')}>
      <FontAwesome
      name="info"
      size={25}
      color="grey"
      colorActive="red"
      />