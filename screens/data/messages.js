const getID = () => Math.round(Math.random() * 1000000);

const otherUser = {
  _id: 2,
  name: "React Native",
  avatar: "https://facebook.github.io/react/img/logo_og.png"
};

const sleep_diary_messages = () => {
  return [
    {
      _id: 1,
      text:
        "Hello, please input your previous night's sleep record",
      createdAt: new Date(),
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "not right now",
            value: "not_right_now"
          },
          {
            title: "sure",
            value: "sleep_diary"
          }
        ]
      },
      otherUser
    }
  ]
} 

const generic_messages = () => {
  
  return [
    {
      _id: getID(),
      text:
        "This is a generic message",
      createdAt: new Date(),
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "Hi Sleep Well",
            value: "hi"
          }
        ]
      },
      otherUser
    }
  ]
}

const sleep_diary_reminder_messages = () => {
  
  return [
    {
      _id: getID(),
      text:
        "It is important to enter your sleep diary information everyday.This will allow us provide customized tips.",
      createdAt: new Date(),
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "That makes sense",
            value: "got_it"
          }
        ]
      },
      otherUser
    }
  ]
}

const generic_tip = () => {
  return [
    {
      _id: getID(),
      text:
        "This is a general tip (e.g. don't consume caffeinated beverages before bed)",
      createdAt: new Date(),
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "Got it",
            value: "got_it"
          },
          {
            title: "Why not?",
            value: "why_caffeine"
          },
        ]
      },
      otherUser
    }
  ]
}

const sleep_diary_tip = () => {
  return [
    {
      createdAt: new Date(),
      _id: getID(),
      text: "This is a sleep diary tip",
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
    }
  ]
}

const sleep_diary_tip_1 = () => {
  return [
    {
      createdAt: new Date(),
      _id: getID(),
      text: "Sleep diary tip: Hey , lying in bed while awake reinforces the role of your bed as a stimulus for wakefulness.Spending less time in bed strengthens the role of your bed as the place to sleep.",
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
    }
  ]
}

const sleep_diary_tip_2 = () => {
  return [
    {
      createdAt: new Date(),
      _id: getID(),
      text: "Sleep diary tip: You know now why spending excessive time in bed not sleeping is bad for your sleep pattern. Keep finding ways to reduce your time in bed!!",
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
    }
  ]
}

const module = () => {
  return [
    {
      createdAt: new Date(),
      _id: getID(),
      text: "Module 1: .......",
      otherUser,
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "...",
            value: "got_it"
          }
        ]
      },
    }
  ]
}
export { generic_messages, sleep_diary_messages, generic_tip, sleep_diary_tip, module, sleep_diary_reminder_messages,sleep_diary_tip_2,sleep_diary_tip_1};