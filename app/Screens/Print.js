import * as React from 'react';
import { SafeAreaView, StyleSheet,View, Text, Image,Alert } from 'react-native';
import { SegmentedButtons, Divider, Button } from 'react-native-paper';
import useGetData from '../custom-hooks/useGetData';
import {firebase} from '../../firebase.config'
import useAuth from '../custom-hooks/useAuth';

const Print = () => {

    const [value, setValue] = React.useState('Books');
    const { data: booksData } = useGetData("books");

  return (
    <View style={styles.container1}>
      {booksData.map((val, index) => (
        <View key={index}>
        <View  style={styles.row}>
          <Image
            source={{ uri: val.urls[0] }} // Assuming imageUrl field in Firestore
            style={styles.image}
          />
          <View style={{flex:1}}>
          <Text style={styles.text}>{val.Name}</Text>
          <Text style={{fontSize:15,marginLeft:5,}}>{val.author}</Text>
          </View>
          {/* <Text style={{alignItems:'flex-end'}}>{val.email}</Text> */}
          {/* <Button icon="" mode="text" onPress={() => handleIssue(val.id)}>
    Issue
  </Button> */}
        </View>
        <Divider/>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
      flex: 1,
      
    },
    container1: {
        flex: 1,
        padding:5,
        marginTop:10,
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
        marginBottom:5,
        marginLeft:5,
        fontSize: 17,
      },
  });

export default Print