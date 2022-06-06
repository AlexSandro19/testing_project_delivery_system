import {REGISTER_PACKAGE,REGISTER_PACKAGE_SUCCESS,DELETE_PACKAGE} from "../constants/package";

export const registerPackage=(form)=>{
    return{
      type:REGISTER_PACKAGE,
      payload:form
    }
  }
  export const deletePackage=(idpackages)=>{

    return{
      type:DELETE_PACKAGE,
      payload:idpackages
    }
  }