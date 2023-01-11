import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import React from 'react';
export default function SqaureBox(props) {
  return (
    <TouchableOpacity onPress={() => props.onClick()}>
      <View style={styles.square}>
        <View
          style={{
            width: '100%',
            height: '70%',
            borderBottomWidth: 2,
            borderColor: 'white',
          }}
        >
          <Image
            source={props.image}
            resizeMode='contain'
            style={{
              zIndex: 0,
              height: 60,
              width: 100,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginTop: 20,
            }}
          />
        </View>
        <View
          style={{
            width: '100%',
            height: '30%',
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              fontSize: 14,
              color: 'white',
            }}
          >
            {props.name}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  square: {
    // backgroundColor: 'red',

    width: 120,
    height: 130,
    marginTop: 10,
    borderRadius: 40,
    borderColor: 'white',
    borderWidth: 1,
    overflow: 'hidden',
  },
});
