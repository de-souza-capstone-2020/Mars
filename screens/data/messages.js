
var sleep_diary_messages = [
  {
    _id: 1,
    text:
      "This is Sleepwell. Would you like to learn more about how i can help?",
    createdAt: new Date(),
    quickReplies: {
      type: "radio", // or 'checkbox',
      keepIt: true,
      values: [
        {
          title: "😋 Yes",
          value: "yes"
        },
        {
          title: "📷 Yes,show me with a picture!",
          value: "yes_picture"
        },
        {
          title: "😞 Nope. What?",
          value: "no"
        },
        {
          title: "sleep diary",
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

export default sleep_diary_messages;
