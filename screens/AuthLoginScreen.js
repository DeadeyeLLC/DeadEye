import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity, AsyncStorage, TextInput } from "react-native";

import theme from '../constants/Colors';

export default class Login extends React.Component {
    static navigationOptions = {
        title: 'Login',
    };
    _signInAsync = async () => {
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('AuthLoading');
      };
    
    render() {
        return (
            <KeyboardAvoidingView  behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../assets/images/d-logo-white.png')}/>                    
                </View>
                <View style={styles.container}>
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
                        <Text style={styles.buttonText} onPress={this._signInAsync}>Login</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
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