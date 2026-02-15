import React from 'react'
import Header from '../header/header'
import Footer from '../footer/footer'
import Banner from '../../utils/Banner'
import RowList from '../rows/rowlist/Rowlist'
// import Row from '../rows/rows/Row'
// import Requests from '../../utils/requests'
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
