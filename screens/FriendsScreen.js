import React from 'react';
import { ScrollView, StyleSheet, Text, View, ActivityIndicator } from 'react-native';

import { List, ListItem } from 'react-native-elements';

var userStore = require('../stores/users');

userStore.fetchUsers();

function getRandomSport() {
  var sports = ['Lacross', 'Hockey', 'Baseball', 'Football','Soccer']
  return sports[Math.floor(Math.random()*sports.length)];
}

export default class FriendsScreen extends React.Component {
  static navigationOptions = {
    title: `${userStore.getUsers().length} Friends`,  //Need to change to automatically update when number of friends updates
  };

  render() {
    if(userStore.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/><Text>This will never stop loading. Your only option to see friends is to reload the app and hope the friends load before the list loads</Text>
        </View>
      )
    }

    return (
      <ScrollView>
        <List>
          {userStore.getUsers().map((user) => (  //Okay so spread worked here then it suddenly didnt. Pushing code because I am confident that someone more versed in this can easily get it working again.
            <ListItem
              key={user.login.username}
              roundAvatar
              avatar={{ uri: user.picture.thumbnail }}
              title={`${user.name.first.toUpperCase()} ${user.name.last.toUpperCase()}`}
              subtitle={user.email}
              rightTitle={`${getRandomSport()}`}
            />
          ))}
        </List>
      </ScrollView>
    );
  }
}