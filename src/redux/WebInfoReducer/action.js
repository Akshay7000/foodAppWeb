import * as types from "./actionType";

import { WebSettings } from "../../Firebase/Collection";
const getAboutData = (params) => async (dispatch) => {
  dispatch({ type: types.GET_ABOUT_R });
  // return await WebSettings.doc("about").get((res) => console.log("res", res));

  return await WebSettings.doc("about")
    .get()
    .then((res) => {
      console.log("getItem,", res.data());
      dispatch({ type: types.GET_ABOUT_S, payload: res.data() });
    })
    .then((err) => {
      dispatch({ type: types.GET_ABOUT_F });
    });
};

const getTeamData = (params) => async (dispatch) => {
  dispatch({ type: types.GET_TEAM_R });
  // return await WebSettings.doc("about").get((res) => console.log("res", res));
  var title = await (await WebSettings.doc("team").get()).data();
  return await WebSettings.doc("team")
    .collection("members")
    .get()
    .then((res) => {
      var allmembers = [];
      res?.docs?.map((member) => allmembers.push(member.data()));

      dispatch({
        type: types.GET_TEAM_S,
        payload: { title: title?.title, members: allmembers },
      });
    })
    .then((err) => {
      dispatch({ type: types.GET_TEAM_F });
    });
};

export { getAboutData, getTeamData };
