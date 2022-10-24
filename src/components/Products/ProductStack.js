import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import ProductsScreen from './ProductScreen';
import Colors from '../../styles/Colors';

const Stack = createStackNavigator();

const ProductsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: 100,
        },
        headerTintColor: Colors.blue,
      }}>
      <Stack.Screen
        name="ProductStack"
        component={ProductsScreen}
        options={{title: '', headerTransparent: true}}
      />
    </Stack.Navigator>
  );
};

export default ProductsStack;
