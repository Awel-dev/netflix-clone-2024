import React, { useEffect, useState } from 'react'
const API_KEY = import.meta.env.VITE_TMDB_KEY;

const Requests = {
TopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`,
Popular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`,
Horror: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`,
Trending: `https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`,
Upcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US`,
NowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US`,
Comedy: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`,
Documentary: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`,
Romance: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`,
}

export default Requests
