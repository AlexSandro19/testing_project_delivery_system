import { take, call, put } from "redux-saga/effects";

import {
  LOGIN_REQUESTING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../constants/auth";

import { setUser } from "../actions/user";

import { USER_UNSET,SUCCESS,FAILURE } from "../constants/user";

import {
  loginApi,
  getLocalAuthToken,
  setAuthToken,
  removeAuthToken,
} from "../../services/auth.service";

const expirationTime = 60 * 60 * 1000;

function logout() {
  removeAuthToken();
}

function* loginFlow(credentials) {
  let payload;
  try {
    payload = yield call(loginApi, credentials.email, credentials.password);
    const exp = new Date().valueOf() + expirationTime;

    yield put(setUser(payload.token, payload.exp,payload.user));
    yield put({
      type: LOGIN_SUCCESS,
    });
    yield put ({
      type:SUCCESS,
      message:{
        text: "Successfully logged in!",
        severity: "success",
      }
    })

    setAuthToken({
      userId: payload.user.idcustomer,
      token: payload.token,
      exp: exp,
    });

    // history.push("/projects");
  } catch (error) {
    yield put({
      type: LOGIN_FAILURE,
      message: {
        text: error.message,
        severity: "error",
      },
      errors: error.errors,
    });
    yield put({
      type: FAILURE,
      message: {
        text: error.message,
        severity: "error",
      },
      errors: error.errors,
    });
  }
  return payload;
}

function* loginWatcher() {
  let token = yield call(getLocalAuthToken);
  while (true) {
    if (!token) {
      while (!token) {
        const { payload } = yield take(LOGIN_REQUESTING);
        yield call(loginFlow, payload);
        token = yield call(getLocalAuthToken);
      }
    } else if (token.exp < Date.now().valueOf()) {
      removeAuthToken();
      yield put({
        type: LOGIN_FAILURE,
        message: {
          text: "Session expired. Please login again",
          severity: "error",
        },
      });
      yield put({
        type:FAILURE,
        message:{
          text:"Session expired. Please login again",
          severity:"error"
        }
      })
      const { payload } = yield take(LOGIN_REQUESTING);
      yield call(loginFlow, payload);
    } else {
      const { payload } = yield take(LOGIN_REQUESTING);
      yield call(loginFlow, payload);
      yield put({
        type: LOGIN_SUCCESS,
      });
    }
    yield take(USER_UNSET);
    token = null;
    yield call(logout);
    yield put({
      type:SUCCESS,
      message:{
        text:"Logged out successfully",
        severity:"success"
      }
    });
  }
}

export default loginWatcher;
