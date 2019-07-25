import {
  IMAGES_FETCH_PROCESS,
  IMAGES_FETCH_SUCCESS,
  IMAGES_FETCH_FAIL
} from "./Types";

export const fetchImagesAction = url => dispatch => {
  dispatch({ type: IMAGES_FETCH_PROCESS });
  fetch(url)
    .then(resp => resp.json())
    .then(respJson => {
      dispatch({ type: IMAGES_FETCH_SUCCESS, payload: respJson });
    })
    .catch(error => {
      dispatch({ type: IMAGES_FETCH_FAIL, payload: error.message });
    });
};
