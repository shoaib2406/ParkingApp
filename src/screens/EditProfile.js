import React, { useEffect, useState } from 'react';
import {
  ImageBackground,
  TouchableOpacity,
  View,
  TextInput,
  StyleSheet,
  Text,
} from 'react-native';
import logo from '../assets/images/logo.png';
import { EditService } from '../services/restclient/RestApi';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
const EditProfile = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const EditProfilefunc = async () => {
    if (email === '') {
      setEnabled(false);
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Password Empty',
        text2: 'Please fill properly 👋',
      });
    } else {
      EditService(email)
        .then((res) => {
          setEnabled(false);
          setLoading(false);
          const result = JSON.stringify(res);
          const result2 = JSON.parse(result);
          if (result2.status === 400) {
            Toast.show({
              type: 'error',
              text1: 'Something went wrong',
              text2: 'There is a problem with your email or password 👋',
            });
          } else if (result2.status === 200) {
            navigation.navigate('DashBoard');
          }
        })
        .catch((err) => {
          setEnabled(false);
          setLoading(false);
          Toast.show({
            type: 'error',
            text1: 'Something went wrong',
            text2: 'There is a problem with your email or password 👋',
          });
          // setPassword('');
          // setOldPassword('');
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
          <Text style={{ fontSize: 30, fontWiegth: 'bold', color: 'white' }}>
            Edit Profile
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
              placeholder='Enter Your Email'
              onChangeText={(newText) => setEmail(newText)}
              defaultValue={email}
              placeholderTextColor='white'
            />
          </View>
          {/* <View style={styles.loginBox}>
            <TextInput
              secureTextEntry={true}
              style={{ height: 40, color: 'white' }}
              placeholder='Enter Your Password'
              onChangeText={(newText) => setPassword(newText)}
              defaultValue={password}
              placeholderTextColor='white'
            />
          </View> */}
          <TouchableOpacity
            disabled={enabled}
            onPressIn={() => {
              EditProfilefunc();
            }}
          >
            <View style={styles.loginButton}>
              <Text style={{ color: 'white' }}>
                {loading ? 'loading....' : 'Update'}
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

export default EditProfile;
