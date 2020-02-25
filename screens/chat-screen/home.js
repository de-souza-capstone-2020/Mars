import React, { Component } from "react";
import { StyleSheet, Text, View, Image, Button, AsyncStorage } from "react-native";
import { GiftedChat } from "react-native-gifted-chat";
import Moment from "moment";
import SleepDiary from "../sleepDiary";
import { generic_messages, sleep_diary_messages }  from "../data/messages";
import { sleep_diary_response } from "../data/customActions";
import SplashScreen from "../loading";

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
    messages: generic_messages,
    typingText: null,
    isModalVisible: false,
    diary: '',
    isLoading: true,
    appState: new Set() 
  };
  
  async componentDidMount() {
    
    await this.isSleepDiaryEntered();
    console.log('inside comp');
    console.log(this.state.appState)

    //determining message type
    const { appState } = this.state;
    if(appState.size > 0 ) {
      if (appState.has(1)) {
        this.setState({ messages: sleep_diary_messages });
      }
      this.setState({
        isLoading: false,
      });
    }
  }


  /** 
   * determines if there is a sleep diary entry for today
   * sets app state to 1 if there is no entry
   * sets app state to 2, 3, 4 if there is
   */
  isSleepDiaryEntered = async() => {
    // var date = Moment(date).format("MM-DD-YYYY")
    const appState = this.state.appState;
    const date = "02-12-2020"; //for testing
    try {
      AsyncStorage.getAllKeys().then((keys) => {
        console.log(keys);
        if (keys.indexOf(date) != -1) {
          console.log('found')
          appState.clear();
          appState.add(2);
          appState.add(3);
          appState.add(4);
          this.setState({appState});
          console.log(this.state.appState)
        } else {
          appState.clear();
          appState.add(1);
          this.setState({appState});
        }
      }); 
    } catch (e) {
      console.error(e);
    }

    return new Promise((resolve) =>
      setTimeout(
        () => { resolve('result') },
        2000
      )
    );
  }

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
    if (reply.value === "sleep_diary") {
      this.toggleModal();
      
      return ([
        {
          _id: getID(),
          text: "Awesome, saved!",
          createdAt: new Date(),
          quickReplies: {
            type: "radio", // or 'checkbox',
            keepIt: true,
            values: [
              {
                title: "View your Saved Data",
                value: "view_data"
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
    else {
      reply = sleep_diary_response(reply);
    }
    this.onSend(reply);
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
    const { messages, isModalVisible, isLoading } = this.state;
    if (isLoading) {
      return <SplashScreen />;
    }
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
        <SleepDiary toggleModal={this.toggleModal} isVisible={isModalVisible} />
      </View>
    );
  }
}
