import React from "react";
import { StyleSheet, View, Image, AsyncStorage, Alert, Button, TouchableOpacity, Text } from "react-native";

import theme from '../constants/Colors';
import LoginForm from '../components/forms/LoginForm';
import LoginHelper from '../components/LoginHelperSection'
export default class LoginScreen extends React.Component {
    constructor(props) {
        super(props);
        this._signInAsync = this._signInAsync.bind(this);
        this._createAccountScreen = this._createAccountScreen.bind(this);
        this._forgotPassword = this._forgotPassword.bind(this);
    }

    static navigationOptions = {
        title: 'Login',
    };

    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('AuthLoading');
    };

    _createAccountScreen = () => {this.props.navigation.navigate('AuthRegister');}

    _forgotPassword = () => {this.props.navigation.navigate('AuthForgotPassword');}

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../assets/images/d-logo-white.png')}/>                    
                </View>
                <LoginForm onLogin={this._signInAsync}/>
                <Button title="Media Sign-In" onPress={() => this.props.navigation.navigate('AuthMediaLogin')}></Button>
                <LoginHelper onPressButton1={this._createAccountScreen} button1Text='Create Account' onPressForgotPassword={this._forgotPassword}></LoginHelper>
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