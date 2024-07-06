import React from 'react';
import { Modal, Text } from 'react-native';
import { GestureDetector, Gesture} from 'react-native-gesture-handler';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  runOnJS,
} from 'react-native-reanimated';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
import BidModal from './BidModal';

const SwipeableModal: React.FC<{ children: React.ReactNode, modalVisible: boolean; closeModal: () => void }> = ({
  children,
  modalVisible,
  closeModal,
}) => {
  const translateY = useSharedValue(0);

  const gestureHandler = Gesture.Pan().onStart((e) => {
      translateY.value = e.translationY;
  }).onEnd((e) => {
    if (e.translationY > 100) {
      // Swipe down threshold reached, close modal
      runOnJS(closeModal)();
    } else {
      // Reset modal position
      translateY.value = 0;
    }
  })

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <GestureDetector gesture={gestureHandler}> 
      
        <Animated.View style={[styles.modal, animatedStyle]}>
        {children}
      </Animated.View>
    </GestureDetector>
  );
};

const styles = {
  modal: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

export default SwipeableModal;
