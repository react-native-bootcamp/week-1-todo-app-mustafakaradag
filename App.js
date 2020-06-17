/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {MyButton, MyTextInput} from './src/components'

const App = () => {
  return (   
      
      <SafeAreaView >
        <View style={{backGroundColor: '#d4f3ef'}}>
         <MyTextInput pHolder="would u like to write sth?"></MyTextInput>
         <MyButton btnTitle="Add to List"> </MyButton>
        </View>
      </SafeAreaView>
    
  );
};

export default App;
