import React, { Component } from 'react'
import './BookingCard.css'
import { Row, Col, Divider, Button } from 'antd'
import { FaMapMarkerAlt } from "react-icons/fa";

export default class BookingCard extends Component {
  render() {
    return (
      <div>
        <Row className="BookingCard-Body">
          <Col>
            <Row type="flex" align="middle" className="BookingCard-BodyTop">
              <Col span={7}>
                <Row type="flex" justify="center" align="middle" className="BookingCard-Date">
                  <Col className="BookingCard-Month">January</Col>
                  <Col className="BookingCard-Day">10</Col>
                </Row>
              </Col>
              <Col span={9}>
                <Row className="BookingCard-Details">
                  <Col className="BookingCard-Customer">Customer</Col>
                  <Col className="BookingCard-Time">10:00 - 11:00 am</Col>
                  <Col className="BookingCard-Address"><FaMapMarkerAlt /> Phetchaburi Rd, Thanon Phaya Thai, Ratchathewi</Col>
                </Row>
              </Col>
              <Col span={8}>
                <img src="JessicaSpencer.png" alt="" className="BookingCard-MaidPhoto" />
              </Col>
            </Row>
            <Divider className="BookingCard-HorizontalDivider" />
            <Row type="flex" justify="end" className="BookingCard-BodyBottom">
              <Button className="BookingCard-Cancel">Cancel</Button>
              <Button className="BookingCard-Accept">Accept</Button>
            </Row>
          </Col>
        </Row>
      </div>
    )
  }
}
