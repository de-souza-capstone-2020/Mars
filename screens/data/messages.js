import { solutionTips } from "./constants";

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
      text: "Hello, please input your previous night's sleep record",
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
  ];
};

const generic_messages = () => {
  return [
    {
      _id: getID(),
      text: "This is a generic message",
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
  ];
};

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
          }
        ]
      },
      otherUser
    }
  ];
};

const solutionOne = () => [
  {
    _id: getID(),
    text: solutionTips["solutionOne"],
    createdAt: new Date(),
    quickReplies: {
      type: "radio", // or 'checkbox',
      keepIt: true,
      values: [
        {
          title: "Got it",
          value: "got_it"
        }
      ]
    },
    otherUser
  }
];
const solutionTwo = () => [
  {
    _id: getID(),
    text: solutionTips["solutionTwo"],
    createdAt: new Date(),
    quickReplies: {
      type: "radio", // or 'checkbox',
      keepIt: true,
      values: [
        {
          title: "Got it",
          value: "got_it"
        }
      ]
    },
    otherUser
  }
];
const solutionThree = () => [
  {
    _id: getID(),
    text: solutionTips["solutionThree"],
    createdAt: new Date(),
    quickReplies: {
      type: "radio", // or 'checkbox',
      keepIt: true,
      values: [
        {
          title: "Got it",
          value: "got_it"
        }
      ]
    },
    otherUser
  }
];
const solutionFour = () => [
  {
    _id: getID(),
    text: solutionTips["solutionFour"],
    createdAt: new Date(),
    quickReplies: {
      type: "radio", // or 'checkbox',
      keepIt: true,
      values: [
        {
          title: "Got it",
          value: "got_it"
        }
      ]
    },
    otherUser
  }
];
const solutionFive = () => [
  {
    _id: getID(),
    text: solutionTips["solutionFive"],
    createdAt: new Date(),
    quickReplies: {
      type: "radio", // or 'checkbox',
      keepIt: true,
      values: [
        {
          title: "Got it",
          value: "got_it"
        }
      ]
    },
    otherUser
  }
];
const solutionSix = () => [
  {
    _id: getID(),
    text: solutionTips["solutionSix"],
    createdAt: new Date(),
    quickReplies: {
      type: "radio", // or 'checkbox',
      keepIt: true,
      values: [
        {
          title: "Got it",
          value: "got_it"
        }
      ]
    },
    otherUser
  }
];


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
      }
    }
  ];
};

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
      }
    }
  ];
};
export {
  generic_messages,
  sleep_diary_messages,
  generic_tip,
  sleep_diary_tip,
  module
};
