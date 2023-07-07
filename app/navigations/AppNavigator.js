import { View, Text } from 'react-native'
import { useState } from 'react';
import React from 'react'
// import { Drawer } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../Components/CustomDrawer';

import Home from '../Screens/Home';
import Main from '../Screens/Main';
import Vision from '../Screens/Vision';
import AskLibrarian from '../Screens/AskLibrarian';
import E_resources from '../Screens/E_resources';
import People from '../Screens/People';
import E_Shodhsindhu from '../Screens/E_Shodhsindhu';
import Feedback from '../Screens/Feedback';
import Etd from '../Screens/Etd';
import DigitalLibraries from '../Screens/DigitalLibraries';
import AcademicSearch from '../Screens/AcademicSearch';
import AcademicNetworking from '../Screens/AcademicNetworking';
import Delnet from '../Screens/Delnet';
import Consortium from '../Screens/Consortium';
import ReferenceManagement from '../Screens/ReferenceManagement'
import LibraryServices from '../Screens/LibraryServices';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export default function AppNavigator() {

  // const [active, setActive] = useState('');
  return (
    <NavigationContainer>
   <Drawer.Navigator  initialRouteName="Home"  drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        drawerPosition:"right",
        headerShown: 'false',
        drawerActiveBackgroundColor: '#002147',
        drawerActiveTintColor: '#fff',
        drawerInactiveTintColor: '#333',
        drawerLabelStyle: {
          marginRight: -25,
          
          fontSize: 15,
        },
      }}>
        <Drawer.Screen name="Main"  component={Root} options={{headerShown: false,}}/>
        <Drawer.Screen name="About" component={Vision} />
        
        {/* <Stack.Screen name="LIBRARY SERVICES" component={LibraryServices} />
        <Drawer.Screen name="ASK A LIBRARIAN" component={AskLibrarian} /> */}
     
      </Drawer.Navigator>
     
  </NavigationContainer>
  )
}

function Root() {
  return (
    
       <Stack.Navigator>
       <Stack.Screen  name="Home" component={Home}
         options={{ headerShown: false }} /> 
       <Stack.Screen name="E-RESOURCES" component={E_resources} 
       options={{
          
          headerStyle: {
            backgroundColor: '#002147',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }}/>
       <Stack.Screen name="LIBRARY ALERTS" component={LibraryServices}  
       options={{
          
        headerStyle: {
          backgroundColor: '#002147',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        }, }}/>
         <Stack.Screen name="PEOPLE" component={People} 
         options={{
          
          headerStyle: {
            backgroundColor: '#002147',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }}/>
         <Stack.Screen name="SERVICES" component={E_Shodhsindhu} 
         options={{
          
          headerStyle: {
            backgroundColor: '#002147',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }}/>
         <Stack.Screen name="FEEDBACK" component={Feedback} 
         options={{
          
          headerStyle: {
            backgroundColor: '#002147',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }}/>
         <Stack.Screen name="COLLECTION" component={Etd} 
         options={{
          
          headerStyle: {
            backgroundColor: '#002147',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }}/>
         <Stack.Screen name="DIGITAL LIBRARY" component={DigitalLibraries} 
         options={{
          
          headerStyle: {
            backgroundColor: '#002147',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }}/>
         <Stack.Screen name="OPAC" component={AcademicSearch} 
         options={{
          
          headerStyle: {
            backgroundColor: '#002147',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }}/>
         <Stack.Screen name="OPEN ACCESS" component={AcademicNetworking} 
         options={{
          
          headerStyle: {
            backgroundColor: '#002147',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }}/>
         <Stack.Screen name="FAVORITES" component={Delnet}
         options={{
          
          headerStyle: {
            backgroundColor: '#002147',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
         <Stack.Screen name="CATALOGING" component={ReferenceManagement} 
         options={{
          
          headerStyle: {
            backgroundColor: '#002147',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }}/>
         {/* <Stack.Screen name="CONSORTIUM FOR EDUCATION" component={Consortium} /> */}
       </Stack.Navigator>
  );
}