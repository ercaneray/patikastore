import React from "react";
import {Text, View, Image, TextInput} from 'react-native';
import styles from './Card.style'

const Card = ({product}) => {
    return (
        <View style={styles.contanier}>
            <Image source={{uri: product.imgURL}} style={styles.image}/>
            <Text style={styles.text_title}>{product.title}</Text>
            <Text style={styles.text_price}>{product.price}</Text>
        </View>
    )
}

export default Card;