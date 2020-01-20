import React, { Component } from 'react'
import './MyBookingHistory.css'
import Navbar from '../../components/Navbar/Navbar'
import BookingCard from '../../components/BookingCard/BookingCard'
import { Row, Col, Tabs, BackTop } from 'antd';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default class MyBookingHistory extends Component {
  render() {
    return (
      <div className="MyBookingHistory-Body">
        <Navbar />
        <Row type="flex" justify="center">
          <Col>
            <Tabs defaultActiveKey="1" onChange={callback} className="MyBookingHistory-Tabs">
              <TabPane tab="Upcoming" key="1">
                <BookingCard />
              </TabPane>
              <TabPane tab="History" key="2">
                Content of Tab Pane 2
              </TabPane>
            </Tabs>
          </Col>
        </Row>
        <BackTop />
      </div>
    )
  }
}
