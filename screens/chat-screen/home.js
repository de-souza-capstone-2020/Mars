import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button, } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import Modal from "react-native-modal";
import SleepDiary from "../sleepDiary";

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
            },
            {
              title: "Sleep Diary",
              value: "sleep_diary"
            }
          ]
        },
        user: {
          _id: 2,
          name: "React Native"
        }
      }
    ],
    typingText: null,
    isModalVisible: false
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
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
        }, 0);
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
          quickReplies: {
            type: "radio", // or 'checkbox',
            keepIt: true,
            values: [
              {
                title: "See you later",
                value: "seeu"
              },
            ]
          },
          user: {
            _id: 2,
            name: "React Native"
          }
        }
      ]);
    }
    if (reply.value === "seeu") {
      this.onSend([
        {
          createdAt,
          _id: Math.round(Math.random() * 1000000),
          text: "byeeeee",
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
    if (reply.value === "sleep_diary") {
      this.toggleModal();
      this.onSend([
        {
        _id: getID(),
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
            },
            {
              title: "Sleep Diary",
              value: "sleep_diary"
            }
          ]
        },
        user: {
          _id: getID(),
          name: "React Native"
        }
      }
    ])
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
        <Modal isVisible={this.state.isModalVisible}>
          <View style={{flex: 1}}></View>
          <View style={styles.sleepDiary}>
            <SleepDiary />
            <View style={styles.confirmation}>
              <View style={styles.diaryButtons}>
                <Button title="Cancel" onPress={this.toggleModal} />
              </View>
              <View style={styles.diaryButtons}>
                <Button title="Submit" onPress={this.toggleModal} />
              </View>
            </View>
          </View>
          <View style={{flex: 1}}></View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  confirmation: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  sleepDiary: {
    flex: 5,
    paddingBottom: 20, 
    paddingTop: 20, 
    backgroundColor: 'white',
    borderRadius: 14,
    borderColor: 'rgba(0, 0, 0, 0.1)',
  },
  diaryButtons: {
    flex: 1,
    padding: 10
  }
});