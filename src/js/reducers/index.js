
   import {
    FETCH_DATA_BEGIN,
    FETCH_DATA_SUCCESS,
    FETCH_DATA_FAILURE
  } from '../constants/action-types';

  const initialState = {
    metadata: {
      heading:'Loading...',
      headData:[{name:"Loading.."}],
      bodyData:[{Description:"Loading..."}]
    },
    loading: false,
    error: null
  };
  
  function rootReducer(state = initialState, action) {
    switch(action.type) {
      case FETCH_DATA_BEGIN:
        // Mark the state as "loading" so we can show a spinner or something
        // Also, reset any errors. We're starting fresh.
        return {
          ...state,
          loading: true,
          error: null
        };
  
      case FETCH_DATA_SUCCESS:
        // All done: set loading "false".
        // Also, replace the items with the ones from the server
        return {
          ...state,
          loading: false,
          metadata: action.payload
        };
  
      case FETCH_DATA_FAILURE:
        // The request failed, but it did stop, so set loading to "false".
        // Save the error, and we can display it somewhere
        // Since it failed, we don't have items to display anymore, so set it empty.
        // This is up to you and your app though: maybe you want to keep the items
        // around! Do whatever seems right.
        return {
          ...state,
          loading: false,
          error: action.payload,
          metadata: {}
        };
  
      default:
        // ALWAYS have a default case in a reducer
        return state;
    }
  }

  export default rootReducer;