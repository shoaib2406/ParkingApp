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

const ResetPassword = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [oldPassword, setOldPassword] = useState('');

  const ResetProfilefunc = async () => {
    setEnabled(true);
    setLoading(true);
    let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const isPasswordOk = re.test(password);
    if (password === '' || oldPassword === '') {
      setEnabled(false);
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Password Empty',
        text2: 'Please fill properly 👋',
      });
    } else if (!isPasswordOk) {
      setEnabled(false);
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Too common Password, enter a Unique password',
        text2: 'symbol, uppercase , lowercase , number is requird ',
      });
    } else {
      resetService(oldPassword, password)
        .then((res) => {
          setEnabled(false);
          setLoading(false);
          if (res.status === 200) {
            if (res.data === 'Enter Correct Password') {
              Toast.show({
                type: 'error',
                text1: 'Something went wrong',
                text2: res.data,
              });
            } else {
              navigation.navigate('DashBoard');
            }
          }
        })
        .catch((err) => {
          setEnabled(false);
          setLoading(false);
          Toast.show({
            type: 'error',
            text1: 'Something went wrong',
            text2: 'There is a problem with your email ',
          });
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
            Reset Password
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
              placeholder='Enter Your Old Password'
              onChangeText={(newText) => setOldPassword(newText)}
              defaultValue={oldPassword}
              placeholderTextColor='white'
            />
          </View>
          <View style={styles.loginBox}>
            <TextInput
              secureTextEntry={true}
              style={{ height: 40, color: 'white' }}
              placeholder='Enter Your New Password'
              onChangeText={(newText) => setPassword(newText)}
              defaultValue={password}
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

export default ResetPassword;
