import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import CameraScreen from './CameraScreen';

const Stack = createStackNavigator();

const CameraStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen 
      name="Camera" 
      component={CameraScreen} 
      options={{title: '', headerTransparent: true}}
      />
    </Stack.Navigator>
  );
};

export default CameraStack;
