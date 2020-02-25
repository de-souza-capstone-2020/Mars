import { retrieveSleepDiaryData } from '../utils/save-utils';

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
const createdAt = new Date();

export const sleep_diary_response = reply => {
  if (reply.value === "no") {
    return ([
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
    return ([
      {
        createdAt,
        _id: Math.round(Math.random() * 1000000),
        text: "byeeeee",
        otherUser
      }
    ]);
  }
  if (reply.value === "yes_picture") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "jokes i have no pics",
        otherUser
      }
    ]);
  }
  if (reply.value === "yes") {
    return ([
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
  if (reply.value === "view_data") {
      const date = new Date();
      retrieveSleepDiaryData(date);
  }
  if (reply.value == "hi") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "👋",
        otherUser
      }
    ]);
  }
  if (reply.value == "not_right_now") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "Ok, I will remind you later",
        otherUser
      }
    ]);
  }
  if (reply.value == "got_it") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "👍",
        otherUser
      }
    ]);
  }
  if (reply.value == "why_caffeine") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "Caffeine is a type of drug that promotes alertness. These drugs are called “stimulants.”\n" + 
        "Caffeine acts as an “adenosine receptor antagonist.” Adenosine is a substance in your body that promotes sleepiness." + 
        "Caffeine blocks the adenosine receptor to keep you from feeling sleepy.",
        otherUser,
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "got it",
              value: "got_it"
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