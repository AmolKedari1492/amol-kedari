require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';
var FontAwesome = require('react-fontawesome');


class MySkillComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      skill: [
        {name: 'Javascript', className:'devicon-javascript-plain colored',value: 8},
        {name: 'ReactJS', className: 'devicon-react-original colored', value: 8},
        {name: 'AngularJS', className: 'devicon-angularjs-plain colored', value: 7},
        {name: 'Jquery', className: 'devicon-jquery-plain colored', value: 7},
        {name: 'NodeJS', className: 'devicon-nodejs-plain colored',  value: 8},
        {name: 'ExpressJS', className:'devicon-express-original colored', value: 7},
        {name: 'HTML5', className:'devicon-html5-plain colored',  value: 8},
        {name: 'CSS3', className:'devicon-css3-plain colored', value: 8},
        {name: 'Sass', className:'devicon-sass-original colored', value: 8},
        {name: 'Bootstrap', className:'devicon-bootstrap-plain colored', value: 8},
        {name: 'less', className:'devicon-less-plain-wordmark colored', value: 8},
        {name: 'Wordpress', className:'devicon-wordpress-plain colored', value: 8},
        {name: 'Mysql', className:'devicon-mysql-plain colored', value: 6},
        {name: 'MongoDB', className:'devicon-mongodb-plain colored', value: 6},
        {name: 'gulp', className:'devicon-gulp-plain colored', value: 6},
        {name: 'webpack', className:'devicon-webpack-plain colored', value: 6},
        {name: 'git', className:'devicon-git-plain colored', value: 6},
        {name: 'AWS', className:'devicon-amazonwebservices-original colored', value: 6},
    ],
    experience: [
      {name: 'Hopscotch Wholesale Pvt. Ltd.', start: 'June 2015', end: 'Present', class: 'active',
      details: `Hopscotch is an ecommerce company offers baby products. I am working as a
       front-end developer. Worked on various crusial project including customer-account page, order tracking,
       filter-V2, user activity tracking via segment, SEO, mobile-remote debugging etc.`},
      {name: 'Fundoo Solution Pvt. Ltd.', start: 'April 2014', end: 'May 2015',
      details: `I worked as a consultant software-engineer, worked on Market vista community(MVC)
      project, an online community for market research and online survey. Worked on MEAN technology.
      Developed a complete website burmaburma.in in wordpress. I was also worked on their custom apps.`}
    ],
    education: [
      {year: '2013', institute: 'Vidyalankar(MU)', name: 'BE(INFT)', total: '61.66%'},
      {year: '2009', institute: 'M. D. college', name: 'HSC(Sci)', total: '68.17%'},
      {year: '2007', institute: 'Navbharat Vidyalaya', name: 'SSC', total: '77.53%'}
    ],
    hobbies: [
      {name: 'Reading Novels', icon:'book'},
      {name: 'Cartoon Drawing', icon:'paint-brush'},
      {name: 'Listening Music', icon:'music'},
      {name: 'Travelling', icon:'bicycle'},
      {name: 'Internet Surfing', icon:'laptop'}
    ],
    works: [
      {
        name: 'CopyStack Chrome plugin',
        description: 'A plugin which helps you to keep track of last 10 copied text.',
        link: 'https://chrome.google.com/webstore/detail/copystack/glkghbammoafngedbmkfhoklnifmfjpc'
      },
      {
        name: 'Lazy Reader Chrome plugin',
        description: 'This plugin helps you to read html content of an article',
        link: 'https://chrome.google.com/webstore/detail/lazy-reader/bacefjcibkjpklnloimkkmhpkihkcmoe?hl=en'
      }
    ]
  }
}

render() {
    return (
      <div className="other-detail">
        <div><h3>Professional Skill</h3></div>
        <div className='row'> {
          this.state.skill.map((item, i)=> {
            return (
              <div className="tech-skill" key={i}>
                <i className={'left dev-icon ' + item.className}></i>
                <span className="left">{item.name}</span>
                <span className="right">10</span>
                <span className="right progress-bar">
                  <span className="active" style={{width: 3 * 10 * item.value}}></span>
                  <div className="progress-bar-count">{item.value}</div>
                </span>
              </div>
            );
          })
        }
      </div>
      <div><h3>Professional Experience</h3></div>
      <div className='row'> {
        this.state.experience.map((item, i)=> {
          return (
            <div className={'row company ' + item.class} key={i}>
              <div className="row base">
                <span className="left title">{item.name}</span>
                <span className="right button">{item.start + ' to ' + item.end}</span>
              </div>
              {/*<div className="row details">{item.details}</div>*/}
            </div>
          )
        })
      }
      </div>
        <div><h3>Work portfolio</h3></div>
        <div  className='row'> {
          this.state.works.map((item, i)=> {
            return (
              <div className="row company active" key={ i }>
                <div className="row base">
                  <span className="left title">{item.name}</span>
                  <span className="extra-link">
                    <a href={item.link} target="_blank">View</a>
                  </span>
                </div>
                {/*<div className="row details">{item.description}</div>*/}
              </div>
            )
          })
        }</div>
        <div className="row">
        <span className="half left">
          <h3>Education</h3>
          <div className="row"> {
            this.state.education.map((item, i)=> {
              return (
                <div className="edu-separator" key={i}>
                  <div className="row core-details">
                    <span className="left">{item.name}</span>
                    <span className="right">{item.year}</span>
                  </div>
                  <div className="row extra-details">
                    <span className="left">{item.institute}</span>
                  </div>
                </div>
              )
            })
          }
          </div>
        </span>
        <span className="half right">
          <h3>Hobbies</h3>
          <div className="row"> {
            this.state.hobbies.map((item, i)=> {
              return (
                <div className="row edu-separator" key={i}>
                  <span className="left">{item.name}</span>
                  <FontAwesome className="right" name={item.icon} size="lg"/>
                </div>
              )})
            }
          </div>
        </span>
      </div>
    </div>
    )
  }
}


export default MySkillComponent;
