import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProductsStack from 'ReactNativeChallenge/src/components/Products/ProductStack';
import CameraStack from 'ReactNativeChallenge/src/components/Camera/CameraStack';
import KeyboardStack from 'ReactNativeChallenge/src/components/Keyboard/KeyboardStack';
import AbstractStack from './src/components/Abstract/AbstractStack'

const Tabs = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tabs.Navigator
        initialRouteName='Products'
        screenOptions={{
          headerStyle: {backgroundColor: 'white', height: 80},
          tabBarStyle: {backgroundColor: '#A8AAAC', height: 80},
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'white',
          tabBarShowLabel: false,
        }}>
        <Tabs.Screen
          name="Keyboard"
          component={KeyboardStack}
          options={{
            headerTitle: 'Escanee el código EAN',
            tabBarIcon: ({color, size}) => (
              <Image
                color={color}
                size={29}
                source={require('ReactNativeChallenge/src/assets/Group.png')}
              />
            ),
          }}
        />

        <Tabs.Screen
          name="Camera"
          component={CameraStack}
          options={{
            headerTitle: 'Cámara',
            tabBarIcon: () => (
              <Image
                source={require('ReactNativeChallenge/src/assets/Vector.png')}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="Products"
          component={ProductsStack}
          options={{
            headerTitle: 'Listado de productos',
            tabBarIcon: () => (
              <Image
                source={require('ReactNativeChallenge/src/assets/cross_bold.png')}
              />
            ),
          }}
        />
         <Tabs.Screen
          name="Abstract"
          component={AbstractStack}
          options={{
            headerTitle: 'Resumen'
          }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
