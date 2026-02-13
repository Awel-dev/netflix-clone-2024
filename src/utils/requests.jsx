import React, { useEffect, useState } from 'react'
const API_KEY = import.meta.env.VITE_TMDB_KEY;

const Requests =()=> {

    const [movieList,setMovieList]=useState([])
    const getmovie=()=>{
        fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`)
        .then(response=>response.json())
        .then(data=>setMovieList(data.results))
    }
    useEffect(()=>{getmovie()},[])

    console.log(movieList)
  return (
    <div>
      {movieList.map((movie)=>(
        <img style={{width:"350px",height:"400px", marginLeft:"20px",marginTop:"20px",marginBottom:"20px"}} key={movie.id} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
      ))}
    </div>
  )
}

export default Requests
