import React from 'react'
import { useSelector } from 'react-redux'
import { getAllMovies } from '../../features/movies/movieSlice'
import MovieCard from '../MovieCard/MovieCard'
import "./MovieListing.scss"
import Slider from 'react-slick'

const MovieListing = () => {

 

  

  const movies = useSelector(getAllMovies);
  let renderMovies = "";

  renderMovies =
   movies.Response === "True" ? (
   movies.Search.map((movie, index) => (
    // data is props we are passing
    <MovieCard key={index} data={movie} />
   ))
  ) : ( 
  <div className="movies-error">
    <h3>{movies.Error}</h3>
  </div> 
  );

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1324,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

    return (
    <div className='movie-wrapper'>
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
        <Slider {...settings}>{renderMovies}</Slider></div>
      </div>
    </div>
  )
}

export default MovieListing

// We want all movies then we use-selector