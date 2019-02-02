import React from "react";
import { StyleSheet, View, Image, AsyncStorage, Alert, Button, TouchableOpacity, Text } from "react-native";

import theme from '../constants/Colors';
import ForgotPasswordForm from '../components/forms/ForgotPasswordForm';

export default class LoginScreen extends React.Component {

    static navigationOptions = {
        title: 'Forgot Password',
    };

    _submitForgottenPassword = async () => {
        Alert.alert(
            'Password Recovery',
            'You will recieve an email with instructions on how to recover your password shortly.'
        );
        this.props.navigation.navigate('Auth');
    };
    
    _loginScreen = () => {this.props.navigation.navigate('Auth');}

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../assets/images/d-logo-white.png')}/>                    
                </View>
                <ForgotPasswordForm onSubmit={this._submitForgottenPassword}/>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.buttonContainer}>
                        <Text style={styles.buttonText} onPress={this._loginScreen}>Go Back</Text>
                    </TouchableOpacity>
                </View>
            </View>
            );
        }
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.primaryColor
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        top: 50,
        width: 600,
        height: 200
    },
    buttonContainer: {
        width: 300,
        backgroundColor: "#000000",
        paddingVertical: 15,
        borderRadius: 20,
      },
      buttonText: {
        color: "#fff",
        textAlign: "center",
        fontWeight: "700"
      }
});