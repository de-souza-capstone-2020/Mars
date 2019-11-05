import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';

const user = {
  _id: 1,
  name: 'Developer',
}

const otherUser = {
  _id: 2,
  name: 'React Native',
  avatar: 'https://facebook.github.io/react/img/logo_og.png',
}

const styles = StyleSheet.create({
  container: { flex: 1 },
})


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

  onReceive = text => {
     this.setState(previousState => {
       return {
         messages: GiftedChat.append(
           previousState.messages,
           {
             _id: Math.round(Math.random() * 1000000),
             text,
             createdAt: new Date(),
             user: otherUser,
           },
           Platform.OS !== 'web',
         ),
       }
     })
   }

   onSend = (messages = []) => {
     const step = this.state.step + 1
     this.setState(previousState => {
       const sentMessages = [{ ...messages[0], sent: true, received: true }]
       return {
         messages: GiftedChat.append(
           previousState.messages,
           sentMessages,
           Platform.OS !== 'web',
         ),
         step,
       }
     })
     // for demo purpose
     // setTimeout(() => this.botSend(step), Math.round(Math.random() * 1000))
   }

   onSendFromUser = (messages = []) => {
       const createdAt = new Date()
       const messagesToUpload = messages.map(message => ({
         ...message,
         user,
         createdAt,
         _id: Math.round(Math.random() * 1000000),
       }))
       this.onSend(messagesToUpload)
     }

    onQuickReply = replies => {
       const createdAt = new Date()
       if (replies.length === 1) {
         this.onSend([
           {
             createdAt,
             _id: Math.round(Math.random() * 1000000),
             text: replies[0].title,
             user,
           },
         ]);
         this.determineResponse(replies[0]);
       } else if (replies.length > 1) {
         this.onSend([
           {
             createdAt,
             _id: Math.round(Math.random() * 1000000),
             text: replies.map(reply => reply.title).join(', '),
             user,
           },
         ]);
       } else {
         console.warn('replies param is not set correctly')
       }
     }

     determineResponse = reply => {
       const createdAt = new Date()
       console.log(reply.title);
       if (reply.value === 'no'){
         this.onSend([
           {
             createdAt,
             _id: Math.round(Math.random() * 1000000),
             text: "have a nice day :(",
             otherUser,
           },
         ])
       }
       if (reply.value === 'yes_picture'){
         this.onSend([
           {
             createdAt,
             _id: Math.round(Math.random() * 1000000),
             text: "jokes i have no pics",
             otherUser,
           },
         ])
       }
       if (reply.value === 'yes'){
         this.onSend([
           {

                   _id: 2,
                   text: 'Awesome, Did you sleep last night?',
                   createdAt: new Date(),
                   quickReplies: {
                       type: 'radio', // or 'checkbox',
                       keepIt: true,
                       values: [

                         {
                           title: 'For a bit',
                           value: 'yes_picture',
                         },
                         {
                            title: 'Yes 😋 ',
                            value: 'yes',
                         },
                         {
                           title: 'Nope. Was up all night😞 ',
                           value: 'no',
                         },
                       ],
                     },
                     user: {
                        _id: 2,
                        name: 'React Native',
                   },


           },
         ])
       }

     }
    renderQuickReplySend = () => <Text>{' custom send =>'}</Text>

    render() {
      return (
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <GiftedChat
            messages={this.state.messages}
            onSend={this.onSend}
            user={{_id: 1}}
            quickReplyStyle={{ borderRadius: 2 }}
            onQuickReply={this.onQuickReply}
            renderQuickReplySend={this.renderQuickReplySend}

          />
        </View>
        );
      }
  }
