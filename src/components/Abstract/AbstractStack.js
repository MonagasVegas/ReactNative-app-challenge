import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AbstractScreen from './AbstractScreen';
import Colors from '../../styles/Colors';

const Stack = createStackNavigator();

const AbstractStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 100,
        },
        headerTintColor: Colors.blue,
      }}>
      <Stack.Screen
        name="Abstract"
        component={AbstractScreen}
        options={{title: '', headerTransparent: true}}
      />
    </Stack.Navigator>
  );
};
export default AbstractStack;
