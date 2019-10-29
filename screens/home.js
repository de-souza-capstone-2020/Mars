import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default class Home extends Component {
  state = {
    messages: [
      {
          _id: 1,
          text: 'This is Sleepwell. Would you like to learn more about how i can help?',
          createdAt: new Date(),
          quickReplies: {
              type: 'radio', // or 'checkbox',
              keepIt: true,
              values: [
                {
                  title: '😋 Yes',
                  value: 'yes',
                },
                {
                  title: '📷 Yes,show me with a picture!',
                  value: 'yes_picture',
                },
                {
                  title: '😞 Nope. What?',
                  value: 'no',
                },
              ],
            },
            user: {
               _id: 2,
               name: 'React Native',
            },
      },

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
