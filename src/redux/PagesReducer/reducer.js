import * as data from "./actionType";

const init = {
  featured: [],
  womensD: [],
  shoesD: [],
  subscribeProducts: [],
  isLoading: false,
  isError: false,
};

const pagesReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case data.GET_FEATURED_DATA_R: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case data.GET_FEATURED_DATA_S: {
      return {
        ...state,
        isLoading: false,
        featured: payload,
      };
    }

    case data.GET_FEATURED_DATA_F: {
      return {
        ...state,
        isError: true,
      };
    }
    case data.GET_SUBSCRIBED_F: {
      return {
        ...state,
        isError: true,
        isLoading: false,
      };
    }
    case data.GET_SUBSCRIBED_S: {
      return {
        ...state,
        subscribeProducts: payload,
        isError: false,
        isLoading: false,
      };
    }
    case data.GET_SUBSCRIBED_R: {
      return {
        ...state,
        isLoading: true,
      };
    }
    default: {
      return state;
    }
  }
};
export { pagesReducer };
