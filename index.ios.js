
import React, { Component } from 'react';
import {
  AppRegistry,
  View,
  Text
} from 'react-native';
import { TabNavigator } from 'react-navigation';
import SocketIOExample from './client/SocketIOExample.component';

class Second extends Component {
  static navigationOptions = {
    title: 'Third tab',
  };
  render() {
    return (
      <View>
        <Text>This is second tab</Text>
      </View>
    );
  }
}

class Third extends Component {
  static navigationOptions = {
    title: 'Third tab',
  };
  render() {
    return (
      <View>
        <Text>This is third tab</Text>
      </View>
    );
  }
}

const SimpleApp = TabNavigator({
  Main: {screen: SocketIOExample},
  Second: {screen: Second},
  Third: {screen: Third}
});

AppRegistry.registerComponent('SocketIOExample', () => SimpleApp);