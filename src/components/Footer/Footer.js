import React, { Component } from 'react'
import {Row, Col} from 'antd'
import './Footer.css'
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { AiFillHome } from "react-icons/ai";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <Row className="Footer-Body" type="flex" justify="center">
          <Col className="Footer-Text">
            <span><IoIosCall /> +1 (0) 000 0000 001 </span>
          </Col>
          <Col className="Footer-Text">
            <span><MdEmail /> Maispro@mais.com </span>
          </Col>
          <Col className="Footer-Text">
            <span><AiFillHome /> 1234 Street Name City, AA 99999 </span>
          </Col>
          <Col className="Footer-Text">
            <span>Maid Pro Service © 2019 </span>
          </Col>
        </Row>
      </div>
    )
  }
}
