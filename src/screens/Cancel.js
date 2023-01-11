import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import ProfleImage from '../assets/images/ProfileImage.png';
import { dropCarData, dropSlotCar } from '../services/restclient/RestApi';
const Cancel = ({ navigation }) => {
  const [arr, setarr] = useState({});
  const [arr1, setarr1] = useState({});
  const [arr2, setarr2] = useState({});
  useEffect(() => {
    console.log('hiiiiiiiii');
    getData();
  }, []);
  const createTwoButtonAlert = (res) => {
    let StartDate = res.from_date_time.substring(
      0,
      res.from_date_time.lastIndexOf('T')
    );
    let Starttime = res.from_date_time.substring(
      res.from_date_time.indexOf('T') + 1,
      res.from_date_time.lastIndexOf(':')
    );
    let Endtime = res.to_date_time.substring(
      res.to_date_time.indexOf('T') + 1,
      res.to_date_time.lastIndexOf(':')
    );
    let EndDate = res.to_date_time.substring(
      0,
      res.to_date_time.lastIndexOf('T')
    );
    console.log('ressss', res);
    Alert.alert(
      `Remove Slot for Car Number ${res['car_number:']}`,
      `Are you sure you want to cancel slot from Date : ${StartDate}  and time : ${Starttime} till Date : ${EndDate}  and time : ${Endtime}`,
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => Clicked(res.id) },
      ]
    );
  };
  const getData = () => {
    dropCarData()
      .then((res) => {
        const resultString = JSON.stringify(res);
        const toData = JSON.parse(resultString);
        console.log('toDatatoDatatoDatatoData', toData.data.data[0]);
        setarr(toData.data.data[0]['BlockA']);
        setarr1(toData.data.data[0]['BlockB']);
        setarr2(toData.data.data[0]['BlockC']);
      })
      .catch((e) => {
        console.log('error', e);
      });
  };
  const Clicked = (data) => {
    dropSlotCar(data)
      .then((res) => {
        const resultString = JSON.stringify(res);
        const toData = JSON.parse(resultString);
        console.log('toDatatoDatatoDatatoData', toData);
        navigation.navigate('DashBoard');
      })
      .catch((e) => {
        console.log('error', e);
      });
  };
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
            Cancel Slot
          </Text>
        </View>
      </View>

      <View
        style={[
          styles.secondBox,
          { backgroundColor: '#0A274C', overflow: 'hidden' },
        ]}
      >
        <ScrollView style={{ height: 100 }}>
          <View style={[styles.container, { flex: 1 }]}>
            <View style={{ marginTop: '10%' }}>
              <Text
                style={{
                  fontSize: 40,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Cancel Slot
              </Text>
            </View>
          </View>

          <View style={[styles.container3]}>
            <View style={{ marginTop: '0%' }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Block A
              </Text>
            </View>
          </View>
          {Object.values(arr).length === 0 && (
            <View style={styles.Button1}>
              <Text style={{ color: 'red' }}>NO DATA </Text>
            </View>
          )}

          {Object.values(arr).map((val, index) => {
            let data = Object.keys(arr);
            return (
              <View style={styles.container2}>
                <TouchableOpacity onPressIn={() => createTwoButtonAlert(val)}>
                  <View style={styles.Button}>
                    <Text
                      style={{ color: 'white' }}
                    >{`slot ${data[index]}`}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}

          <View style={[styles.container3]}>
            <View style={{ marginTop: '0%' }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Block B
              </Text>
            </View>
          </View>
          {Object.values(arr1).length === 0 && (
            <View style={styles.Button1}>
              <Text style={{ color: 'red' }}>NO DATA </Text>
            </View>
          )}
          {Object.values(arr1).map((val, index) => {
            let data = Object.keys(arr1);
            return (
              <View style={styles.container2}>
                <TouchableOpacity onPressIn={() => createTwoButtonAlert(val)}>
                  <View style={styles.Button}>
                    <Text
                      style={{ color: 'white' }}
                    >{`slot ${data[index]}`}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}

          <View style={[styles.container3]}>
            <View style={{ marginTop: '0%' }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'white',
                }}
              >
                Block C
              </Text>
            </View>
          </View>
          {Object.values(arr2).length === 0 && (
            <View style={styles.Button1}>
              <Text style={{ color: 'red' }}>NO DATA </Text>
            </View>
          )}
          {Object.values(arr2).map((val, index) => {
            let data = Object.keys(arr2);
            return (
              <View style={styles.container2}>
                <TouchableOpacity onPressIn={() => createTwoButtonAlert(val)}>
                  <View style={styles.Button}>
                    <Text
                      style={{ color: 'white' }}
                    >{`slot ${data[index]}`}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            );
          })}

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
    width: 180,
    alignItems: 'center',
    height: 30,
    marginLeft: 30,
    marginTop: 0,
    zIndex: 10,
    borderRadius: 10,
    backgroundColor: 'black',
  },
  container: {
    height: 90,
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
  container3: {
    height: 55,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  Button: {
    justifyContent: 'center',
    width: 400,
    height: 50,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'white',
    color: 'white',
    borderWidth: 1.5,
  },
  Button1: {
    justifyContent: 'center',
    width: 400,
    height: 50,
    alignItems: 'center',
    borderRadius: 5,
    borderColor: 'white',
    color: 'red',

    borderWidth: 1.5,
    marginBottom: 20,
    backgroundColor: 'white',
  },
});
export default Cancel;
