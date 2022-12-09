import { View, Text, ImageBackground, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'

import styles from "../../styles/Login";
import Input from "../../components/Input";
import google from "../../assets/images/google.png";


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../assets/images/bgLogin.png')}
                resizeMode="cover"
                style={styles.bg}>
                <View style={styles.content}>
                    <Text style={styles.title}>Login</Text>
                    <Input value={email} setState={setEmail} placeholder='Enter your email adress' isPassword={false} type='email-address' />
                    <Input value={password} setState={setPassword} placeholder='Enter your password' isPassword={true} type='none' />
                    <Text style={styles.forgot}>Forgot Password?</Text>
                    <TouchableOpacity style={styles.createBtn} onPress={() => { navigation.navigate('Signup') }}>
                        <Text style={styles.textCreate}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.googleBtn}>
                        <View style={styles.googleContainer}>
                            <Image source={google} />
                            <Text style={styles.textGoogle}>Create with Google</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    )
}

export default Login