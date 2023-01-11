import React, { useState } from 'react';
import {
  ImageBackground,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import logo from '../assets/images/logo.png';
import Toast from 'react-native-toast-message';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { signUpService } from '../services/restclient/RestApi';
const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const SignupHandler = async () => {
    let re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    const isPasswordOk = re.test(password);
    setEnabled(true);
    setLoading(true);
    let emailcheck = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const isemailcheckOk = emailcheck.test(email);
    const isUsercheckOk = emailcheck.test(userName);
    if (
      email === '' ||
      name === '' ||
      userName === '' ||
      password === '' ||
      confirmPassword === ''
    ) {
      setEnabled(false);
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'OOPS you missed something',
        text2: 'Please Fill all the spaces ',
      });
    } else if (!isemailcheckOk) {
      setEnabled(false);
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Please enter a valid email',
        text2: 'Please enter a valid email in email field',
      });
    } else if (!isUsercheckOk) {
      setEnabled(false);
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Please enter a valid email',
        text2: 'Please enter a valid email in username',
      });
    } else if (password !== confirmPassword) {
      setEnabled(false);
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Passwords not matched',
        text2: 'Please check your password 👋',
      });
    } else if (
      password.length < 8 ||
      confirmPassword.length < 8 ||
      !isPasswordOk
    ) {
      setEnabled(false);
      setLoading(false);
      Toast.show({
        type: 'error',
        text1: 'Too common Password, enter a Unique password',
        text2: 'symbol, uppercase , lowercase , number is requird ',
      });
    } else {
      signUpService(name, userName, email, password, confirmPassword)
        .then((res) => {
          setEnabled(false);
          setLoading(false);
          const resp = JSON.stringify(res);
          const rightRs = JSON.parse(resp);
          console.log('respresp', rightRs.status);
          if (rightRs.status === 200 || res.status === 201) {
            console.log('laksdlkjaskd', resp);
            navigation.navigate('Signin');
          }
          if (rightRs.status === 400) {
            setEnabled(false);
            setLoading(false);
            Toast.show({
              type: 'error',
              text1: 'Something went wrong',
              text2: 'UserName or email already exist👋',
            });
          }
        })
        .catch((err) => {
          setEnabled(false);
          setLoading(false);
          const errr = JSON.stringify(err);
          console.log('jhbknbhjvghv', errr);
          Toast.show({
            type: 'error',
            text1: 'Something went wrong',
            text2: 'UserName or email already exist👋',
          });
          console.log('on nooo');
        });
    }
  };
  return (
    <KeyboardAwareScrollView>
      <View
        style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
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
            Create new account
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
              placeholder='Enter your name'
              onChangeText={(newText) => setName(newText)}
              defaultValue={name}
              placeholderTextColor='white'
            />
          </View>
          <View style={styles.loginBox}>
            <TextInput
              style={{ height: 40, color: 'white' }}
              placeholder='Enter your UserName'
              onChangeText={(newText) => setUserName(newText)}
              defaultValue={userName}
              placeholderTextColor='white'
            />
          </View>
          <View style={styles.loginBox}>
            <TextInput
              style={{ height: 40, color: 'white' }}
              placeholder='Enter your email'
              onChangeText={(newText) => setEmail(newText)}
              defaultValue={email}
              placeholderTextColor='white'
            />
          </View>
          <View style={styles.loginBox}>
            <TextInput
              style={{ height: 40, color: 'white' }}
              placeholder='Password'
              onChangeText={(newText) => setPassword(newText)}
              defaultValue={password}
              placeholderTextColor='white'
            />
          </View>
          <View style={styles.loginBox}>
            <TextInput
              style={{ height: 40, color: 'white' }}
              placeholder='Confirm password'
              onChangeText={(newText) => setConfirmPassword(newText)}
              defaultValue={confirmPassword}
              placeholderTextColor='white'
            />
          </View>
          <TouchableOpacity
            onPressIn={() => SignupHandler()}
            disabled={enabled}
          >
            <View style={styles.loginButton}>
              <Text style={{ color: 'white' }}>
                {loading ? 'loading....' : 'SignUp'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }} />
        <View style={{ flex: 0.5, alignItems: 'center' }}>
          <TouchableOpacity
            onPressIn={() => {
              navigation.navigate('Signin');
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
              Already have an account?
              <Text style={{ color: '#5D00FF' }}> Login</Text>
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
});

export default SignUp;
