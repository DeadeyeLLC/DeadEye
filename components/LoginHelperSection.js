import React from 'react';
import {StyleSheet, View, Text, Dimensions, TouchableOpacity} from 'react-native';
import theme from '../constants/Colors';

export default class LoginHelperSection extends React.Component {
  render() {
    return (
        <View style={styles.container}>
          <TouchableOpacity><Text style={styles.text} onPress={this.props.onPressButton1}>{this.props.button1Text}</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.text} onPress={this.props.onPressForgotPassword}>Forgot Password?</Text></TouchableOpacity>
        </View>
    );
  }
}

const DEVICE_WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
    flex: 1,
    width: DEVICE_WIDTH,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  text: {
    color: theme.secondaryColor,
    backgroundColor: 'transparent',
  },
});