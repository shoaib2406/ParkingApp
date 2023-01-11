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

const AccountInfo = ({ route, navigation }) => {
  const { name } = route.params;
  const [info, setInfo] = useState('');
  const [CVC, setCVC] = useState('');
  const [cardNumber, setCard] = useState('');
  const [enabled, setEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const ResetProfilefunc = async () => {
    setLoading(true);
    if (cardNumber && !cardNumber.complete) {
      Toast.show({
        type: 'error',
        text1: 'incomplete information',
        text2: 'Please Enter proper information',
      });
    } else {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        navigation.navigate('CarAdded', {
          name: 'payment',
        });
      }, 4000);
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
            Account Info
          </Text>
        </View>
        <View
          style={{
            flex: 2,
            alignItems: 'center',
          }}
        >
          <View style={{ flex: 0.4, alignItems: 'center' }}>
            <Text style={{ fontSize: 20, fontWiegth: '900', color: 'white' }}>
              Payment for RS-{name}/
            </Text>
          </View>
          <View style={styles.loginBox}>
            {/* <CardForm
              onFormComplete={(cardDetails) => {
                console.log('card details', cardDetails);
                setCard(cardDetails);
              }}
              cardStyle={{
                backgroundColor: '#0A274C',
                color: 'white',
                textColor: 'white',
                placeholderColor: 'white',
              }}
              style={{ height: 350 }}
            /> */}
          </View>

          <TouchableOpacity
            disabled={enabled}
            onPressIn={() => {
              ResetProfilefunc();
            }}
          >
            <View style={styles.loginButton}>
              <Text style={{ color: 'white' }}>
                {loading ? 'loading....' : 'Confirm'}
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

export default AccountInfo;
