import React from 'react';
import {SafeAreaView, ScrollView, View} from 'react-native';
import NavigationBar from './NavigationBar';
import Baiviet from './Baiviet';

function App(): JSX.Element {
  return (
    <SafeAreaView>
      <NavigationBar />
      <ScrollView style={{backgroundColor: '#FFF'}}>
        <View style={{gap: 16, paddingHorizontal: 8, paddingTop: 16}}>
          <Baiviet />
          <Baiviet />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default App;
