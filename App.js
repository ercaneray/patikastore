import React from "react";
import {SafeAreaView, View, Text, FlatList, StyleSheet, ScrollView, Image, Dimensions, TextInput} from "react-native";
import products from './store_data.json'
import Card from './components/Card';
function App(){
  return (
   <SafeAreaView style={styles.contanier}>
    <View>
      <Text style={styles.title_text}>PATIKASTORE</Text>
      <TextInput
        placeholder="Ara..."
        style={styles.input_box}
      />
      <FlatList
      key={'_'}
      keyExtractor={item => "_" + item.id}
      data={products}
      renderItem={({item}) => <Card product={item}/>}
      numColumns={2}
      />
    </View>
   </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  contanier: {
    flex: 1,
    backgroundColor: 'ghostwhite',
  },
  title_text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'purple',
    margin: 9,
  },
  input_box: {
    height: 40,
    backgroundColor: 'gainsboro',
    borderRadius: 10,
    margin: 5,
  }
})

export default App;