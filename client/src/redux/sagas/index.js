import { all } from "redux-saga/effects";
import LoginSaga from "./auth";
import UserSaga from "./user";
import PackageSaga from "./package";
export default function* rootSaga() {
  yield all([LoginSaga(),UserSaga(),PackageSaga()]);
}
