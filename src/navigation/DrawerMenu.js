import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../screens/Home'
const DrawerMenu = () => {
  const Drawer = createDrawerNavigator();
  return (
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen 
          name="Home" 
          component={Home}
          />
      </Drawer.Navigator>

  )
}

export default DrawerMenu