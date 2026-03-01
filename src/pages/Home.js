import React from 'react';
import 'normalize.css/normalize.css';
import '../styles/home.css';

import MyProfile from '../components/MyProfile';
import MySkill from '../components/MySkill';

const Home = () => {
  return (
    <div className="index">
      <h1>Resume</h1>

      <div className="section info-section">
        <MyProfile />
      </div>

      <div className="section">
        <MySkill />
      </div>

      <h3 className="center">Thank You</h3>
    </div>
  );
};

export default Home;