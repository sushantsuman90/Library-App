import * as React from 'react';
import { SafeAreaView, StyleSheet,View, Text, Image,Alert } from 'react-native';
import { SegmentedButtons, Divider, Button } from 'react-native-paper';
import useGetData from '../custom-hooks/useGetData';
// import {firebase} from '../../firebase.config'
import useAuth from '../custom-hooks/useAuth';

export default function Favorites() {

const [loading, setLoading] =React.useState(true)
const {currentUser} = useAuth();
const { data: userData } = useGetData("users");
const data1 = userData.filter(item=>item.email===currentUser.email);

React.useEffect(() => {
  
  if(userData){
    setLoading(false);
  }
  
}, [userData]);



  console.log(userData);
  return (
    <View style={{padding:5, marginTop:10}}>
      {loading ?  <View><Text>Loading...</Text></View> :
    <View>{data1[0]?.favourites?.map((val, index) => (
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
        {/* <Button icon="" mode="text" onPress={() => handleFavourites(val.id)}>
  +favorites
</Button> */}
      </View>
      <Divider/>
      </View>
    ))}</View>
    
}
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
    marginBottom:5,
    marginLeft:5,
    fontSize: 21,
  },
});