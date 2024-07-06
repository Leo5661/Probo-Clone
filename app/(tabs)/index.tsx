import BidCard from '@/components/BidCard';
import CategoryView from '@/components/Category/CategoryView';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import TopBar from '@/components/TopBar';
import TrendingView from '@/components/Trending/TrendingView';
import { BidCardItemList } from '@/util/BidCard';
import { Image, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.homeContainer}>
        <TopBar />
        <ParallaxScrollView
          headerBackgroundColor={{ light: '#f0f0f0', dark: '#f0f0f0' }}
          headerImage={
            <Image source={require('@/assets/images/bg.jpg')} style={styles.banner}/>
          }>
            <View style={styles.mainContainer}>
            <CategoryView />
            <TrendingView />
            <View style={styles.bidContainer}>
              {
                BidCardItemList.map((item, index) => (
                  <BidCard key={index} title={item.title} status={item.status} image={item.uri} yesPrice={item.yesPrice} noPrice={item.noPrice}/>
                ))
              }
            </View>
            </View>
        </ParallaxScrollView>

      </View>
      </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  
  },
  homeContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  mainContainer: {
    width: '100%',
    height: '100%',
    overflow: "hidden",
  },
  banner: {
    height: 178,
    width: '100%',
    padding: 16,
    
  },
  bidContainer: {
    flex: 1,
    height: "100%",
    width: "100%",
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: "column",
    backgroundColor: 'transparent',
    overflow: "hidden",
  }
});
