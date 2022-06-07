import {
    ZIPCITIES_SET,ZIPCITIES_GET
  } from  "../constants/zipcities";
import { takeLatest, call, put } from "redux-saga/effects";
import {getAllZipsAndCitiesApi} from "../../services/location.service";
function* getAllZipsAndCities(action){
    try{
        console.log("DSA");
        const response =yield call(getAllZipsAndCitiesApi);
        yield put({
            type:ZIPCITIES_SET,
            payload:response
            
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

    yield takeLatest(ZIPCITIES_GET,getAllZipsAndCities)
}

export default registrationWatcher