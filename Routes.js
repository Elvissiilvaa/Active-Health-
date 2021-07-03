import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';


import Home from './pages/Home';
import calcIMC from './pages/calcIMC';
import page3 from './pages/page3';
import page4 from './pages/page4';
import page5 from './pages/page5';
import page6 from './pages/page6';



const AppStack = createStackNavigator();

const Routes = () => {
  return (

    <NavigationContainer>
    <AppStack.Navigator headerMode = "none" initialRouteName = "Home">
    <AppStack.Screen name = "Home" component={Home} />
    <AppStack.Screen name = "calcIMC" component={calcIMC} />
    <AppStack.Screen name = "page3" component={page3} />
    <AppStack.Screen name = "page4" component={page4} />
    <AppStack.Screen name = "page5" component={page5} />
    <AppStack.Screen name = "page6" component={page6} />
    </AppStack.Navigator>
    </NavigationContainer>

  );
};

export default Routes;