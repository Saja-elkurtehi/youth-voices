import React from 'react';
import './Banner.css';

const Banner = ({ title }) => {
  return (
    <div className="banner-wrapper">
      <div className="banner-background">
        <div className="left-background"></div>
        <div className="right-background"></div>
      </div>
      <div className="banner">
        <div className="banner-content">
          <h1 className="banner-title">{title}</h1>
          <div className="banner-logo"></div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
