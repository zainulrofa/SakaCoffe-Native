import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "./src/screens/WelcomePage";
import Home from "./src/screens/Home";
import Signup from './src/screens/Signup';
import Login from "./src/screens/Login";

function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false,}} />
        <Stack.Screen name='Welcome' component={Welcome} options={{headerShown: false,}}/>
        <Stack.Screen name='Signup' component={Signup} options={{headerShown: false,}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false,}}/>
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App