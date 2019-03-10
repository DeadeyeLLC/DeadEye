import React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { AppLoading, Asset, Font, Icon } from 'expo';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addDbInfo } from '../actions/LoginActions';
import AppNavigator from '../navigation/AppNavigator';

const { Stitch } = 
        require('mongodb-stitch-react-native-sdk');
const MongoDB = require('mongodb-stitch-react-native-services-mongodb-remote');

class StartupScreen extends React.Component {
  state = {
      isLoadingComplete: false,
    };

  componentDidMount() {
    this._loadClient();
  }

  _loadClient() {
    Stitch.initializeDefaultAppClient('deadeye-qyvhe').then(client => {
      //this.setState({ client });
      const dbClient = client.getServiceClient(MongoDB.RemoteMongoClient.factory, 'mongodb-atlas');
      //this.setState({dbClient : dbClient});
      //this.setState({db : dbClient.db('deadeye')});
      const db = dbClient.db('deadeye');
      //this.setState({client, db, dbClient});
      this.props.addDbInfo({client, db, dbClient});
    });
  }

  render() {
    if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
      return (
        <AppLoading
          startAsync={this._loadResourcesAsync}
          onError={this._handleLoadingError}
          onFinish={this._handleFinishLoading}
        />
      );
    } else {
        return (
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator test='Hello123'/>
          </View>
        );
    }
  }

  _loadResourcesAsync = async () => {
    return Promise.all([
      Asset.loadAsync([
        require('../assets/images/robot-dev.png'),
        require('../assets/images/robot-prod.png'),
      ]),
      Font.loadAsync({
        // This is the font that we are using for our tab bar
        ...Icon.Ionicons.font,
        // We include SpaceMono because we use it in HomeScreen.js. Feel free
        // to remove this if you are not using it in your app
        'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
      }),
    ]);
  };

  _handleLoadingError = error => {
    // In this case, you might want to report the error to your error
    // reporting service, for example Sentry
    console.warn(error);
  };

  _handleFinishLoading = () => {
    this.setState({ isLoadingComplete: true });
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    addDbInfo
  }, dispatch)
);

const mapStateToProps = (state) => {
  return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(StartupScreen);

