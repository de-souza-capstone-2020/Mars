import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  AsyncStorage
} from "react-native";
import { GiftedChat, Bubble } from "react-native-gifted-chat";
import QuickReplies from 'react-native-gifted-chat/lib/QuickReplies'
import Moment from "moment";
import SleepDiary from "../sleepDiary";
import {
  generic_messages,
  sleep_diary_messages,
  generic_tip,
  sleep_diary_tip,
  module
} from "../data/messages";
import { getRandomAppState } from "../utils/helper-utils";
import { 
    sleep_diary_response,
    conversation_flow_one
} from "../data/customActions";
import SplashScreen from "../loading";
import {s, colors} from "./styles";

const user = {
  _id: 1,
  name: "Developer"
};

const otherUser = {
  _id: 2,
  name: "React Native",
  avatar: "https://facebook.github.io/react/img/logo_og.png"
};

const date = Moment(date).format("MM-DD-YYYY")
// const date = "02-18-2020"; //for testing

const getID = () => Math.round(Math.random() * 1000000);

export default class Home extends Component {
  state = {
    messages: generic_messages,
    typingText: null,
    isModalVisible: false,
    diary: "",
    isLoading: true,
    appState: new Set(),
  };

  async componentDidMount() {
    await this.isSleepDiaryEntered();

    //determining message type
    const { appState } = this.state;
    if (appState.size > 0) {
      if (appState.has(1)) {
        this.setState({ messages: new sleep_diary_messages() });
        appState.delete(1);
      } else if (appState.has(2)) {
        this.setState({ messages: new generic_tip() });
        appState.delete(2);
      }
      this.setState({
        isLoading: false
      });
    }
  }

  /**
   * determines if there is a sleep diary entry for today
   * sets app state to 1 if there is no entry
   * sets app state to 2, 3, 4 if there is
   * 
   * state 1: missing sleep diary
   * state 2: to send general tip
   * state 3: to send sleep diary tip
   * state 4: to send module content
   */

  isSleepDiaryEntered = async () => {
    const appState = this.state.appState;
    try {
      AsyncStorage.getAllKeys().then(keys => {
        if (keys.indexOf(date) != -1) {
          //sleep diary is found for the day
          appState.clear();
          appState.add(2);
          appState.add(3);
          appState.add(4);
          this.setState({ appState });
        } else {
          //sleep diary has not been entered already
          appState.clear();
          appState.add(1);
          appState.add(2);
          this.setState({ appState });
        }
      });
    } catch (e) {
      console.error(e);
    }

    return new Promise(resolve =>
      setTimeout(() => {
        resolve("result");
      }, 2000)
    );
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
      reply = this.getNextConversation();
    } else if (reply.value === "got_it") {
      reply = this.getNextConversation();
    } else if (reply.value.includes("_chp1")){
      reply = conversation_flow_one(reply);
    } else {
      reply = sleep_diary_response(reply);
    }
    this.onSend(reply);
  };

  getNextConversation = () => {
    const { appState } = this.state;
    const randAppState = getRandomAppState(appState);

    
    switch (randAppState) {
      case 1:
        appState.delete(1);
        appState.add(2);
        appState.add(3);
        appState.add(4);
        this.setState(appState);
        return new sleep_diary_messages();
      case 2:
        appState.add(3);
        appState.add(4);
        this.setState(appState);
        return new generic_tip();
      case 3:
        appState.delete(3);
        appState.add(2);
        appState.add(4);
        this.setState(appState);
        return new sleep_diary_tip();
      case 4:
        appState.add(2);
        appState.add(3);
        this.setState(appState);
        const reply = {value: "start_chp_one"};
        return new conversation_flow_one(reply);
      default:
        console.error("There is something wrong with the case statement");
        return new generic_messages();
      
    }

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

  renderBubble = (props) =>{
    return (
      <Bubble
        {...props}
        renderQuickReplies = {(props) => this.renderQuickReply(props)}
        textStyle={{
          right: s.chatFont,
          left: s.chatFont
        }}
        wrapperStyle={{
          left: {
            // borderWidth: 1,
            borderRadius: 30,
            borderBottomLeftRadius: 0, 
            color: 'black',
            minWidth: 50,
            margin: 4,
            paddingLeft: 3,
            paddingTop: 6,
            paddingBottom: 3,
            elevation: 5,
            // shadowOffset: { width: 15, height: 5 },
            // shadowColor: "grey",
            // shadowRadius: 10,
          },
          right: {
            borderRadius: 20,
            paddingRight: 2,
            paddingLeft: 2,
            paddingTop: 6,
            paddingBottom: 3,
            minWidth: 30,
            backgroundColor: colors.accent
          }
        }}
      />
    )
  }

  renderQuickReply = (props) =>{
    return (
      <QuickReplies
        {...props}
        color='white'
        quickReplyStyle={{
          backgroundColor: colors.accent,
          marginTop: 10,
          borderWidth: 0,
        }}
        
      />
    )
  }
  render() {
    const { messages, isModalVisible, isLoading } = this.state;
    if (isLoading) {
      return <SplashScreen />;
    }
    return (
      <View style={s.background}>
        <GiftedChat
          messages={messages}
          onSend={this.onSend}
          user={{ _id: 1 }}
          onQuickReply={this.onQuickReply}
          renderInputToolbar={props => this.renderInputToolbar(props)}
          renderChatFooter={this.renderFooter}
          renderBubble={this.renderBubble}
        />
        <SleepDiary toggleModal={this.toggleModal} isVisible={isModalVisible} />
      </View>
    );
  }
}
