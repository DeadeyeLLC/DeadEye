import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, KeyboardAvoidingView } from "react-native";

import LoginForm from '../components/forms/LoginForm';


export default class Login extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };

    render() {
        return (
            <KeyboardAvoidingView  behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../assets/images/d-logo-white.png')}/>                    
                </View>
                    <LoginForm />
            </KeyboardAvoidingView>
            );
        }
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#bb0000',
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
    }
});