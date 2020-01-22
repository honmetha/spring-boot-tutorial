import React, { Component } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Row, Col, Carousel, Button } from 'antd';
import { FaBuilding, FaHome } from "react-icons/fa";

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
        <Row type="flex" justify="center">
              <h2>Services</h2>
            </Row>
            <Row>
              <Col span={12}>
                <Row type="flex" justify="end">
                  <Button className="HomePage-ServiceButtons">
                    <Col className="HomePage-ButtonIconColumn">
                      <FaBuilding className="HomePage-ButtonColumnIcon" />
                    </Col>
                    <Col>Condo</Col>
                  </Button>
                </Row>
              </Col>
              <Col span={12}>
                <Row type="flex" justify="start">
                  <Button className="HomePage-ServiceButtons">
                    <Col className="HomePage-ButtonIconColumn">
                      <FaHome className="HomePage-ButtonColumnIcon" />
                    </Col>
                    <Col>Home</Col>
                  </Button>
                </Row>
              </Col>
            </Row>
            <Row type="flex" justify="center">
              <h2> Maid Recommended For You </h2>
            </Row>
        <Footer />
      </div>
    )
  }
}
