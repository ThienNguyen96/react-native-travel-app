import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Colors } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';
import StartNewTripCard from '../../components/MyTrips/StartNewTripCard';
import { useNavigation } from 'expo-router';

export default function Mytrip() {

  const [userTrips, setUserTrips] = useState([]);

  // const navigation = useNavigation();

  // useEffect(() => {
  //   navigation.setOptions({
  //       headerShown: false,
  //       headerTransparent: true
  //     })
  // }, [])

  return (
    <View style={{
      padding: 25,
      paddingTop: 55,
      backgroundColor: Colors.WHITE,
      height: '100%'
    }}>
      <View style={{
        display: 'flex',
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'space-between'
      }}>
        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 35
        }}>My Trips</Text>
        <Ionicons name="add-circle" size={45} color="black" />
      </View>

      {
        userTrips?.length == 0 ? <StartNewTripCard /> : null
      }
    </View>
  )
}