import React from 'react'
import Header from '../header/header'
import Banner from '../../utils/Banner'
import RowList from '../rows/rowlist/Rowlist'
import Footer from '../footer/footer'
function home() {
  return (
    <div>
      <Header/>
      <Banner/>
      <RowList/>
      <Footer/>
    </div>
  )
}

export default home
