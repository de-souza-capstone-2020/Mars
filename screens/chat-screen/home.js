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
import QuickReplies from "react-native-gifted-chat/lib/QuickReplies";
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
  content_module_request,
  sleep_efficiency_explain,
  nap_tip_1,
  sleep_tip_3,
  module_end
} from "../data/messages";
import {
  getRandomAppState,
  getNextAppState,
  getRandomGenericTip,
  getNextModule
} from "../utils/helper-utils";
import LottieLoader from "../loading";
import { 
    sleep_diary_response,
    conversation_flow_one,
    sleep_diary_tip_nap,
    module_sleep_duration,
    module_sleep_imagery
} from "../data/customActions";
import SplashScreen from "../loading";
import { s, colors } from "./styles";

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

const date = Moment(date).format("MM-DD-YYYY");
// const date = "03-23-2020"; //for testing

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
    sleep_tip: new Object(),
    modState: new Set(),
  };

  removeItemValue = async key => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (exception) {
      return false;
    }
  };
  async componentDidMount() {
    //AsyncStorage.clear();
    // AsyncStorage.removeItem(date);
    await this.isSleepDiaryEntered();
 
    //determining message type
    const { appState } = this.state;
    const { modState } = this.state;
    modState.add(0); 
    this.setState({ modState });
    console.log("componentdidmount appstate: ", appState);
    if (appState.size > 0) {
      if (appState.has(1)) {
        this.setState({ messages: new sleep_diary_messages() });
        appState.delete(1); 
      } else if (appState.has(2)) {
        //if sleepdiary has been entered and you return to the app you get a random generic tip to begin
        this.setState({ messages: this.randGenericBeginTips() });
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
    const today = Moment(new Date()).format("MM-DD-YYYY");
    try {
      await AsyncStorage.getItem(today).then(key => {
        if (key != null) {
          console.log("Sleep entry for today", JSON.parse(key));
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
            didNap: nap
          });
        } else {
          console.log("Oooops no key");
        }
      });
    } catch (error) {
      console.log("Try error", error);
      //console.error(error);
    }
  };

  determineResponse = reply => {
    const { modState } = this.state;
    console.log("ModState is:", modState);
    console.log("Reply is:", reply);
    if (reply.value === "sleep_diary") {
     this.toggleModal();
      reply = this.getNextConversation();
    } else if (reply.value === "next_chp_one"){
      var val1 = {value: "start_chp_one"};
      reply = new conversation_flow_one(val1);
    } else if (reply.value==="next_chap_imagery"){
      var val = {value: "start_chp_img"};
      reply = new module_sleep_imagery(val); 
    } else if (reply.value==="next_chap_dur"){
      var val2 = {value: "sleep_dur"};
      reply = new module_sleep_duration(val2);
    }else if (reply.value === "end_module" ) {
      reply = new module_end();
    }else if (reply.value === "got_it") {
      reply = this.getNextConversation();
    } else if (reply.value.includes("_chp1")) {
      reply = conversation_flow_one(reply);
    } else if (reply.value.includes("_nap")) {
      reply = sleep_diary_tip_nap(reply);
    }else if (reply.value.includes("_dur")){
      reply = module_sleep_duration(reply);
    }else if (reply.value === "yes_content"){ //user wants module content
      modState.delete(0);
      modState.add(1); //set module to 1 
      reply = this.randModules(); 
    }else if (reply.value==="explain_sleep_effs"){
      reply = new sleep_efficiency_explain(); 
    }else if (reply.value.includes("_img")){
        reply = new sleep_efficiency_explain(); 
    }else {
      reply = sleep_diary_response(reply);
    } 
    this.onSend(reply);
  };

