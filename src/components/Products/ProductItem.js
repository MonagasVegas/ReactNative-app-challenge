import React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import Colors from '../../styles/Colors';
import { RFValue } from 'react-native-responsive-fontsize';

/**
 * @Desc Componente que contiene la estructura de muestra card de productos.
 * enviaremos las data por props.
 */

const ProductItem = ({ item }) => {
  return (
    <Pressable style={styles.container}>
      <View style={styles.boxMain}>
        <View>
          {item.imageUrl === 'https://image.url.com' ?
            <Image
              source={require('ReactNativeChallenge/src/assets/imagen.png')}
              style={styles.image}
            />
            :
            <Image source={{ uri: item?.imageUrl }} style={styles.image} />
          }
          {/* <Image source={{ uri: item?.imageUrl }} style={styles.image} /> */}
        </View>
        <View style={styles.box}>
          <Text style={styles.title}>SANCOR</Text>
          <Text numberOfLines={2} style={styles.subtitle}>
            {item.name}
          </Text>
          <Text style={styles.subtitle}>{item.brand}</Text>
          <Text style={styles.priceText}>{`$${item.price}`}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 10,
    paddingLeft: 30,
    paddingRight: 50,
    paddingTop: 10,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  boxMain: {
    left: 10,
    flexDirection: 'row',
  },
  box: {
    paddingHorizontal: RFValue(20),
    maxWidth: 250
  },
  priceText: {
    color: Colors.blue,
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    color: Colors.blackPressend,
    fontSize: 16,

  },
  title: {
    color: Colors.blue,
    fontSize: 16,
  },
  image: {
    height: 100,
    width: 100,
  },
});
