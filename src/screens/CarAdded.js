import React, { useEffect } from 'react';
import { ImageBackground, View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import logo from '../assets/images/logo.png';
const ThankYou = ({ route, navigation }) => {
  const { name } = route.params || 'abc';
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('DashBoard');
    }, 2000);
  });
  return (
    <>
      <SafeAreaView
        style={{
          backgroundColor: '#0A274C',
          flex: 1,
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            width: '100%',
            height: 200,
            alignItems: 'center',
          }}
        >
          <ImageBackground
            source={logo}
            style={{
              width: 150,
              height: 190,
              marginTop: -100,
            }}
          />
          <View style={styles.container}>
            <Text style={{ fontSize: 25, fontWiegth: 'bold', color: 'white' }}>
              {name === 'payment'
                ? ' Payment Recieved'
                : name === 'time'
                ? 'Time updated '
                : 'Your Slot is Confirmed'}
            </Text>
          </View>
          <View style={styles.container2}>
            <Text style={{ fontSize: 25, fontWiegth: 'bold', color: 'white' }}>
              {name === 'payment' ? ' Thanks For the Paymnet' : 'Thank You'}
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 900,
  },
  loginBox: {
    borderBottomColor: 'white',
    color: 'white',
    borderBottomWidth: 1,
    top: 20,
    margin: 10,
    width: '80%',
  },
  loginButton: {
    justifyContent: 'center',
    width: 150,
    height: 40,
    top: 50,
    alignItems: 'center',
    borderRadius: 50,
    borderColor: 'white',
    color: 'white',
    borderWidth: 1.5,
  },
  container: {
    height: 45,
    width: 400,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container2: {
    height: 45,
    width: 400,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
export default ThankYou;
