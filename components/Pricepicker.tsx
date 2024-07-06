import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';

type Props = {
    min: number
    max: number
    steps: number
    onValueChange: (value: number) => void
}

const WIDTH = Dimensions.get('window').width - 2 * 26;
const MAXWIDTHRANGE = WIDTH - 2 * 40 - 2 * 8 - 10/2;

const Pricepicker = ({min, max, steps, onValueChange}: Props) => {
    
    const knobX = useSharedValue(0);
    const knobContextX = useSharedValue(0);
    const knobScale = useSharedValue(1); 

    
    const KnobSliderGesture = Gesture.Pan()
    .minDistance(1)
    .onBegin(() => {
        console.log("begin")
        knobContextX.value = knobX.value;
    })
    .onChange((e) => {
        console.log("change", e.translationX);
        knobScale.value = 1.3;
        knobX.value = knobContextX.value + e.translationX < 5 ? 5 : knobContextX.value + e.translationX > MAXWIDTHRANGE ? MAXWIDTHRANGE : knobContextX.value + e.translationX;
    })
    .onFinalize(() => {
        console.log("finalize")
        knobScale.value = 1;
    });
    
    const knobStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: knobX.value }, { scale: knobScale.value }]
            
        }
    })

    const styleline = useAnimatedStyle(() => {
        return {
            backgroundColor: '#424242',
            height: 10,
            borderRadius: 10,
            marginTop: -10,
            width: knobX.value,
            transform: [{ translateX: 0}]
        }
    })

    return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sliderButton}>
        <Ionicons name="add" size={20} color="black" />
      </TouchableOpacity>
      <View style={{}}>
        <View style={styles.track} />
        <Animated.View style={styleline}>
            <View>
                <GestureDetector gesture={KnobSliderGesture}>
                    <Animated.View style={[styles.knob, knobStyle]} />
                </GestureDetector>
            </View>
        </Animated.View>
      </View>
      <TouchableOpacity style={styles.sliderButton}>
        <AntDesign name="minus" size={24} color="black" />
      </TouchableOpacity>
    </View>
  )
}

export default Pricepicker

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 16,
        width: WIDTH,
    },
    sliderButton: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#dbdbdb',
        justifyContent: 'center',
        alignItems: 'center',
    },
    track: {
        borderColor: '#dbdbdb',
        width: WIDTH - 2 * 40 - 2 * 8,
        height: 10,
        backgroundColor: '#dbdbdb',
        borderRadius: 10
    },
    knob: {
        position: "absolute",
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: '#424242',
        marginTop: -20 + 15,
        marginLeft: -10
    }

})