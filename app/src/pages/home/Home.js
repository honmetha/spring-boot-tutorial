import React from "react";
import { Row } from "antd";
import HomeCard from "./components/HomeCard";

const Home = () => {
  return (
    <Row justify="center">
      <HomeCard
        image="https://media4.giphy.com/media/xTiTnuhyBF54B852nK/giphy.gif?cid=ecf05e47ntl44c0uu1x01b2pf6wd37hal2i9dlafx56g9ig4&rid=giphy.gif"
        text="Todo List"
        link="/todolist"
      />
      <HomeCard
        image="https://media4.giphy.com/media/xTkcExjXuOJj69fVv2/giphy.gif?cid=ecf05e47jtdhyku1hd0fgrxe5tqep57bbd9szspdxqbwy8m4&rid=giphy.gif"
        text="Expense Tracker"
        link="/expensetracker"
      />
      <HomeCard
        image="https://i3.cpcache.com/merchandise_zoom/632_550x550_Front_Color-White.jpg?region={%22name%22:%22FrontCenter%22,%22width%22:3.25,%22height%22:3.25,%22alignment%22:%22MiddleCenter%22,%22orientation%22:0,%22dpi%22:200,%22crop_x%22:0,%22crop_y%22:0,%22crop_h%22:600,%22crop_w%22:600,%22scale%22:0,%22template%22:{%22id%22:82437181,%22params%22:{}}}&Size=3x3&AttributeValue=NA&c=True"
        text="Breaking Bad Cast"
        link="/breakingbadcast"
      />
      <HomeCard />
    </Row>
  );
};

export default Home;
