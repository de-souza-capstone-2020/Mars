const getID = () => Math.round(Math.random() * 1000000);

const user = {
  _id: getID(),
  name: "React Native",
  avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png",
};

const otherUser = {
  _id: 2,
  name: "React Native",
  avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png",
};

const sleep_diary_messages = () => {
  return [
    {
      _id: 1,
      text: "Hello, please input your previous night's sleep record",
      createdAt: new Date(),
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "Of course",
            value: "sleep_diary",
          },
          {
            title: "Not right now",
            value: "not_right_now",
          },
        ],
      },
      user,
    },
  ];
};

const module_end = () => {
  return [
    {
      _id: 1,
      text: "Great Job!! You have read all the module content for this chapter",
      createdAt: new Date(),
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "Nice",
            value: "got_it",
          },
        ],
      },
      user,
    },
  ];
};

const generic_messages = () => {
  return [
    {
      _id: getID(),
      text:
        "It’ll help detangle that mess of stress in your head and hopefully lead to an easier time falling asleep. ",
      createdAt: new Date(),
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "Okay",
            value: "hi",
          },
        ],
      },
      user,
    },
    {
      _id: getID(),
      text:
        "You can return to old worries when you have alternate solutions",
      createdAt: new Date(),
      user,
    },
    {
      _id: getID(),
      text:
        "When you get worried, keep a little journal to write down one worry at a time.",
      createdAt: new Date(),
      user,
    },
  ];
};

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
            value: "got_it",
          },
          {
            title: "I'll do it now",
            value: "sleep_diary",
          },
        ],
      },
      user,
    },
  ];
};

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
            value: "got_it",
          },
        ],
      },
      user,
    },
  ];
};

const sleep_tip_1 = () => {
  return [
    {
      _id: getID(),
      text:
        "This helps to regulate your body's clock and could help you fall asleep and stay asleep for the night",
      createdAt: new Date(),
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "That makes sense",
            value: "hi",
          },
        ],
      },
      user,
    },
    {
      _id: getID(),
      text:
        "Sleep tip: Stick to a sleep schedule of the same bedtime 🌙 and wake up time 🌞, even on the weekends.",
      createdAt: new Date(),
      user,
    },
  ];
};

const generic_tip = () => {
  return [
    {
      _id: getID(),
      text:
        "Hey, remember to limit the amount of caffeine ☕️ you consume before bed",
      createdAt: new Date(),
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "But i like coffee 😔",
            value: "why_caffeine",
          },
          {
            title: "I know that",
            value: "got_it",
          },
          {
            title: "Coffee is yuck 🤮",
            value: "got_it",
          },
        ],
      },
      user,
    },
  ];
};

const generic_tip_1 = () => {
  return [
    {
      _id: getID(),
      text: "Hey, do you have a relaxing bedtime ritual you practice?",
      createdAt: new Date(),
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "Yes, every night 👌",
            value: "got_it",
          },
          {
            title: "Nah, Should I 🤔?",
            value: "why_ritual",
          },
        ],
      },
      user,
    },
  ];
};

const generic_tip_2 = () => {
  return [
    {
      _id: getID(),
      text: "Hey do you know how your room affects your sleep?",
      createdAt: new Date(),
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "Yes, i do 😌",
            value: "got_it",
          },
          {
            title: "Not really",
            value: "why_mattress",
          },
        ],
      },
      user,
    },
  ];
};

const sleep_tip_2 = () => {
  return [
    {
      createdAt: new Date(),
      _id: getID(),
      text:
        "Sleep Tip: Plan activities that get you out of the house each and every day. Planning to meet a friend for a walk or go for lunch will hold you accountable for leaving the house. It will keep you busy during the day and lead to more positive feelings.",
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "Sounds good",
            value: "hi",
          },
        ],
      },
      user,
    },
  ];
};

const sleep_diary_tip_1 = () => {
  return [
    {
      createdAt: new Date(),
      _id: getID(),
      text:
        "You should be spending less time in bed as it strengthens the role of your bed as the place to sleep.",
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "I'll try to stay out of bed",
            value: "got_it",
          },
        ],
      },
      user,
    },
    {
      createdAt: new Date(),
      _id: getID(),
      text:
        "Sleep Diary Tip: \n You are lying in bed while awake.",
      
      user,
    },
  ];
};

const sleep_diary_tip_2 = () => {
  return [
    {
      createdAt: new Date(),
      _id: getID(),
      text:
        "You now know why spending excessive time in bed not sleeping is bad for your sleep pattern. Keep finding ways to reduce your time in bed",
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "Yes! Progress 💪",
            value: "got_it",
          },
        ],
      },
      user,
    },
    {
      createdAt: new Date(),
      _id: getID(),
      text:
        "Sleep Diary Tip: \nGreat job staying out of bed!",
      user,
    },
  ];
};

