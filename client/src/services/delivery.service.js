import axios from "axios";

const storageName = "userData";
const createDeliveryUrl = "/deliveries/addDelivery";
const getAllDeliveriesUrl = "/deliveries/getAllDeliveries";
export const createDeliveryApi =(packages_idpackages,priority,payment_idpayment,international,start_location,end_location,message,start_date,estimated_date,end_date)=>{
    return axios.post(createDeliveryUrl,{packages_idpackages,priority,payment_idpayment,international,start_location,end_location,message,start_date,estimated_date,end_date}).then((response)=>response.data).catch((error)=>{
      throw error.response.data;
    })
}

export const getAllDeliveriesApi = () =>{
  return axios.get(getAllDeliveriesUrl).then((response)=>response.data).catch((error)=>{
    throw error.response.data;
  })

}