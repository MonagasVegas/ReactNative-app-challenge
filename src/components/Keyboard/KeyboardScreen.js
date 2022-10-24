import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Colors from '../../styles/Colors';
import {RFValue} from 'react-native-responsive-fontsize';

const KeyboardScreen = () => {
  const [text, onChangeText] = React.useState('Input Text');

  return (
    <View style={styles.container}>
      <View style={styles.modal}>
        <Text style={styles.title}>Ingresar EAN</Text>
        <View>
          <Text style={styles.titleInput}>Código</Text>
          <TextInput
            style={styles.input}
            keyboardType="numeric"
            maxLength={20}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
        <View style={styles.btn}>
          <TouchableOpacity>
            <Text style={styles.textCancel}>CANCELAR</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={styles.textBtn}>OK</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default KeyboardScreen;

const styles = StyleSheet.create({
  modal: {
    padding: 20,
    borderRadius: 2,
    position: 'relative',
    width: '90%',
    height: RFValue(200),
    marginTop: 150,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: Colors.white,
    elevation: 5,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.lightGrey,
  },
  input: {
    height: 40,
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
    color: '#000',
  },
  title: {
    color: Colors.blackPressend,
    fontWeight: 'bold',
    fontSize: 20,
  },
  titleInput: {
    color: Colors.blue,
    fontSize: 16,
    left: 16,
    top: 12,
  },
  textBtn: {
    color: Colors.darkGrey,
    fontSize: 15,
    marginHorizontal: 20,
  },
  textCancel: {
    color: Colors.blue,
    fontSize: 15,
    marginHorizontal: 20,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginVertical: 25,
  },
});
