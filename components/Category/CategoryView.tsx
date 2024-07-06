import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedText } from '../ThemedText'
import Ionicons from '@expo/vector-icons/Ionicons'
import { CategoryItem, CategoryItemList } from '@/util/CategoryItemList'
import CategoryCard from './CategoryCard'

type Props = {}

const CategoryView = (props: Props) => {
  return (
    <View style={styles.container}>
        <FlatList 
          data={CategoryItemList}
          renderItem={({item}) => <CategoryCard name={item.name} icon={item.uri}/>}
          keyExtractor={item => item.name}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
    </View>
  )
}

export default CategoryView

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 4,
    backgroundColor: 'transparent',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: "100%",
  },
});