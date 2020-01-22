import React, { Component } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Carousel } from 'antd';

export default class ChangePassword extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel autoplay>
          <div>
            <img src="https://architecturesideas.com/wp-content/uploads/2019/12/Housekeeper2.jpg" alt="" width="100%" />
          </div>
          <div>
            <img src="https://images.wallpapersden.com/image/download/jennifer-aniston-sexy-cleavage-wallpapers_47469_1920x1080.jpg" alt="" width="100%" />
          </div>
          <div>
            <img src="https://architecturesideas.com/wp-content/uploads/2019/12/Housekeeper1.jpg" alt="" width="100%" />
          </div>
          <div>
            <img src="https://images.wallpapersden.com/image/download/jennifer-aniston-sexy-cleavage-wallpapers_47469_1920x1080.jpg" alt="" width="100%" />
          </div>
        </Carousel>
        <Footer />
      </div>
    )
  }
}
