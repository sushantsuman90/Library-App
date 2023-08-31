import { StyleSheet,  View, Image } from 'react-native'
import React from 'react'
import { Card, Surface, Text } from 'react-native-paper';
import network from '../../assets/network.png'
import pdf from '../../assets/pdf.png'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Linking } from 'react-native';
import useGetData from '../custom-hooks/useGetData';

export default function LibraryServices() {

  const { data: alertsData } = useGetData("alerts");
  // console.log(alertsData);
  return (
    <View style={{backgroundColor:'#fff',height:1000,padding:10,}}> 
    {
              alertsData.map(item=>(
    <Card key={item.id} style={{marginTop:10}}>
    <Card.Content>
      <Text variant="titleLarge">{item.title}</Text>
      <Text variant="bodyMedium">{item.description}</Text>
    </Card.Content>
  </Card>
))}
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
    backgroundColor:'#ffff',
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