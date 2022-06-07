import { REGISTER_USER, REGISTER_USER_FAILURE, REGISTER_USER_SUCCESS } from "../constants/user"
import { takeLatest, call, put } from "redux-saga/effects";
import { registerApi } from "../../services/auth.service";
import {SUCCESS,FAILURE} from "../constants/user";
function* register(action){
    try{
        console.log(action.payload);
        const {firstName,secondName,companyName,email,password,confirmPassword,address,phone,duns,locationOfUser}=action.payload;
        const {idzipcode,idcity} = locationOfUser.locationOfUser;
        console.log(idcity);
        console.log(idzipcode);
        const message= yield call(registerApi,1,firstName,secondName,companyName,email,password,confirmPassword,phone,duns,address,idcity,idzipcode);
        console.log(message);
        yield put({
            type:REGISTER_USER_SUCCESS,
            message:{
                text:"You have successfully registered",
                severity:"success"
            },
        })
        yield put({
            type:SUCCESS,
            message:{
                text:"You have successfully registered",
                severity:"success"
            }
        })
    }catch(e){
        yield put({
            type:REGISTER_USER_FAILURE,
            message:{
                text:e.message,
                severity:"error",
            }
        })
        yield put({
            type:FAILURE,
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