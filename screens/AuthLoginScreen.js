import React from "react";
import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity, AsyncStorage, TextInput } from "react-native";

import theme from '../constants/Colors';
import LoginForm from '../components/forms/LoginForm';


export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this._signInAsync = this._signInAsync.bind(this);
      }
    
    static navigationOptions = {
        title: 'Login',
    };

    _signInAsync = async () => {
        console.log('foobar');
        await AsyncStorage.setItem('userToken', 'abc');
        this.props.navigation.navigate('AuthLoading');
      };

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../assets/images/d-logo-white.png')}/>                    
                </View>
                <LoginForm />
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
    }
});