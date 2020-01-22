import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
// Sleep diary questions: https://i.gyazo.com/94ecf49c2e6bc6e7fe8e2074dd2a3e8b.png
const user = {
  _id: 1,
  name: "Developer"
};

const otherUser = {
  _id: 2,
  name: "React Native",
  avatar: "https://facebook.github.io/react/img/logo_og.png"
};

const getID = () => Math.round(Math.random() * 1000000);

const styles = StyleSheet.create({
  container: { flex: 1 }
});

export default class Home extends Component {
  state = {
    messages: [
      {
        _id: 1,
        text:
          "This is Sleepwell. Would you like to learn more about how i can help?",
        createdAt: new Date(),
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "😋 Yes",
              value: "yes"
            },
            {
              title: "📷 Yes,show me with a picture!",
              value: "yes_picture"
            },
            {
              title: "😞 Nope. What?",
              value: "no"
            }
          ]
        },
        user: {
          _id: 2,
          name: "React Native"
        }
      }
    ],
    typingText: null
  };

  onReceive = text => {
    this.setState(previousState => {
      return {
        messages: GiftedChat.append(
          previousState.messages,
          {
            _id: getID(),
            text,
            createdAt: new Date(),
            user: otherUser
          },
          Platform.OS !== "web"
        )
      };
    });
  };

  onSend = (messages = []) => {
    const step = this.state.step + 1;
    this.setState(previousState => {
      previousState.messages.forEach(message => {
        if (message.quickReplies !== undefined) {
          message.quickReplies.values = [];
        }
      });
      const sentMessages = [{ ...messages[0], sent: true, received: true }];
      return {
        messages: GiftedChat.append(
          previousState.messages,
          sentMessages,
          Platform.OS !== "web"
        ),
        typingText: "Chat bot is typing...",
        step
      };
    });
    // for demo purpose
    // setTimeout(() => this.botSend(step, messages[0]), Math.round(Math.random() * 1000))
  };

  onSendFromUser = (messages = []) => {
    const createdAt = new Date();
    const messagesToUpload = messages.map(message => ({
      ...message,
      user,
      createdAt,
      _id: getID()
    }));
    this.onSend(messagesToUpload);
  };

  onQuickReply = replies => {
    const createdAt = new Date();
    if (replies.length === 1) {
      this.onSend([
        {
          createdAt,
          _id: getID(),
          text: replies[0].title,
          user
        }
      ]);
      new Promise(resolve => {
        setTimeout(() => {
          this.determineResponse(replies[0]);
          resolve();
        }, 2000);
      }).then(() => {
        this.turnOffTyping();
      });
    } else if (replies.length > 1) {
      this.onSend([
        {
          createdAt,
          _id: getID(),
          text: replies.map(reply => reply.title).join(", "),
          user
        }
      ]);
    } else {
      console.warn("replies param is not set correctly");
    }
  };

  turnOffTyping() {
    this.setState({
      typingText: null
    });
  }

  determineResponse = reply => {
    const createdAt = new Date();
    if (reply.value === "no") {
      this.onSend([
        {
          createdAt,
          _id: getID(),
          text: "have a nice day :(",
          otherUser
        }
      ]);
    }
    if (reply.value === "yes_picture") {
      this.onSend([
        {
          createdAt,
          _id: getID(),
          text: "jokes i have no pics",
          otherUser
        }
      ]);
    }
    if (reply.value === "yes") {
      this.onSend([
        {
          _id: getID(),
          text: "Awesome, Did you sleep last night?",
          createdAt: new Date(),
          quickReplies: {
            type: "radio", // or 'checkbox',
            keepIt: true,
            values: [
              {
                title: "For a bit",
                value: "yes_picture"
              },
              {
                title: "Yes 😋 ",
                value: "yes"
              },
              {
                title: "Nope. Was up all night😞 ",
                value: "no"
              }
            ]
          },
          user: {
            _id: getID(),
            name: "React Native"
          }
        }
      ]);
    }
  };
  renderQuickReplySend = () => {
    return <Text>{" custom send =>"}</Text>;
  };
  renderInputToolbar(props) {
    if (this.state.toolbar) {
      return <InputToolbar {...props} />;
    }
  }
  renderFooter = () => {
    const { typingText } = this.state;
    if (typingText) {
      return (
        <View>
          <Text>{typingText}</Text>
        </View>
      );
    }
    return null;
  };

  render() {
    const { messages } = this.state;
    return (
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <GiftedChat
          messages={messages}
          onSend={this.onSend}
          user={{ _id: 1 }}
          quickReplyStyle={{ borderRadius: 2 }}
          onQuickReply={this.onQuickReply}
          renderQuickReplySend={this.renderQuickReplySend}
          renderInputToolbar={props => this.renderInputToolbar(props)}
          renderChatFooter={this.renderFooter}
        />
      </View>
    );
  }
}
