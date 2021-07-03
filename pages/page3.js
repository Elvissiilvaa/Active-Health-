import React from 'react'
import { StyleSheet, Text, View, Button, SafeAreaView, ScrollView, Image, ImageBackground, TouchableOpacity } from 'react-native'
import Header from './components/Header';
//import { AntDesign } from '@expo/vector-icons';

const page3 = ({ navigation }) => {
  return (
    <>
      {/* */}
      <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
        <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', }} showsVerticalScrollIndicator={false}>
          <Image source={require('../assets/foto-homem.png')} style={styles.userImage} />
          <Text style={styles.userText}> Jhonny cash</Text>
          <View style={styles.viewFiltro}>
            {/* <TouchableOpacity style={styles.teste} onPress={() => { }}>
              <Text style={{ color: 'white', fontWeight: 700, fontSize: 10, }}> Nutricionista</Text>
              </TouchableOpacity>
           
             <TouchableOpacity style={styles.teste} onPress={() => { }}>
              <Text style={{ color: 'white', fontWeight: 700, fontSize: 10, }}> Personal</Text>
            </TouchableOpacity> */}

          </View>
          <Text style={styles.userDesc}> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book </Text>

          <View style={styles.userTouchBox}>
           
            <TouchableOpacity style={styles.userTouch} onPress={() => { }}>
              <Text style={styles.userTouchText}> Seguir </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.linha}></View>

          <View style={{ paddingVertical: 15, }}>
            <Image source={require('../assets/foto-mulher.png')} style={styles.avaliacaoImage} />
          </View>

         

          <Text style={styles.avaliacaoTitulo}> Xubas</Text>
          <Text style={styles.avaliacaoDesc}> O profissional foi extremamente bom e não negligenciou nenhuma parte do tratamento</Text>

          <View style={styles.linha}></View>

         

        </ScrollView>
      </SafeAreaView>

      <TouchableOpacity
            style={styles.button} onPress={() => { navigation.goBack()}}>
            <Text style={{ fontSize:30, color: 'white' }}>Voltar</Text>
          </TouchableOpacity>


         
      <TouchableOpacity
            style={styles.button} onPress={() => { navigation.navigate('page4')}}>
            <Text style={{ fontSize:30, color: 'white' }}>login</Text>
          </TouchableOpacity>


        
    </>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white',
    marginHorizontal: 20,
  },
  userImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  userText: {
    fontWeight: 700,
    fontSize: 22,
    color: 'black',
    marginBottom: 10,

  },
  userDesc: {
    fontWeight: 700,
    fontSize: 12,
    color: 'black',
    opacity: 0.70,
    marginBottom: 10,
    textAlign: 'center',

  },
  teste: {
    borderColor: 'blue',
    borderWidth: 1,
    borderRadius: 8,
    paddingVertical: 3,
    paddingHorizontal: 5,
    marginHorizontal: 4,
    backgroundColor: 'blue',
    marginHorizontal: 16,

  },
  userTouch: {
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 8,
    paddingVertical: 8,
    paddingHorizontal: 14,
    marginHorizontal: 10,

  },
  userTouchText: {
    color: 'blue',
    fontWeight: 700,
    fontSize: 16,

  },
  userTouchBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 10,

  },
  linha: {
    borderWidth: 0.08,
    borderColor: 'black',
    margin: 10,
    width: '100%'
  },
  avaliacaoImage: {
    width: 80,
    height: 80,
    borderRadius: 100,

  },
  avaliacaoDesc: {
    fontWeight: 600,
    fontSize: 12,
    color: 'black',
    opacity: 0.80,
    textAlign: 'center',

  },
  avaliacaoTitulo: {
    fontWeight: 600,
    fontSize: 12,
    color: 'black',
    textAlign: 'center',

  },
  viewFiltro: {
    flexDirection: 'row',
    marginHorizontal: 2,
    marginVertical: 2,
    paddingVertical: 2,
    paddingHorizontal: 2,

  },

  button: {
    width: 370,
    height: 50,
    backgroundColor: '#D02090',
    marginTop: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    padding:10,
  },
  
});
export default page3;