import {
    USER_SET,
  } from "../constants/user";
  import {USER_UNSET} from "../constants/user"
  const initialState = {
    token:null,
    email:null,
    firstName:null,
    secondName:null,
    companyName:null,
    phone:null,
    typeOfUser:null,
    address:null,
    duns:null,
    zipcode:null,
    cityId:null,
    exp:null,
    isAuthenticated:false,
    
  };


  const reducer = (state = initialState, action) => {

    switch (action.type) {
      case USER_SET:
        
        return {
            email:action.payload.user.email,
            firstName:action.payload.user.firstname,
            secondName:action.payload.user.secondname,
            companyName:action.payload.user.companyname,
            address:action.payload.user.address,
            phone:action.payload.user.phone,
            duns:action.payload.user.duns,
            typeOfUser:action.payload.user.type_of_user,
            cityId:action.payload.user.zip_city_city_idcity,
            zipcode:action.payload.user.zip_city_zipcode_idzipcode,
            token:action.payload.token,
            exp:action.payload.exp,
            isAuthenticated:true,
        };
      case USER_UNSET:
        return {
          token:null,
          email:null,
          firstName:null,
          secondName:null,
          companyName:null,
          phone:null,
          typeOfUser:null,
          address:null,
          duns:null,
          zipcode:null,
          cityId:null,
          exp:null,
          isAuthenticated:false,
        };
      default:
        return state;
    }
  };
  
  export default reducer;
  