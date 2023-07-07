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
    <View style={{padding:5, left:5, }}>
      <TouchableOpacity onPress={()=>{Linking.openURL('https://www.iust.ac.in/departmentcontent/LIB/documents/638090445955054443.pdf#toolbar=0')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={pdf} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' ,top:2, left:15,}}>Library Timmings</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://www.iust.ac.in/departmentcontent/LIB/documents/638090447355918163.pdf#toolbar=0')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={pdf} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' ,top:2, left:15,}}>Library Section</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://www.iust.ac.in/departmentcontent/LIB/documents/638090448524837781.pdf#toolbar=0')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={pdf} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' ,top:2, left:15,}}>Library Membership</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://www.iust.ac.in/departmentcontent/LIB/documents/638090449038840841.pdf#toolbar=0')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={pdf} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' ,top:2, left:15,}}>Library Rules</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://www.iust.ac.in/departmentcontent/LIB/documents/638090451613795911.pdf#toolbar=0')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={pdf} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' ,top:2, left:15,}}>External Membership Forms</Text>
  </Surface>
  </TouchableOpacity>
    </View>
   
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