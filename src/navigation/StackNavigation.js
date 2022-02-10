import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CameraPermission from '../screens/permission/CameraPermission';
import MapPermission from '../screens/permission/MapPermission';
import PushPermission from '../screens/permission/PushPermission';
import DrawerMenu from './DrawerMenu';


const Stack = createStackNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
          <Stack.Screen 
            name="cameraPermission" 
            options={{headerShown:false}}
            component={CameraPermission} />
          <Stack.Screen 
            name="MapPermission" 
            options={{headerShown:false}}
            component={MapPermission} />
          <Stack.Screen 
            name="PushPermission" 
            options={{headerShown:false}}
            component={PushPermission} />
          <Stack.Screen 
            name="DrawerMenu" 
            options={{headerShown:false}}
            component={DrawerMenu} />
      </Stack.Navigator>      
    </NavigationContainer>
  )
}

export default StackNavigation