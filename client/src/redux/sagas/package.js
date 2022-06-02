import { REGISTER_PACKAGE, REGISTER_PACKAGE_FAILURE, REGISTER_PACKAGE_SUCCESS } from "../constants/package"
import { takeLatest, call, put } from "redux-saga/effects";
import { registerApi } from "../../services/auth.service";

function* register(action){
    try{
        const {email,password,firstName,lastName,companyName,phone,country,zipCode,city}=action.payload.form;
        const message= yield call(registerApi,email,password,firstName,lastName,companyName,phone,country,zipCode,city);
        yield put({
            type:REGISTER_PACKAGE_SUCCESS,
            message:{
                text:message,
                severity:"success"
            },
            
        })
    }catch(e){
        yield put({
            type:REGISTER_PACKAGE_FAILURE,
            message:{
                text:e.message,
                severity:"error",
            }
        })
    }

}

function* registrationWatcher(){

    yield takeLatest(REGISTER_PACKAGE,register)
}

export default registrationWatcher