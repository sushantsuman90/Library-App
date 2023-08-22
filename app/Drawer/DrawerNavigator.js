import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Main from '../Screens/Main';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
        <Drawer.Screen name="Main" component={Main} options={{headerShown: true}}/>
    </Drawer.Navigator>
  )
}