import {REGISTER_PAYMENT} from "../constants/payment";

export const registerPayment=(form)=>{

    return{
      type:REGISTER_PAYMENT,
      payload:{form}
    }
  }