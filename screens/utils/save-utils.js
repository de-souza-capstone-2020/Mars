import { AsyncStorage, AppState } from "react-native";
import Moment from "moment";
import Map from 'lodash';

const formatDate = (element) => element instanceof Date ? element.getTime() : element;

export const storeSleepDiaryData = async res => {
  const formattedObj = Map(res, formatDate);
    
  const date = new Date();

    try {
      await AsyncStorage.setItem(
        Moment(date).format("MM-DD-YYYY"),
        JSON.stringify(formattedObj)
      );
    } catch (error) {
      console.error(error);
      console.log("Error occured, data could not be saved");
    }

  console.log("Saved");

};

export const retrieveSleepDiaryData = async (date) => {
    try {
      const value = await AsyncStorage.getItem(Moment(date).format("MM-DD-YYYY"));
      const JSONValue = JSON.parse(value);
      if (value !== null) {
          console.log(JSONValue); 
      }
    } catch (error) {
      console.error(error);
      console.log("There are errors");
    }
    
};

export const retrieveSleepCalculations = () => {


  
}


export const retrieveAsyncValues = async(date) =>{
  getData = async () => {
    try {
      await AsyncStorage.getAllKeys().then(async keys => {
        await AsyncStorage.multiGet(keys).then(key => {
          key.forEach(data => {
            console.log(data[1]); //values
          });
        });
      });
    } catch (error) {
      Alert.alert("Couldn't load data", error);
    }
  };

}
export const storeNickNameYearBirth = async res => {
      const nickName = JSON.stringify(res.nickName);
      const yearOfBirth = JSON.stringify(res.yearOfBirth);
      try {
        await AsyncStorage.setItem(
          "Nickname",
          nickName
        );
        await AsyncStorage.setItem(
          "YearOfBirth",
          yearOfBirth
        );
      } catch (error) {
        console.error(error);
        console.log("Error occured, data could not be saved");
      }
  
    console.log("Saved");
  };
  