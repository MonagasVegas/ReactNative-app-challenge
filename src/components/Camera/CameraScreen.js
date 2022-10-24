import React from 'react';
import {
  View, 
  StyleSheet, 
  Text} 
  from 'react-native';
import Colors from '../../styles/Colors';

const CameraScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}   >
      <Text style={styles.textColor}>BIENVENIDO</Text>
      <Text style={styles.text}>Proyecto en construcción......</Text>
      </View>
    </View>
  );
};

export default CameraScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
  },
  textColor: {
    color: Colors.blackPressend,
    fontWeight: 'bold',
    fontSize: 18,
    alignSelf: 'center',
    paddingBottom: 10
  },
  text:{
    color: Colors.red,
    fontWeight: 'bold'
  },
  box:{
    borderWidth: 1,
    padding: 20,
    borderRadius: 2,
    position: 'relative',
    width: '90%',
    height: 100,
    marginTop: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: Colors.white,
    elevation: 5,
  }
});
