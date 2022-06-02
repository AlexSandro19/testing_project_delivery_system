import {REGISTER_DELIVERY} from "../constants/delivery";

export const registerDelivery=(form)=>{

    return{
      type:REGISTER_DELIVERY,
      payload:{form}
    }
  }