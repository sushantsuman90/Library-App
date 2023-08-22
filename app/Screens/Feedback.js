import * as React from 'react';
import { TextInput, Button } from 'react-native-paper';
import { StyleSheet, Text, View, Alert } from 'react-native';
import { firebase } from '../../firebase.config'
// import { collection, setDoc, updateDoc, doc, getDoc,} from 'firebase/firestore'
import { useNavigation } from '@react-navigation/native';
import pdf from '../../assets/pdf.png'
import network from '../../assets/network.png'




export default function Feedback({navigation}) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [subject, setSubject] = React.useState("");
  const [description, setDescription] = React.useState("");

  const navigator = useNavigation();
  
  const handleSubmit = () => {


    console.log("clicked")
    let date = new Date();
    console.log(date);
    const data={
      name: name,
      email: email,
      
      subject: subject,
      mobileNo: mobile,
      description: description,
      createdAt: date.toJSON(),
    }
    console.log(data);
        const messageRef = firebase.firestore().collection('feedback');
       messageRef.add(data).then(()=>{
          Alert.alert("Feedback Sent");
          navigator.navigate("Home");
        }).catch((error)=>{
          console.log(error);
          Alert.alert('Error adding document ');
        })
        
   
    
  

}


  return (
    <View style={{padding: 20, backgroundColor:'#fff', height:800}}>
       <TextInput
       style={{marginTop:10,}}
      label="Name"
      mode='outlined'
      //multiline={true}
      value={name}
      onChangeText={text => setName(text)}
    />
     <TextInput
      style={{marginTop:10,}}
      label="Email"
      mode='outlined'
      //multiline={true}
      value={email}
      onChangeText={text => setEmail(text)}
    />
     <TextInput
      style={{marginTop:10,}}
      label="Mobile No."
      mode='outlined'
      //multiline={true}
      value={mobile}
      onChangeText={text => setMobile(text)}
    />
     <TextInput
      style={{marginTop:10,}}
      label="Subject"
      mode='outlined'
      multiline={true}
      value={subject}
      onChangeText={text => setSubject(text)}
    />
     <TextInput
      
     style={{height: 200,marginTop:10}}
      label="Desciption"
      mode='outlined'
      multiline={true}
      value={description}
      onChangeText={text => setDescription(text)}
    />
     <Button style={{marginTop:25,}}  mode="contained" onPress={() => handleSubmit()}>
    Submit
  </Button>
    </View>
  )
}

const styles = StyleSheet.create({})