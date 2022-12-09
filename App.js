import React from 'react'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "./src/screens/auth/WelcomePage";
import Home from "./src/screens/auth/Home";
import Signup from './src/screens/auth/Signup';
import Login from "./src/screens/auth/Login";
import Forgot from "./src/screens/auth/Forgot";
import Reset from "./src/screens/auth/Reset";

function App() {
  const Stack = createStackNavigator()

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome'>
        <Stack.Screen name='Home' component={Home} options={{headerShown: false,}} />
        <Stack.Screen name='Welcome' component={Welcome} options={{headerShown: false,}}/>
        <Stack.Screen name='Signup' component={Signup} options={{headerShown: false,}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown: false,}}/>
        <Stack.Screen name='Forgot' component={Forgot} options={{headerShown: false,}}/>
        <Stack.Screen name='Reset' component={Reset} options={{headerShown: false,}}/>
      </Stack.Navigator>
   </NavigationContainer>
  )
}

export default App