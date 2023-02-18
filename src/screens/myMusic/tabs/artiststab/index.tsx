import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import GS from '../../../../utils/styles'

const ArtistsTab = () => {
useEffect(()=>{
  console.log('==>artisdt call..',);
  
},[])
  
  return (
    <View>
      <Text style={[GS.text_white_regular,{marginTop:333}]} >ArtistsTab</Text>
    </View>
  )
}

export default ArtistsTab

const styles = StyleSheet.create({})