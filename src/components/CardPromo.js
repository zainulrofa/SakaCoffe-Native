import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import styles from "../styles/CardPromo";
import { useNavigation } from '@react-navigation/native';

// import Sample from "../assets/images/product.png"


const CardPromo = ({ img, name, code}) => {
    // const navigation = useNavigation()
    return (
        <Pressable style={styles.card}>
            <View style={styles.containerImage}>
                <Image source={{uri:img}} style={styles.imageCard} />
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.cardTitle}>{name}</Text>
                <Text style={styles.cardPrice}>{code}</Text>
            </View>
        </Pressable>
    )
}

export default CardPromo

