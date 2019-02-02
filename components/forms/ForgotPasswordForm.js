import React from 'react';
import { StyleSheet, Text, TouchableOpacity, TextInput, KeyboardAvoidingView, View } from "react-native";
import styles from './FormStyles'

export default class ForgotPasswordForm extends React.Component {

    render(){
        return (
            <KeyboardAvoidingView  behavior="padding" style={styles.formContainer}>
                <TextInput style={styles.input}
                    autoCapitalize="none"
                    onSubmitEditing={() => this.props.onSubmit}
                    autoCorrect={false}
                    keyboardType='email-address'
                    returnKeyType="next"
                    placeholder='Username'
                    placeholderTextColor='rgba(225,225,225,0.7)' />

                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText} onPress={this.props.onSubmit}>Submit</Text>
                </TouchableOpacity>
            </KeyboardAvoidingView>
        );
    }
};