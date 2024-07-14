import { View, Text, Image, StyleSheet, TouchableOpacity  } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'
import { useRouter } from 'expo-router'


export default function Login() {

    const router = useRouter();

  return (
    <View>
      <Image style={{
        width: '100%',
        height: 600
      }}  source={require('./../assets/images/1.jpg')}  />

      <View style={style.container}>
        <Text style={{
            fontSize: 28,
            fontFamily: 'outfit-bold',
            textAlign: 'center',
            marginTop: 20
        }}>AI Travel Planner</Text>
        <Text style={{
            textAlign: 'center',
            fontFamily: 'outfit',
            fontSize: 17,
            color:Colors.GRAY,
            marginTop: 20
        }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt enim repudiandae soluta sit quas error ex ad magni harum quia?</Text>

        <TouchableOpacity style={style.button}
        onPress={ () => router.push('/auth/sign-in')}
        >
            <Text style={{
                textAlign: 'center',
                color: Colors.WHITE,
                fontSize: 17,
                fontFamily: 'outfit'
            }}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const style = StyleSheet.create({
    container: {
        backgroundColor: Colors.WHITE,
        marginTop: -10,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        height: '100%',  
        padding: 25
    },
    button: {
        padding: 15,
        backgroundColor: Colors.PRIMARY,
        borderRadius: 99,
        marginTop: '25%'
    }
})