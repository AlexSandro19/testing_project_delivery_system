import {
    CURRENCIES_GET,CONVERT
  } from  "../constants/currency"
export const getCurrencies = ()=>{
    return {
        type:CURRENCIES_GET
    }
}
export const convertCurrency = (amount,toConvertCurrency)=>{
    return {
        type:CONVERT,
        payload:{amount,toConvertCurrency}
    }
}