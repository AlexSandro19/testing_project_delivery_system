import {
    CURRENCIES_GET,CURRENCIES_SET,CONVERT,CONVERTED
  } from  "../constants/currency";
import { takeLatest, call, put } from "redux-saga/effects";
import {getAllCurrenciesApi,getConversionApi,} from "../../services/currency.service";
function* getAllCurrencies(action){
    try{
        const response =yield call(getAllCurrenciesApi);
        console.log(response);
        yield put({
            type:CURRENCIES_SET,
            payload:response.request            
        })
    }catch(e){
        yield put({
            type:"FAILURE",
            message:{
                text:e.message,
                severity:"error",
            }
        })
    }

}
function* getConversion(action){
    try{
        const {amount,toConvertCurrency} = action.payload;
        const currencies =yield call(getAllCurrenciesApi);
        console.log(amount);
        console.log(toConvertCurrency);
        const response =yield call(getConversionApi,amount,'eur',toConvertCurrency);
        console.log(response);
        yield put({
            type:CONVERTED,
            payload:response.newAmount         
        })
    }catch(e){
        yield put({
            type:"FAILURE",
            message:{
                text:e.message,
                severity:"error",
            }
        })
    }

}
function* registrationWatcher(){
    yield takeLatest(CONVERT,getConversion)
    yield takeLatest(CURRENCIES_GET,getAllCurrencies);

}

export default registrationWatcher