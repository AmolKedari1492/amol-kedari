require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';

import MyProfileComponent from './my-info';
import MySkillComponent from './my-skill';


class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
        <h1>Resume</h1>
        <div className="section info-section">
          <MyProfileComponent/>
        </div>
        <div className="section">
        <MySkillComponent/>
        </div>
        <h3 className="center">Thank You</h3>
      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
