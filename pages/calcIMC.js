
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, ImageBackground, TextInput, TouchableOpacity, } from 'react-native'
import Header from './components/Header';

const calcIMC = ({ navigation }) => {



  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  let result = '';

  const calcularIMC = () => {
    const alturaV = altura / 100
    const imc = peso / (alturaV * alturaV)

    if (imc < 16) {
      alert(nome + 'Subpeso severo ' + imc.toFixed(2))
    }
    else if (imc >= 16 && imc <= 19.9) {
      alert(nome + 'Abaixo do peso ' + imc.toFixed(2))
    }
    else if (imc >= 20 && imc <= 24.9) {
      alert(nome + 'Peso normal ' + imc.toFixed(2))
    }
    else if (imc >= 25 && imc <= 29.9) {
      alert('Sobepreso ' + imc.toFixed(2))
    }
    else if (imc >= 30 && imc <= 39.9) {
      alert('Obeso ' + imc.toFixed(2))
    }
    else if (imc >= 40) {


    }

  };
  return (
    <>
      <View style={styles.container}>

        <ImageBackground source={require('../assets/AtivaCalc.jpeg')}
          style={styles.img} >

          <TextInput style={styles.textInputAltura}
            value={altura} onChangeText={(altura) => setAltura(altura)} placeholder={"Metros"} keyboardType="numeric" placeholderTextColor={'white'} />

          <TextInput style={styles.textInputPeso}
            value={peso} onChangeText={(peso) => setPeso(peso)} placeholder={"Quilos"} keyboardType="numeric" placeholderTextColor={'white'} />

          <TouchableOpacity style={styles.touchCalcular} onPress={calcularIMC}>
            <Text style={{ fontSize: 25, color: 'white', }}> Calcular </Text>
          </TouchableOpacity>


          <TouchableOpacity
            style={styles.buttonProfi} onPress={() => { navigation.navigate('page6') }}>
            <Text style={{ fontSize:30, color: 'white' }}>Profissionais</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button} onPress={() => { navigation.goBack()}}>
            <Text style={{ fontSize:30, color: 'white' }}>Voltar</Text>
          </TouchableOpacity>

        </ImageBackground>
      </View>
    </>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column'
    // backgroundColor:'#4f4f',
    // alignItems: 'center',
    // justifyContent: 'center',
  },

  title: {
    textAlign: 'center',
    fontSize: 25,
    // marginTop: 110,
    paddingBottom: 20,

  },
  textInputPeso: {
    backgroundColor: '#faac00',
    borderRadius: 20,
    marginTop: 10,
    padding: 15,
    color: 'black',
    fontSize: 20,
  },

  textInputAltura: {
    backgroundColor: '#faac00',
    borderRadius: 20,
    marginTop: 150,
    padding: 15,
    color: 'black',
    fontSize: 20,
  },

  touchCalcular: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A020F0',
    borderRadius: 20,
    padding: 10,
    marginTop: 50,
  },

  img: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover',
    alignItems: 'center'
  },

  buttonProfi: {
    width: 245,
    height: 50, 
    backgroundColor: '#D02090',
    marginTop: 160,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding:10,
  },

  button: {
    width: 245,
    height: 50,
    backgroundColor: '#D02090',
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding:10,
  },
});
export default calcIMC;