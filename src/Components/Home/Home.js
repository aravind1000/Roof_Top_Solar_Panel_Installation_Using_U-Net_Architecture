import React from 'react'
import Navbar from '../Navbar/Navbar.js';
import './Home.css'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div className="Main1">
      <Navbar className="Navbar" />
      <section className="Home-first">
        <div className="centered-content">
          <h1>Rooftop Solar Panel Installation</h1>
          <p>
            <span className="Quotes" style={{ fontSize: "20px" }}>
              "
            </span>
            Rooftop solar energy epitomizes the utilization of photovoltaic
            technology on building rooftops to capture sunlight and convert it
            into electricity, embodying a sustainable and environmentally
            conscious approach to energy generation. Its significance lies in
            its contribution to reducing reliance on finite fossil fuels,
            mitigating air pollution and greenhouse gas emissions, fostering
            energy independence for users, and offering long-term cost savings
            through free and renewable energy production.
            <span className="Quotes" style={{ fontSize: "20px" }}>
              "
            </span>
          </p>
          <button>
            <Link to="/userModule" className="get-started-btn">
              Get started
            </Link>
          </button>
        </div>
      </section>
      <section className="featureSection">
         <h3>Our Key Features</h3>
        <div className="keyFeatures">
          <div className="features">
              <h3>
                Map Interaction
              </h3>
              <p>showcases areas with high solar potential, providing users with visual information to identify suitable locations for solar panel installation.</p>
              <button className='readMoreBtn'>Read more ...</button>
          </div>
          <div className="features">
              <h3>
                Data Analysis
              </h3>
              <p>Utilizing the UNet architecture, this feature highlights how the application analyzes rooftop structures to determine their suitability for solar panel installation.</p>
              <button className='readMoreBtn'>Read more ...</button>
          </div>
          <div className="features">
            <h3>
            Cost Estimation
            </h3>
            <p> users insights into the potential cost savings and return on investment (ROI) associated with adopting rooftop solar energy. </p>
            <button className='readMoreBtn'>Read more ...</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home
