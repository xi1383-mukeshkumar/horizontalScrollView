import React, {Component} from 'react';
import styles from './loginPageStyle';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import COLOR from '../../assets/color/color';
export default class loginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {email: '', password: ''};
  }

  render() {
    return (
      <SafeAreaView style={styles.safeContainer}>
        <View style={styles.container}>
          <View style={styles.welcomeContainer}>
            <Text style={styles.welcomeText}> Login </Text>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Enter Email or Contact Number"
              onChangeText={(text) => this.setState({email: text})}
            />
            {!this.state.email ? (
              <>
                <Text style={styles.errorStyle}>
                  Please Enter Email/Contact
                </Text>
              </>
            ) : null}
            <TextInput />

            <TextInput
              style={styles.textInputStyle}
              placeholder="Enter Password"
              secureTextEntry={true}
              onChangeText={(text) => this.setState({password: text})}
            />
            {!this.state.password ? (
              <>
                <Text style={styles.errorStyle}>Please Enter Password</Text>
              </>
            ) : null}

            <TextInput />
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('DashboardTab')}
              disabled={!(this.state.email && this.state.password)}
              style={[
                styles.buttonStyle,
                {
                  backgroundColor: !(this.state.email && this.state.password)
                    ? COLOR.disableButtonColorWithHalfOpacity
                    : COLOR.enableButtonColor,
                },
              ]}>
              <Text style={styles.submitText}> Submit </Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    );
  }
}
