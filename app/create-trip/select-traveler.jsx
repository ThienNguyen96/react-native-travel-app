import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'expo-router'
import { Colors } from '../../constants/Colors';
import { SelectTravelesList } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';

export default function SelectTraveler() {

  const navigation = useNavigation();
  const [selectedTraveler, setSelectedTraveler] = useState([]);

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
      }}>Who's Traveling</Text>

      <View style={{
        marginTop: 20
      }}>
        <Text style={{
          fontFamily: 'outfit-bold',
          fontSize: 23
        }}>
          Choose your traveles
        </Text>

        <FlatList
          data={SelectTravelesList}
          renderItem={({item, index}) => (
            <TouchableOpacity 
              onPress={() => setSelectedTraveler(item.title)}
              style={{
                marginVertical: 10
              }}>
              <OptionCard 
                option={item}
                key={index}
                selectedTraveler={selectedTraveler}
              /> 
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  )
}