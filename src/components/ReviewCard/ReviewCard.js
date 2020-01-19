import React from "react";
import { Row, Col, Card, Rate } from "antd";
import "./ReviewCard.css";

// ! Desc lenght cannot > 230 character

function ReviewCard() {
  const desc =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio aliquid commodi laborum non consequuntur, mollitia quod in repudiandae, ipsam, vel ratione sed voluptates quas amet voluptas exercitationem possimus suscipit porro.";
  console.log(desc.length);
  return (
    <Card className="ReviewCard-Card" bodyStyle={{ padding: "6px 16px" }}>
      <Row type="flex" align="bottom">
        <Col span={12}>
          <Rate
            allowHalf
            disabled
            defaultValue={5}
            className="ReviewCard-Rate"
          />
        </Col>
        <Col span={6}>
          <p>12/12/12</p>
        </Col>
        <Col span={6}>
          <p>2020/2020</p>
        </Col>
      </Row>
      <Row className="ReviewCard-desc">
        <Col>
          <Card.Meta description={desc} />
        </Col>
      </Row>
    </Card>
  );
}

export default ReviewCard;
