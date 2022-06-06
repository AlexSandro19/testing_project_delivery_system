import { REGISTER_PAYMENT_FAILURE,REGISTER_PAYMENT_SUCCESS,REGISTER_PAYMENT} from "../constants/payment"
import { takeLatest, call, put } from "redux-saga/effects";

function* register(action){
    try{
        const {idpayment,typeofpayment,amount,payed,prepaid,transactionid,billingAddress}=action.payload.form;
        //const message= yield call(registerApi,email,password,firstName,lastName,companyName,phone,country,zipCode,city);
        const msg = "success"
        yield put({
            type:REGISTER_PAYMENT_SUCCESS,
            message:{
                text:msg,
                severity:"success"
            },
            
        })
    }catch(e){
        yield put({
            type:REGISTER_PAYMENT_FAILURE,
            message:{
                text:e.message,
                severity:"error",
            }
        })
    }

}

function* registrationWatcher(){

    yield takeLatest(REGISTER_PAYMENT,register)
}

export default registrationWatcher