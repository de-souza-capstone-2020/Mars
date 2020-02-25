
const sleep_diary_messages = [
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
    user: {
      _id: 2,
      name: "React Native"
    }
  }
]

const generic_messages = [
  {
    _id: 1,
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
    user: {
      _id: 2,
      name: "React Native"
    }
  }
]

const generic_tip = [
  {
    _id: 1,
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
    user: {
      _id: 2,
      name: "React Native"
    }
  }
]
export { generic_messages, sleep_diary_messages, generic_tip };