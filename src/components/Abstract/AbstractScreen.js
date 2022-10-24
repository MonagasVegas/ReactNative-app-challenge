import React from 'react';
import {StyleSheet, View, FlatList, Text} from 'react-native';
import Colors from '../../styles/Colors';
import AbstractItem from './AbstractItem';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'TOTALES',
    status: 'Escaneados:',
    number: '20',
    uom: '/ 47 un',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'TOTALES',
    status: 'Escaneados:',
    number: '10',
    uom: '/ 47 un',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'TOTALES',
    status: 'Escaneados:',
    number: '30',
    uom: '/ 47 un',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'TOTALES',
    status: 'Escaneados:',
    number: '15',
    uom: '/ 47 un',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'TOTALES',
    status: 'Escaneados:',
    number: '75',
    uom: '/ 47 un',
  },
];

export default function AbstractScreen() {
  return (
    <View style={styles.container}>
      <View>
        <FlatList
          data={DATA}
          renderItem={({item}) => <AbstractItem item={item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
  },
});
