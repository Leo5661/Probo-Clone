import {  Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import BidModal from './BidModal'
import {  Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { runOnJS, useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

type Props = {
    title: string,
    status: string,
    image: any
    yesPrice: number,
    noPrice: number,
}

const BidCard = ({title, status, image, yesPrice, noPrice}: Props) => {

    const [showModal, setShowModal] = React.useState(false)
    const [state, setState] = React.useState<'yes' | 'no' | undefined>(undefined)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.details}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.status}>{status}</Text> 
        </View>
        <Image source={image} style={styles.image}/>
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.yesButton} onPress={() => {setState('yes'); setShowModal(true);}}>
            <Text style={styles.yesText}>Yes &#8377; {yesPrice}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.noButton} onPress={() => {setState('no'); setShowModal(true);}}>
            <Text style={styles.noText}>No &#8377; {noPrice}</Text>
        </TouchableOpacity>
      </View>
      <Modal
        animationType='slide'
        transparent={true}
        hardwareAccelerated={true}
        visible={showModal}
        onRequestClose={() => {setShowModal(!showModal)}}
        >
        <View style={styles.modalContainer}>
          <BidModal title={title} status={status} image={image} yesPrice={yesPrice} noPrice={noPrice} setModalVisible={setShowModal} state = {state}/>
        </View>
       
      </Modal>
    </View>
  )
}

export default BidCard

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        borderRadius: 14,
        backgroundColor: '#fff',
        padding: 16,
        marginVertical: 4,
    },
    header: {
        flexDirection: 'row',
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
    details: {
        flexDirection: 'column',
        flexGrow: 1,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    status: {
        fontSize: 14,
        color: 'grey',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 9999,
    },
    footer: {
        marginTop: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    yesButton: {
        flexGrow: 1,
        borderRadius: 7,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: 'center',
        marginHorizontal: 8,
        backgroundColor: '#dfe0ff',
        
    },
    noButton: {
        flexGrow: 1,
        borderRadius: 7,
        paddingVertical: 10,
        alignItems: "center",
        justifyContent: 'center',
        marginHorizontal: 8,
        backgroundColor: '#fadfdf',
      
    },
    yesText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2f339e',
    },
    noText:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#be3737',
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
    },

})