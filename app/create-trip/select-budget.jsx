import { View, Text, FlatList, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigation, useRouter } from 'expo-router'
import { selectBudgetOptions } from '../../constants/Options';
import OptionCard from '../../components/CreateTrip/OptionCard';
import { Colors } from '../../constants/Colors';
import { CreateTripContext } from '../../context/CreateTripContext';

export default function SelectBudget() {

    const navigation = useNavigation();
    const router = useRouter();
    const [selectedOption, setSelectedOption] = useState();
    const {tripData, setTripData} = useContext(CreateTripContext);

    useEffect(() => {
        navigation.setOptions({
            headerShown: true,
            headerTransparent: true,
            headerTitle: ''
        });
    });

    useEffect(() => {
        selectedOption && setTripData({
            ...tripData,
            budget: selectedOption?.title
        })

    }, [selectedOption])

    const onClickContinue = () => {
        if(!selectedOption) {
            ToastAndroid.show('Select Your Budget', ToastAndroid.LONG);
            return;
        }

        router.push('/create-trip/review-trip');
    }


  return (
    <View style={{
        paddingTop: 95,
        padding: 25,
        height: '100%',
        backgroundColor: Colors.WHITE
    }}>
      <Text style={{
        fontFamily: 'outfit-bold',
        fontSize: 35,
        marginTop: 20
      }}>Budget</Text>

      <View>
        <Text style={{
            fontFamily: 'outfit-bold',
            fontSize: 20
        }}>Choose sepending habits for your trip</Text>

        <FlatList
            data={selectBudgetOptions}
            renderItem={({item, index}) => (
                <TouchableOpacity style={{marginVertical: 10}} onPress={() => setSelectedOption(item)}>
                    <OptionCard option={item} index={index} selectedOption={selectedOption}/>
                </TouchableOpacity>
            )}        
        />
      </View>

      <TouchableOpacity style={{
          padding: 20,
          backgroundColor: Colors.PRIMARY,
          borderRadius: 15,
          marginTop: 20
        }}
        onPress={onClickContinue}
        >
            <Text style={{
              textAlign: 'center' ,
              color: Colors.WHITE,
              fontFamily: 'outfit-medium',
              fontSize: 20
            }}>Continue</Text>
        </TouchableOpacity>
    </View>
  )
}