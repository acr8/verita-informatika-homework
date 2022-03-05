import {
  CONTENT_FETCH_SUCCESS,
  CONTENT_ERROR_FETCH_ERROR,
  CONTENT_LOADING_FETCH_LOADING,
  CONTENT_BYID_FETCH_SUCCESS,
} from "../actionTypes";

const initialState = {
  contents: [],
  content: {},
  loadingContents: true,
  errorContents: null,
};

function contentReducer(state = initialState, action) {
  if (action.type === CONTENT_FETCH_SUCCESS) {
    return {
      ...state,
      contents: action.payload,
    };
  } else if (action.type === CONTENT_ERROR_FETCH_ERROR) {
    return {
      ...state,
      errorContents: action.payload,
    };
  } else if (action.type === CONTENT_LOADING_FETCH_LOADING) {
    return {
      ...state,
      loadingContents: action.payload,
    };
  } else if (action.type === CONTENT_BYID_FETCH_SUCCESS) {
    return {
      ...state,
      content: action.payload,
    };
  } else {
    return state;
  }
}

export default contentReducer;
