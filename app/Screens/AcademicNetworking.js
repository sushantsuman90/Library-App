import { StyleSheet,  View, Image } from 'react-native'
import React from 'react'
import { Surface, Text } from 'react-native-paper';
import network from '../../assets/network.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Linking } from 'react-native';

export default function AcademicNetworking() {
  return (
    <View style={{backgroundColor:'#fff',height:1000,paddingTop:2,}}> 
    <View style={{padding:5, left:5, }}>
      <TouchableOpacity onPress={()=>{Linking.openURL('https://oaister.on.worldcat.org/discovery')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700'  , left:15,}}>OAlster</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://doaj.org/')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700'  , left:15,}}>Online Journals(DoAJ)</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://www.doabooks.org/')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700'  , left:15,}}>Directory of Open Access Books   (DOAB)</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('http://v2.sherpa.ac.uk/opendoar/')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700'  , left:15,}}>OpenDOAR</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('http://roar.eprints.org/')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700'  , left:15,}}>Registry of Open Acess Repositories (ROAR)</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://iust.ac.in/www.oapen.org/home?brand=oapen')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700'  , left:15,}}>OAPEN</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://iust.ac.in/library-view-frame.aspx?deptcode=u5tJCVnQRPP3QZcsobM4wg==&Id=3452')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' , left:15,}}>Open Acess EBOOKS</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('http://ebooksgo.org/')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700'  , left:15,}}>Free e-Books Library</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('http://ezb.uni-regensburg.de/search.phtml?bibid=AAAAA&colors=7&lang=en')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8, fontSize:18,fontWeight:'700' ,left:15,}}>Electroninc Journals Library</Text>
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