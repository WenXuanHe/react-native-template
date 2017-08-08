/**
 * Sample React Native App
 * require("./img/ic_launcher.png")
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
//navigation 1.
import { StackNavigator, TabNavigator } from 'react-navigation';
import {
  Alert,
  ScrollView,
  AppRegistry,
  Platform,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  FlatList,
  SectionList,
  Image
} from 'react-native';

import { indexStyle } from './styles/index.js';

export default class MyProject extends Component {

  //navigation 3.
  static navigationOptions = {
    title: 'navigator',
  };

  constructor(props) {
    super(props);
    this.state = {text: ''};
  }

  _onPressButton() {
    Alert.alert('You tapped the button!')
  }

  _onLongPressButton() {
    Alert.alert('You long-pressed the button!')
  }

  render() {
    //navigation 4.
    // const { navigate } = this.props.navigation.navigate;

    return (
        <ScrollView>
          <Image
            source={require("./img/ic_launcher.png")}
            style={{width: 40, height: 40}}
          />
          <Image
            source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
            style={{width: 40, height: 40}}
          />


          <View>
            <Text>Hello, Chat App!</Text>
            <Button
              onPress={() => this.props.navigation.navigate('Chat')}
              title="Chat with Lucy"
            />
          </View>


          <View style={indexStyle.container}>
            <Text style={indexStyle.welcome}>
              Welcome to React Native!!!!
            </Text>

            <TextInput
                style={indexStyle.myInput}
                placeholder="请输入姓名"
                onChangeText={(text) => {this.setState({text})}}
            />
            <Text>{this.state.text}</Text>

            <Button onPress={()=>{alert('check me')}} title="check me" />

            <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
              <View style={indexStyle.button}>
                <Text style={indexStyle.buttonText}>TouchableHighlight</Text>
              </View>
            </TouchableHighlight>

            <TouchableOpacity onPress={this._onPressButton}>
              <View style={indexStyle.button}>
                <Text style={indexStyle.buttonText}>TouchableOpacity</Text>
              </View>
            </TouchableOpacity>

            <TouchableNativeFeedback
                onPress={this._onPressButton}
                background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
              <View style={indexStyle.button}>
                <Text style={indexStyle.buttonText}>TouchableNativeFeedback</Text>
              </View>
            </TouchableNativeFeedback>

            <TouchableWithoutFeedback
                onPress={this._onPressButton}
                >
              <View style={indexStyle.button}>
                <Text style={indexStyle.buttonText}>TouchableWithoutFeedback</Text>
              </View>
            </TouchableWithoutFeedback>

            <TouchableHighlight onPress={this._onPressButton} onLongPress={this._onLongPressButton} underlayColor="white">
              <View style={indexStyle.button}>
                <Text style={indexStyle.buttonText}>Touchable with Long Press</Text>
              </View>
            </TouchableHighlight>

            <FlatList
                data = {[
                    {key: 'Devin'},
                    {key: 'Jackson'},
                    {key: 'James'},
                    {key: 'Joel'},
                    {key: 'John'},
                    {key: 'Jillian'},
                    {key: 'Jimmy'},
                    {key: 'Julie'},
                    ]}
                renderItem = {({item}) => <Text>{item.key}</Text>}
            />

            <SectionList
                sections={[
                    {
                        title:"A",
                        data:['阿拉善', "屋换"]
                    },
                    {
                        title:"C",
                        data:["成都"]
                    }
                ]}
                renderSectionHeader={({section}) => <Text>{section.title}</Text>}
                renderItem={({item}) => <Text>SectionList:{item}</Text>}

            />
          </View>
        </ScrollView>

    );
  }
}

class ChatScreen extends Component {
  static navigationOptions = {
    title: 'Chat',
  };
  render() {
    return (
      <View>
        <Button
              onPress={() => this.props.navigation.navigate('Home')}
              title="Home"
            />
        <Text>Chat with</Text>
      </View>
    );
  }
}

//navigation 2.
const App = StackNavigator({
  Home: {screen: MyProject},
  Chat: {screen: ChatScreen},
},
{
  initialRouteName: 'Chat'
});

class RecentChatsScreen extends React.Component {
  render() {
    return <Text>List of recent chats</Text>
  }
}

class AllContactsScreen extends React.Component {
  render() {
    return <Text>List of all contacts</Text>
  }
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});

AppRegistry.registerComponent('MyProject', () => App);
