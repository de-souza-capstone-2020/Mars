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
    ]);
  }
  if (reply.value == "got_it") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "👍",
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

export const sleep_diary_tip_nap = reply => {
  if(reply.value === "nap_flow"){
  return ([
    {
      createdAt: new Date(),
      _id: getID(),
      text: "Hey, you seem to be struggling with avoiding naps. Remember that napping disrupts the sleep rhythm you are trying to develop with the procedure and destroys any of its benefits.",
      otherUser,
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "I'll work on napping less",
            value: "good_nap"
          },
          {
            title: "It's hard not to nap",
            value: "help_nap" 
          } 
        ]
      },
    }
  ]);
}

  if(reply.value === "help_nap"){
  return ([
    {
      createdAt: new Date(),
      _id: getID(),
      text: "Okay, so, one way to avoid napping is to engage in another activity incompatible with napping when the get to urge to sleep during the day",
      otherUser,
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "👍",
            value: "got_it"
          },
          {
            title: "It'll be hard but i'll try",
            value: "got_it" 
          }
        ]
      },
    }
  ]);
}

if(reply.value === "good_nap"){
  return ([
    {
      createdAt: new Date(),
      _id: getID(),
      text: "Some ways to nap less include engaging in other activities that are incompatible with napping when you feel the urge to nap.",
      otherUser,
      quickReplies: {
        type: "radio", // or 'checkbox',
        keepIt: true,
        values: [
          {
            title: "👍",
            value: "got_it"
          }
        ]
      },
    }
  ]);
}

};


