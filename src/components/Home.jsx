import React from 'react';
import './Home.css';

const Home = ({ onGetStarted }) => {
  return (
    <div className="home-container">
      <div className="home-content">
        <h1>Take care of your health <strong>safely and privately</strong></h1>
        {/* The onClick event now triggers the state change in App.jsx */}
        <button className="btn-get-started" onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;