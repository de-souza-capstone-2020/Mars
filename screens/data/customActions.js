import { retrieveSleepDiaryData } from "../utils/save-utils";

const user = {
  _id: 1,
  name: "Developer",
  avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
};

const otherUser = {
  _id: 2,
  name: "React Native",
  avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
};

const getID = () => Math.round(Math.random() * 1000000);
const createdAt = new Date();

export const sleep_diary_response = reply => {
  if (reply.value === "no") {
    return [
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
            }
          ]
        },
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }
  if (reply.value === "seeu") {
    return [
      {
        createdAt,
        _id: Math.round(Math.random() * 1000000),
        text: "byeeeee",
        otherUser
      }
    ];
  }
  if (reply.value === "yes_picture") {
    return [
      {
        createdAt,
        _id: getID(),
        text: "jokes i have no pics",
        otherUser
      }
    ];
  }
  if (reply.value === "yes") {
    return [
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
              title: "Nope. Was up all night 😞",
              value: "no"
            }
          ]
        },
        user: {
          _id: getID(),
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }
  if (reply.value === "sleep_diary") {
    this.toggleModal();

    return [
      {
        _id: getID(),
        text: "Awesome, sleep diary has been saved!",
        createdAt: new Date(),
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "👌",
              value: "got_it"
            }
          ]
        },
        user: {
          _id: getID(),
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }

  if (reply.value === "view_data") {
    const date = new Date();
    retrieveSleepDiaryData(date);
  }
  if (reply.value == "hi") {
    return [
      {
        createdAt,
        _id: getID(),
        text: "👋",
        otherUser
      }
    ];
  }
  if (reply.value == "not_right_now") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "It's important to enter your sleep diary information everyday, you can always edit it in the history tab",
        otherUser,
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "Okay, I'll try",
              value: "sleep_diary"
            }
          ]
        }
      }
    ];
  }
  if (reply.value == "got_it") {
    return [
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
        }
      }
    ];
  }
  if (reply.value == "why_caffeine") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "I know coffee is yummy, but...fun fact 💡 \n" +
          "Adenosine is a substance in your body that promotes sleepiness.\n" +
          "Caffeine in coffee is a stimulant that blocks the adenosine receptor to keep you from feeling sleepy",
        otherUser,
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "Okay, no coffee before bed",
              value: "got_it"
            }
          ]
        },
        user: {
          _id: getID(),
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }

  if (reply.value == "why_ritual") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "A relaxing, routine activity right before bedtime ,done away from bright lights, helps separate your sleep time from activities that can cause excitement, stress or anxiety which can make it more difficult to fall asleep, get sound and deep sleep or remain asleep",
        otherUser,
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "I'll make a ritual",
              value: "got_it"
            }
          ]
        },
        user: {
          _id: getID(),
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }

  if (reply.value == "why_mattress") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "Okay, first make sure your mattress and pillow is comfortable and supportive. (The one you have been using for years may have exceeded its life expectancy – about 9 or 10 years for most good quality mattresses)",
        otherUser,
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "What else?",
              value: "more_bed"
            },
            {
              title: "Got it",
              value: "got_it"
            }
          ]
        },
        user: {
          _id: getID(),
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }

  if (reply.value == "more_bed") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "Make the room attractive and inviting for sleep but also free of allergens that might affect you and objects that might cause you to slip or fall if you have to get up during the night.",
        otherUser,
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "I'll work on that",
              value: "got_it"
            }
          ]
        },
        user: {
          _id: getID(),
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }
};

export const sleep_diary_tip_nap = reply => {
  if (reply.value === "nap_flow") {
    return [
      {
        createdAt: new Date(),
        _id: getID(),
        text:
          "Hey, you seem to be struggling with avoiding naps. Remember that napping disrupts the sleep rhythm you are trying to develop with the procedure, and destroys any of its benefits.",
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
        }
      }
    ];
  }

  if (reply.value === "help_nap") {
    return [
      {
        createdAt: new Date(),
        _id: getID(),
        text:
          "Okay, If you have a problem with napping too much. Write down alternative solutions on apiece of paper. Call someone who will keep you from napping and have them suggest alternatives when you’re really struggling not to nap. Write pros and cons to each strategy.",
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
        }
      }
    ];
  }

  if (reply.value === "good_nap") {
    return [
      {
        createdAt: new Date(),
        _id: getID(),
        text:
          "Some ways to nap less include engaging in other activities that are incompatible with napping when you feel the urge to nap.",
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
        }
      }
    ];
  }
};

