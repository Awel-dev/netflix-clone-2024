import React from 'react'
import Requests from '../../../utils/requests'
import Row from '../rows/Row'
const RowList = () => {
  return (
    <div>
      <Row title="Top Rated" 
      fetchURL={Requests.TopRated}
      />
      <Row title="Popular" 
      fetchURL={Requests.Popular}
      />
      <Row title="Horror" 
      fetchURL={Requests.Horror}
      />
      <Row title="Trending" 
      fetchURL={Requests.Trending}
      />
      <Row title="Up coming" 
      fetchURL={Requests.Upcoming}
      />
      <Row title="Now Playing" 
      fetchURL={Requests.NowPlaying}
      />
      <Row title="Comedy" 
      fetchURL={Requests.Comedy}
      />
      <Row title="Documentary" 
      fetchURL={Requests.Documentary}
      />
      <Row title="Romance" 
      fetchURL={Requests.Romance}
      />
    </div>
  )
}

export default RowList
