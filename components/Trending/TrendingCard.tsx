import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    name: string
    icon: any
}

const TrendingCard = ({name, icon}: Props) => {
  return (
    <View style={styles.container}>
      <Image source={icon} style={styles.image}/>
      <Text style={styles.text}>{name}</Text>
    </View>
  )
}

export default TrendingCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginHorizontal: 4,
        paddingVertical: 4,
        paddingHorizontal: 10,
    },
    text: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    image: {
        width: 20,
        height: 20,
        marginEnd: 4
    }
})