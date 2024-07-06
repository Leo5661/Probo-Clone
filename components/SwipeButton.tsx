// SwipeButton.tsx
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Gesture, GestureDetector, GestureHandlerRootView, PanGestureHandler } from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from 'react-native-reanimated';

const clamp = (num: number, min: number, max: number) => Math.min(Math.max(num, min), max);
const { width, height } = Dimensions.get('screen');
const BUTTON_WIDTH = width - 2 * 16;
const BUTTON_HEIGHT = 55 - 2 * 4;
const BUTTON_PADDING = 4;
const SWIPEABLE_DIMENSION = BUTTON_HEIGHT - 2 * BUTTON_PADDING;

const H_WAVE_RANGE = SWIPEABLE_DIMENSION + 2 * BUTTON_PADDING;
const H_SWIPE_RANGE = BUTTON_WIDTH - 2 * BUTTON_PADDING - SWIPEABLE_DIMENSION;

const SwipeButton: React.FC<{ onSwipeEnd: () => void, type: "yes" | "no" | undefined}> = ({ onSwipeEnd, type}) => {
    const translateX = useSharedValue(0);
    const contextX = useSharedValue(0);
    const [isSwipingFinished, setIsSwipingFinished] = React.useState(false);

    React.useEffect(() => {
        if (isSwipingFinished) {
          onSwipeEnd();
        }
    }, [isSwipingFinished]);

    const gestureHandler = Gesture.Pan()
    .minDistance(1)
    .onBegin(() => {
        console.log("Begin");
        contextX.value = translateX.value;
    })
    .onChange((e) => {
        console.log("Change");
        translateX.value = e.translationX + contextX.value;
    })
    .onFinalize((e) => {
        console.log("Finalize");
        if (translateX.value < BUTTON_WIDTH/2 - SWIPEABLE_DIMENSION/2) {
            translateX.value = withSpring(0);
          } else {
              translateX.value = withSpring(H_SWIPE_RANGE);
              runOnJS(setIsSwipingFinished)(true);
          }
    })

const animatedStyle = useAnimatedStyle(() => {
    return {
        transform: [{ translateX: translateX.value }],
    };
});

return (
    <View style={[styles.buttonContainer, type === "yes" ? {backgroundColor: '#a6b3ff'} : {backgroundColor: '#ff6969'}]}>
        <Text style={{ fontSize: 16, color: 'white' }}>{`Swipe for ${type === "yes" ? "Yes" : "No"}`}</Text>
        <GestureDetector gesture={gestureHandler}>
            <Animated.View style={[styles.SwipeButton, animatedStyle]}>
                <FontAwesome name="angle-double-right" size={24} color="black" />
            </Animated.View>
        </GestureDetector>
    </View> 
  );
};

export default SwipeButton;

const styles = StyleSheet.create({
    buttonContainer: {
        position: "relative",
        backgroundColor: 'white',
        height: BUTTON_HEIGHT,
        marginTop: 16,
        zIndex: 0,
        padding: BUTTON_PADDING,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: BUTTON_WIDTH,
        borderRadius: 9999,
    },
    SwipeButton: {
        position: "absolute",
        width: SWIPEABLE_DIMENSION,
        height: SWIPEABLE_DIMENSION,
        left: BUTTON_PADDING,
        flexDirection: 'row',
        zIndex: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 9999,
    }
})