import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

const Card = ({children}) => {
  return (
    <View style={styles.inputContainer}>{children}</View>
  )
}

export default Card

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 36,
        marginHorizontal: 24,
        padding: 16,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4,
        justifyContent: "center",
        alignItems: "center",
      },
})