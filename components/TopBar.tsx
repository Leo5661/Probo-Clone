import { StyleSheet, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'

type Props = {}

const TopBar = (props: Props) => {
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
            <Ionicons color={'gray'} size={20} name="person-outline"/>
        </View>
        <View style={styles.imageContainer}>
            <Ionicons color={'gray'} size={20} name="notifications-outline"/>
        </View>
    </View>
  )
}

export default TopBar

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 8,
    width: "100%",
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#d3d3d380',
    borderRadius: 9999,
    padding: 4,
  }
});