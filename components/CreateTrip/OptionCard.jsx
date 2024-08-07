import { View, Text } from 'react-native'
import React from 'react'
import { Colors } from '../../constants/Colors'

export default function OptionCard({option, selectedOption}) {
  return (
    <View style={[{
      padding: 25,
      backgroundColor: Colors.LIGHT_GRAY,
      justifyContent:'space-between',
      display:'flex',
      flexDirection: 'row',
      borderRadius: 15
    }, selectedOption?.id==option?.id&& {borderWidth:2}]}>
      <View>
        <Text style={{
          fontSize: 20,
          fontFamily: 'outfit-bold'
        }}>{option?.title}</Text>

        <Text style={{
          fontSize: 17,
          fontFamily: 'outfit',
          color: Colors.GRAY
        }}>{option?.desc}</Text>
      </View>

      <Text style={{
          fontSize: 30
        }}>{option?.icon}</Text>
    </View>
  )
}