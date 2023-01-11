import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import manycars from '../assets/images/manycars.png';
export default class WishListTime extends Component {
  state = {
    date: new Date(),
    mode: 'date',
    show: false,
  };

  setDate = (event, date) => {
    date = date || this.state.date;

    this.setState({
      show: Platform.OS === 'ios' ? true : false,
      date,
    });
    console.log('datedate', date);
  };

  show = (mode) => {
    this.setState({
      show: true,
      mode,
    });
  };

  datepicker = () => {
    this.show('date');
  };

  timepicker = () => {
    this.show('time');
  };
  clickHandler = (date) => {
    const { route, navigation } = this.props;
    const { val, Block } = route.params;
    console.log('valval', val, Block);
    console.log('datedate', date);
    navigation.navigate('WishListTimeEnd', {
      val: val,
      Block: Block,
      date: date,
    });
  };
  render() {
    const { show, date, mode } = this.state;
    console.log('datedate', date);
    return (
      <SafeAreaView>
        <View style={styles.topBox}>
          <Image
            source={manycars}
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
              TIME
            </Text>
          </View>
        </View>

        <View
          style={[
            styles.secondBox,
            { overflow: 'hidden', backgroundColor: '#0A274C' },
          ]}
        >
          <ScrollView>
            <View style={styles.container}>
              <Text
                style={{ fontSize: 25, fontWiegth: 'bold', color: 'white' }}
              >
                Select The Start Time
              </Text>
            </View>
            <View style={styles.container2}>
              <View style={styles.Button01}>
                <Text style={{ color: 'white' }}>Time Selected </Text>
              </View>
              <View style={styles.Button01}>
                <Text style={{ color: 'white' }}>{`${date}`}</Text>
              </View>
            </View>
            <View style={styles.container2}>
              {show && (
                <DateTimePicker
                  value={date}
                  mode={mode}
                  is24Hour={false}
                  display='default'
                  onChange={this.setDate}
                />
              )}
            </View>
            <View style={styles.container2}>
              <TouchableOpacity onPress={this.datepicker}>
                <View style={styles.Button}>
                  <Text style={{ color: 'white' }}>Select Date </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View style={styles.container2}>
              <TouchableOpacity onPress={this.timepicker}>
                <View style={styles.Button}>
                  <Text style={{ color: 'white' }}>Select Time </Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={[styles.container2, { marginTop: 40 }]}>
              <TouchableOpacity onPress={() => this.clickHandler(date)}>
                <View style={[styles.Button, , { backgroundColor: 'white' }]}>
                  <Text style={{ color: 'black' }}>Continue</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    );
  }
}
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
    backgroundColor: '#0A274C',
    flex: 1,
    marginTop: 50,
    height: 95,
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
  Button: {
    justifyContent: 'center',
    width: 200,
    height: 40,
    alignItems: 'center',
    borderRadius: 50,
    borderColor: 'white',
    color: 'white',
    borderWidth: 1.5,
  },
  Button01: {
    justifyContent: 'center',
    width: 200,
    height: 40,
    alignItems: 'center',
    borderRadius: 5,
  },
});
