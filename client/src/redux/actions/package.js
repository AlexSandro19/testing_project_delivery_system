import {REGISTER_PACKAGE} from "../constants/package";

export const registerPackage=(form)=>{

    return{
      type:REGISTER_PACKAGE,
      payload:{form}
    }
  }