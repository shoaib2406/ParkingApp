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
import { resetService } from '../services/restclient/RestApi';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';

const OTP = ({ route, navigation }) => {
  const { email } = route.params;
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [OTP, setOTP] = useState('');

  const ResetProfilefunc = () => {
    setEnabled(true);
    setLoading(true);
    if (OTP === '') {
      setEnabled(false);
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Fields Empty',
        text2: 'Please Fill properly ',
      });
    } else if (OTP === '123456') {
      setTimeout(() => {
        setEnabled(false);
        setLoading(false);
        navigation.navigate('NewPasword', {
          email: email,
        });
      }, 200);
    } else {
      setEnabled(false);
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'OOPS OTP is wrong',
        text2: 'Please try again ',
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
        <View style={{ flex: 0.4, alignItems: 'center' }}>
          <Text style={{ fontSize: 30, fontWiegth: '900', color: 'white' }}>
            OTP
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
          }}
        >
          <View style={styles.loginBox}>
            <TextInput
              secureTextEntry={true}
              style={{ height: 40, color: 'white' }}
              placeholder='Enter Your OTP'
              onChangeText={(newText) => setOTP(newText)}
              defaultValue={OTP}
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
                {loading ? 'loading....' : 'Reset'}
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

export default OTP;
