import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import Colors from '../../styles/Colors';

const AbstractItem = ({item}) => {
  const barStyles = number => {
    const color = number > 20 ? '#00ac17' : '#ff3e3e';
    return {
      backgroundColor: color,
      width: `${number}%`,
    };
  };

  return (
    <Pressable style={styles.container}>
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <View style={styles.boxMain}>
          <Text style={styles.subTitle}>{item.status}</Text>
          <Text style={styles.numberBold}>{item.number}</Text>
          <Text style={styles.numberLight}>{item.uom}</Text>
        </View>
        <View style={styles.bgBar}>
          <View style={[styles.bar, barStyles(item.number)]} />
        </View>
      </View>
    </Pressable>
  );
};

export default AbstractItem;

const styles = StyleSheet.create({
  container: {
    paddingBottom: 18,
    paddingLeft: 30,
    paddingRight: 50,
    paddingTop: 18,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: Colors.white,
    borderRadius: 10,
  },
  boxMain: {
    left: 10,
    flexDirection: 'row',
  },
  title: {
    color: Colors.blackPressend,
    fontSize: 16,
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  subTitle: {
    color: Colors.pressed,
    fontSize: 16,
    paddingRight: 10,
    paddingBottom: 18,
  },
  numberBold: {
    color: Colors.blackPressend,
    fontSize: 16,
    fontWeight: 'bold',
  },
  numberLight: {
    color: Colors.blackPressend,
    fontSize: 16,
  },
  bgBar: {
    backgroundColor: '#dedede',
    width: '88%',
    height: 5,
    borderRadius: 20,
    overflow: 'hidden',
  },
  bar: {
    height: 5,
    borderRadius: 20,
  },
});
