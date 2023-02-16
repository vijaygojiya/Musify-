import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import GS from '../../../utils/styles'

const Artists = () => {
useEffect(()=>{
  console.log('==>artisdt call..',);
  
},[])
  
  return (
    <View>
      <Text style={[GS.text_white_regular,{marginTop:333}]} >Artists</Text>
    </View>
  )
}

export default Artists

const styles = StyleSheet.create({})