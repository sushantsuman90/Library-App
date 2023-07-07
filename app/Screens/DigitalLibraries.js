import { StyleSheet,  View, Image } from 'react-native'
import React from 'react'
import { Surface, Text } from 'react-native-paper';
import network from '../../assets/network.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Linking } from 'react-native';

export default function DigitalLibraries() {
  return (
    <View style={{backgroundColor:'#fff',height:1000,paddingTop:5,}}> 
    <View style={{padding:5, left:5, }}>
      <TouchableOpacity onPress={()=>{Linking.openURL('https://archive.org/')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' ,top:2, left:15,}}>Public Library of India</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://www.loc.gov/')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' ,top:2, left:15,}}>World Digital Library</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://unesdoc.unesco.org/')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' ,top:2, left:15,}}>UNESCO Digital Library</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://ndl.iitkgp.ac.in/')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' ,top:2, left:15,}}>National Digital Library of India{'\n'}(NDLI)</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('http://ulib.isri.cmu.edu/')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' ,top:2, left:15,}}>The Universal Digital Library</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://oercommons.org/')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' ,top:2, left:15,}}>National Science Digital Library{'\n'}(NSDL)</Text>
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