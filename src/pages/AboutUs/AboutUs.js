import React, { Component } from 'react'
import './AboutUs.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Row, Col } from 'antd'

export default class AboutUs extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Row type="flex" justify="center" className="AboutUs-Content">
          <Col xs={22} sm={24} md={20} lg={18}>
            <Row type="flex" justify="center">
              <h1>- Maid Pro Service -</h1>
            </Row>
            <Row type="flex" justify="center">
              <p>To provide the most satisfied service with efficiency.</p>
            </Row>
            <Row type="flex" justify="center">
              <h1>How it All Began</h1>
            </Row>
            <Row>
              <p>
                Maid Pro Service® was founded in 2020 in Bangkok, Thailand by the team of young entrepreneurs. The team worked with Code Camp 4 to create Maid Pro Service® system and franchise the company.
                After 2 months, Airbnb purchased Maid Pro Service® from the young entrepreneurs. Airbnb had properties around the world, so Maid Pro Service® has been a natural fit for Airbnb from the beginning.
                Some of our sister companies in our Family of Brands include Maidfun, Maidlover and ServiceMaster Clean. Maid Pro Service® currently has approximately 485 locations throughout Thailand.
                As we have grown, our core values remain the heart of what we do and who we are. Many of our founders who started this business are still working themselves until today.
                Maid Pro Service® also encourages career growth. In fact, several branch managers began their careers as team members.
              </p>
            </Row>
          </Col>
        </Row>
        <Footer />
      </div>
    )
  }
}
