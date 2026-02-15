
import React, { useState, useEffect } from 'react'
import movietrailer from "movie-trailer";
import "./row.css"
import YouTube from 'react-youtube';
const Row = ({ fetchURL, title }) => {
  const [movies, setMovies] = useState([])
  const [traileUrl,setTraileUrl]=useState("")
  const getmovie = async () => {
    const res = await fetch(fetchURL)
    const data = await res.json()
    setMovies(data.results)
  }

  useEffect(() => {
    getmovie()
  }, [fetchURL])
   
  const handleClick=(movie)=>{
    if(traileUrl){setTraileUrl('')}
    else{
      movietrailer(movie?.title||movie?.name||movie?.original_name)
      .then((url)=>{
        console.log(url)
        const urlParams=new URLSearchParams(new URL(url).search)
        setTraileUrl(urlParams.get('v'))
      })
    }
  }

  const opts={
    height:"600px",
    width:"100%",
    playerVars:{autoplay:1}
  }
  return (

    <div>

      <h2 style={{color:"white",marginLeft:"15px",marginBottom:"10px",marginTop:"10px"}}>{title}</h2>

      <div style={{ display: "flex", overflowX: "scroll", scrollbarWidth: "none" }}>
        {movies.map(movie => (
          <img className='poster'
          onClick={()=>handleClick(movie)}
            key={movie.id}
            style={{ width: "300px",height:"200px", marginRight: "10px" ,
            }}
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt={movie.title}
          />
        ))}
      </div>
      <div style={{padding:"10px"}}>
       {traileUrl && <YouTube videoId={traileUrl} opts={opts}/>}
      </div>
    </div>
  )
}

export default Row

