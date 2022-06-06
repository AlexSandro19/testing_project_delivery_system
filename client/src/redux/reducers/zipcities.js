import {
    ZIPCITIES_SET,ZIPCITIES_GET
  } from  "../constants/zipcities"
  const initialState = {
    zips_cities:[],
  };


  const reducer = (state = initialState, action) => {

    switch (action.type) {
      case ZIPCITIES_SET:
        return {
          zips_cities:action.payload,
        };
        case ZIPCITIES_GET:
            return {
                zips_cities:[]
            }
      default:
        return state;
    }
  };
  
  export default reducer;
  