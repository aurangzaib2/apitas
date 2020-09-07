import React, { useEffect } from "react";

import { connect } from "react-redux";
import { fetchMovieList } from "../action";

const MovieList = (props) => {
  useEffect(() => {
   
    props.fetchMovieList();
  },[] );

  console.log(props.movieList.results);
const imageUrl = "https://image.tmdb.org/t/p/original/"
  if (!props.movieList || !props.movieList.results) {
    return (
      <div>Loading...</div>
    )
  }

  return (
    <div>
   

 
   {
props.movieList.results.map(movie=>{
  return (
<div key={movie.id}>

   <div className="card" style={{ display: "grid",
    gridTemplateColumns: "repeat( 3, 3fr)",
    gridGap: "30px",}} >
  <img className="card-img-top" src={imageUrl+movie.backdrop_path} alt="poster"/>
  <div className="card-body">
    <h5 className="card-title"> {movie.original_title}</h5>
   <strong> <p className="card-text">{movie.overview}</p></strong>
    <a href="https://www.netflix.com/" className="btn btn-primary">watch on Netflix</a>
  </div>
</div>

</div>

  )
})
   
 
 
  }
  </div>
  );
};

const mapStateToProps = (state) => ({ movieList: state.movieList });

export default connect(mapStateToProps, { fetchMovieList })(MovieList);
