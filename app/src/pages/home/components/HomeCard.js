import React from "react";
import { Link } from "react-router-dom";

const HomeCard = ({
  image = "https://media3.giphy.com/media/pQyBc7MwzjW00/giphy.gif?cid=ecf05e47euf1srvgam0j8y7y1t0h99mmhbmn6707x1r6s8y9&rid=giphy.gif",
  text = "????",
  link = "#",
}) => {
  return (
    <div style={{ margin: "1rem" }}>
      <div>
        <Link to={link}>
          <img src={image} alt="To do List" width="200px" height="200px" />
        </Link>
      </div>
      <div style={{ textAlign: "center" }}>
        <Link to={link}>{text}</Link>
      </div>
    </div>
  );
};

export default HomeCard;
