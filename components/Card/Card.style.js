import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
    contanier:{
        flex:1,
        backgroundColor: 'gainsboro',
        borderRadius: 10,
        margin: 5,
        borderWidth: 10,
        borderColor: 'gainsboro',
    },
    text_title: {
        fontWeight: 'bold',
        fontSize: 18,
        color: 'black',
    },
    text_price: {},
    image: {
        height: Dimensions.get('window').height / 4,
        borderRadius: 10,
    },
})