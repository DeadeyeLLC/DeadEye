import React from "react";
import { StyleSheet, View, Image, AsyncStorage, Alert, Button, TouchableOpacity } from "react-native";

import theme from '../constants/Colors';
import RegisterForm from '../components/forms/RegisterForm';
import LoginHelper from '../components/LoginHelperSection'

export default class AuthRegisterScreen extends React.Component {
    constructor(props) {
        super(props);
        this._register = this._register.bind(this);
        this._loginScreen = this._loginScreen.bind(this);
        this._forgotPassword = this._forgotPassword.bind(this);
    }

    static navigationOptions = {
        title: 'Create Account',
    };

    _register = async () => {
        this.props.navigation.navigate('AuthLoading');
    };

    _loginScreen = () => {this.props.navigation.navigate('Auth');}

    _forgotPassword = () => {this.props.navigation.navigate('AuthForgotPassword');}

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../assets/images/d-logo-white.png')}/>                    
                </View>
                <RegisterForm onRegister={this._register}/>
                <LoginHelper onPressButton1={this._loginScreen} button1Text='Login' onPressForgotPassword={this._forgotPassword}></LoginHelper>
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
        width: 600,
        height: 200
    }
});