export const conversation_flow_one = reply => {
  if (reply.value === "start_chp_one") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "Did you know that the best way to fix your trouble sleeping is to actually limit how much time you’re spending in bed? ",
        otherUser,
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "🧐 Explain..",
              value: "know_more_please_chp1"
            },
            {
              title: "I know this!",
              value: "next_chap_dur" //equalivent as "user would like to exit the state"
            }
          ]
        },
        user: {
          _id: getID(),
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }

  if (reply.value === "know_more_please_chp1") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "It is important to know the difference between time spent sleeping and time spent in bed. \n\nWould you like to work on your sleep efficiency?",
        otherUser,
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "👎",
              value: "no_chp1"
            },
            {
              title: "👍",
              value: "work_on_sleep_efficiency_yes_chp1"
            }
          ]
        },
        user: {
          _id: getID(),
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }

  if (reply.value === "work_on_sleep_efficiency_yes_chp1") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "Ironically laying in bed is actually the worst thing you can do for your insomnia. ",
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
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }
  if (reply.value === "don't_lay_in_bed_tips_chp1") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "Laying in bed without successfully falling asleep strengthens the association of bed being a place to lay awake. To work on this we use a skill called Sleep Restriction. Sleep Restriction works to actually shorten how long you spend in bed. It leads to ‘concentrated’ sleep where you remain asleep the majority of the night.",
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
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }
  if (reply.value === "calculate_sleep_restriction_chp1") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "Ready for a little homework? Calculate your sleep efficiency and average nightly total sleep. This will help to see the real improvements of learning sleep restriction.",
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
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }
  if (reply.value === "calc_sleep_restriction_2_chp1") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "Alright. First you need to pick a a consistent time every morning to wake up during the week. Based on your current sleep ability use this amount of time and add 30 minutes. Count backwards to figure out your new bedtime. As you work on sleep restriction you wil gradually increase your sleep quantity. Is this something you think you are able to do?",
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
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }
  if (reply.value === "calc_sleep_restriction_3_chp1") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "To get your body used to your new bedtime you need to implement a 90 minutes buffer zone. If you have calculate your bedtime is midnight then at around 10:30pm you should engage in activities that will help relax your body and brain. Stay away from computers and backlit devices.",
        otherUser,
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title:
                "But I love watching movies before bed, what can I do instead.",
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
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }
  if (reply.value === "calc_sleep_restriction_4_screen_chp1") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "Some examples of good pre-sleep activities during this buffer zone are taking a warm bath, reading a fiction novel or practicing relaxation techniques. These will help you unwind and it can be most efficient if you set a routine that you stick to each night.",
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
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }
  if (reply.value === "calc_sleep_restriction_4_continue_chp1") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "Though you may be feeling very tired throughout the day it is important that you do not nap during the day. This only decreases sleep pressure that builds over the course of the day. As good as it may feel in the moment it will only worsen your insomnia and rob you of restorative slow-wave sleep.",
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
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }
  if (reply.value === "need_more_naps_chp1") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "If you absolutely need a nap the best time of day to do it is in the morning. When you start feeling like you may need a nap it can be helpful to find alternative activities that get you out of your house.  This strategy uses the technique of stimulus control and keeps you from giving into the temptation of retreating to your bed or couch.",
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
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }
  if (reply.value === "get_out_of_house_chp1") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "The main things to remember are to only go to bed when you are sleepy. There is no reason to lay in bed if you are not tired. If you cannot fall asleep in a reasonable time get out of bed and go to another room. Engage in a quiet activity until you feel sleepy.  This will help to re-associate your bed with feeling sleepy rather than frustrated. Your bed should be reserved for sleep and sex.",
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
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }
  if (reply.value === "get_out_of_house2_chp1") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "If you’d like to learn more and read something to really make you fall asleep you can refer to the manual.",
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
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }
  if (reply.value === "good_night_chp1") {
    return [
      {
        createdAt,
        _id: getID(),
        text: "Goodnight! Sleep right!",
        otherUser,
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: []
        },
        user: {
          _id: getID(),
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }
  if (reply.value === "no_chp1") {
    return [
      {
        createdAt,
        _id: getID(),
        text: " On to the next",
        otherUser,
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "😎 What else should i know?",
              value: "got_it"
            }
          ]
        },
        user: {
          _id: getID(),
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }

}
export const module_sleep_duration = reply => {
  if (reply.value === "sleep_dur") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "Did you know that not all healthy adults actually need 7 or 8 hours of sleep?",
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "What do you mean?",
              value: "why_dur_a"
            },
            {
              title: "Yes i know that",
              value: "next_chap_imagery"
            },
            {
              title: "Yes we do!",
              value: "no_believe_dur"
            }
          ]
        },
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ]);
  }

  if (reply.value === "no_believe_dur") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "In reality, everyone is different! We typically need between 6-10 hours but this is different for each individual.",
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "Tell me more",
              value: "why_dur_b"
            },
          ]
        },
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ]);
  }

  if (reply.value === "why_dur_a") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "Each adult differs in the amount of sleep they require to function adequately! \n\nIf you’ve ever woken up and felt like you’ve overslept with only 8 hour of sleep, it might be because your body really only needs 6 hours!",
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "Woah that’s pretty interesting.",
              value: "stages_of_sleep_dur"
            },
            {
              title: "What works best for me?",
              value: "stages_of_sleep_dur"
            },
          ]
        },
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ]);
  }

  if (reply.value === "why_dur_b") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "The idea of oversleeping is actually different for each person too! Someone who only needs 6 hours to function may feel as though they’ve overslept after getting the “recommended” 8 hours.",
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "Woah that’s pretty interesting.",
              value: "stages_of_sleep_dur"
            },
            {
              title: "What works best for me?",
              value: "stages_of_sleep_dur"
            }
          ]
        },
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ]);
  }
  if (reply.value === "stages_of_sleep_dur") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "Sleep is a restorative process, when you're getting the correct amount. It can be very beneficial to know exactly what’s going on in your brain when you sleep. \n\nWould you like to learn about the stages of sleep so you can work through your insomnia?",
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "Yes Please! I want to sleep!",
              value: "stages_of_insomnia_dur"
            },
            {
              title: "No, I'll continue tomorrow",
              value: "got_it"
              //value: "no_tomorrow_dur"
            }
          ]
        },
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ]);
  }

  if (reply.value === "stages_of_insomnia_dur") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "Alright, there are 5 different stages of sleep. 4 non REM or Rapid Eye Movement stages and one REM stage.",
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "More details please",
              value: "stage_1_dur"
            },
            {
              title: "I know about REM sleep",
              value: "got_it"
            }
          ]
        },
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ]);
  }

  if (reply.value === "stage_1_dur") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "Stage 1 is the lightest form of sleep. This is usually when you can still be awaken pretty easily. This stage usually comprises only 5-10% since its essentially just that feeling of how we fall asleep.",
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "That makes sense",
              value: "twitches_dur"
            },
            {
              title: "Explain further",
              value: "twitches_dur"
            }
          ]
        },
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ]);
  }

  if (reply.value === "twitches_dur") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "Have you ever been near someone who is falling asleep and their body does these sudden twitches?",
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "Yes! What is that?",
              value: "hypnic_jerk_dur"
            },
            {
              title: "No.. What is that?",
              value: "hypnic_jerk_dur"
            }
          ]
        },
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ]);
  }
  if (reply.value === "hypnic_jerk_dur") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "These are called Hypnic jerks. Sometimes these jerks can even wake us up out of that light first stage of sleep.\n\nIf they don’t we go on into stage 2 where we spend a lot of our time. There are low and high amplitude brain waves occurring. We can think of it as the connection between light and deep sleep.",
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "Haven't fallen asleep yet",
              value: "deep_sleep_dur"
            },
          ]
        },
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ]);
  }
  if (reply.value === "deep_sleep_dur") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "The next stages are what we consider our deep sleep or slow wave sleep. There isn’t much brain activity and we tend to breath very slowly.\n\nHave you ever tried to wake someone up and had to really poke or shake them, maybe dump some water on them?",
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "Absolutely",
              value: "wake_up_dur"
            },
            {
              title: "Never!",
              value: "wake_up_dur"
            }
          ]
        },
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ]);
  }
  if (reply.value === "wake_up_dur") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "It’s much harder to wake someone up during these stages. In fact stage 3 and 4 are where you tend to see those who sleep walk or talk perform these actions.",
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "What's the next stage?",
              value: "last_stage_dur"
            },
            {
              title: "Important take away?",
              value: "important_dur"
            }
          ]
        },
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ]);
  }
  if (reply.value === "important_dur") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "The important part of these stages is that they are quite critical to repair and restoration of our body functions.",
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "What's the next stage?",
              value: "last_stage_dur"
            }
          ]
        },
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ]);
  }
  if (reply.value === "last_stage_dur") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "The final stage is REM sleep. Our brains are most active during this time. It is often associated with dreaming. \n\nSo when you wake up remembering that dream about a cupcake chasing you through the mall this is the stage typically responsible.",
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "What else is it responsible for?",
              value: "ask_to_stop_dur"
            }
          ]
        },
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ]);
  }
  if (reply.value === "ask_to_stop_dur") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "I have given you a lot of information to process..there's more on REM sleep to learn, would you like to go on to part 2? ",
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "I can keep going",
              value: "part_2_dur"
            },
            {
              title: "I'm sleepy already",
              value: "got_it"
            }
          ]
        },
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ]);
  }
  if (reply.value === "end_rem_1_dur") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "Okay, that's the end of the first part of the lesson on REM sleep.\nYou can learn more on it later.",
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "Sounds good",
              value: "got_it"
            }
          ]
        },
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ]);
  }
  
  if (reply.value === "part_2_dur") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "REM sleep is where we tend to consolidate all of our memories and experiences. We move things from short term to long term memory. This one is important for remembering stuff!",
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "That's pretty neat",
              value: "paralyzed_dur"
            }
          ]
        },
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ]);
  }
  if (reply.value === "paralyzed_dur") {
    return ([
      {
        createdAt,
        _id: getID(),
        text: "During REM sleep out body becomes paralyzed so we are unable to act out our crazy dreams! We wouldn’t want you running through your house and be able to hurt yourself.",
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "How long do we spend in each stage",
              value: "got_it"
            }
          ]
        },
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ]);
  }
}

