import {
    REGISTER_PACKAGE,
    REGISTER_PACKAGE_SUCCESS,
    REGISTER_PACKAGE_FAILURE,
    DELETE_PACKAGE,
    DELETE_PACKAGE_FAILURE
  } from "../constants/package";
  const initialState = {
    requesting: false,
    successful: false,
    package:{},
    errors: [],
  };


  const reducer = (state = initialState, action) => {

    switch (action.type) {
      case REGISTER_PACKAGE:
        return {
          requesting: true,
          successful: false,
          package:{},
          errors: [],
        };
        case DELETE_PACKAGE:
        return {
          requesting: false,
          successful: true,
          package:{},
          errors: [],
        };
        case DELETE_PACKAGE_FAILURE:
        return {
          requesting: false,
          successful: false,
          package:{},
          errors: action.errors
        };
      case REGISTER_PACKAGE_SUCCESS:
        return {
          requesting: false,
          successful: true,
          package:action.payload,
          errors: [],
        };
      case REGISTER_PACKAGE_FAILURE:
      return {
          requesting: false,
          successful: false,
          package:{},
          errors: action.errors,
      }
      default:
        return state;
    }
  };
  
  export default reducer;
  