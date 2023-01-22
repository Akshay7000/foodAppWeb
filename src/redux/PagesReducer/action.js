import * as types from "./actionType";
import axios from "axios";
import { Featured } from "../../Firebase/Collection";

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
        allproducts.push({ ...products.data(), id: products.id });
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
const getShoesData = (params) => (dispatch) => {
  dispatch({ type: types.GET_FEATURED_DATA_R });
  return axios
    .get(`${process.env.REACT_APP_BASE_API}/allproducts?category=shoes`, params)
    .then((res) => {
      dispatch({ type: types.GET_SHOES_DATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_FEATURED_DATA_F });
    });
};

const getHomeData = () => (dispatch) => {
  dispatch({ type: types.GET_FEATURED_DATA_R });

  return axios
    .get(`${process.env.REACT_APP_BASE_API}/Homepage`)
    .then((res) => {
      dispatch({ type: types.GET_HOMEDATA_S, payload: res.data });
    })
    .then((err) => {
      dispatch({ type: types.GET_FEATURED_DATA_F });
    });
};

export {
  getWomensData,
  getMensData,
  getShoesData,
  getHomeData,
  getFeaturedProducts,
};
