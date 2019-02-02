import React from "react";
import { StyleSheet, View, Image, AsyncStorage, Alert, Button, TouchableOpacity, Text } from "react-native";

import theme from '../constants/Colors';
import LoginForm from '../components/forms/LoginForm';

export default class LoginScreen extends React.Component {

    static navigationOptions = {
        title: 'Forgot Password',
    };

    _loginScreen = () => {this.props.navigation.navigate('Auth');}

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../assets/images/d-logo-white.png')}/>                    
                </View>
                <View style={styles.logoContainer}><Text style={styles.buttonText}>Forgot Password Screen Here</Text></View>
                <View style={styles.buttonContainer}>
                    <Button onPress={this._loginScreen}
                        title="Go Back"
                        color="#841584"
                        accessibilityLabel="Go back to login screen"></Button>
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
        backgroundColor: theme.primaryColor,
    },
    logoContainer: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center'
    },
    logo: {
        top: 50,
        position: 'absolute',
        width: 600,
        height: 200
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