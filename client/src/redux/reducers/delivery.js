import {
    REGISTER_DELIVERY,
    REGISTER_PACKAGE_SUCCESS,
    REGISTER_PACKAGE_FAILURE,
    DELETE_PACKAGE,
    REQUEST_DELIVERIES,
    REQUEST_DELIVERIES_SUCCESS
  } from "../constants/delivery";
  const initialState = {
    requesting: false,
    successful: false,
    delivery:{},
    errors: [],
  };


  const reducer = (state = initialState, action) => {

    switch (action.type) {
      case REQUEST_DELIVERIES:
        return {
          requesting: true,
          successful: false,
          deliveries:[],
          errors: [],
        };
      case REQUEST_DELIVERIES_SUCCESS:
        return{
          requesting: false,
          successful: true,
          deliveries:action.payload,
          errors: []
        }
      default:
        return state;
    }
  };
  
  export default reducer;
  