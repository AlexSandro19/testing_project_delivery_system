import {REGISTER_DELIVERY} from "../constants/delivery";

export const registerDelivery=(form)=>{
    console.log("TEST");
    return{
      type:REGISTER_DELIVERY,
      payload:form
    }
  }