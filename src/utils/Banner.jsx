import React, { useEffect, useState } from 'react'
const API_KEY = import.meta.env.VITE_TMDB_KEY;
import './banner.css'
function Banner() {
 const [movieList, setMovieList] = useState([]);
 const [randomMovie, setRandomMovie] = useState(null);
  const getMovie = () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setMovieList(data.results);

        const index = Math.floor(Math.random() * data.results.length);
        setRandomMovie(data.results[index]);
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    getMovie();
  }, []);

    function truncate(text, maxLength) {
    if (!text) return "";
    if (text.length <= maxLength) {return text;}
    return text.slice(0, maxLength) + "...";}

  return (
    <div
    className='banner'
    style={{
        backgroundSize:"cover",
        backgroundImage:`url('https://image.tmdb.org/t/p/original${randomMovie?.backdrop_path}')`,
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        margin:"auto"
    }}>
      <div className='banner-content'>
       <h1 className='banner-title'>
           {randomMovie?.title || randomMovie?.name || randomMovie?.original_name}
       </h1>
       <div className='banner-buttons'>
        <button className='play'>Play</button>
        <button className='list'>My list</button>
        </div>
        <p className='discription'>{truncate(randomMovie?.overview,150)}</p>
       
      </div>
      <div className='fade-bottom'></div>
    </div>
  )
}

export default Banner
