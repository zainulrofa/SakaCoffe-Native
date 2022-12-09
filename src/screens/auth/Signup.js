import { View, Text, ImageBackground, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'

import bg from "../../assets/images/bgSignup.png";
import google from "../../assets/images/google.png";
import styles from "../../styles/Signup";
import Input from "../../components/Input";

const Signup = () => {
const [email, setEmail]=useState('')
const [password, setPassword]=useState('')
const [phone, setPhone]=useState('')

  return (
    <View style={styles.container}>
      <ImageBackground source={bg} resizeMode="cover" style={styles.bg}>
        <View style={styles.content}>
          <Text style={styles.title}>Sign Up</Text>
          <Input value={email} setState={setEmail} placeholder='Enter your email adress' isPassword={false} type='email-address'/>
          <Input value={password} setState={setPassword} placeholder='Enter your password' isPassword={true} type='none'/>
          <Input value={phone} setState={setPhone} placeholder='Enter your phone number' isPassword={false} type='phone-pad'/>
          <TouchableOpacity style={styles.createBtn} onPress={()=>{navigation.navigate('Signup')}}>
            <Text style={styles.textCreate}>Create Account</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.googleBtn}>
            <View style={styles.googleContainer}>
            <Image source={google}/>
            <Text style={styles.textGoogle}>Create with Google</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}



export default Signup