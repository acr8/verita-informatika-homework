import {
  CONTENT_FETCH_SUCCESS,
  CONTENT_ERROR_FETCH_ERROR,
  CONTENT_LOADING_FETCH_LOADING,
  CONTENT_BYID_FETCH_SUCCESS,
} from "../actionTypes";

export const fetchContents = () => {
  return (dispatch) => {
    return fetch("./data/content.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong...");
      })
      .then((data) => {
        dispatch(fetchContentsSuccess(data));
      })
      .catch((err) => dispatch(fetchContentsError(err)))
      .finally(() => dispatch(fetchContentsLoading(false)));
  };
};

export const fetchOneContent = (id) => {
  return (dispatch) => {
    return fetch("./data/content.json")
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw new Error("Something went wrong...");
      })
      .then((data) => {
        console.log(data);
        const found = data.data.find((el) => +el.id === +id);
        dispatch(fetchOneContentSuccess(found));
      })
      .catch((err) => console.log(err));
  };
};

export const fetchContentsSuccess = (payload) => {
  return {
    type: CONTENT_FETCH_SUCCESS,
    payload,
  };
};

export const fetchContentsError = (payload) => {
  return {
    type: CONTENT_ERROR_FETCH_ERROR,
    payload,
  };
};

export const fetchContentsLoading = (payload) => {
  return {
    type: CONTENT_LOADING_FETCH_LOADING,
    payload,
  };
};

export const fetchOneContentSuccess = (payload) => {
  return {
    type: CONTENT_BYID_FETCH_SUCCESS,
    payload,
  };
};
