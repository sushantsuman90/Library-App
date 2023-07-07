import * as React from 'react';
import AppNavigator from './app/navigations/AppNavigator';
import { useCallback, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';

// Keep the splash screen visible while we fetch resources


export default function App() {
  
  return (
    
    <AppNavigator/>
 
  );
}

