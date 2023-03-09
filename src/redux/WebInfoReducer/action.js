import * as types from "./actionType";

import { WebSettings } from "../../Firebase/Collection";
const getAboutData = (params) => async (dispatch) => {
  dispatch({ type: types.GET_ABOUT_R });
  // return await WebSettings.doc("about").get((res) => console.log("res", res));
  var goals = await WebSettings.doc("goal").get();
  var mission = await WebSettings.doc("mission").get();
  var vision = await WebSettings.doc("vision").get();

  return await WebSettings.doc("about")
    .get()
    .then((res) => {
      var data = {
        ...res.data(),
        goals: goals.data()?.value,
        mission: mission.data()?.value,
        vision: vision.data()?.value,
      };
      dispatch({ type: types.GET_ABOUT_S, payload: data });
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
        payload: { title: title?.title, members: allmembers?.reverse() },
      });
    })
    .then((err) => {
      dispatch({ type: types.GET_TEAM_F });
    });
};

export { getAboutData, getTeamData };
