import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    name: string
    icon: any
}

const CategoryCard = ({name, icon}: Props) => {
  return (
    <View style={styles.card}>
      <Image source={icon} style={styles.image}/>  
      <Text style={styles.name}>{name}</Text>
    </View>
  )
}

export default CategoryCard

const styles = StyleSheet.create({
    card: {
        width: 80,
        height: 80,
        flexDirection: 'column',
        backgroundColor: 'white',
        borderRadius: 16,
        gap: 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10
    },
    name: {
      fontSize: 14,
      fontWeight: 'bold',
    },
    image: {
        width: 40,
        height: 40,
    }

})