export const conversation_flow_one = reply => {
    
    if(reply.value === "start_chp_one"){
        
        return ([
            {
              createdAt,
              _id: getID(),
              text: "Did you know that the best way to fix your trouble sleeping is to actually limit how much time you’re spending in bed? ",
              otherUser,
              quickReplies: {
                type: "radio", // or 'checkbox',
                keepIt: true,
                values: [
                  {
                    title: "I would like to know more",
                    value: "know_more_please_chp1"
                  },
                  {
                    title: "I already know this",
                    value: "no_chp1" //equalivent as "user would like to exit the state"
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

    if (reply.value === "know_more_please_chp1"){
        return ([
            {
              createdAt,
              _id: getID(),
              text: "It is important to know the difference between time spent sleeping and time spent in bed. Would you like to work on your sleep efficiency?",
              otherUser,
              quickReplies: {
                type: "radio", // or 'checkbox',
                keepIt: true,
                values: [
                  {
                    title: "No",
                    value: "no_chp1"
                  },
                  {
                    title: "Sure",
                    value: "work_on_sleep_efficiency_yes_chp1"
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

    if (reply.value === "work_on_sleep_efficiency_yes_chp1"){
        return ([
            {
              createdAt,
              _id: getID(),
              text: "Ironically laying in bed is actually the worst thing you can do for your insomnia. ",
              otherUser,
              quickReplies: {
                type: "radio", // or 'checkbox',
                keepIt: true,
                values: [
                  {
                    title: "No way, tell me more. ",
                    value: "don't_lay_in_bed_tips_chp1"
                  },
                  {
                    title: "I dont believe you",
                    value: "don't_lay_in_bed_tips_chp1"
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
    if (reply.value === "don't_lay_in_bed_tips_chp1"){
        return ([
            {
              createdAt,
              _id: getID(),
              text: "Laying in bed without successfully falling asleep strengthens the association of bed being a place to lay awake. To work on this we use a skill called Sleep Restriction. Sleep Restriction works to actually shorten how long you spend in bed. It leads to ‘concentrated’ sleep where you remain asleep the majority of the night.",
              otherUser,
              quickReplies: {
                type: "radio", // or 'checkbox',
                keepIt: true,
                values: [
                  {
                    title: "That's cool!",
                    value: "calculate_sleep_restriction_chp1"
                  },
                  {
                    title: "Okay how do I do it?",
                    value: "calculate_sleep_restriction_chp1"
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
    if (reply.value === "calculate_sleep_restriction_chp1"){
        return ([
            {
              createdAt,
              _id: getID(),
              text: "Ready for a little homework? Calculate your sleep efficiency and average nightly total sleep. This will help to see the real improvements of learning sleep restriction.",
              otherUser,
              quickReplies: {
                type: "radio", // or 'checkbox',
                keepIt: true,
                values: [
                  {
                    title: "Okay sounds good.",
                    value: "calc_sleep_restriction_2_chp1"
                  },
                  {
                    title: "I'm bored. Just tell me how to do it.",
                    value: "calc_sleep_restriction_2_chp1"
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
    if (reply.value === "calc_sleep_restriction_2_chp1"){
        return ([
            {
              createdAt,
              _id: getID(),
              text: "Alright. First you need to pick a a consistent time every morning to wake up during the week. Based on your current sleep ability use this amount of time and add 30 minutes. Count backwards to figure out your new bedtime. As you work on sleep restriction you wil gradually increase your sleep quantity. Is this something you think you are able to do?",
              otherUser,
              quickReplies: {
                type: "radio", // or 'checkbox',
                keepIt: true,
                values: [
                  {
                    title: "Absolutely",
                    value: "calc_sleep_restriction_3_chp1"
                  },
                  {
                    title: "No, I can't sleep no matter what.",
                    value: "calc_sleep_restriction_3_chp1"
                  },
                  {
                    title: "I could give it a try but I'd like to know more",
                    value: "calc_sleep_restriction_3_chp1"
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
    if (reply.value === "calc_sleep_restriction_3_chp1"){
        return ([
            {
              createdAt,
              _id: getID(),
              text: "To get your body used to your new bedtime you need to implement a 90 minutes buffer zone. If you have calculate your bedtime is midnight then at around 10:30pm you should engage in activities that will help relax your body and brain. Stay away from computers and backlit devices.",
              otherUser,
              quickReplies: {
                type: "radio", // or 'checkbox',
                keepIt: true,
                values: [
                  {
                    title: "But I love watching movies before bed, what can I do instead.",
                    value: "calc_sleep_restriction_4_screen_chp1"
                  },
                  {
                    title: "Does that mean no phone?",
                    value: "calc_sleep_restriction_4_screen_chp1"
                  },
                  {
                    title: "I can do it!",
                    value: "calc_sleep_restriction_4_screen_chp1"
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
    if (reply.value === "calc_sleep_restriction_4_screen_chp1"){
        return ([
            {
              createdAt,
              _id: getID(),
              text: "Some examples of good pre-sleep activities during this buffer zone are taking a warm bath, reading a fiction novel or practicing relaxation techniques. These will help you unwind and it can be most efficient if you set a routine that you stick to each night.",
              otherUser,
              quickReplies: {
                type: "radio", // or 'checkbox',
                keepIt: true,
                values: [
                  {
                    title: "Hm, a warm bath and book sounds nice!",
                    value: "calc_sleep_restriction_4_continue_chp1"
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
    if (reply.value === "calc_sleep_restriction_4_continue_chp1"){
        return ([
            {
              createdAt,
              _id: getID(),
              text: "Though you may be feeling very tired throughout the day it is important that you do not nap during the day. This only decreases sleep pressure that builds over the course of the day. As good as it may feel in the moment it will only worsen your insomnia and rob you of restorative slow-wave sleep.",
              otherUser,
              quickReplies: {
                type: "radio", // or 'checkbox',
                keepIt: true,
                values: [
                  {
                    title: "No more naps :( ",
                    value: "need_more_naps_chp1"
                  },
                  {
                    title: "No way, I need my nap. ",
                    value: "need_more_naps_chp1"
                  },
                  {
                    title: "No problem. I dont nap anyway!",
                    value: "no_chp1"
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
    if (reply.value === "need_more_naps_chp1"){
        return ([
            {
              createdAt,
              _id: getID(),
              text: "If you absolutely need a nap the best time of day to do it is in the morning. When you start feeling like you may need a nap it can be helpful to find alternative activities that get you out of your house.  This strategy uses the technique of stimulus control and keeps you from giving into the temptation of retreating to your bed or couch.",
              otherUser,
              quickReplies: {
                type: "radio", // or 'checkbox',
                keepIt: true,
                values: [
                  {
                    title: "I suppose getting out of the house is always good!",
                    value: "get_out_of_house_chp1"
                  },
                  {
                    title: "Ignore",
                    value: "no_chp1"
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
    if (reply.value === "get_out_of_house_chp1"){
        return ([
            {
              createdAt,
              _id: getID(),
              text: "The main things to remember are to only go to bed when you are sleepy. There is no reason to lay in bed if you are not tired. If you cannot fall asleep in a reasonable time get out of bed and go to another room. Engage in a quiet activity until you feel sleepy.  This will help to re-associate your bed with feeling sleepy rather than frustrated. Your bed should be reserved for sleep and sex.",
              otherUser,
              quickReplies: {
                type: "radio", // or 'checkbox',
                keepIt: true,
                values: [
                  {
                    title: "I can do it!",
                    value: "get_out_of_house2_chp1"
                  },
                  {
                    title: "Wait I want to know more!",
                    value: "get_out_of_house2_chp1"
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
    if (reply.value === "get_out_of_house2_chp1"){
        return ([
            {
              createdAt,
              _id: getID(),
              text: "If you’d like to learn more and read something to really make you fall asleep you can refer to the manual.",
              otherUser,
              quickReplies: {
                type: "radio", // or 'checkbox',
                keepIt: true,
                values: [
                  {
                    title: "Sounds good",
                    value: "good_night_chp1"
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
    if (reply.value === "good_night_chp1"){
        return ([
            {
              createdAt,
              _id: getID(),
              text: "Goodnight! Sleep right!",
              otherUser,
              quickReplies: {
                type: "radio", // or 'checkbox',
                keepIt: true,
                values: [
                ]
              },
              user: {
                _id: getID(),
                name: "React Native"
              }
            }
          ]);
    }
    if (reply.value === "no_chp1"){
      return ([
          {
            createdAt,
            _id: getID(),
            text: "Alright this chapter has ended.",
            otherUser,
            quickReplies: {
              type: "radio", // or 'checkbox',
              keepIt: true,
              values: [
                {
                  title: "Next",
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

}