import { PLACE_COUNTRIES,FILTER_COUNTRIES,ORDER_COUNTRIES } from "./types";
import axios from "axios";

 export const placeCountries = () => async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3001/countries');
      return dispatch({
        type: PLACE_COUNTRIES,
        payload: response.data,
      });
    } catch (error) {
      console.error(error.message);
    }
  };
  export const filterCountries = (filter) => (dispatch) => {
    return dispatch({
      type: FILTER_COUNTRIES,
      payload: filter
    });
  };
  export const orderCountries = (order) => (dispatch) => {
    return dispatch({
      type: ORDER_COUNTRIES,
      payload: order
    });
  };