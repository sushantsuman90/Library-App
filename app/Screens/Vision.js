import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { Card, Text } from 'react-native-paper';

export default function Vision() {
  return (
    <View>
    <View style={styles.Content}>
       <Card>
    <Card.Content>
      {/* <Text variant="titleLarge"></Text> */}
      <Text style={{padding:10,fontSize:16}}variant="bodyMedium">1-University Avenue, Awantipora, Pulwama,{'\n'}

Pin: 192122, Jammu and Kashmir

Phone: +91 (01933) 247954 / 247955

Email: info@islamicuniversity.edu.in</Text>
    </Card.Content>
  </Card>
    </View>
   

    </View>
  )
}

const styles = StyleSheet.create({

  Content:{
    backgroundColor: "white",
    display:"flex",
    marginTop:20,
    marginHorizontal: 20,
    justifyContent:'center',

  },
})