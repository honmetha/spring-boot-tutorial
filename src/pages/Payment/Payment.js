import React, { Component } from 'react'
import './Payment.css'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import { Row, Col } from 'antd'
import KBANK from '../../images/KBANK.jpg'
import SCB from '../../images/SCB.jpg'
import BBL from '../../images/BBL.jpg'
import KTB from '../../images/KTB.jpg'


export default class Payment extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Row type="flex" justify="center" className="Payment-Content">
          <Col xs={22} sm={22} md={20} lg={18}>
            <Row type="flex" justify="center">
              <h1>Payment Methods</h1>
            </Row>
            <Row>
              <Col className="Payment-Instructions">
                <ul>
                  <li>Make sure the transfer amount matches the service cost.</li>
                  <li>Provide transaction evidence within 1 day after the transfer has been made.</li>
                </ul>
              </Col>
            </Row>
            <Row className="Payment-MarginBottomHalfRem">
              <span>1. Please choose one of the following banks to transfer.</span>
            </Row>
            <Row>
              <Col>
               <Row type="flex" align="middle" className="Payment-BankTableRow">
                 <Col xs={6} sm={4} md={3} lg={3}>
                   <img src={KBANK} alt="" width="100%" className="Payment-BankLogo" />
                 </Col>
                 <Col xs={9} sm={12} md={13} lg={13}>
                   <Row className="Payment-BankNameKBank">Kasikornbank</Row>
                   <Row>Siam Paragon Branch</Row>
                 </Col>
                 <Col xs={9} sm={8} md={8} lg={8}>
                   <Row>Maid Pro Service Co., Ltd.</Row>
                   <Row className="Payment-AccountNumber">123-4-56789-0</Row>
                 </Col>
               </Row>
               <Row type="flex" align="middle" className="Payment-BankTableRow">
                 <Col xs={6} sm={4} md={3} lg={3}>
                   <img src={SCB} alt="" width="100%" className="Payment-BankLogo" />
                 </Col>
                 <Col xs={9} sm={12} md={13} lg={13}>
                   <Row className="Payment-BankNameSCB">Siam Commercial Bank</Row>
                   <Row>Bangrak Branch</Row>
                 </Col>
                 <Col xs={9} sm={8} md={8} lg={8}>
                   <Row>Maid Pro Service Co., Ltd.</Row>
                   <Row className="Payment-AccountNumber">098-7-65432-1</Row>
                 </Col>
               </Row>
               <Row type="flex" align="middle" className="Payment-BankTableRow">
                 <Col xs={6} sm={4} md={3} lg={3}>
                   <img src={BBL} alt="" width="100%" className="Payment-BankLogo" />
                 </Col>
                 <Col xs={9} sm={12} md={13} lg={13}>
                   <Row className="Payment-BankNameBBL">Bangkok Bank</Row>
                   <Row>Ploen Chit Branch</Row>
                 </Col>
                 <Col xs={9} sm={8} md={8} lg={8}>
                   <Row>Maid Pro Service Co., Ltd.</Row>
                   <Row className="Payment-AccountNumber">121-2-12121-2</Row>
                 </Col>
               </Row>
               <Row type="flex" align="middle" className="Payment-BankTableRow Payment-LastTableRow">
                 <Col xs={6} sm={4} md={3} lg={3}>
                   <img src={KTB} alt="" width="100%" className="Payment-BankLogo" />
                 </Col>
                 <Col xs={9} sm={12} md={13} lg={13}>
                   <Row className="Payment-BankNameKTB">Krungthai Bank</Row>
                   <Row>Precious Icon Siam Branch</Row>
                 </Col>
                 <Col xs={9} sm={8} md={8} lg={8}>
                   <Row>Maid Pro Service Co., Ltd.</Row>
                   <Row className="Payment-AccountNumber">343-4-34343-4</Row>
                 </Col>
               </Row>
              </Col>
            </Row>
            <Row className="Payment-ListNumberTwo">
              <span>2. Choose services to make a payment.</span>
              <ul>
                <li>Members are able to pay many services at the same time.</li>
                <li>Guests can only pay one service per payment using order ID.</li>
              </ul>
            </Row>
            <Row className="Payment-MarginBottomHalfRem">
              <span>3. Provide transaction evidence after the transfer has been made.</span>
            </Row>
            <Row className="Payment-ListNumberFour">
              <span>4. After checking the payment, confirmation will be sent via email.</span>
            </Row>
          </Col>
        </Row>
        <Footer />
      </div>
    )
  }
}
