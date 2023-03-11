import axios from "axios";
import { setToast } from "../../components/Other/CheckProperty";
import { Attendance, customers } from "../../Firebase/Collection";
import { auth } from "../../Firebase/config";
import { getLocalData, saveLocalData } from "../../utils/localStorage";
import * as types from "./actionType";

const register = (payload, toast) => (dispatch) => {
  dispatch({ type: types.REGISTER_R });

  return auth
    .createUserWithEmailAndPassword(payload.email, payload.password)
    .then(async (r) => {
      const user = r.user;
      setToast(toast, "Registered Successful", "success");
      console.log("response ->", user.email, user);
      const userObject = {
        email: payload.email,
        lastName: payload.lastName,
        firstName: payload.firstName,
        mobile: payload.mobile,
        uid: user.uid,
        userType: "user",
        isSubscribed: false,
        subscribedID: "",
      };
      await customers.doc(user.uid).set(userObject);
      dispatch({ type: types.REGISTER_S, payload: user });
      return user;
    })
    .catch((e) => {
      console.log("error", e);
      setToast(toast, "The email address is already in use", "error");
      dispatch({ type: types.REGISTER_F, payload: e });
      return e;
    });
};

const login = (payload, toast) => async (dispatch) => {
  saveLocalData("userInfo", payload.email);
  dispatch({ type: types.LOGIN_R });

  return customers
    .where("email", "==", payload.email)
    .get()
    .then((res) => {
      if (!res.empty) {
        return auth
          .signInWithEmailAndPassword(payload.email, payload.password)
          .then((r) => {
            setToast(toast, "Login Successful", "success");
            const user = r.user;
            console.log(user);
            return dispatch({
              type: types.LOGIN_S,
              payload: { email: user.email, uid: user.uid },
            });
          })
          .catch((e) => {
            setToast(toast, "Invalid user credentials.", "error");
            return dispatch({ type: types.LOGIN_F, payload: e });
          });
      } else {
        throw "User Not Found";
      }
    })
    .catch((err) => {
      console.log("error", err);
      setToast(toast, err, "error");
      dispatch({ type: types.LOGIN_F, payload: err });
      return err;
    });
};

const GET_Attendance = async (payload) => {
  const Months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  return await Attendance.doc(payload)
    .get()
    .then((res) => {
      try {
        var thisMonth = res?.data()[`${Months[new Date().getMonth()]}`];

        return thisMonth;
      } catch (error) {
        return [];
      }
    })
    .catch((e) => {
      console.log("🚀 ~ file: action.js:85 ~ Attendance ~ e:", e);
    });
};
const profile = (payload) => async (dispatch) => {
  dispatch({ type: types.PROFILE_R });
  return await customers
    .doc(payload.token.uid)
    .get()
    .then((r) => {
      dispatch({
        type: types.PROFILE_S,
        payload: r.data(),
      });
    })
    .catch((e) => dispatch({ type: types.PROFILE_F, payload: e }));
};
const profileUpdate = (payload) => async (dispatch) => {
  const token = getLocalData("token");

  dispatch({ type: types.UPDATE_PROFILE_R });
  return await customers
    .doc(token?.uid)
    .update(payload)
    .then((r) => {
      dispatch({
        type: types.UPDATE_PROFILE_S,
        payload: payload,
      });
    })
    .catch((e) => {
      dispatch({ type: types.UPDATE_PROFILE_F, payload: e });
    });
};

export { login, register, profile, profileUpdate, GET_Attendance };
