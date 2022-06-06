import axios from "axios";

const currenciesUrl = '/general/getAllCurrencies';
const conversionUrl ='/general/getCurrency'
export const getAllCurrenciesApi=()=>{
    return axios.get(currenciesUrl).then((response)=>response.data).catch((error)=>{
        throw error.response.data;
      })
}

export const getConversionApi=(amount,baseCurrency,toConvertCurrency)=>{
    return axios.post(conversionUrl,{amount,baseCurrency,toConvertCurrency}).then((response)=>response.data).catch((error)=>{
        throw error.response.data;
      })
}