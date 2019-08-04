import * as types from '../actions/Types';

const INITIAL_STATE = {
  pending: false,
  pendingUrl: '',
  loading: false,
  data: {},
  error: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.LIKES_FETCH_PROCESS:
      return { ...state, loading: true, error: '' };
    case types.LIKES_FETCH_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: '',
      };
    case types.LIKES_FETCH_ERROR:
      return { ...state, loading: false, error: action.payload };
    case types.LIKE_PENDING_FOR_AUTH:
      return { ...state, pending: true, pendingUrl: action.payload };
    case types.LIKE_SAVE_PROCESS:
      return {
        ...state,
        loading: true,
        error: '',
        pending: false,
        pendingUrl: '',
      };
    case types.LIKE_SAVE_SUCCESS:
      return {
        ...state,
        data: {
          ...state.data,
          ...action.payload,
        },
        loading: false,
        error: '',
      };
    case types.LIKE_SAVE_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
        pending: false,
        pendingUrl: '',
      };
    case types.LIKE_REMOVE_PROCESS:
      return {
        ...state,
        loading: true,
        error: '',
      };
    case types.LIKE_REMOVE_SUCCESS: {
      const { [action.payload]: removedLike, ...restLikes } = state.data;
      return {
        data: restLikes,
        loading: false,
        error: '',
      };
    }
    case types.LIKE_REMOVE_ERROR:
      return { ...state, loading: false, error: action.payload };
    case types.LOGOUT_USER_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
