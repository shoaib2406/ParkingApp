import React, { useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import manycars from '../assets/images/manycars.png';
const Package = ({ navigation }) => {
  const clickHandler = (name) => {
    navigation.navigate('PaymentMethod', {
      name: name,
    });
  };
  return (
    <SafeAreaView>
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

      <View
        style={[
          styles.secondBox,
          { overflow: 'hidden', backgroundColor: '#0A274C' },
        ]}
      >
        <ScrollView>
          <View style={styles.container}>
            <Text style={{ fontSize: 25, fontWiegth: 'bold', color: 'white' }}>
              Select The Package
            </Text>
          </View>
          <View style={styles.container2}>
            <Text style={{ fontSize: 25, fontWiegth: 'bold', color: 'white' }}>
              Rs 350/-
            </Text>
          </View>
          <View style={styles.container2}>
            <TouchableOpacity onPressIn={() => clickHandler('350')}>
              <View style={styles.Button}>
                <Text style={{ color: 'white' }}>Weekly</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container2}>
            <Text style={{ fontSize: 25, fontWiegth: 'bold', color: 'white' }}>
              Rs 1500/-
            </Text>
          </View>
          <View style={styles.container2}>
            <TouchableOpacity onPressIn={() => clickHandler('1500')}>
              <View style={styles.Button}>
                <Text style={{ color: 'white' }}>Monthly</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.container2}>
            <Text style={{ fontSize: 25, fontWiegth: 'bold', color: 'white' }}>
              Rs 18000/-
            </Text>
          </View>
          <View style={styles.container2}>
            <TouchableOpacity onPressIn={() => clickHandler('18000')}>
              <View style={styles.Button}>
                <Text style={{ color: 'white' }}>Yearly</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  topBox: {
    height: 250,
    width: 439,
    zIndex: 0,
  },
  secondBox: {
    height: 896,
    top: -50,
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    width: '100%',
  },
  Line: {
    width: 10,
    height: 30,
    marginLeft: 20,
    marginTop: -230,
    zIndex: 100,
  },
  inputText: {
    width: 120,
    alignItems: 'center',
    height: 30,
    marginLeft: 30,
    marginTop: 0,
    zIndex: 10,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  container: {
    backgroundColor: '#0A274C',
    flex: 1,
    marginTop: 50,
    height: 95,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container2: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  Button: {
    justifyContent: 'center',
    width: 200,
    height: 40,
    alignItems: 'center',
    borderRadius: 50,
    borderColor: 'white',
    color: 'white',
    borderWidth: 1.5,
  },
});
export default Package;
