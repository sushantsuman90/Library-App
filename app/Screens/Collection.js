import { StyleSheet,  View, Image } from 'react-native'
import React from 'react'
import { Surface, Text } from 'react-native-paper';
import network from '../../assets/network.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Linking } from 'react-native';
import book from '../../assets/book.png'
import { useNavigation } from '@react-navigation/native';

export default function Collection() {

  const navigator = useNavigation();

  return (
    <View style={{backgroundColor:'#fff',height:1000,paddingTop:5,}}> 
    <View style={{padding:5, left:5, }}>
      <TouchableOpacity onPress={()=>navigator.navigate("E-RESOURCES")}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={book} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' ,top:2, left:15,}}>E-Resources</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>navigator.navigate("Print")}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={book} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' ,top:2, left:15,}}>Print</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    </View>
  )
}


const styles = StyleSheet.create({
  surface: {
    padding: 10,
    height: 'auto',
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