import { View, Text, Image } from 'react-native';
import React from 'react';
import sampleScren1 from '../assets/images/sampleScreen4.png';
export default function Sample() {
  return (
    <View style={{ flex: 1, backgroundColor: '#0A274C' }}>
      <Image
        source={sampleScren1}
        style={{
          zIndex: 0,
          width: '103%',
          height: '100%',
          marginLeft: -10,
          marginTop: -10,
          padding: 0,
        }}
      />
    </View>
  );
}
