import React from "react";
import { Link } from "react-router-dom";
import BannerBackground from "../Assets/home-banner-background2.png";
import MaidImage from "../Assets/maid-image1.jpg";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";


const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="Banner Background" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Professional Maid Services At Your Doorstep
          </h1>
          <p className="primary-text">
            Our experienced and reliable maids take care of all your household chores, giving you more time to relax and enjoy your home.
          </p>
          <Link to="/login" className="secondary-button">
            Book Now <FiArrowRight />
          </Link>
        </div>
        <div className="home-image-section">
          <img src={MaidImage} alt="Maid" />
        </div>
      </div>
    </div>
  );
};

export default Home;
