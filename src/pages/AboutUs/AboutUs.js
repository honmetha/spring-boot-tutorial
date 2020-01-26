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
        <Row type="flex" justify="center">
          <Col>
            <h1>How it All Began</h1>
            <p>
              Merry Maids® was founded in 1979 in Omaha, Nebraska by Dallen Peterson. Dallen worked with his family to create the Merry Maids® system and franchise the company. In 1988, ServiceMaster purchased Merry Maids® from the Petersons. All ServiceMaster companies specialize in home services, so Merry Maids® has been a natural fit for ServiceMaster from the beginning. Some of our sister companies in our Family of Brands include Amerispec, Furniture Medic, Terminix, ServiceMaster Restore, and ServiceMaster Clean.

              Merry Maids® currently has approximately 485 locations throughout the United States. As we have grown, our core values remain the heart of what we do and who we are. Many of the franchise owners who purchased territories in the early years have included their children in their businesses and continue to work themselves. Merry Maids® also encourages career growth. In fact, several branch managers began their careers as team members.
            </p>
          </Col>
        </Row>
        <Footer />
      </div>
    )
  }
}
