import { View, Text, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect } from 'react'
import { useNavigation, useRouter } from 'expo-router'
import { Colors } from '../../constants/Colors';
import CalendarPicker from 'react-native-calendar-picker';
import { useState } from 'react';
import moment from 'moment';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectDate() {

    const navigation = useNavigation();
    const router = useRouter();
    const [startDate, setStartDate] = useState();
    const [endDate, setEndDate] = useState();
    const {tripData, setTripData} = useContext(CreateTripContext);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        })
    }, []);

    const onDateChange = (date, type) => {
      console.log('DATE', date, 'TYPE', type);
      type =='START_DATE' ? setStartDate(moment(date)) : setEndDate(moment(date));
    }

    const onDateSelectionContinue = () => {
      if(!startDate && !endDate) {
        ToastAndroid.show('Please select Start and End date', ToastAndroid.LONG);
        return;
      }

      const totalNoOfDays = endDate.diff(startDate, 'days');
      console.log(totalNoOfDays + 1);
      
      setTripData({
        ...tripData,
        startDate: startDate,
        endDate: endDate,
        totalNoOfDays: totalNoOfDays + 1
      });
      router.push('/create-trip/select-budget');
    }

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

      <View style={{
        marginTop: 30
      }}>
        <CalendarPicker 
          onDateChange={onDateChange}
          allowRangeSelection={true}
          minDate={new Date()}
          maxRangeDuration={5}
          selectedRangeStyle={{
            backgroundColor: Colors.PRIMARY
          }}
          selectedDayTextStyle={{
            color: Colors.WHITE
          }}
        />
      </View>

      <TouchableOpacity 
          style={{
            padding: 15,
            backgroundColor: Colors.PRIMARY,
            borderRadius: 15,
            marginTop: 35
          }}
          onPress={onDateSelectionContinue}
          >
            <Text style={{
                color: Colors.WHITE,
                fontFamily: 'outfit-medium',
                fontSize: 20,
                textAlign: 'center'
            }}>Continue</Text>
        </TouchableOpacity>
    </View>
  )
}