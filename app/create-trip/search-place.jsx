import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useContext } from 'react';
import {CreateTripContext} from './../../context/CreateTripContext';


export default function SearchPlace() {

    const navigation = useNavigation();
    const {tripData, setTripData} = useContext(CreateTripContext);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: 'Search'
        })
    }, [])

    useEffect(() => {
      console.log(tripData);
    }), [tripData]

  return (
    <View style={{
        padding: 25,
        paddingTop: 95,
        height: '100%',
        backgroundColor: Colors.WHITE
    }}>
      <GooglePlacesAutocomplete
      placeholder='Search Place'
      fetchDetails={true}
      onPress={(data, details = null) => {
        // 'details' is provided when fetchDetails = true

        setTripData({
          locationInfo: {
            name: data.description,
            coordinates: details?.geometry.location,
            photoRef: details?.photos[0]?.photo_reference,
            url: details?.url
          }
        });
      }}
      query={{
        key: process.env.EXPO_PUBLIC_GOOGLE_MAP_KEY,
        language: 'en',
      }}
      styles={{
        textInputContainer: {
          borderWidth: 1,
          borderRadius: 5,
          marginTop: 25
        }
      }}
    />
    </View>
  )
}