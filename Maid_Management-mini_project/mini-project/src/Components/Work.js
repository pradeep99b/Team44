
import React from "react";
import MaidSelection from "../Assets/maid-image2.jpg";
import MaidService from "../Assets/maid-image3.jpg";

const Work = () => {
  const workInfoData = [
    {
      image: MaidSelection,
      title: "Select Your Maid",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et.",
    },
    {
      image: MaidService,
      title: "Enjoy Maid Services",
      text: "Lorem ipsum dolor sit amet consectetur. Maecenas orci et lorem ipsum.",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor turpis molestie dui magnis facilisis at fringilla quam.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt={data.title} />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
