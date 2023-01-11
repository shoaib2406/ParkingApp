import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import ProfleImage from '../assets/images/ProfileImage.png';
const Profile = ({ navigation }) => {
  const [name, setName] = useState('------');
  const [username, setUserName] = useState('-----');
  useEffect(() => {
    const something = async () => {
      setName(await AsyncStorage.getItem('name'));
      setUserName(await AsyncStorage.getItem('username'));
    };
    something();
  }, []);
  return (
    <SafeAreaView>
      <View style={styles.topBox}>
        <Image
          source={ProfleImage}
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
            Profile
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.secondBox,
          { backgroundColor: '#0A274C', overflow: 'hidden' },
        ]}
      >
        <ScrollView>
          <View style={[styles.container, { flex: 1 }]}>
            <View style={{ marginTop: '10%' }}>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Profile
              </Text>
            </View>
          </View>

          <View style={[styles.container, { flex: 4 }]}>
            <Text>{'\n'}</Text>

            <View style={[styles.TextBtn]}>
              <Text style={{ color: 'white', fontSize: 20 }}>NAME :</Text>
            </View>

            {/* <Text>{'\n'}</Text> */}

            <View style={[styles.TextBtn1]}>
              <Text style={{ color: 'white', fontSize: 16 }}>{name}</Text>
            </View>
          </View>
          <View style={[styles.container, { flex: 4 }]}>
            <Text>{'\n'}</Text>

            <View style={[styles.TextBtn]}>
              <Text style={{ color: 'white', fontSize: 20 }}>USERNAME :</Text>
            </View>

            {/* <Text>{'\n'}</Text> */}

            <View style={[styles.TextBtn1]}>
              <Text style={{ color: 'white', fontSize: 16 }}>{username}</Text>
            </View>
          </View>

          <View style={[styles.container, { flex: 4 }]}>
            <Text>{'\n'}</Text>
            <TouchableOpacity
              onPressIn={() => {
                navigation.navigate('EditProfile');
              }}
            >
              <View style={[styles.loginButton]}>
                <Text style={{ color: 'white' }}>{'Edit Profile'}</Text>
              </View>
            </TouchableOpacity>
            <Text>{'\n'}</Text>
            <TouchableOpacity
              onPressIn={() => {
                navigation.navigate('ResetPassword');
              }}
            >
              <View style={[styles.loginButton]}>
                <Text style={{ color: 'white' }}>{'Reset Password'}</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={[styles.container, { flex: 1 }]}></View>
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
    height: 100,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  loginButton: {
    justifyContent: 'center',
    width: 180,
    height: 40,
    top: 10,
    alignItems: 'center',
    borderRadius: 50,
    borderColor: 'white',
    color: 'white',
    borderWidth: 1.5,
  },
  TextBtn: {
    justifyContent: 'center',
    width: 180,
    height: 40,
    top: 10,
    alignItems: 'center',
    // borderRadius: 5,
    // borderColor: 'white',
    color: 'white',
    // borderWidth: 1.5,
  },
  TextBtn1: {
    justifyContent: 'center',
    width: 180,
    height: 40,
    top: 10,
    // alignItems: 'center',
    // borderRadius: 5,
    // borderColor: 'white',
    // color: 'white',
    // borderWidth: 1.5,
  },
});
export default Profile;
