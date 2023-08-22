import { StyleSheet,  View, Image } from 'react-native'
import React from 'react'
import { Surface, Text } from 'react-native-paper';
import network from '../../assets/network.png'
import pdf from '../../assets/pdf.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Linking } from 'react-native';
export default function LibraryServices() {
  return (
    <View style={{backgroundColor:'#fff',height:1000,paddingTop:5,}}> 
    
   <Text>library alerts</Text>
   
    </View>
  )
}

const styles = StyleSheet.create({
  surface: {
    padding: 10,
    height: 70,
    width: 370,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor:'#f0f8ff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  icon: {
    top:3,
    left:5,
    padding:10,
    width: 40,
    height: 40,
    bottom:5,
    
  },
});