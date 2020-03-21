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
            title: "Of course",
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
        "When you get worried, keep a little journal to write down one worry at a time. You can return to old worries when you have alternate solutions\n. It’ll help detangle that mess of stress in your head and hopefully lead to an easier time falling asleep. ",
      createdAt: new Date(),
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "okay",
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
            title: "Maybe Later",
            value: "got_it"
          },
          {
            title: "I'll do it now",
            value: "sleep_diary"
          }
        ]
      },
      otherUser,
      user
    }
  ]
}

const sleep_diary_nap_good = () => {
  
  return [
    {
      _id: getID(),
      text:
        "Yayy no daytime naps 😴!! Keep journaling methods that work to avoid napping during the day!",
      createdAt: new Date(),
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "I will 😀",
            value: "got_it"
          }
        ]
      },
      otherUser,
      user
    }
  ]
}

const sleep_tip_1= () => {
  
  return [
    {
      _id: getID(),
      text:
        "Sleep tip: Stick to a sleep schedule of the same bedtime 🌙 and wake up time 🌞, even on the weekends. This helps to regulate your body's clock and could help you fall asleep and stay asleep for the night",
      createdAt: new Date(),
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "That makes sense",
            value: "hi"
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
      text:"Hey, remember to limit the amount of caffeine ☕️ you consume before bed",
      createdAt: new Date(),
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "Coffee is 🤢",
            value: "got_it"
          },
          {
            title: "But i like coffee 😔",
            value: "why_caffeine"
          },
        ]
      },
      otherUser,
      user
    }
  ]
}

const generic_tip_1 = () => {
  return [
    {
      _id: getID(),
      text:"Hey, do you have a relaxing bedtime ritual you practice?",
      createdAt: new Date(),
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "Yes,every night 👌",
            value: "got_it"
          },
          {
            title: "Nah, Should I 🤔?",
            value: "why_ritual"
          },
        ]
      },
      otherUser,
      user
    }
  ]
}

const generic_tip_2 = () => {
  return [
    {
      _id: getID(),
      text:" Hey do you know how your room affects your sleep?",
      createdAt: new Date(),
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "Yes,my room is zen 😌",
            value: "got_it"
          },
          {
            title: "Not really 🙃",
            value: "why_mattress"
          },
        ]
      },
      otherUser,
      user
    }
  ]
}

const sleep_tip_2 = () => {
  return [
    {
      createdAt: new Date(),
      _id: getID(),
      text: "Sleep Tip🥱: If you’ve been staying up late worrying. Do your worrying on paper 📓 and not in your head. Writing it down can be very helpful. Write down the worry and the possible solutions that come into mind.",
      otherUser,
      user,
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "Won't worry! will journal!",
            value: "hi"
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
            title: "I'll work on staying out of bed",
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
            title: "Yes! Progress💪",
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
      user,
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
export { generic_messages, sleep_diary_messages, generic_tip,sleep_diary_nap_good, sleep_tip_2,generic_tip_2, module, sleep_diary_reminder_messages,sleep_diary_tip_2,sleep_diary_tip_1,sleep_diary_tip_eff,sleep_diary_tip_eff_err,sleep_tip_1,generic_tip_1};