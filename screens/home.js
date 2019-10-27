import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default class Home extends Component {
  state = {
    messages: [
      {
          _id: 1,
          text: `Hi! I am your personal SleepWell bot.\n\nHow may I help you with today?`,
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'FAQ Bot',
            avatar: 'https://i.imgur.com/7k12EPD.png'
          }
      }
               ]
          };

         onSend(messages = []) {
            this.setState(previousState => ({
              messages: GiftedChat.append(previousState.messages, messages)
            }));
          }

    render() {
      return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <GiftedChat
            messages={this.state.messages}
            onSend={messages => this.onSend(messages)}
            user={{
              _id: 1
            }}
          />
        </View>
        );
      }
  }
