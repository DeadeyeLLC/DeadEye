import React from "react";
import { StyleSheet, View, Image, AsyncStorage, Alert, Button, TouchableOpacity, Text } from "react-native";

import theme from '../constants/Colors';
import LoginForm from '../components/forms/LoginForm';
import LoginHelper from '../components/LoginHelperSection';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUserId, addDbInfo } from '../actions/LoginActions';

const { Stitch, AnonymousCredential } = 
        require('mongodb-stitch-react-native-sdk');
const MongoDB = require('mongodb-stitch-react-native-services-mongodb-remote');

class AuthLoginScreen extends React.Component {
    constructor(props) {
        super(props);
        //this._loadClient();
        this._signInAsync = this._signInAsync.bind(this);
        this._createAccountScreen = this._createAccountScreen.bind(this);
        this._forgotPassword = this._forgotPassword.bind(this);
        //this._getServerInstanceInfo = this._getServerInstanceInfo.bind(this);
    }
    componentDidMount() {
        this._loadClient();
    }

    static navigationOptions = {
        title: 'Login',
    };

    _loadClient() {
        Stitch.initializeDefaultAppClient('deadeye-qyvhe').then(client => {
          //this.setState({ client });
          const dbClient = client.getServiceClient(MongoDB.RemoteMongoClient.factory, 'mongodb-atlas');
          //this.setState({dbClient : dbClient});
          //this.setState({db : dbClient.db('deadeye')});
          const db = dbClient.db('deadeye');
          this.setState({client, db, dbClient});
          this.props.addDbInfo({client, db, dbClient});
        });
    }

    _signInAsync = async () => {
        this._onLogin();
        
        /* When login integrated: 
        const isSuccess = await logInUser();
        if (isSuccess) {
            this._onLogin();
            this.props.navigation.navigate('Home');
        } else {
            this._onFailure();
        }*/
    };

    _onLogin() {
        const clientAuth = this.state.client.auth;
        if (clientAuth) {
            clientAuth.loginWithCredential(new AnonymousCredential()).then(user => {
                this.props.addUserId(user.id);
                this.props.navigation.navigate('AuthLoading');
            }).catch(err => {
                //this.props.addUserId({ currentUserId: undefined })
            });
        } else {
            console.log(err);
        }
    }

    /*_getServerInstanceInfo = () => {
        return {
          client: this.state.client,
          db: this.state.db,
          atlasClient: this.state.atlasClient
        };
    }*/

    _createAccountScreen = () => {this.props.navigation.navigate('AuthRegister');}

    _forgotPassword = () => {this.props.navigation.navigate('AuthForgotPassword');}

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image resizeMode="contain" style={styles.logo} source={require('../assets/images/d-logo-white.png')}/>                    
                </View>
                <LoginForm onLogin={this._signInAsync}/>
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

const mapDispatchToProps = dispatch => (
    bindActionCreators({
      addUserId,
      addDbInfo
    }, dispatch)
);

const mapStateToProps = (state) => {
    const { uid, database } = state.login
    return { uid, database }
};
  
export default connect(mapStateToProps, mapDispatchToProps)(AuthLoginScreen);
