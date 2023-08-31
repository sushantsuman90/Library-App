import { StyleSheet, View, Image } from 'react-native';
import { Divider, Text } from 'react-native-paper';
import React from 'react';
import useGetData from '../custom-hooks/useGetData';

export default function People() {
  
  const { data: peopleData } = useGetData("people");

  return (
    <View style={styles.container}>
      {peopleData.map((fruit, index) => (
        <View key={index}>
        <View  style={styles.row}>
          <Image
            source={{ uri: fruit.urls[0] }} // Assuming imageUrl field in Firestore
            style={styles.image}
          />
          <View style={{flex:1}}>
          <Text style={styles.text}>{fruit.Name}</Text>
          <Text style={{fontSize:15,marginLeft:5,marginBottom:3,}}>{fruit.description}</Text>
          <Text style={{fontSize:12,marginLeft:5,}}>{fruit.email}</Text>
          </View>
          
        </View>
        <Divider/>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:5,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginBottom:5,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  text: {
    marginBottom:3,
    marginLeft:5,
    fontSize: 21,
  },
});

