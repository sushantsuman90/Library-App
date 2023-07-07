import { StyleSheet,  View } from 'react-native'
import React from 'react'
import { Card, Text } from 'react-native-paper';

export default function Vision() {
  return (
    <View>
    <View style={styles.Content}>
       <Card>
    <Card.Content>
      <Text variant="titleLarge">Developers</Text>
      <Text style={{padding:10,}}variant="bodyMedium">Rahila Anjum{'\n'}Bikees Jan{'\n'}Yasmeena Tabasum</Text>
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
    marginTop:10,
    marginHorizontal: 20,
  },
})