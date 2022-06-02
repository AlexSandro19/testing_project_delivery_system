import { REGISTER_USER, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS } from "../constants/user"
import { takeLatest, call, put } from "redux-saga/effects";
import { registerApi } from "../../services/auth.service";

function* register(action){
    try{
        const {email,password,firstName,lastName,companyName,phone,country,zipCode,city}=action.payload.form;
        const message= yield call(registerApi,email,password,firstName,lastName,companyName,phone,country,zipCode,city);
        yield put({
            type:REGISTER_USER_SUCCESS,
            message:{
                text:message,
                severity:"success"
            },
            
        })
    }catch(e){
        yield put({
            type:REGISTER_USER_FAILURE,
            message:{
                text:e.message,
                severity:"error",
            }
        })
    }

}

function* registrationWatcher(){

    yield takeLatest(REGISTER_USER,register)
}

export default registrationWatcher