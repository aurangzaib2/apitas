import { combineReducers } from "redux";

function movieReducer(state = [], action) {
  switch (action.type) {
    case "FETCH_MOVIES":
      return action.payload;
    default:
      return state;
  }
}

export default combineReducers({
  movieList: movieReducer
});
