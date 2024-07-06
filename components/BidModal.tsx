import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BidCardItemList } from '@/util/BidCard'
import Ionicons from '@expo/vector-icons/Ionicons'
import Animated, { runOnJS, useAnimatedStyle, useSharedValue } from 'react-native-reanimated'
import { Gesture, GestureDetector, GestureHandlerRootView } from 'react-native-gesture-handler'
import SwipeButton from './SwipeButton'
import Pricepicker from './Pricepicker'

type Props = {
    title: string,
    status: string,
    image: any
    yesPrice: number,
    noPrice: number,
    setModalVisible: any
    state: "yes" | "no" | undefined
}

const BidModal = ({title, status, image, yesPrice, noPrice, setModalVisible, state}: Props) => {

    const [YesOrNo, setYesOrNo] = React.useState<'yes' | 'no' | undefined>(state);

    const position = useSharedValue(0)
    const quantity = 15004
    const winPrice = 100
    const scrolldown = Gesture.Pan()
    .onStart((e) => {
        console.log("scrolldown start", e.translationY)
        position.value = e.translationY

    }).onChange((e) => {
        console.log("scrolldown change", e.translationY)
    })
    .onEnd((e) => {
        console.log("scrolldown", e.translationY)
        if (e.translationY > 50) {
            runOnJS(setModalVisible)(false)
        } else {
            position.value = 0
        }
    })

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateY: position.value }],   
    }))

    function handleYes() {
        console.log("Yes")
        setYesOrNo('yes')
    }

    function handleNo() {
        console.log("No")
        setYesOrNo('no')
    }

  return (
    <GestureHandlerRootView style={{flex:1, width: '100%', justifyContent: 'flex-end', alignItems: 'center'}}>
        <View style={styles.modalCloseButton}>
        </View>
    <GestureDetector gesture={scrolldown}>
        <Animated.View style={[styles.container, animatedStyle]}>
            <View style={styles.header}>
                <Text style={styles.title}>{title}</Text>
                <Image source={image} style={styles.image}/>
            </View>
            <View style={styles.buttonContainer}>
             <TouchableOpacity style={[ styles.yesButton, YesOrNo === 'yes' && styles.yesButtonSelected]} onPress={handleYes}><Text style={[styles.buttonText, YesOrNo === 'yes' && styles.selectedButtonTextYes]}>Yes &#8377; {yesPrice}</Text></TouchableOpacity>
             <TouchableOpacity style={[styles.noButton, YesOrNo === 'no' && styles.noButtonSelected]} onPress={handleNo}><Text style={[styles.buttonText, YesOrNo === 'no' && styles.selectedButtonTextNo]}>No &#8377; {noPrice}</Text></TouchableOpacity>
            </View>
            <View style={styles.priceSelectorContainer}>
                <View style={styles.priceSelectorHeader}>
                    <Text style={styles.priceSelectorHeaderText}>Price</Text>
                    <View style={{flexDirection: 'column', alignItems: 'flex-end'}}>
                        {
                            YesOrNo === 'yes'
                            ? <Text style={styles.priceSelectorHeaderText}>&#8377; {yesPrice}</Text>
                            : <Text style={styles.priceSelectorHeaderText}>&#8377; {noPrice}</Text>
                        }
                        <Text style={{fontSize: 14, color: 'gray'}}>{quantity} qty available</Text>
                    </View>
                </View>
                <Pricepicker min={0} max={100} steps={1} onValueChange={(value) => {console.log(value)}}/>
                <View style={styles.priceSelectorDivider}/>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 16}}>
                    <View style={{flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={{fontSize: 18, color: 'black', fontWeight: 'bold'}}>&#8377; {yesPrice}</Text>
                        <Text style={{fontSize: 14, color: 'gray'}}>You put</Text>
                    </View>
                    <View style={{flexDirection: 'column', alignItems: 'center'}}>
                        <Text style={{fontSize: 18, color: 'green', fontWeight: 'bold'}}>&#8377; {winPrice}</Text>
                        <Text style={{fontSize: 14, color: 'gray'}}>You get</Text>
                    </View>
                </View>

            </View>
            <SwipeButton onSwipeEnd={() => {console.log("swiped"); setModalVisible(false)}} type={YesOrNo}/>
        </Animated.View>
    </GestureDetector>
    </GestureHandlerRootView>
  )
}

export default BidModal

const styles = StyleSheet.create({
    container: {
        borderTopStartRadius: 16,
        borderTopEndRadius: 16,
       backgroundColor: '#ffffff',
       padding: 16,
       height: '50%', 
       width: '100%',
       flexDirection: 'column',
    },
    modalCloseButton: {
        width: 40,
        height: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 10,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

    },

    title: {
        width: "80%",
        fontSize: 20,
        fontWeight: 'bold',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 9999
    },
    buttonContainer: {
        flexDirection: 'row',
        borderRadius: 9999,
        backgroundColor: '#f8f8f8',
        marginTop: 8
    } ,
    yesButton: {
        flexGrow: 1,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: 'center',
        
        
    },
    yesButtonSelected: {
        backgroundColor: '#dfe0ff',
        borderRadius: 9999,
    },
    noButton: {
        flexGrow: 1,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: 'center',
    },
    noButtonSelected: {
        backgroundColor: '#fadfdf',
        borderRadius: 9999,
    },
    buttonText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#414141',
    },
    selectedButtonTextYes:{
        color: '#2f339e',
    },
    selectedButtonTextNo:{
        color: '#be3737',
    },
    priceSelectorContainer: {
        flexGrow: 1,
        flexDirection: 'column',
        borderColor: '#e6e6e6',
        borderWidth: 1,
        marginTop: 16,
        borderRadius: 16,
        padding: 8
    },
    priceSelectorDivider:{ 
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: '#e6e6e6',
        marginVertical: 8
    },
    priceSelectorHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 8,
        alignItems: 'flex-start',
    },
    priceSelectorHeaderText: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    priceSelector: {
        
    }
})