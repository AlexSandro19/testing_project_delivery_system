import { USER_SET, USER_UNSET,REGISTER_USER,HIDE_MESSAGE } from "../constants/user";

export const setUser = (token, userId, role, exp,username,name,email,phone,address,cart,emailConfirmed,orders) => {
  return {
    type: USER_SET,
    message: {
      text: "Successfully logged in!",
      severity: "success",
    },
    payload: { token, userId,username,name,email,phone,address,orders,cart,emailConfirmed, role, exp },
  };
};

export const unsetUser = () => {
  return {
    type: USER_UNSET,
  };
};

export const registerUser=(form)=>{

  return{
    type:REGISTER_USER,
    payload:{form}
  }
}

export const hideMessage = () => {
  return {
    type: HIDE_MESSAGE,
  };
};
