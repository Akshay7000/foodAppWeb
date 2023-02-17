import * as types from "./actionType";
import axios from "axios";
import { Featured, subscribeProducts } from "../../Firebase/Collection";

const getMensData = (params) => (dispatch) => {
  dispatch({ type: types.GET_FEATURED_DATA_R });

  return axios
    .get(`${process.env.REACT_APP_BASE_API}/allproducts?gender=MEN`, params)
    .then((res) => {
      dispatch({ type: types.GET_FEATURED_DATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_FEATURED_DATA_F });
    });
};

const getFeaturedProducts = (params) => async (dispatch) => {
  dispatch({ type: types.GET_FEATURED_DATA_R });
  return await Featured.get()
    .then((res) => {
      var allproducts = [];
      res.docs?.map((products) => {
        allproducts.push({
          ...products.data(),
          id: products.id,
          weight:
            products.data().weight >= 1000
              ? products.data().weight / 1000
              : products.data().weight,
          unit: products.data().weight >= 1000 ? "Kg" : "gm",
        });
      });
      // console.log("getFeaturedProducts,", allproducts);
      dispatch({ type: types.GET_FEATURED_DATA_S, payload: allproducts });
    })
    .then((err) => {
      dispatch({ type: types.GET_FEATURED_DATA_F });
    });
};
const getWomensData = (params) => (dispatch) => {
  dispatch({ type: types.GET_FEATURED_DATA_R });

  return axios
    .get(`${process.env.REACT_APP_BASE_API}/allproducts?gender=WOMEN`, params)
    .then((res) => {
      dispatch({ type: types.GET_WOMENS_DATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_FEATURED_DATA_F });
    });
};

const getSubscribepProducts = () => (dispatch) => {
  dispatch({ type: types.GET_SUBSCRIBED_R });

  return subscribeProducts
    .get()
    .then((res) => {
      dispatch({
        type: types.GET_SUBSCRIBED_S,
        payload: res.docs.map((i) => i.data()),
      });
    })
    .catch((err) => {
      console.log(":err ", err);
      dispatch({ type: types.GET_SUBSCRIBED_F, payload: [] });
    });
};

export {
  getWomensData,
  getMensData,
  getSubscribepProducts,
  getFeaturedProducts,
};
