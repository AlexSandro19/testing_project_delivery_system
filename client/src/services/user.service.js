import axios from "axios";

const storageName = "userData";
const updateUserUrl = "/users/updateUser";
export const updateUserApi =(idCustomer,email,firstName,secondName,typeOfUser,password,passwordConfirm,city,zipcode,duns,phone,address,companyName)=>{
    return axios.post(updateUserUrl,{idCustomer,email,firstName,secondName,typeOfUser,password,passwordConfirm,city,zipcode,duns,phone,address,companyName}).then((response)=>response.data).catch((error)=>{
      throw error.response.data;
    })
  }