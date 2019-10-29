import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

export default class Home extends Component {
  state = {
    messages: [
      {
          _id: 1,
          text: 'This is your personal SleepWell bot. Would you like to learn more about me?',
          createdAt: new Date(),
          quickReplies: {
              type: 'radio', // or 'checkbox',
              values: [
                {
                  title: 'Yes',
                  value: 'yes',
                },
                {
                  title: 'Will this take long?',
                  value: 'yes_picture',
                },
                {
                  title: 'Not right now',
                  value: 'no',
                },
              ],
            },

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
