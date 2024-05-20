
import React from "react";
import { Link } from "react-router-dom";
import AboutBackground from "../Assets/about-background5.png";
import AboutBackgroundImage from "../Assets/about-background-image.jpg";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div>
    <Navbar />
    <div className="about-section-container">
     <div className="about-background-image-container">
        <img src={AboutBackground} alt="Background" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="Background Image" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">Trusted and Experienced Maids</h1>
        <p className="primary-text">
          Our maids are highly trained and experienced in providing top-notch cleaning and household services. We ensure that every maid is background checked and reliable.
        </p>
        <p className="primary-text">
          From regular cleaning to deep cleaning, our maids can handle all your household needs efficiently and professionally.
        </p>
        <Link to="/contact" className="secondary-button">Contact Us</Link>
      </div>
    </div>
    </div>
  );
};

export default About;

// import React from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import AboutBackground from "../Assets/about-background5.png";
// import AboutBackgroundImage from "../Assets/about-background-image.jpg";

// const About = () => {
//   return (
//     <div className="about-container">
//       <Navbar />
//       <section className="about-section">
//         <div className="about-background-image-container">
//           <img src={AboutBackground} alt="Background" />
//         </div>
//         <div className="about-section-text-container">
//           <p className="primary-subheading">About</p>
//           <h1 className="primary-heading">Trusted and Experienced Maids</h1>
//           <p className="primary-text">
//             Our maids are highly trained and experienced in providing top-notch cleaning and household services. We ensure that every maid is background checked and reliable.
//           </p>
//           <p className="primary-text center">
//             From regular cleaning to deep cleaning, our maids can handle all your household needs efficiently and professionally.
//           </p>
//         </div>
//       </section>

//       {/* New Section 1 */}
//       <section className="about-section">
//         <div className="about-image-container">
//           <img src={AboutBackgroundImage} alt="Background Image" />
//         </div>
//         <div className="about-section-text-container">
//           <h2 className="secondary-heading">Our Mission</h2>
//           <p className="secondary-text">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at venenatis nulla. Nam efficitur lacus quis turpis interdum, ac cursus odio bibendum.
//           </p>
//         </div>
//       </section>

//       {/* New Section 2 */}
//       <section className="about-section">
//         <div className="about-image-container">
//           <img src={AboutBackgroundImage} alt="Background Image" />
//         </div>
//         <div className="about-section-text-container">
//           <h2 className="secondary-heading">Our Vision</h2>
//           <p className="secondary-text">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at venenatis nulla. Nam efficitur lacus quis turpis interdum, ac cursus odio bibendum.
//           </p>
//         </div>
//       </section>

//       {/* New Section 3 */}
//       <section className="about-section">
//         <div className="about-image-container">
//           <img src={AboutBackgroundImage} alt="Background Image" />
//         </div>
//         <div className="about-section-text-container">
//           <h2 className="secondary-heading">Our Values</h2>
//           <p className="secondary-text">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis at venenatis nulla. Nam efficitur lacus quis turpis interdum, ac cursus odio bibendum.
//           </p>
//         </div>
//       </section>

     
//     </div>
//   );
// };

// export default About;
