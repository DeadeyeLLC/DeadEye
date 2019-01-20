import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, FlatList } from 'react-native';
import { List, ListItem, Avatar, Icon, Button   } from "react-native-elements";
import theme from '../constants/Colors';

function getRandomActivity(randomInt) {
  var activityNames = ['Shot Trainer Session', 'Competitive Play: Corners', 'Guided Practice'];
  var name = activityNames[randomInt%activityNames.length];
  var date= new Date();
  var lines=[];
  var icon = '';
  switch(name) {
    case 'Shot Trainer Session':  lines = ['43 Shots','Max Speed: 73 MPH', 'Time Practice: 54 minutes']; icon='target'; break;
    case 'Competitive Play: Corners': lines = ['Accuracy Score 88%','Max Speed 71 MPH', 'You Beat Anthony Saitta!']; icon='trophy'; break;
    case 'Guided Practice': lines = ['Four Leaf: Coach Ray Monday Workout','Percentage Completed: 100%']; icon='clover'; break;
  }
console.log(date.getTime().toString());
  return { "id":`${date.getTime().toString()}`, "name":name, "date":date, "lines":lines, "icon":icon }
}

export default class ProfileScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      page: 0,
      error: null,
      refreshing: false
    };
  }

  static navigationOptions = {
    title: 'Profile',
  };

  componentDidMount() {
    this.makeRemoteRequest();
  }

  handleRefresh = () => {
    this.setState(
      {
        page: 1,
        refreshing: true
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  }

  handleLoadMore = () => {
    this.setState(
      {
        page: this.state.page + 1
      },
      () => {
        this.makeRemoteRequest();
      }
    );
  };

  makeRemoteRequest = () => {
    this.setState({
      data: [...this.state.data, getRandomActivity(this.state.page)],
      loading: false,
      refreshing: false
    });
  };


  renderActivity = (activity) => {
    return (
      <ListItem
        title={activity.name}
        subtitle={<View>{activity.lines.map(line => <Text style={styles.activityDetailText}>{line}</Text>)}</View>}
        avatar={<Icon
          name={activity.icon}
          type='material-community'
          color={theme.primaryColor}
        />}
        rightTitle={`${(activity.date.getMonth()+1).toString()}/${activity.date.getDay().toString()}/${activity.date.getFullYear().toString()}`}
        rightIcon={{name: 'share-variant', type: 'material-community' }}
        onPressRightIcon={() => {console.log(`Sharing ${activity.name}`)}}
        topDivider={true}
      />
    )
  }

  renderFooter() {
      return (
        <View style={{alignItems: 'center'}}>
          <Button
            loading={this.state.loading}
            buttonStyle={{
              backgroundColor: theme.primaryColor,
              width: 300,
              height: 45,
              borderColor: 'transparent',
              borderWidth: 0,
              borderRadius: 20
            }}
            icon={{
              name: 'arrow-down-bold',
              type: 'material-community',
              size: 30,
              color: theme.secondaryColor
            }}
            onPress={this.handleLoadMore}
          />
        </View>
      );
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.topContainer}>
        <Avatar
          large
          rounded
          title="JS"
          source={{ uri: 'https://randomuser.me/api/portraits/lego/0.jpg'}}
        />
          <Text style={styles.profileNameText}>John Smith</Text>
          <Text style={styles.profileLocationText}>Anywhere, USA</Text>
        </View>
        <View style={styles.middleContainer}>
          <View style={styles.statContainer}>
            <Text style={styles.statNumberText}>3</Text>
            <Text style={styles.statDescText}>Active Sports</Text>
          </View>
          <View style={styles.statContainer}>
            <Text style={styles.statNumberText}>15</Text>
            <Text style={styles.statDescText}>Hours Practiced</Text>
          </View>
          <View style={styles.statContainer}>
            <Text style={styles.statNumberText}>7</Text>
            <Text style={styles.statDescText}>Practice Sessions</Text>
          </View>
          <View style={styles.statContainer}>
            <Text style={styles.statNumberText}>48</Text>
            <Text style={styles.statDescText}>Friends</Text>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <List containerStyle={{ borderTopWidth: 0, borderBottomWidth: 0 }}>
            <FlatList
              data={this.state.data}
              renderItem={({ item }) => ( this.renderActivity(item) )}
              keyExtractor={item => item.id}
              onRefresh={this.handleRefresh}
              refreshing={this.state.refreshing}
              ListFooterComponent={this.renderFooter.bind(this)}
            />
          </List>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  topContainer: {
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
    backgroundColor: theme.primaryColor,
  },
  profileNameText: {
    color: theme.secondaryColor,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  profileLocationText: {
    color: '#f5f5f5',
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  middleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.secondaryColor,
  },
  statContainer: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
    alignItems: 'center',
    backgroundColor: theme.secondaryColor,
  },
  statNumberText: {
    color: theme.primaryColor,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  statDescText: {
    color: '#000000',
    fontSize: 15,
    fontWeight: 'normal',
    textAlign: 'center',
  },
  bottomContainer: {
    backgroundColor: theme.secondaryColor,
  },
  activityDetailText: {
    color: '#000000',
    fontSize: 10,
    fontWeight: 'normal'
  },
});
