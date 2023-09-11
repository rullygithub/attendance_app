import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Daily = () => {
  return (
    <View style={styles.container}>
      <View style={styles}>
      <Text>Daily Attendance</Text>
      </View>
      
    </View>
  )
}

export default Daily

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 20
    }
})