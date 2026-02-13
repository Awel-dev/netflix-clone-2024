import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import Requests from '../../utils/requests'
function home() {
  return (
    <div>
      <Header/>
      <Requests/>
      <Footer/>
    </div>
  )
}

export default home
