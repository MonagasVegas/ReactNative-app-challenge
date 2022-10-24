import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
  Platform,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../styles/Colors';
import {getProducts} from '../../services/api/products';
import ProductItem from './ProductItem';
import {useNavigation} from '@react-navigation/native';

export default function ProductsScreen() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();

  const loadProduct = async () => {
    setLoading(true);
    const response = await getProducts();
    setProduct(response);
    setLoading(false);
    console.log(response);
  };

  const goToAbstract = () => {
    navigation.navigate('Abstract');
    console.log('estoy');
  };

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator style={styles.loader} color="#AEAEAE" size="large" />
      ) : null}
      <FlatList
        data={product}
        renderItem={({item}) => (
          <TouchableOpacity onPress={goToAbstract}>
            <ProductItem item={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
  },
  loader: {
    marginTop: 5,
    marginBottom: Platform.OS === 'android' ? 90 : 60,
  },
});
