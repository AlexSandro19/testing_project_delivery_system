import {REGISTER_DELIVERY,REQUEST_DELIVERIES} from "../constants/delivery";

export const registerDelivery=(form)=>{
    return{
      type:REGISTER_DELIVERY,
      payload:form
    }
  }
  export const requestDeliveries=()=>{
    return{
      type:REQUEST_DELIVERIES,
    }
  }