import { REGISTER_DELIVERY,REGISTER_DELIVERY_SUCCESS,REGISTER_DELIVERY_FAILURE} from "../constants/delivery"
import { takeLatest, call, put } from "redux-saga/effects";

function* register(action){
    try{
        const {packageId,priority,paymentId,international,stratLocation,endLocation,message,estimatedDate,startDate,endDate,uid}=action.payload.form;
        //const message= yield call(registerApi,email,password,firstName,lastName,companyName,phone,country,zipCode,city);
        const msg = "success"
        yield put({
            type:REGISTER_DELIVERY_SUCCESS,
            message:{
                text:msg,
                severity:"success"
            },
            
        })
    }catch(e){
        yield put({
            type:REGISTER_DELIVERY_FAILURE,
            message:{
                text:e.message,
                severity:"error",
            }
        })
    }

}

function* registrationWatcher(){

    yield takeLatest(REGISTER_DELIVERY,register)
}

export default registrationWatcher