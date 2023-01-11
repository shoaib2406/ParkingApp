import React, { useState } from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native';
import logo from '../assets/images/logo.png';
import { bookingSeatWishList } from '../services/restclient/RestApi';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';

const WishListData = ({ route, navigation }) => {
  const { val, Block, date, endDate } = route.params;
  const [email, setEmail] = useState('');
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const ResetProfilefunc = async () => {
    setLoading(true);
    setEnabled(true);
    if (email !== '') {
      bookingSeatWishList(Block, val, email, date, endDate)
        .then((res) => {
          setLoading(false);
          setEnabled(false);
          navigation.navigate('CarAdded');
        })
        .catch((err) => {
          Toast.show({
            type: 'error',
            text1: 'Something went wrong',
            text2: 'Please try again 👋',
          });
          setLoading(false);
          setEnabled(false);
        });
    } else {
      setLoading(false);
      setEnabled(false);
      Toast.show({
        type: 'error',
        text1: 'Please enter car number',
        text2: 'Please try again 👋',
      });
    }
  };
  return (
    <KeyboardAwareScrollView>
      <View
        style={[
          styles.container,
          {
            flexDirection: 'column',
            backgroundColor: '#0A274C',
          },
        ]}
      >
        <View style={{ flex: 0.5 }} />
        <View style={{ flex: 1.3, alignItems: 'center' }}>
          <ImageBackground
            source={logo}
            style={{
              width: 120,
              height: 150,
            }}
          />
        </View>
        <View style={{ flex: 0.7, alignItems: 'center' }}>
          <Text style={{ fontSize: 18, fontWiegth: '900', color: 'white' }}>
            Position Selected :
          </Text>
          <Text style={{ fontSize: 18, fontWiegth: '900', color: 'white' }}>
            Block : {Block}
          </Text>
          <Text style={{ fontSize: 18, fontWiegth: '900', color: 'white' }}>
            Slot : {val}
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
          }}
        >
          <Text style={{ fontSize: 22, fontWiegth: '900', color: 'white' }}>
            Enter Car Number
          </Text>
          <View style={styles.loginBox}>
            <TextInput
              style={{ height: 40, color: 'white' }}
              placeholder='Enter Your Car Numebr'
              onChangeText={(newText) => setEmail(newText)}
              defaultValue={email}
              placeholderTextColor='white'
            />
          </View>

          <TouchableOpacity
            disabled={enabled}
            onPressIn={() => {
              ResetProfilefunc();
            }}
          >
            <View style={styles.loginButton}>
              <Text style={{ color: 'white' }}>
                {loading ? 'loading....' : 'ADD'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.5, alignItems: 'center' }} />
        <View style={{ flex: 0.5, alignItems: 'center' }}></View>
      </View>
    </KeyboardAwareScrollView>
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
});

export default WishListData;
