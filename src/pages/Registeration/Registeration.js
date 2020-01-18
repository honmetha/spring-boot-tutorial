import React, { Component } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './Registeration.css'
import { Row, Col, Card, Input, Icon, Button } from 'antd';
import { AiOutlineMail } from "react-icons/ai";

export default class Registeration extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Row type="flex" justify="center" className="Registeration-Body">
          <Card className="Registeration-Card">
            <Row>
              <Col>
                <Row type="flex" justify="center">
                  <img src="https://www.cabinetmakerwarehouse.com/wp-content/uploads/9242-gull-grey.jpg" alt="" width="100" className="Registeration-Photo" />
                </Row>
                <Row className="Registeration-InputMargin">
                  <Input
                    placeholder="username"
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  />
                </Row>
                <Row className="Registeration-InputMargin">
                  <Input.Password placeholder="password" />
                </Row>
                <Row className="Registeration-InputMargin">
                  <Input
                    placeholder="email"
                    prefix={<AiOutlineMail style={{ color: 'rgba(0,0,0,.25)' }} />}
                  />
                </Row>
                <Row className="Registeration-InputMargin">
                  <Input />
                </Row>
                <Row className="Registeration-InputMargin">
                  <Input placeholder="account No." />
                </Row>
                <Row type="flex" justify="center">
                  <Button className="Registeration-CreateAccountButton">Create account</Button>
                </Row>
                <Row type="flex" justify="center">
                  <Button className="Registeration-CancelButton">Cancel</Button>
                </Row>
              </Col>
            </Row>
          </Card>
        </Row>
        <div className="Registeration-Footer">
          <Footer />
        </div>
      </div>
    )
  }
}
