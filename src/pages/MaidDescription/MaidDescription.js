import React, { Component } from 'react'
import './MaidDescription.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import ReviewCard from '../../components/ReviewCard/ReviewCard'
import { Row, Col, Button, Rate } from "antd";
import { FaBuilding, FaHome } from "react-icons/fa";
export default class MaidDescription extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Row>
          <Col>
            <Row className='MaidDescription-Profile'>
              <Col span={11}>
                <Row type="flex" justify="end">
                  <img src="JessicaSpencer.png" alt='' width='150' className='MaidDescription-ProfilePicture' />
                </Row>
              </Col>
              <Col span={13} className='MaidDescription-Name'>
                <h2>Jessica Spencer</h2>
                <h3>
                  <Rate
                    allowHalf
                    disabled
                    defaultValue={5}
                    className="MaidDescription-Rate"
                  />
                  </h3>
                <h3>4.0</h3>
              </Col>
            </Row>
            <Row type="flex" justify="center" className='MaidDescription-DescriptionRow'>
              <Col span={20} className='MaidDescription-Description'>
                <Row>
                  Description
                </Row>
                <Row>
                  Jessica is an Austrian-American actor, filmmaker, businessman, author, and former professional bodybuilder and politician.[2] He served as the 38th Governor of California from 2003 to 2011. As of 2019, he is the most recent Republican governor of California.
                </Row>
              </Col>
            </Row>
            <Row type="flex" justify="center" className='MaidDescription-MarginTop20px'>
              <h3>Type Of Place</h3>
            </Row>
            <Row>
              <Col span={12} className='MaidDescription-Type'>
                <FaBuilding className="MaidDescription-icon" />
                <h5 className="MaidDescription-CondoText">Condo</h5>
              </Col>
              <Col span={12} className="MaidDescription-CondoType">
                <h5>{"<"} 40 Sq.m.</h5>
                <h5>{"<"} 50 Sq.m.</h5>
                <h5>{"<"} 80 Sq.m.</h5>
                <h5>{"<"} 100 Sq.m.</h5>
              </Col>
              </Row>
              <Row>
                <Col span={12} className="MaidDescription-Type">
                  <FaHome className="MaidDescription-icon" />
                  <h5 className="MaidDescription-HomeText">Home</h5>
                </Col>
                <Col span={12} className="MaidDescription-HomeType">
                  <h5>{"<"} 100 Sq.m.</h5>
                  <h5>{"<"} 100-200 Sq.m.</h5>
                  <h5>{"<"} 200 Sq.m.</h5>
                </Col>
              </Row>
            <Row className='MaidDescription-BookingButtonforview'>
              <Col span={24}className='MaidDescription-Booking'>Price 250 Price/Hour</Col>
              <Button className="MaidDescription-BookingButton">Booking</Button>
              <Col span={24}className='MaidDescription-Booking'>
              <h4>REVIEWS</h4>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row type= 'flex' justify='center'>
        <Col className='MaidDescription-center'><ReviewCard /></Col>
        </Row>
        <Row type= 'flex' justify='center'>
        <Col className='MaidDescription-center'><ReviewCard /></Col>
        </Row>
        <Row type= 'flex' justify='center'>
        <Col className='MaidDescription-center'><ReviewCard /></Col>
        </Row>
        <Footer />
      </div>
    )
  }
}
