import { StyleSheet, Text, View, Pressable, Image } from 'react-native'
import React from 'react'
import styles from "../styles/CardProduct";

// import Sample from "../assets/images/product.png"


const CardProduct = ({img, name, price}) => {
    return (
        <Pressable style={styles.card} onPress={() => { navigation.navigate("ProductDetail") }}>
            <View style={styles.containerImage}>
                <Image source={{uri:img}} style={styles.imageCard} />
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.cardTitle}>{name}</Text>
                <Text style={styles.cardPrice}>{`Rp ${price}`}</Text>
            </View>
        </Pressable>
    )
}

export default CardProduct

