import React from 'react';
import {View, Image, Text} from 'react-native';

function NavigationBar() {
  return (
    <View
      style={{
        backgroundColor: '#E6492D',
        flexDirection: 'row',
        paddingLeft: 8,
        paddingBottom: 10,
        paddingTop: 20,
      }}>
      <Image style={{width: 10, height: 22}} source={require('./arrow.png')} />
      <Text style={{fontSize: 20, textAlign: 'center', color: '#FFF', flex: 1}}>
        Tin tức sự kiện
      </Text>
    </View>
  );
}
export default NavigationBar;
