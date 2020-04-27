import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './moviePageStyle';

export default class moviePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.contentStyle}>... Coming Soon Movie Page ...</Text>
      </View>
    );
  }
}
