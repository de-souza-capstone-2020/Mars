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
  sleep_tip_2,
  module,
  sleep_diary_reminder_messages,
  sleep_diary_tip_2,
  sleep_diary_tip_1,
  sleep_diary_tip_eff,
  sleep_diary_tip_eff_err,
  sleep_diary_nap_good,
  sleep_tip_1,
  generic_tip_1,
  generic_tip_2,
} from "../data/messages";
import { getRandomAppState,getNextAppState,getRandomGenericTip} from "../utils/helper-utils";
import LottieLoader from "../loading";
import { 
    sleep_diary_response,
    conversation_flow_one,
    sleep_diary_tip_nap
} from "../data/customActions";
import SplashScreen from "../loading";
import {s, colors} from "./styles";

const user = {
  _id: 1,
  name: "Developer",
  // image: "../../assets/sleep_avatar.png",
  avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
};

const otherUser = {
  _id: 2,
  name: "React Native",
  avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
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
    sleepAttemptTime: null,
    wakeUpTime: null,
    leaveBedTime: null,
    getInBedTime: null,
    sleepTime: null,
    durationTotalWakeUp: null, 
    didNap: "",
    sleep_tip: new Object()
  };

  removeItemValue = async (key)=>{
    try {
        await AsyncStorage.removeItem(key);
        return true;
    }
    catch(exception) {
        return false;
    }
};
  async componentDidMount() {

    AsyncStorage.clear();
    await this.isSleepDiaryEntered();

    //determining message type
    const { appState } = this.state;
    console.log("componentdidmount appstate: ", appState)
    if (appState.size > 0) {
      if (appState.has(1)) {
        this.setState({ messages: new sleep_diary_messages() });
        appState.delete(1);
      } else if (appState.has(2)) {
        this.setState({ messages:  this.randGenericBeginTips()});
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
          appState.add(4);
          this.setState({ appState });
        } else {
          //sleep diary has not been entered already
          appState.clear();
          appState.add(1);
          appState.add(7);
          this.setState({ appState });
        }
      });
    } catch (e) {
      console.error(e);
    }

    return new Promise(resolve =>
      setTimeout(() => {
        resolve("result");
      }, 1000)
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
        //typingText: "Chat bot is typing...",
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


  getSleepData = async () => {
     const today = Moment(new Date()).format("MM-DD-YYYY")
     try {        
             await AsyncStorage.getItem(today).then(key => {
             if( key != null)
             {
              console.log("Sleep entry for today",JSON.parse(key));
              const sleepAttempt = JSON.parse(key).attemptToSleepTime;
              const wakeUp = JSON.parse(key).wakeUpTime;
              const sleep = JSON.parse(key).sleepTime;
              const getIntoBed = JSON.parse(key).getInBedTime;
              const leaveBed = JSON.parse(key).leaveBedTime;
              const durTotalWakeUp = JSON.parse(key).durationTotalWakeUp;
              const nap = JSON.parse(key).didNap;
              const attemptTime = new Date(sleepAttempt);
              const wakeTime = new Date(wakeUp);
              const sleepyTime = new Date(sleep);
              const getIntoBedTime = new Date(getIntoBed);
              const getOutBedTime = new Date(leaveBed);
              //const durTotalWakeUp = new Date(durationTotalWakeUp);

              this.setState({
                sleepAttemptTime: attemptTime,
                wakeUpTime: wakeTime,
                sleepTime: sleepyTime, 
                getInBedTime: getIntoBedTime,
                leaveBedTime: getOutBedTime,
                durationTotalWakeUp: durTotalWakeUp,
                didNap: nap});
             }
             else
             {
               console.log("Oooops no key")
             }
           });
         } catch (error) {
           console.log("Try error", error);
           //console.error(error);
        }
  };

  determineResponse = reply => {
    const { appState } = this.state;
    if (reply.value === "sleep_diary") {
      this.toggleModal();
      reply = this.getNextConversation();
    } else if (reply.value === "got_it") {
      reply = this.getNextConversation();
    } else if (reply.value.includes("_chp1")){
      reply = conversation_flow_one(reply);
    } else if (reply.value.includes("_nap")){
      reply = sleep_diary_tip_nap(reply);
    }else {
      reply = sleep_diary_response(reply);
    }
    this.onSend(reply);
  };

randGenericEndTips = () =>{
  const randNextTip = getRandomGenericTip();
  console.log("next rand end tip",randNextTip);
  switch(randNextTip){
    case 1:
      return new sleep_tip_1();
    case 2:
      return new generic_messages();
    case 3:
        return new sleep_tip_2();
    default:
    return new generic_tip();
  }
};

randGenericBeginTips = () =>{
  const randNextTip = getRandomGenericTip();
  console.log("next rand begin tip",randNextTip);
  switch(randNextTip){
    case 1:
      return new generic_tip();
    case 2:
      return new generic_tip_1();
    case 3:
        return new generic_tip_2();
    default:
    return new generic_tip();
  }
};


   getNextConversation =  () => {
    const { appState } = this.state;
    const randAppState = getRandomAppState(appState);
    const nextAppState = getNextAppState(appState);
    this.getSleepData();

    const sAT = this.state.sleepAttemptTime;
    const wUT = this.state.wakeUpTime;
    const sleepTime = this.state.sleepTime;
    const sleepDuration = (this.state.wakeUpTime - this.state.sleepTime) - this.state.durationTotalWakeUp;
    const sleepDurationMins = Math.floor((sleepDuration /1000)/60);

    const totalTimeInBed = (this.state.leaveBedTime - this.state.getInBedTime);
    const totalTimeInBedMins = Math.floor((totalTimeInBed /1000)/60);


    console.log("getnextconvo appState is:", appState);
    console.log("NextAppState is:", nextAppState);
    /* console.log("Sleep Time: ",sleepTime);
    console.log("Wake Time: ",wUT);
    console.log("Get in bed time: ",this.state.getInBedTime);
    console.log("Get out of bed time: ",this.state.leaveBedTime);
    console.log("Sleep Duration: ", sleepDurationMins);
    console.log("Total Time in Bed: ", totalTimeInBed);
    console.log("Total Time in Bed Mins: ", totalTimeInBedMins); */


    if (this.state.appState.has(3)) {
    this.getSleepData().then( data => {
      this.setState({sleep_tip: data});
      });
    }
    switch (nextAppState) {
      case 1:
        appState.delete(1);
        appState.add(2);
        this.setState(appState);
        return new sleep_diary_messages();
      case 2: //ending generic tip
        appState.delete(2);
        appState.add(4);
        this.setState(appState);
        return this.randGenericEndTips(); ////produce a list of genderic tips that are dispensed daily(7 tips)
      case 3:   //sleep hygiene tip    
      appState.delete(3);
      appState.add(5);
      this.setState(appState);
      const hours = Math.abs(sAT - sleepTime) / 36e5;
      if(this.state.sleepAttemptTime != null) {
      if(hours > 1){
        return new sleep_diary_tip_1();
        }
        else{
        return new sleep_diary_tip_2();
        } 
      }
      else{

        return new sleep_diary_reminder_messages();
      }
      case 4: 
        appState.delete(4);
        appState.add(3);
        this.setState(appState);
        const reply = {value: "start_chp_one"};
        return new conversation_flow_one(reply);

      case 5:  //sleep efficency
          appState.delete(5);
          appState.add(6);
          this.setState(appState);
          const sleepEfficiency = Math.floor((sleepDurationMins/totalTimeInBedMins)*100);

            if(sleepEfficiency > 0 && sleepEfficiency<=100) {
            return new sleep_diary_tip_eff(sleepEfficiency);
            } 
            else if(sleepEfficiency > 0 && sleepEfficiency>100){
              return new sleep_diary_tip_eff_err();
            } 
                  
        case 6:  //naps
          appState.delete(6);
          appState.add(2);
          this.setState(appState);
          const napreply = {value: "nap_flow"};
          if(this.state.didNap == "yes") {
          return new sleep_diary_tip_nap(napreply);
          }
          else if(this.state.didNap == "no"){
            return new sleep_diary_nap_good();
          }       
        case 7: //initial generic tips
            appState.delete(7);
            appState.add(4);
            this.setState(appState);
            return this.randGenericBeginTips(); ////produce a list of genderic tips that are dispensed daily(7 tips)
          
        default:
          //console.error("There is something wrong with the case statement");
          return new sleep_diary_reminder_messages();
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
      return <LottieLoader />;
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
          showAvatarForEveryMessage={true}
        />
        <SleepDiary toggleModal={this.toggleModal} isVisible={isModalVisible} />
      </View>
    );
  }
}
