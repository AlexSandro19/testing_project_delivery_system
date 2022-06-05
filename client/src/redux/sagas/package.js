import { REGISTER_PACKAGE, REGISTER_PACKAGE_FAILURE, REGISTER_PACKAGE_SUCCESS,DELETE_PACKAGE_FAILURE,DELETE_PACKAGE } from "../constants/package"
import { takeLatest, call, put } from "redux-saga/effects";
import { createPackageApi,deletePackageApi  } from "../../services/package.service";
import { getLocalAuthToken } from "../../services/auth.service";

function* createPackage(action){
    try{
        const form =action.payload;
        let token = yield call(getLocalAuthToken);
        console.log(token);
        const message= yield call(createPackageApi,token.userId,form);
        console.log(message);
        yield put({
            type:REGISTER_PACKAGE_SUCCESS,
            message:{
                text:"Packet registered successfully",
                severity:"success"
            },
            payload:message
            
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
function* deletePackageFlow(action){
    try{
        const idpackages= action.payload;
        const allOrders = yield call(deletePackageApi,idpackages);
        yield put({
          type:"SUCCESS",
          message:{
              text:"You have successfully deleted the package",
              severity:"success"
          }
      })
    }catch(error){
        yield put({
            type:DELETE_PACKAGE_FAILURE,
            message:{
                text:error.message,
                severity:"error",
            }
        })
    }
    }


function* registrationWatcher(){

    yield takeLatest(REGISTER_PACKAGE,createPackage);
    yield takeLatest(DELETE_PACKAGE,deletePackageFlow)
}

export default registrationWatcher