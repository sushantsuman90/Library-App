import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity, Alert
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import icon from '../../assets/logo.jpeg';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { firebase } from '../../firebase.config'; 

export default function SignUp() {
    const navigator = useNavigation();
    const [name, setName] =useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = async () => {
    const auth = firebase.auth(); 
    
    try {
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        const messageRef = firebase.firestore().collection('users');
        const data={
            name: name,
            email: email,
          
          }
          const n1 = await messageRef.add(data);

        Alert.alert('Success', 'Signup successful! Please log in.');
        
        navigator.navigate('Login');
      } catch (error) {
        // Show an alert for signup error
        Alert.alert('Error', error.message);
      }
      
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={icon} /> 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Name."
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
      {/* <TouchableOpacity>
        <Text style={styles.forgot_button}>Create Account</Text> 
      </TouchableOpacity>  */}
      <TouchableOpacity style={styles.loginBtn} onPress={handleSignUp}>
        <Text style={styles.loginText}>Sign-Up</Text> 
      </TouchableOpacity> 
    </View> 
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
    width:180,
    height:180,
  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});