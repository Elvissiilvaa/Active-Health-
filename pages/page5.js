import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ImageBackground, Button, ScrollView } from 'react-native';
import { createStackNavigator } from '@react-navigation/native';
import { createAppContainer } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';


const page5 = ({navigation}) => {

  const [data, setData] = React.useState({
    email: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true
  });

  const textInputChange = (val) => {
    if (val.length != 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false
      })
    }
  }

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val
    });
  }
  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  }

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry
    })
  }
  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry
    })
  }

  return (
    <View>
        <ScrollView style={styles.container} contentContainerStyle={{ justifyContent: 'center', alignItems: 'center', }} showsVerticalScrollIndicator={false}>
      <Image source={require('../assets/Untitled-2.png')}
        style={{ width: "80%", height: "50%", alignSelf: 'center', marginTop: 10 }}
      />
      <Text style={{ fontWeight: 700, fontSize: 20, alignSelf: 'center', }}>Sua saude ativa </Text>
      <Text style={{ fontFamily: 'Open Sans', fontSize: 20, marginHorizontal: 50, marginTop: 10, textAlign: 'center', opacity: 0.55, }}>aLorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos.

      </Text>

      <View style={styles.email}>
        <TextInput onChangeText={(val) => textInputChange(val)} placeholderTextColor="#077187" placeholder="Email" style={{ width: 275, paddingHorizontal: 8, }} />
        {data.check_textInputChange ?
          <Animatable.View
            animation="bounceIn"
          >
            <AntDesign name="checkcircle" size={20} color="green" paddingHorizontal={20} marginHorizontal={10} />
          </Animatable.View>
          : null}
      </View>
      <View style={styles.senha}>
        <TextInput onChangeText={(val) => handlePasswordChange(val)} secureTextEntry={data.secureTextEntry ? true : false} keyboardType={'numeric'} placeholderTextColor="#077187" placeholder="Senha" style={{width: 275, paddingHorizontal: 8 }} />
        <TouchableOpacity onPress={updateSecureTextEntry}
        >
          {data.secureTextEntry ?
            <Ionicons name="eye-off" size={24} color="black" paddingHorizontal={20} marginHorizontal={10} />
            :
            <Entypo name="eye" size={24} color="black" paddingHorizontal={20} marginHorizontal={10} />
          }
        </TouchableOpacity>
      </View>
      <View style={styles.senha}>
        <TextInput onChangeText={(val) => handleConfirmPasswordChange(val)} secureTextEntry={data.confirm_secureTextEntry ? true : false} keyboardType={'numeric'} placeholderTextColor="#077187" placeholder="Confirme sua senha" style={{width: 275, paddingHorizontal: 8 }} />
        <TouchableOpacity onPress={updateConfirmSecureTextEntry}
        >
          {data.confirm_secureTextEntry ?
            <Ionicons name="eye-off" size={24} color="black" paddingHorizontal={20} marginHorizontal={10} />
            :
            <Entypo name="eye" size={24} color="black" paddingHorizontal={20} marginHorizontal={10} />
          }
        </TouchableOpacity>
      </View>

      {/* <TouchableOpacity onPress={() => {navigation.navigate('page4')}} style={{ paddingVertical: 10, borderRadius: 20, marginTop: 20, backgroundColor: 'gray', marginHorizontal: 48, alignItems: 'center', justifyContent: 'center',}}>
        <Text style={{ color: 'white', fontWeight: 700 }}>REGISTRAR</Text>
        
      </TouchableOpacity> */}

      <TouchableOpacity onPress={() => {navigation.navigate('page4')}} style={{ paddingVertical: 10, borderRadius: 20, marginTop: 20, backgroundColor: 'gray', marginHorizontal: 48, alignItems: 'center', justifyContent: 'center',}}>
      <Text style={{ color: 'white', fontWeight: 700 }}>Voltar</Text>

      </TouchableOpacity>
      </ScrollView>
    </View>
  );


};



const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  email: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 48,
    borderWidth: 3,
    marginTop: 30,
    paddingHorizontal: 8,
    borderColor: "gray",
    borderRadius: 20,
    paddingVertical: 8,

  },
  senha: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 48,
    borderWidth: 3,
    marginTop: 30,
    paddingHorizontal: 8,
    borderColor: "gray",
    borderRadius: 20,
    paddingVertical: 8
  },
});

export default page5;