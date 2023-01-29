import "./banner.css";

import React from "react";
import banner from "../img/banner.webp";
import bannerZeroWaste from "../img/bannerZeroWaste.png";

const Banner = ({ title, tag }) => {
  // https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#staticimage
  return (
    <div role="banner" className="banner-container">
      <img
        fetchpriority="high"
        className="banner"
        src={tag === "zerodechet" ? bannerZeroWaste : banner}
        alt="banniere banane plantee"
      />
      <h1 className="has-text-weight-bold banner-text">{title}</h1>
    </div>
  );
};

export default Banner;
