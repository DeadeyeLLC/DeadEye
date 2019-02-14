import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, View } from "react-native";
import styles from './FormStyles'

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
                    returnKeyType="next"
                    onSubmitEditing={() => this.passwordInputConfirm.focus()}
                    ref={(input) => this.passwordInput = input}
                    placeholder='Password'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    secureTextEntry />

                <TextInput style={styles.input}
                    returnKeyType="go"
                    ref={(input) => this.passwordInputConfirm = input}
                    placeholder='Confirm Password'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    secureTextEntry />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} onPress={this.props.onRegister}>Create Account</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
};