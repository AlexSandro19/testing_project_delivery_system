import axios from "axios";

const getAllZipsUrl = "/general/getAllZipsAndCities";
const addLocationUrl = "/locations/addLocation";
export const getAllZipsAndCitiesApi =()=>{
    return axios.get(getAllZipsUrl).then((response)=>response.data).catch((error)=>{
      throw error.response.data;
    })
}
export const addLocationApi= (typeOfLocationId,address,zipCode,cityId)=>{
    return axios.post(addLocationUrl,{typeOfLocationId,address,zipCode,cityId}).then((response)=>response.data).catch((error)=>{
      throw error.response.data;
    })
}