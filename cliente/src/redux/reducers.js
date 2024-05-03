import { orderCountries } from "./actions";
import { PLACE_COUNTRIES,FILTER_COUNTRIES,ORDER_COUNTRIES } from "./types";

const initialState = {
allCountries: [],
filteredCountries: [],
}

const rootReducer = (state = initialState, {type,payload}) => {
    switch (type) {
    case PLACE_COUNTRIES:
    return {
    ...state,
    allCountries: payload,
    filteredCountries: [...payload] // Hago una copia del arreglo de países
  };
    case FILTER_COUNTRIES:
    const {continent, activity} = payload
    
    if(!continent && !activity)  
    return {...state, filteredCountries: state.allCountries};
  
    if(continent){ 
    const filterByContinent = state.allCountries.filter(country => 
      country.continent === continent
    );
  
    return {...state, filteredCountries: filterByContinent};  
    }
 
    if(activity){
    const filterByActivities = state.allCountries.filter(country => 
      country.Activities.some((act) => act.name === activity)
    );
    return {...state, filteredCountries: filterByActivities};
    }

    case ORDER_COUNTRIES:
      const { type, order } = payload;
      let sortedCountries = [...state.filteredCountries];
    
      if (type === 'population') {
        sortedCountries.sort((a, b) => a.population - b.population);
      } else if (type === 'name') {
        sortedCountries.sort((a, b) => a.name.localeCompare(b.name));
      }
      
      if (order === 'D') {
        sortedCountries.reverse();
      }
    
      return { ...state, filteredCountries: sortedCountries };

    default: 
    return state;
    }
  }

export default rootReducer;

