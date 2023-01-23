import React, { useEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Button,
  ImageBackground,
} from 'react-native';
import carPark from '../assets/images/carPark.png';
import CarIconWhite from '../assets/images/CarIconWhite.png';
import CarIcon from '../assets/images/CarIcon.png';
import { getCarData } from '../services/restclient/RestApi';
const CarPark = ({ navigation }) => {
  const [refresh, setRefresh] = useState(true);
  const [arr, setarr] = useState({});
  const [arr1, setarr1] = useState({});
  const [arr2, setarr2] = useState({});

  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {}, [refresh]);
  const getData = async () => {
    await getCarData()
      .then((res) => {
        const result = JSON.parse(res.request._response);
        const dumm = Object.keys(result.data[0].BlockA);
        console.log('dummdummdummdumm');
        setarr(result.data[0]['BlockA']);
        setarr1(result.data[0]['BlockB']);
        setarr2(result.data[0]['BlockC']);

        setRefresh(!refresh);
      })
      .catch((e) => {
        console.log('error', e);
      });
  };

  const handleMeA = (val) => {
    let dummy = arr;
    dummy[val].seat_booked = !dummy[val].seat_booked;
    setarr(dummy);
    setRefresh(!refresh);
    navigation.navigate('time', {
      val: val,
      Block: 'A',
    });
  };

  const handleMeB = (val) => {
    let dummy = arr1;
    dummy[val].seat_booked = !dummy[val].seat_booked;
    setarr(dummy);
    setRefresh(!refresh);
    navigation.navigate('time', {
      val: val,
      Block: 'B',
    });
  };

  const handleMeC = (val) => {
    let dummy = arr2;
    dummy[val].seat_booked = !dummy[val].seat_booked;
    setarr(dummy);
    setRefresh(!refresh);
    navigation.navigate('time', {
      val: val,
      Block: 'C',
    });
  };

  return (
    <SafeAreaView>
      <View style={styles.topBox}>
        <Image
          source={carPark}
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
            Car Park
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
          <View style={styles.container}>
            <View style={styles.box}>
              <View
                style={{
                  // backgroundColor: 'green',
                  height: '100%',
                  width: '100%',
                }}
              >
                <View style={styles.ButtonContainer}>
                  {Object.values(arr).map((val, index) => {
                    return (
                      <TouchableOpacity
                        onPressIn={() => {
                          !val.seat_booked ? handleMeA(index + 1) : {};
                        }}
                      >
                        <View style={styles.smallButton}>
                          <ImageBackground
                            source={val.seat_booked ? CarIcon : CarIconWhite}
                            style={{
                              width: '100%',
                              height: '100%',
                            }}
                          />
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </View>
              </View>
            </View>
            <View style={styles.box}>
              <View
                style={{
                  // backgroundColor: 'green',
                  height: '100%',
                  width: '100%',
                }}
              >
                <View
                  style={{
                    // backgroundColor: 'green',
                    height: '100%',
                    width: '100%',
                  }}
                >
                  <View style={styles.ButtonContainer}>
                    {Object.values(arr1).map((val, index) => {
                      return (
                        <TouchableOpacity
                          onPressIn={() => {
                            !val.seat_booked ? handleMeB(index + 1) : {};
                          }}
                        >
                          <View style={styles.smallButton}>
                            <ImageBackground
                              source={val.seat_booked ? CarIcon : CarIconWhite}
                              style={{
                                width: '100%',
                                height: '100%',
                              }}
                            />
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.container}>
            <View style={styles.box}>
              <View
                style={{
                  // backgroundColor: 'green',
                  height: '100%',
                  width: '100%',
                }}
              >
                <View
                  style={{
                    // backgroundColor: 'green',
                    height: '100%',
                    width: '100%',
                  }}
                >
                  <View style={styles.ButtonContainer}>
                    {Object.values(arr2).map((val, index) => {
                      return (
                        <TouchableOpacity
                          onPressIn={() => {
                            !val.seat_booked ? handleMeC(index + 1) : {};
                          }}
                        >
                          <View style={styles.smallButton}>
                            <ImageBackground
                              source={val.seat_booked ? CarIcon : CarIconWhite}
                              style={{
                                width: '100%',
                                height: '100%',
                              }}
                            />
                          </View>
                        </TouchableOpacity>
                      );
                    })}
                  </View>
                </View>
              </View>
            </View>
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
    height: 230,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
  },
  box: {
    height: 230,
    width: 140,
    // backgroundColor: 'red',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 30,
    flexDirection: 'row',
    overflow: 'hidden',
  },
  ButtonContainer: {
    width: '100%',
    height: 220,
    // backgroundColor: 'pink',
    marginTop: 10,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  smallButton: {
    width: 20,
    height: 20,
    // backgroundColor: 'purple',
    overflow: 'hidden',
    marginLeft: 10,
    marginTop: 6,
  },
});
export default CarPark;
