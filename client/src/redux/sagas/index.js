import { all } from "redux-saga/effects";
import LoginSaga from "./auth";
import UserSaga from "./user";
import PackageSaga from "./package";
import ZipsCitiesSaga from "./zipcode_city";
import DeliverySaga from "./delivery";
import CurrencySaga from "./currency";
export default function* rootSaga() {
  yield all([LoginSaga(),UserSaga(),PackageSaga(),ZipsCitiesSaga(),DeliverySaga(),CurrencySaga()]);
}