const sleep_diary_tip_eff = (sleepEff) => {
  return [
    {
      createdAt: new Date(),
      _id: getID(),
      text:
        "Based on your sleep diary, your sleep efficiency today is: " +
        sleepEff +
        "%",
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "🆗",
            value: "got_it",
          },
          {
            title: "What is that?",
            value: "explain_sleep_effs",
          },
        ],
      },
      user,
    },
  ];
};

const sleep_efficiency_explain = () => {
  return [
    {
      createdAt: new Date(),
      _id: getID(),
      text:
        "In order to achieve good sleep efficiency, it is recommended that extra time should not be spent in bed",
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "Got it",
            value: "got_it",
          },
        ],
      },
      user,
    },{
      createdAt: new Date(),
      _id: getID(),
      text:
        "Sleep efficiency is the ratio of the total time spent asleep (total sleep time) in a night compared to the total amount of time spent in bed.",
      user,
    },
  ];
};

const content_module_request = () => {
  return [
    {
      createdAt: new Date(),
      _id: getID(),
      text:
        "It's time for a lesson on sleep. Do you have 5-7 minutes to learn content to improve your sleep?",
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "Yes, I do",
            value: "yes_content",
          },
          {
            title: "Not right now",
            value: "got_it",
          },
        ],
      },
      user,
    },
  ];
};

const sleep_diary_tip_eff_err = () => {
  return [
    {
      createdAt: new Date(),
      _id: getID(),
      text: "Error calculating sleep efficiency",
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "I see",
            value: "got_it",
          },
        ],
      },
      user,
    },
  ];
};

const nap_tip_1 = () => {
  return [
    {
      createdAt: new Date(),
      _id: getID(),
      text:
        "The longer you nap, the more likely you are to feel groggy afterward.",
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "Will do",
            value: "got_it",
          },
        ],
      },
      user,
    },
    {
      createdAt: new Date(),
      _id: getID(),
      text:
        "Aim to nap for only 10 to 20 minutes.",
      user,
    },
  ];
};

const sleep_tip_3 = () => {
  return [
    {
      createdAt: new Date(),
      _id: getID(),
      text:
        "Don’t be afraid to ask for support and positive words of motivation.",
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "I'll try",
            value: "hi",
          },
        ],
      },
      user,
    },
    {
      createdAt: new Date(),
      _id: getID(),
      text:
        "Let the people around you know what you’re dealing with and how you plan to resolve it.",
      user,
    },
  ];
};

const sleep_tip_4 = () => {
  return [
    {
      createdAt: new Date(),
      _id: getID(),
      text:
        "Remind yourself that insomnia will go away! ",
      user,
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "I'll try",
            value: "hi",
          },
        ],
      },
      user,
    },
    {
      createdAt: new Date(),
      _id: getID(),
      text:
        "Use positive reaffirming self talk!",
      user,
    },
  ];
};

const sleep_tip_5 = () => {
  return [
    {
      createdAt: new Date(),
      _id: getID(),
      text:
        "Remind yourself of the people who love you and the support system that you may be grateful for.",
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "Yes, I've got this",
            value: "got_it",
          },
          {
            title: "I'll, try",
            value: "got_it",
          },
        ],
      },
      user,
    },
    {
      createdAt: new Date(),
      _id: getID(),
      text:
        "You have the skills to do this and work through the insomnia.",
      user,
    },
  ];
};
const sleep_tip_6 = () => {
  return [
    {
      createdAt: new Date(),
      _id: getID(),
      text:
        "A positive mood leads to less worrying and less time spent thinking in bed before finally falling asleep.",
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "I'll stay positive",
            value: "got_it",
          },
        ],
      },
      user,
    },
  ];
};

//currently usused 
const sleep_tip_7 = () => {
  return [
    {
      createdAt: new Date(),
      _id: getID(),
      text:
        "Keeping yourself busy will keep you away from unhealthy habits like daytime napping and you will be more tired when it’s finally time for bed",
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "I'll keep busy",
            value: "got_it",
          },
        ],
      },
      user,
    },
  ];
};

//currently unused
const module = () => {
  return [
    {
      createdAt: new Date(),
      _id: getID(),
      text: "Module 1: .......",
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "...",
            value: "got_it",
          },
        ],
      },
      user,
    },
  ];
};
export {
  nap_tip_1,
  sleep_efficiency_explain,
  content_module_request,
  generic_messages,
  sleep_diary_messages,
  generic_tip,
  sleep_diary_nap_good,
  sleep_tip_2,
  generic_tip_2,
  module,
  sleep_diary_reminder_messages,
  sleep_diary_tip_2,
  sleep_diary_tip_1,
  sleep_diary_tip_eff,
  sleep_diary_tip_eff_err,
  sleep_tip_1,
  sleep_tip_3,
  sleep_tip_4,
  sleep_tip_5,
  sleep_tip_6,
  sleep_tip_7,
  generic_tip_1,
  module_end,
};
