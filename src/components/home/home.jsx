import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import Banner from '../../utils/Banner'
// import Requests from '../../utils/requests'
function home() {
  return (
    <div>
      <Header/>
      {/* <Requests/> */}
      <Banner/>
      <Footer/>
    </div>
  )
}

export default home
