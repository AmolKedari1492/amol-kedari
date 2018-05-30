require('normalize.css/normalize.css');
require('styles/App.css');
require('styles/font-awesome.css');
import React from 'react';
var FontAwesome = require('react-fontawesome');


class MyProfileComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Amol Kedari',
      designation: 'Front-end Developer',
      contact: '9768021781',
      address: 'Mumbai, Maharashtra',
      status: 'Single',
      email: 'kedarisamols@gmail.com',
      about: 'A coder who want to explore his skill',
      language: ['Marathi', 'Hindi', 'English'],
      about: 'A coder who want to work on cutting-edge technology to develop new products.',
      misc: [
        {key:'Experience', value: '4 years'},
        {key:'Prefered Computer', value: 'Mac'},
        {key:'Resume Updated', value: 'Jan, 2018'}
      ],
      languages: ['Marathi, Hindi, English'],
      portfolio: [
        {name: 'wordpress', link:'https://amolkedari.wordpress.com/'},
        {name: 'github', link:'https://github.com/AmolKedari1492/'},
        {name: 'linkedin', link:'https://www.linkedin.com/in/amol-kedari-7b22a7ba/'}
      ]
    }
  }

  render() {
    return (
      <div>
        <div className="image-wrapper">
          <div className="image"></div>
        </div>
        <div className="personal-info">
          <h2>{this.state.name}</h2>
          <h4>{this.state.designation}</h4>
        </div>
        <div className="other-detail">
          <div  className="default-panel">
            <FontAwesome name="map-marker" size="lg"/>
            <span className="address">{this.state.address}</span>
          </div>
          <div  className="default-panel">
            <FontAwesome name="envelope-open-o"/>
            <span className="email">{this.state.email}</span>
          </div>
          <div  className="default-panel">
            <FontAwesome name="phone" size="lg"/>
            <span className="contact">{this.state.contact}</span>
          </div>
          <div className="default-panel">
            <FontAwesome name="male" size="lg"/>
            <span className="status">{this.state.status}</span>
          </div>
          <hr/>
          <h5>About</h5>
          <div className="row">{this.state.about}</div>
          <hr/>
          <h5>Language</h5>
          <div> {
            this.state.languages.map((lang, i) => {
                return (
                  <div className="lang" key={i}>
                    <span className="lang-text">{lang}</span>
                  </div>
                )
            })
          }
          </div>
          <hr/>
          <h5>Portfolio</h5>
          <div> {
            this.state.portfolio.map((item, i) => {
                return (
                  <span className="social-link" key={i}>
                    <a href={item.link} target="_blank">
                      <FontAwesome name={item.name} size="lg"/>
                    </a>
                  </span>
                )
            })
          }
          </div>
          <hr/>
          <div>
            <h5>Misc</h5>
            <div>{this.state.misc.map((item, i) => {
              return (
                <div className="row" key={i}>
                  <span className="left">{item.key}</span>
                  <span className="right">{item.value}</span>
                </div>
              )
            }

            )}
            </div>
          </div>
          <hr/>
          <div className="ref">{this.state.ref}
          </div>
        </div>
      </div>
    )
  }
}


export default MyProfileComponent;
