import axios from "axios";

const storageName = "userData";
const createPaymentUrl = "/payments/addPayment";
export const createPaymentApi =(typeofpayment_idtypeofpayment,amount,payed,prepaid,billing_address)=>{
    return axios.post(createPaymentUrl,{typeofpayment_idtypeofpayment,amount,payed,prepaid,billing_address}).then((response)=>response.data).catch((error)=>{
      throw error.response.data;
    })
}