randGenericEndTips = () =>{
  const randNextTip = getRandomGenericTip();
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

randModules = () =>{
  const randNextMod = getRandomGenericTip();
  const { modState } = this.state;
  const nextModState = getNextAppState(modState);
  //const nextModule = getNextModule(mod);
  console.log("next module state", nextModState)
  switch(nextModState){
    case 1:
      modState.delete(1);
      modState.add(2);
      var reply = {value: "start_chp_one"};
     return new conversation_flow_one(reply);
    case 2:
      /* var reply = {value: "sleep_dur"};
       return new module_sleep_duration(reply);  */
      modState.delete(2);
      modState.add(3);
      var reply = {value: "sleep_dur"};
      return new module_sleep_duration(reply);
    case 3:
      modState.delete(3);
      var reply = {value: "start_chp_img"};
      return new module_sleep_imagery(reply); //this will be the last module, currently the same as case 1
     default:
    return new sleep_tip_3();
  }
};

  getNextConversation = () => {
    const { appState } = this.state;
    const nextAppState = getNextAppState(appState);
    this.getSleepData();
    const sAT = this.state.sleepAttemptTime;
    const wUT = this.state.wakeUpTime;
    const sleepTime = this.state.sleepTime;
    const sleepDuration = (this.state.wakeUpTime - this.state.sleepTime) - this.state.durationTotalWakeUp;
    const sleepDurationMins = Math.floor((sleepDuration /1000)/60);
    const totalTimeInBed = (this.state.leaveBedTime - this.state.getInBedTime);
    const totalTimeInBedMins = Math.floor((totalTimeInBed /1000)/60);

    console.log("AppState is:", appState);
    /* console.log("Sleep Time: ",sleepTime);
    console.log("Wake Time: ",wUT);
    console.log("Get in bed time: ",this.state.getInBedTime);
    console.log("Get out of bed time: ",this.state.leaveBedTime);
    console.log("Sleep Duration: ", sleepDurationMins);
    console.log("Total Time in Bed: ", totalTimeInBed);
    console.log("Total Time in Bed Mins: ", totalTimeInBedMins); */
    if (this.state.appState.has(3)) {
      this.getSleepData().then(data => {
        this.setState({ sleep_tip: data });
      });
    }
    switch (nextAppState) {
      case 1:
        //returns message that asks user to enter sleep diary, this is not in use atm, happens after case 6
        appState.delete(1);
        appState.add(2);
        this.setState(appState);
        return new sleep_diary_messages();
      case 2:
        //returns a random generic tip that terminates the convo with a 'bye' , it is the last message returned
        appState.delete(2);
        appState.add(4);
        this.setState(appState);
        return this.randGenericEndTips();
      case 3:
        //returns a sleep hygiene tip based on sleep diary calculation or sleep diary reminder message if state has not been set
        //happens after conversation flow 1 is completed
        appState.delete(3);
        appState.add(6);
        this.setState(appState);
        const hours = Math.abs(sAT - sleepTime) / 36e5;
        if (this.state.sleepAttemptTime != null) {
          if (hours > 1) {
            return new sleep_diary_tip_1();
          } else {
            return new sleep_diary_tip_2();
          }
        } else {
          return new sleep_diary_reminder_messages();
        }
      case 4: //returns converastion flow one, happens after initial generic tip is given
        appState.delete(4);
        appState.add(5);
        this.setState(appState);
        return new content_module_request();

      case 5:  //returns sleep efficency to the user based on sleep diary, happens after case 3
          appState.delete(5);
          appState.add(3);
          this.setState(appState);
          const sleepEfficiency = Math.floor((sleepDurationMins/totalTimeInBedMins)*100);
            if(sleepEfficiency > 0 && sleepEfficiency<=100) {
              const effreply = {value: "sleep_eff"};
            return new sleep_diary_tip_eff(sleepEfficiency);
            } 
            else if(sleepEfficiency > 0 && sleepEfficiency>100){
              return new sleep_diary_tip_eff_err();
            } 

        case 6:  //returns nap tips, happens after case 5
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
          else{
            return new nap_tip_1();
          }      
        case 7: 
        //returns a random generic tip after at the begining if sleep diary has not been entered(line 134 )
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

  renderBubble = props => {
    return (
      <Bubble
        {...props}
        renderQuickReplies={props => this.renderQuickReply(props)}
        textStyle={{
          right: s.chatFont,
          left: s.chatFont
        }}
        wrapperStyle={{
          left: {
            borderWidth: 0.5,
            borderRadius: 20,
            borderBottomLeftRadius: 0,
            borderColor: colors.lightGrey,
            minWidth: 50,
            margin: 4,
            paddingLeft: 3,
            paddingRight: 3,
            paddingTop: 6,
            paddingBottom: 3
            // elevation: 5,
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
    );
  };

  renderQuickReply = props => {
    return (
      <QuickReplies
        {...props}
        color="white"
        quickReplyStyle={{
          backgroundColor: colors.accent,
          marginTop: 5,
          borderWidth: 0
        }}
      />
    );
  };
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
