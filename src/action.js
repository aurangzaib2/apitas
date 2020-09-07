import axios from "axios";

const fetchMovieList = () => {
  return (dispatch) => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=a3b73fb4ad9360944959d2f42fc16236"
      )
      .then((res) => {
        dispatch({ type: "FETCH_MOVIES", payload: res.data });
      });
  };
};

export { fetchMovieList };

