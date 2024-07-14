import { View, Text, TextInput, StyleSheet, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useEffect, useState } from 'react'
import {useNavigation, useRouter} from 'expo-router'
import { Colors } from './../../../constants/Colors'
import { Ionicons } from '@expo/vector-icons';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../../../configs/FirebaseConfigs'

export default function SignIn() {

  const router = useRouter();
  const navigation = useNavigation();

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  useEffect(() => {
    navigation.setOptions({
      headerShown: false
    })
  }, [])

  OnSignAccount = () => {
    if(!email || !password) {
      ToastAndroid.show('Please enter email and password', ToastAndroid.BOTTOM);
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorMessage, errorCode);
      ToastAndroid.show(errorMessage, ToastAndroid.BOTTOM);
    });
  }

  return (
    <View style={{
      padding: 25,
      marginTop: 40,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <TouchableOpacity onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="black" />
      </TouchableOpacity>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 30,
        marginTop: 30
      }}>Let's Sign You In</Text>
      <Text style={{
        fontFamily: 'outfit',
        fontSize: 20,
        color: Colors.GRAY,
        marginTop: 20
      }}>Welcome Back</Text>
      <Text style={{
        fontFamily: 'outfit',
        fontSize: 20,
        color: Colors.GRAY,
        marginTop: 10
      }}>You've been missed!</Text>

      {/* Email */}
      <View style={{
        marginTop: 50
      }}>
        <Text style={{
          fontFamily: 'outfit'
        }}>Email</Text>
        <TextInput 
          style={styles.input} 
          placeholder='Enter Email'
          onChangeText={(value) => setEmail(value)}
        ></TextInput>
      </View>
      {/* Password */}
      <View style={{
        marginTop: 20
      }}>
        <Text style={{
          fontFamily: 'outfit'
        }}>Password</Text>
        <TextInput 
          secureTextEntry={true} 
          style={styles.input} 
          placeholder='Enter Password'
          onChangeText={(value) => setPassword(value)}
          ></TextInput>
      </View>

      {/* Sign In */}
      <TouchableOpacity style={{
        padding: 20,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 15,
        marginTop: 50
      }} onPress={OnSignAccount}>
        <Text style={{
          color: Colors.WHITE,
          textAlign: 'center'
        }}>Sign In</Text>
      </TouchableOpacity>

      {/* Create Account Button */}
      <TouchableOpacity onPress={() => router.replace('/auth/sign-up')} style={{
        padding: 20,
        backgroundColor: Colors.WHITE,
        borderRadius: 15,
        marginTop: 20,
        borderWidth:1
      }}>
        <Text style={{
          color: Colors.PRIMARY,
          textAlign: 'center'
        }}>Create Account</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    padding: 15,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: Colors.GRAY,
    fontFamily: 'outfit'
  }
})