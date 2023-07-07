import { StyleSheet,  View, Image } from 'react-native'
import React from 'react'
import { Surface, Text } from 'react-native-paper';
import network from '../../assets/network.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Linking } from 'react-native';

export default function E_resources({navigation}) {
  return (
    <View style={{backgroundColor:'#fff',height:1000,paddingTop:5,}}> 
    <View style={{padding:5, left:5, }}>
      <TouchableOpacity onPress={()=>{Linking.openURL('https://iust.ac.in/library-view-frame.aspx?deptcode=u5tJCVnQRPP3QZcsobM4wg==&Id=2297')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' ,top:2, left:15,}}>Ebooks</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://iust.ac.in/library-view-frame.aspx?deptcode=u5tJCVnQRPP3QZcsobM4wg==&Id=2305')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' ,top:2, left:15,}}>E journals</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://brill.com/')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' ,top:2, left:15,}}>Brill OnlineJOurnal Collection, Humanities and Social Science</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://journals.sagepub.com/')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' ,top:2, left:15,}}>Sage journals</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://ieeexplore.ieee.org/Xplore/home.jsp')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' ,top:2, left:15,}}>IEEE Explore Digital Library</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://onlinelibrary.wiley.com/journal/15542769')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' ,top:2, left:15,}}>Architechtural Design(AD)</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://www.worldscientific.com/worldscinet/ijmpe')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' ,top:2, left:15,}}>Internatiaonal Journal of Modern Physics E (IJMPE)</Text>
  </Surface>
  </TouchableOpacity>
    </View>
    <View style={{padding:5, left:5,}}>
    <TouchableOpacity onPress={()=>{Linking.openURL('https://www.worldscientific.com/worldscinet/ijwmip')}}>
       <Surface style={styles.surface} elevation={4}>
       <Image source={network} style={styles.icon}/>
    <Text style={{padding:8,  fontSize:18,fontWeight:'700' ,top:2, left:15,}}>International Journal of Wavelets, Multiresolution and Information Processing</Text>
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