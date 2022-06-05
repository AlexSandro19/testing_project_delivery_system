import { takeLatest, call, put } from "redux-saga/effects";
import { updateUserApi } from "../../services/user.service";
import { getLocalAuthToken } from "../../services/auth.service";
import { setUser } from "../actions/user";
import { LOGIN_SUCCESS } from "../constants/auth";
import {UPDATE_USER} from "../constants/user";
function* updateUserFlow (action){
    console.log(action.type);
    try{
            console.log("DASD");
            const user = action.payload;
            let token = yield call(getLocalAuthToken);
            console.log(token);
            const updatedUser = yield call(updateUserApi,token.userId,user.email,user.firstName,user.secondName,user.typeOfUser,user.password,user.passwordConfirm,user.cityId,user.zipcode,user.duns,user.phone,user.address,user.companyName)
            console.log(updatedUser);
            yield put(setUser(token.token, token.exp,updatedUser.response));
             yield put({
            type: LOGIN_SUCCESS,
            });
            yield put({
                type:"SUCCESS",
                message:{
                    text:"You have successfully updated your user profile",
                    severity:"success"
                }
            })
        }catch(error){
        console.log(error);
        yield put({
            type:"FAILURE",
            message:{
                text:error.message,
                severity:"error",
            },
            errors:error.errors
        })
    }
}
function* userWatcher(){

    yield takeLatest(UPDATE_USER,updateUserFlow)
}

export default userWatcher;