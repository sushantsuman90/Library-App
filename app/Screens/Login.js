import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity, Alert,
} from "react-native";
import { useNavigation } from '@react-navigation/native';
import icon from '../../assets/logo.jpeg';
import {firebase} from '../../firebase.config';

export default function Login() {

    const handleLogin = async () => {
        const auth = firebase.auth(); 
        
        try {
            const userCredential1 = await auth.signInWithEmailAndPassword(email, password);
    
            Alert.alert('Success', 'Login successful!.');
            
            navigator.navigate('Home');
          } catch (error) {
            // Show an alert for signup error
            Alert.alert('Invalid Username or Password','Kindly check you Email and password and try again');
          }
          
      };
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigator = useNavigation();
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={icon} /> 
      <StatusBar style="auto" />
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
      <TouchableOpacity onPress={()=>navigator.navigate("Sign-Up")}>
        <Text style={styles.forgot_button}>Create Account</Text> 
      </TouchableOpacity> 
      <TouchableOpacity style={styles.loginBtn} onPress={handleLogin}>
        <Text style={styles.loginText}>LOGIN</Text> 
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