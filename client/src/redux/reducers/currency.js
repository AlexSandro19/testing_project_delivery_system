import {
    CURRENCIES_GET,CURRENCIES_SET,CONVERTED,RESET
  } from  "../constants/currency"
  const initialState = {
    currency:[],
    newAmount:0
  };


  const reducer = (state = initialState, action) => {

    switch (action.type) {
      case CURRENCIES_SET:
        return {
          currency:action.payload,
          newAmount:0
        };
        case CURRENCIES_GET:
            return {
              currency:[],
              newAmount:0
        } 
        case CONVERTED:
          return{
            ...state,
            newAmount:action.payload
          }
        case RESET:
          return{
            ...state,
            newAmount:0,
          }
      default:
        return state;
    }
  };
  
  export default reducer;
  