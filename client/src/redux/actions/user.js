import { USER_SET, USER_UNSET,REGISTER_USER,HIDE_MESSAGE,UPDATE_USER } from "../constants/user";

export const setUser = (token, exp,user) => {
  console.log(user);
  return {
    type: USER_SET,
    message: {
      text: "Successfully logged in!",
      severity: "success",
    },
    payload: { token, user, exp },
  };
};
export const updateUser = (token,exp,email,firstName,secondName,typeOfUser,password,passwordConfirm,cityId,zipcode,duns,phone,address,companyName) =>{
  console.log("updateUser");

  return {
    type: UPDATE_USER,
    token:token,
    exp:exp,
    payload:{email,firstName,secondName,typeOfUser,password,passwordConfirm,cityId,zipcode,duns,phone,address,companyName}
  }
}
export const unsetUser = () => {
  return {
    type: USER_UNSET,
  };
};

export const registerUser=(form)=>{

  return{
    type:REGISTER_USER,
    payload:form
  }
}

export const hideMessage = () => {
  return {
    type: HIDE_MESSAGE,
  };
};
