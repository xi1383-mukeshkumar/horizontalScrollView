import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './ticketStyle';
export default class ticket extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.contentStyle}>... Coming Soon Ticket Page ...</Text>
      </View>
    );
  }
}
