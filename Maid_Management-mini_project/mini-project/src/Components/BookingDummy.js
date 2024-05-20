
// import React from "react";
// import { Link } from "react-router-dom";
// import AboutBackground from "../Assets/about-background5.png";
// import AboutBackgroundImage from "../Assets/about-background-image.jpg";
// import Navbar from "./Navbar";
// import '../App.css';


// const BookingPage = () => {
//     const [cities, setCities] = useState([]);
//     const [maids, setMaids] = useState([]);
//     const [services, setServices] = useState([]);
//     const [selectedCity, setSelectedCity] = useState('');
//     const [selectedMaid, setSelectedMaid] = useState('');
//     const [selectedService, setSelectedService] = useState('');

//     useEffect(() => {
//         axios.get('http://localhost:5000/cities')
//             .then(response => setCities(response.data))
//             .catch(error => console.error('Error fetching cities:', error));

//         axios.get('http://localhost:5000/services')
//             .then(response => setServices(response.data))
//             .catch(error => console.error('Error fetching services:', error));
//     }, []);

//     useEffect(() => {
//         if (selectedCity) {
//             axios.get(`http://localhost:5000/maids/${selectedCity}`)
//                 .then(response => setMaids(response.data))
//                 .catch(error => console.error('Error fetching maids:', error));
//         }
//     }, [selectedCity]);

//     const handleCityChange = (e) => {
//         setSelectedCity(e.target.value);
//         setSelectedMaid('');
//     };

//     const handleMaidChange = (e) => {
//         setSelectedMaid(e.target.value);
//     };

//     const handleServiceChange = (e) => {
//         setSelectedService(e.target.value);
//     };

//     return (
//         <div>
//             <Navbar />
//             <div className="about-section-container">
//                 <div className="about-background-image-container">
//                     <img src={AboutBackground} alt="Background" />
//                 </div>
//                 <div className="about-section-image-container">
//                     <img src={AboutBackgroundImage} alt="Background Image" />
//                 </div>
//                 <div className="about-section-text-container">
//                     <p className="primary-subheading">About</p>
//                     <h1>Welcome to Maid Service Booking</h1>
//                     <div className="booking-container">
//                         <h2>Book a Service</h2>
//                         <div className="input-group">
//                             <label>Select City:</label>
//                             <select value={selectedCity} onChange={handleCityChange}>
//                                 <option value="">Select a city</option>
//                                 {cities.map(city => (
//                                     <option key={city.id} value={city.id}>{city.name}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div className="input-group">
//                             <label>Select Maid:</label>
//                             <select value={selectedMaid} onChange={handleMaidChange} disabled={!selectedCity}>
//                                 <option value="">Select a maid</option>
//                                 {maids.map(maid => (
//                                     <option key={maid.id} value={maid.id}>{maid.name}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <div className="input-group">
//                             <label>Select Service:</label>
//                             <select value={selectedService} onChange={handleServiceChange}>

//                                 <option value="">Select a service</option>
//                                 {services.map(service => (
//                                     <option key={service.id} value={service.id}>{service.name}</option>
//                                 ))}
//                             </select>
//                         </div>
//                         <button className="primary-button" onClick={() => alert(`Booking: City ${selectedCity}, Maid ${selectedMaid}, Service ${selectedService}`)}>Book Now</button>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default About;