export const module_sleep_imagery = reply => {
  if (reply.value === "start_chp_img") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "Using Imagery can be very beneficial to reduce stressful thoughts coursing through your brain while you’re laying in bed. \n\nRelaxing your brain is the first step to relax your body and get to sleep. ",
        otherUser,
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "Let's learn about imagery!",
              value: "know_more_please_img"
            },
            {
              title: "I already know this",
              value: "end_module" //equalivent as "user would like to exit the state"
            }
          ]
        },
        user: {
          _id: getID(),
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }
  if (reply.value === "know_more_please_img") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "First step is to clear a physical space in order to prepare your mental space. No music or sounds, just you and your mind.",
        otherUser,
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "It's all cleared",
              value: "all_cleared_img"
            }
          ]
        },
        user: {
          _id: getID(),
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }

  if (reply.value === "all_cleared_img") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "Let’s try a practice imagery scene. \n\n Imagine a black circle on a white background. Picture the circle as perfectly round and completely black. Focus on the contrast of black on the white background ",
        otherUser,
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "what's next?",
              value: "imagine_oval_img"
            }
          ]
        },
        user: {
          _id: getID(),
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }

  if (reply.value === "imagine_oval_img") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "Now imagine the circle is an oval. \n\nPicture the oval as being taller than it is wide. \n\nNow change the colour of the oval from black to blue. \n\nChange the shape and colour several more times before finishing with this image.\n\nOnce you feel like you are really in this scene move on.",
        otherUser,
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "Okay I'm in and ready for the next.",
              value: "stream_img"
            }
          ]
        },
        user: {
          _id: getID(),
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }

  if (reply.value === "stream_img") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "Imagine you are standing next to a running stream. It is springtime and the ice has just melted through to the water. \n\nThe water is deep and swift. It looks cool and refreshing. You can see to the rocks at the bottom of the stream.",
        otherUser,
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "i can see that",
              value: "stream_negative_img"
            }
          ]
        },
        user: {
          _id: getID(),
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }
  if (reply.value === "stream_negative_img") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "Now imagine any negative thoughts you have as objects floating down the stream. \n\nThey float by you and away from you quickly down the stream until they are out of your sight completely. \n\nIf a distracting thought surfaces again, let the water take it again. \n\nKeep doing this for any negative thoughts that enter your mind.",
        otherUser,
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "Alright got it",
              value: "positive_img"
            }
          ]
        },
        user: {
          _id: getID(),
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }

  if (reply.value === "positive_img") {
    return [
      {
        createdAt,
        _id: getID(),
        text:
          "Take a deep breath. Relax your body.  Think of a pleasant image or somewhere you feel safe and calm. Say out loud to yourself positive reinforcers. “ I feel calm”, “ I will sleep well tonight” “ I am putting away my problems for now”. \n\n This is the end of this lesson",
        otherUser,
        quickReplies: {
          type: "radio", // or 'checkbox',
          keepIt: true,
          values: [
            {
              title: "Thank you",
              value: "got it"
            }
          ]
        },
        user: {
          _id: getID(),
          name: "React Native",
          avatar: "https://i.gyazo.com/a9ea9603d80527d5e94de3ac55fb9260.png"
        }
      }
    ];
  }

}
