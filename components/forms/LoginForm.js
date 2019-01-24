import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, KeyboardAvoidingView } from "react-native";

export default class LoginForm extends React.Component {
    
    render(){
        return (
            <KeyboardAvoidingView  behavior="padding" style={styles.container}>
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="next"
                    placeholder='Username'
                    placeholderTextColor='rgba(225,225,225,0.7)' />

                <TextInput style={styles.input}
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                    placeholder='Password'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    secureTextEntry />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} onPress={this.props.onLogin}>Login</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
};

// define your styles
const styles = StyleSheet.create({
  container: {
    padding: 35,
    marginBottom: 15
  },
  input: {
    height: 40,
    width: 300,
    backgroundColor: "rgba(225,225,225,0.3)",
    marginBottom: 10,
    padding: 10,
    color: "#fff",
    borderRadius: 20
  },
  buttonContainer: {
    width: 300,
    backgroundColor: "#000000",
    paddingVertical: 15,
    borderRadius: 20
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "700"
  }
});