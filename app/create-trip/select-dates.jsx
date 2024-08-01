import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import CalendarPicker from 'react-native-calendar-picker';

export default function SelectDate() {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        })
    }, []);

  return (
    <View style={{
        padding: 25,
        paddingTop: 95,
        backgroundColor: Colors.WHITE,
        height: '100%'
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 35,
        marginTop: 20
      }}>Travel Dates</Text>

      <View>
        <CalendarPicker  />
      </View>
    </View>
  )
}