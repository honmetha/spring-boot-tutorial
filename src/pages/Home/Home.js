import React, { Component } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Row, Col, Carousel, Button } from 'antd';
import { FaBuilding, FaHome } from "react-icons/fa";
import Carousel1 from '../../images/Carousel1.jpeg'
import Carousel2 from '../../images/Carousel2.jpg'
import Carousel3 from '../../images/Carousel3.jpg'

export default class ChangePassword extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Carousel autoplay>
          <div>
            <img src={Carousel1} alt="" width="100%" />
          </div>
          <div>
            <img src={Carousel2} alt="" width="100%" />
          </div>
          <div>
            <img src={Carousel3} alt="" width="100%" />
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
