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
import { loginService } from '../services/restclient/RestApi';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const loginFunc = async () => {
    console.log(email, password);
    setEnabled(true);
    setLoading(true);
    if (email === '' || password === '') {
      setEnabled(false);
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Missing something',
        text2: 'Please fill properly 👋',
      });
    } else {
      await loginService(email, password)
        .then((res) => {
          AsyncStorage.setItem('tokken', res.data.token);
          AsyncStorage.setItem('username', res.data.username);
          AsyncStorage.setItem('name', res.data.name);
          setEnabled(false);
          setLoading(false);
          if (res.status === 200) {
            navigation.navigate('DashBoard');
          }
        })
        .catch(() => {
          setEnabled(false);
          setLoading(false);
          Toast.show({
            type: 'error',
            text1: 'Something went wrong',
            text2: 'There is a problem with your email or password 👋',
          });
          // setPassword('');
          // setEmail('');
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
          <Text style={{ fontSize: 35, fontWiegth: 'bold', color: 'white' }}>
            Log In
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
              style={{ height: 40, color: 'white' }}
              placeholder='Email'
              onChangeText={(newText) => setEmail(newText)}
              defaultValue={email}
              placeholderTextColor='white'
            />
          </View>
          <View style={styles.loginBox}>
            <TextInput
              secureTextEntry={true}
              style={{ height: 40, color: 'white' }}
              placeholder='Password'
              onChangeText={(newText) => setPassword(newText)}
              defaultValue={password}
              placeholderTextColor='white'
            />
          </View>

          <TouchableOpacity
            onPressIn={() => {
              navigation.navigate('ForgetPassword');
            }}
            style={styles.textBox}
          >
            <Text style={styles.text}> Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={enabled}
            onPressIn={() => {
              loginFunc();
            }}
          >
            <View style={styles.loginButton}>
              <Text style={{ color: 'white' }}>
                {loading ? 'loading....' : 'Login'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.5, alignItems: 'center' }} />
        <View style={{ flex: 0.5, alignItems: 'center' }}>
          <TouchableOpacity
            onPressIn={() => {
              navigation.navigate('Signup');
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWiegth: 'bold',
                color: 'white',
                height: 20,
              }}
            >
              Don't have account?
              <Text style={{ color: '#5D00FF' }}> Registration</Text>
            </Text>
          </TouchableOpacity>
        </View>
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
  textBox: {
    marginLeft: 'auto',
    marginRight: 40,
    top: 20,
  },
  text: {
    color: 'red',
  },
});

export default SignIn;
