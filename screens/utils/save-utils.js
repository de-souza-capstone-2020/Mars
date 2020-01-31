import { AsyncStorage } from "react-native";
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
          console.log(value);
      }
    } catch (error) {
      console.error(error);
      console.log("There are errors");
    }
};
