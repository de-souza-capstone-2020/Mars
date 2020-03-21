const getID = () => Math.round(Math.random() * 1000000);

const otherUser = {
  _id: 2,
  name: "React Native",
  avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png",
};

const user= {
  _id: getID(),
  name: "React Native",
  avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
}

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
      otherUser,
      user
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
      otherUser,
      user
    }
  ]
}

const sleep_diary_reminder_messages = () => {
  
  return [
    {
      _id: getID(),
      text:
        "It is important to enter your complete sleep diary information everyday.This will allow us provide customized tips.",
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
      otherUser,
      user
    }
  ]
}

const generic_tip = () => {
  return [
    {
      _id: getID(),
      text:
        "Sleep tip: If you have a problem with napping too much. Write down alternative solutions on apiece of paper. Call someone who will keep you from napping and have them suggest alternatives when you’re really struggling not to nap. Write pros and cons to each strategy.",
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
      otherUser,
      user
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
      user,
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
      text: "Sleep diary tip: Lying in bed while awake reinforces the role of your bed as a stimulus for wakefulness.Spending less time in bed strengthens the role of your bed as the place to sleep." ,
      otherUser,
      user,
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
      text: "Sleep diary tip: Great job! You know now why spending excessive time in bed not sleeping is bad for your sleep pattern. Keep finding ways to reduce your time in bed!!",
      otherUser,
      user,
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

const sleep_diary_tip_eff = (sleepEff) => {
  return [
    {
      createdAt: new Date(),
      _id: getID(),
      text: "Your sleep efficency today is: " + sleepEff + "%",
      otherUser,
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "I see",
            value: "got_it"
          }
        ]
      },
    }
  ]
}

const sleep_diary_tip_eff_err= () => {
  return [
    {
      createdAt: new Date(),
      _id: getID(),
      text: "Error calculating sleep efficiency",
      otherUser,
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "I see",
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
      user,
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
export { generic_messages, sleep_diary_messages, generic_tip, sleep_diary_tip, module, sleep_diary_reminder_messages,sleep_diary_tip_2,sleep_diary_tip_1,sleep_diary_tip_eff,sleep_diary_tip_eff_err};