import firebase from '@firebase/app';
import '@firebase/auth';
import '@firebase/database';
import * as types from './Types';
import { toHash } from '../utils';

export const likesFetchAction = () => {
  const { currentUser } = firebase.auth();
  return dispatch => {
    dispatch({ type: types.LIKES_FETCH_PROCESS });
    try {
      firebase
        .database()
        .ref(`/users/${currentUser.uid}/likes`)
        .once('value', snapshot => {
          if (snapshot.val())
            dispatch({
              type: types.LIKES_FETCH_SUCCESS,
              payload: snapshot.val(),
            });
          else dispatch(likeFetchErrorAction('No data or a bad query'));
        })
        .catch(error => dispatch(likeFetchErrorAction(error)));
    } catch (error) {
      dispatch(likeFetchErrorAction(error));
    }
  };
};

const likeFetchErrorAction = error => ({
  type: types.LIKES_FETCH_ERROR,
  payload: error.code,
});

export const likePendingForAuthAction = imgUrl => ({
  type: types.LIKE_PENDING_FOR_AUTH,
  payload: imgUrl,
});

export const likeSaveAction = data => {
  const { currentUser } = firebase.auth();
  const hash = toHash(data.urls.regular);
  return dispatch => {
    dispatch({ type: types.LIKE_SAVE_PROCESS });
    try {
      firebase
        .database()
        .ref(`/users/${currentUser.uid}/likes/${hash}`)
        .set(data)
        .then(() => {
          dispatch({
            type: types.LIKE_SAVE_SUCCESS,
            payload: { [hash]: data },
          });
        })
        .catch(error => {
          dispatch(likeSaveErrorAction(error));
        });
    } catch (error) {
      dispatch(likeSaveErrorAction(error));
    }
  };
};

const likeSaveErrorAction = error => ({
  type: types.LIKE_SAVE_ERROR,
  payload: error.code,
});

export const likeRemoveAction = data => {
  const { currentUser } = firebase.auth();
  const hash = toHash(data.url);
  return dispatch => {
    dispatch({ type: types.LIKE_REMOVE_PROCESS });
    try {
      firebase
        .database()
        .ref(`/users/${currentUser.uid}/likes`)
        .child(hash)
        .remove()
        .then(() => {
          dispatch({
            type: types.LIKE_REMOVE_SUCCESS,
            payload: hash,
          });
        })
        .catch(error => dispatch(likeRemoveErrorAction(error)));
    } catch (error) {
      dispatch(likeRemoveErrorAction(error));
    }
  };
};

const likeRemoveErrorAction = error => ({
  type: types.LIKE_REMOVE_ERROR,
  payload: error.code,
});
