import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, View } from "react-native";
import styles from './FormStyles'

export default class LoginForm extends React.Component {
    state = {
        email: null,
        password: null,
    }

    render(){
        return (
            <KeyboardAvoidingView  behavior="padding" style={styles.formContainer}>
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.passwordInput.focus()}
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="next"
                    placeholder='Username'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    onChangeText={(text) => this.setState({email: text})}/>

                <TextInput style={styles.input}
                    returnKeyType="go"
                    ref={(input) => this.passwordInput = input}
                    placeholder='Password'
                    placeholderTextColor='rgba(225,225,225,0.7)'
                    secureTextEntry
                    onChangeText={(text) => this.setState({password: text})}/>

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} onPress={() => {this.props.onLogin(this.state.email, this.state.password)}}>Login</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
};