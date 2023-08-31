import { View, Text } from 'react-native'
import { useState } from 'react';
import React from 'react'
// import { Drawer } from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../Components/CustomDrawer';
import Books from '../Screens/Books';
import Home from '../Screens/Home';
import Vision from '../Screens/Vision';
import AskLibrarian from '../Screens/AskLibrarian';
import E_resources from '../Screens/E_resources';
import People from '../Screens/People';
import Services from '../Screens/Services';
import Feedback from '../Screens/Feedback';
import Collection from '../Screens/Collection';
import DigitalLibraries from '../Screens/DigitalLibraries';
import AcademicNetworking from '../Screens/AcademicNetworking';
import Favorites from '../Screens/Favorites';
import Catalogue from '../Screens/Catalogue'
import LibraryServices from '../Screens/LibraryServices';
import Login from '../Screens/Login'
import SignUp from '../Screens/SignUp';
import UsefulLinks from '../Screens/UsefulLinks';
import Print from '../Screens/Print';

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
        <Drawer.Screen name="Contact Us" component={Vision} options={{
          
          headerStyle: {
            backgroundColor: '#002147',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }}/> 
          <Drawer.Screen name="Useful Links" component={UsefulLinks} options={{
          
          headerStyle: {
            backgroundColor: '#002147',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }}/> 
          <Drawer.Screen name="Login" component={Login} options={{
          
          headerStyle: {
            backgroundColor: '#002147',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }}/> 
          
          
        
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
          <Stack.Screen name="Books" component={Books} 
       options={{
          
          headerStyle: {
            backgroundColor: '#002147',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }}/>
            <Stack.Screen name="Print" component={Print} 
       options={{
          
          headerStyle: {
            backgroundColor: '#002147',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }}/>
          <Stack.Screen name="Sign-Up" component={SignUp} 
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
         <Stack.Screen name="ASK LIBRARIAN" component={AskLibrarian}  
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
         <Stack.Screen name="SERVICES" component={Services} 
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
         <Stack.Screen name="COLLECTION" component={Collection} 
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
         
         <Stack.Screen name="OPEN ACCESS" component={AcademicNetworking} 
         options={{
          
          headerStyle: {
            backgroundColor: '#002147',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }}/>
         <Stack.Screen name="FAVORITES" component={Favorites}
         options={{
          
          headerStyle: {
            backgroundColor: '#002147',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }} />
         <Stack.Screen name="CATALOGING" component={Catalogue} 
         options={{
          
          headerStyle: {
            backgroundColor: '#002147',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          }, }}/>
          <Stack.Screen name="Web-OPAC" component={Catalogue} 
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