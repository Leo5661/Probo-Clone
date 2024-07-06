import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TrendingItemList } from '@/util/TrendingItemList'
import TrendingCard from './TrendingCard'
import { splitArrayInHalf } from '@/util/utils'

type Props = {}

const TrendingView = (props: Props) => {
  const [firstHalf, secondHalf] = splitArrayInHalf(TrendingItemList);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Trending Now</Text>
      <ScrollView 
        style={styles.listContainer}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        <View style={styles.list}>
          {
            firstHalf.map((item, index) => (
              <TrendingCard key={index} name={item.name} icon={item.uri}/>
            ))
          }
        </View>
        <View style={styles.list}>
          {
            secondHalf.map((item, index) => (
              <TrendingCard key={index} name={item.name} icon={item.uri}/>
            ))
          }
        </View>
      </ScrollView>
    </View>
  )
}

export default TrendingView

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        padding: 16,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#000000',
    },
    listContainer: {
      marginTop: 8,
    },
    list: {
      flexDirection: 'row',
      flexWrap: 'nowrap',
    }
})