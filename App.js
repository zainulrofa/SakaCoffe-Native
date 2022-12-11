import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "./src/screens/auth/WelcomePage";
import Home from "./src/screens/auth/Home";
import Signup from './src/screens/auth/Signup';
import Login from "./src/screens/auth/Login";
import Forgot from "./src/screens/auth/Forgot";
import Reset from "./src/screens/auth/Reset";
import HomePage from "./src/screens/homePage/Index";
import Drawer from "./src/screens/drawer/Index";
import { useSelector } from 'react-redux';

function App() {
  const Stack = createStackNavigator()

  const token = useSelector(state=>state.auth.userData.token)

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'Drawer'}>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false,}} />
        <Stack.Screen name='Welcome' component={Welcome} options={{headerShown: false,}}/>
        <Stack.Screen name='Signup' component={Signup} options={{headerShown: false,}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false,}}/>
        <Stack.Screen name='Forgot' component={Forgot} options={{headerShown: false,}}/>
        <Stack.Screen name='Reset' component={Reset} options={{headerShown: false,}}/>
        <Stack.Screen name='HomePage' component={HomePage} options={{headerShown: false,}}/>
        <Stack.Screen name='Drawer' component={Drawer} options={{headerShown: false,}}/>
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App