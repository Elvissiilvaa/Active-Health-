import React from 'react'
import { View, Text, StyleSheet, Button, ImageBackground, TouchableOpacity } from 'react-native'
import Header from './components/Header'


const Home = ({ navigation }) => {
  return (
    <>

      <View style={styles.container}>
        <ImageBackground source={require('../assets/Ativa-pag1.png')}
          style={styles.img} >



          <TouchableOpacity style={styles.buttonIni} onPress={() => { navigation.navigate('calcIMC') }}>
            <Text style={{ fontSize: 25, color: 'white', }}> Iniciar </Text>
          </TouchableOpacity>

        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',

  },

  img: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    alignItems: 'center'
  },

  button: {
    marginTop: 110,
    paddingBottom: 20,
    borderRadius: 10,
    fontSize: 30,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'black',
  },

  buttonIni: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D02090',
    borderRadius: 20,
    padding: 10,
    marginTop: 70,
  },

});

export default Home;
