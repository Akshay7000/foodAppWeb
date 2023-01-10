import * as data from "./actionType";

const init = {
  about: {},
  team: {},
  isLoading: false,
  isError: false,
};

const AboutReducer = (state = init, action) => {
  const { type, payload } = action;
  switch (type) {
    case data.GET_ABOUT_R: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case data.GET_ABOUT_S: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        about: payload,
      };
    }
    case data.GET_ABOUT_F: {
      return {
        ...state,
        isError: true,
      };
    }
    case data.GET_TEAM_R: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case data.GET_TEAM_S: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        team: payload,
      };
    }
    case data.GET_TEAM_F: {
      return {
        ...state,
        isError: true,
      };
    }
    default: {
      return state;
    }
  }
};

export { AboutReducer };
