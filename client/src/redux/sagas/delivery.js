import { REGISTER_DELIVERY,REGISTER_DELIVERY_SUCCESS,REQUEST_DELIVERIES_SUCCESS,REGISTER_DELIVERY_FAILURE,REQUEST_DELIVERIES} from "../constants/delivery"
import { takeLatest, call, put } from "redux-saga/effects";
import {addLocationApi} from "../../services/location.service";
import {createPaymentApi} from "../../services/payment.service";
import {createDeliveryApi,getAllDeliveriesApi} from "../../services/delivery.service";
import {getAllPackagesApi} from "../../services/package.service";
import {getLocalAuthToken} from "../../services/auth.service";
import { USER_UNSET,SUCCESS,FAILURE } from "../constants/user";

function* registerDelivery(action){
    try{
        const {amount,priority,idpackages,international,message,startLocation,endLocation} =action.payload;
        console.log(action.payload)
        const getStartLocation= yield call(addLocationApi,1,startLocation.address,startLocation.locationOfUser.zipcode_idzipcode,startLocation.locationOfUser.city_idcity)
        console.log(getStartLocation);
        const getEndLocation= yield call(addLocationApi,1,endLocation.address,endLocation.locationOfReceiver.idzipcode,endLocation.locationOfReceiver.idcity)
        console.log(getEndLocation);
        const payment = yield call(createPaymentApi,2,amount,1,1,startLocation.address);
        console.log(payment);
        const start_date = new Date();
        const estimated_date = new Date(new Date().setDate(new Date().getDate()+3));
        console.log(start_date);
        console.log(estimated_date);
        const endLocationId = getEndLocation.createdLocation.idlocation;
        const startLocationId = getStartLocation.createdLocation.idlocation;
        console.log(payment.createdPayment.idpayment);
        console.log(priority);
        console.log(international);
        const response= yield call(createDeliveryApi,idpackages,priority,payment.createdPayment.idpayment,international,startLocationId,endLocationId,message,start_date,estimated_date,estimated_date);
        console.log(response);
        yield put({
            type:REGISTER_DELIVERY_SUCCESS,
            message:{
                text:"SUCCESSFULLY CREATE DELIVERY",
                severity:"success"
            },
            
        })
        yield put({
            type:SUCCESS,
            message:{
                text:"SUCCESSFULLY CREATED DELIVERY",
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
        });
        yield put({
            type:FAILURE,
            message:{
                text:e.message,
                severity:"error",
            },
            errors:e.errors
        })
    }

}
function* requestAllDeliveriesFlow(action){
    console.log(action.type)
    try{
        const {userId} = getLocalAuthToken()
        console.log(userId);
        const deliveries = yield call(getAllDeliveriesApi)
        const packages = yield call(getAllPackagesApi);
        console.log(packages.packages);
        console.log(deliveries.deliveries)
        const packagesForUser = packages.packages.filter((item)=> item.user_iduser === userId)
        console.log(packagesForUser);
        const allDeliveries = [] 
        deliveries.deliveries.map((item=>{
            console.log(item);
             packagesForUser.map((userPackage)=>{
                if(userPackage.idpackages === item.packages_idpackages){
                    allDeliveries.push( {deliveryInfo:item,packageInfo:userPackage});
                }
            })
        }))
        console.log(allDeliveries);
        yield put({
            type:REQUEST_DELIVERIES_SUCCESS,
            message:{
                text:"SUCCESSFULLY CREATE DELIVERY",
                severity:"success"
            },
            payload:allDeliveries
            
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

    yield takeLatest(REGISTER_DELIVERY,registerDelivery);
    yield takeLatest(REQUEST_DELIVERIES,requestAllDeliveriesFlow)
}

export default registrationWatcher