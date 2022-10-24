import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import KeyboardScreen from './KeyboardScreen';

const Stack = createStackNavigator();

const KeyboardStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Keyboard"
        component={KeyboardScreen}
        options={{title: '', headerTransparent: true}}
      />
    </Stack.Navigator>
  );
};

export default KeyboardStack;
