# Code Description
Below is an outline of our code and how we structured the application

- all navigation is in top level App.js
- each individual .js file is its own component e.g. loading.js is loading screen, intro.js is intro screen, sleepDiary.js is sleep diary screen


### File Breakdown
**chatbot.js** is where the chatbot screen lives

**history.js** is the view of past sleep diary entries

**intro.js** is the onboarding flow (application intro + sleep apnea detection)

**loading.js** is the app's loading screen (used for loading  **chatbot.js** and **history.js**)

**setting.js** is the setting page (currently empty)

**sleepDiary.js** is the sleep diary popup modal that is used by **chatbot.js**

**SleepDiaryEdit.js** is the sleep diary popup modal that is used by **history.js**

**styles.js** stores universal style components such as color and font

**welcome.js** is SleepWell's landing

### Conversation Breakdown
1. Sleep Diary entry (skip if already entered)
2. "generic" sleep tip (don't drink coffee)
3. module content (based off Sleeping Well Manual chapter)
4. discusses sleep efficiency
5. discuss napping habits
6. sleep diary tip (based off today's sleep diary entry)
7. final generic tip 

### chatbot.js Breakdown
The flow of the chatbot is not straight forward
- highly recommend going through [gifted-chat's readme](https://github.com/FaridSafi/react-native-gifted-chat) for general instructions on how to use the library

The conversation is based on application state (see [States](##States) for breakdown). Each conversation has a starting point stored in **static/messages.js**.

Since each conversation is moved forward by "quick replies", the chatbot then determines the replies in *determineResponse()* with pre-determined if-statement coded messages in *static/customActions.js*

### States
The application uses states to determine what message to show to the user


The app determines state initally once, in *componentDidMount(),* and thereafter in *getNextConversation()*

State 1: missing sleep diary for this day
Action: gives user message to enter sleep diary

State 2: user has not recieved a generic tip
action: give user a tip

State 3: user has not recieved a tailored sleep tip based on diary entry
action: calculate sleep efficiency and return a tip based on that

State 4: user has not received a module
action: give user module content

State 5: user has not receieved their sleep efficiency from their diary entry
action: calculate sleep efficiency to show user and starts conversation around sleep efficiency

State 6: user has not recieved a napping prompt
action: prompts user to not nap or encourages user for not napping

State 7: user has not recieved one last generic tip
action: gives a last generic tip before ending the conversation

