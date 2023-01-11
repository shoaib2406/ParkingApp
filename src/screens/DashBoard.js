import React, { useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import SqaureBox from '../components/SqaureBox';
import Car from '../assets/images/car1.png';
import Profile from '../assets/images/Profile.png';
import WishList from '../assets/images/Wishlist.png';
import CanelSlot from '../assets/images/cancel.png';
import Update from '../assets/images/Update.png';
import Notfication from '../assets/images/Notfication.png';
import Packages from '../assets/images/Package.png';
import manycars from '../assets/images/manycars.png';
const DashBoard = ({ navigation }) => {
  return (
    <>
      <View style={styles.topBox}>
        <Image
          source={manycars}
          style={{
            zIndex: 0,
            width: 449,
            height: '100%',
            marginLeft: -10,
            padding: 0,
          }}
        />
        <View style={styles.Line}>{/* <Image source={Line} /> */}</View>
        <View style={styles.inputText}>
          <Text
            style={{
              fontSize: 20,
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            DashBoard
          </Text>
        </View>
      </View>

      <View style={styles.secondBox}>
        <ScrollView>
          <View style={[styles.container, { marginTop: 40 }]}>
            <SqaureBox
              name='Car Park'
              image={Car}
              onClick={() => navigation.navigate('carPark')}
            />
            <SqaureBox
              name='Profile'
              image={Profile}
              onClick={() => navigation.navigate('Profile')}
            />
          </View>
          <View style={styles.container}>
            <SqaureBox
              name='WishList'
              image={WishList}
              onClick={() => navigation.navigate('Wishlist')}
            />
            <SqaureBox
              name='Package'
              image={Packages}
              onClick={() => navigation.navigate('Package')}
            />
          </View>
          <View style={styles.container}>
            <SqaureBox
              name='Canel Slot'
              image={CanelSlot}
              onClick={() => navigation.navigate('CancelSlot')}
            />
            <SqaureBox
              name='Update time'
              image={Update}
              onClick={() => navigation.navigate('UpdateScreen')}
            />
          </View>
          <View style={styles.container}>
            <SqaureBox
              name='Logout'
              image={Profile}
              onClick={() => navigation.navigate('Signin')}
            />
          </View>
          <View style={styles.container}></View>
          <View style={styles.container1}></View>

          {/* <View style={styles.container}>
            <SqaureBox
              name='Notfication'
              image={Notfication}
              onClick={() => navigation.navigate('Notification')}
            />
          </View> */}
        </ScrollView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  topBox: {
    height: 250,
    width: 439,
    zIndex: 0,
  },
  secondBox: {
    backgroundColor: 'red',
    top: -50,
    // height: '110%',
    // flex: 1,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    width: '100%',
    backgroundColor: '#0A274C',
  },
  Line: {
    width: 10,
    height: 30,
    marginLeft: 20,
    marginTop: -230,
  },
  inputText: {
    width: 120,
    alignItems: 'center',
    height: 30,
    marginLeft: 30,
    marginTop: 0,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  container: {
    backgroundColor: '#0A274C',
    height: 160,

    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container1: {
    backgroundColor: '#0A274C',
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
export default DashBoard;
