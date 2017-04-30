import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import io from 'socket.io-client';

export default class SocketIOExample extends Component {

  componentDidMount() {
    console.log('component did mount');

    this.socket = io('http://localhost:3000');

    this.socket.on('connection', () => {
      console.log('on connection');
    });

    this.socket.on('message', (message) => {
      console.log(`message from server: ${message}`);
      setTimeout(() => this.socket.emit('message', 'Hello World'), 2e3);
    });

    this.socket.on('disconnect', () => {
      console.log('on disconnection');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          This is example of testing socket.io
        </Text>
        <Text style={styles.instructions}>
          See log console to make sure connection working
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});