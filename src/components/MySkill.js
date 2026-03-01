import React from 'react';
import 'normalize.css/normalize.css';
import '../styles/home.css';
import FontAwesome from 'react-fontawesome';

const MySkillComponent = () => {

    const data = {
        skill: [
            { name: 'Javascript', className: 'devicon-javascript-plain colored', value: 8 },
            { name: 'ReactJS', className: 'devicon-react-original colored', value: 8 },
            //   { name: 'AngularJS', className: 'devicon-angularjs-plain colored', value: 7 },
            //   { name: 'Jquery', className: 'devicon-jquery-plain colored', value: 7 },
            { name: 'NodeJS', className: 'devicon-nodejs-plain colored', value: 8 },
            { name: 'ExpressJS', className: 'devicon-express-original colored', value: 7 },
            { name: 'HTML5', className: 'devicon-html5-plain colored', value: 8 },
            { name: 'CSS3', className: 'devicon-css3-plain colored', value: 8 },
            { name: 'Sass', className: 'devicon-sass-original colored', value: 8 },
            //   { name: 'Bootstrap', className: 'devicon-bootstrap-plain colored', value: 8 },
            //   { name: 'Less', className: 'devicon-less-plain-wordmark colored', value: 8 },
            { name: 'Wordpress', className: 'devicon-wordpress-plain colored', value: 8 },
            { name: 'Mysql', className: 'devicon-mysql-plain colored', value: 6 },
            { name: 'MongoDB', className: 'devicon-mongodb-plain colored', value: 6 },
            //   { name: 'Gulp', className: 'devicon-gulp-plain colored', value: 6 },
            { name: 'Webpack', className: 'devicon-webpack-plain colored', value: 6 },
            { name: 'Git', className: 'devicon-git-plain colored', value: 6 },
            { name: 'AWS', className: 'devicon-amazonwebservices-original colored', value: 6 },
        ],
        experience: [
            {
                name: 'Freecharge Business and Technology Solution Pvt. Ltd.',
                start: 'Jan 2026',
                end: 'Present',
                class: 'active'
            }, {
                name: 'Freecharge Payment Solution Pvt. Ltd.',
                start: 'July 2020',
                end: 'Dec 2025'
            }, {
                name: 'Cuddle AI Pvt. Ltd.',
                start: 'Oct 2018',
                end: 'March 2020'
            }, {
                name: 'Hopscotch Wholesale Pvt. Ltd.',
                start: 'June 2015',
                end: 'Oct 2018',
            },
            {
                name: 'Fundoo Solution Pvt. Ltd.',
                start: 'April 2014',
                end: 'May 2015'
            }
        ],
        education: [
            { year: '2013', institute: 'Vidyalankar(MU)', name: 'BE(INFT)' },
            { year: '2009', institute: 'M. D. college', name: 'HSC(Sci)' },
            { year: '2007', institute: 'Navbharat Vidyalaya', name: 'SSC' }
        ],
        hobbies: [
            { name: 'Reading Novels', icon: 'book' },
            { name: 'Cartoon Drawing', icon: 'paint-brush' },
            { name: 'Listening Music', icon: 'music' },
            { name: 'Travelling', icon: 'bicycle' },
            { name: 'Internet Surfing', icon: 'laptop' }
        ],
        works: [
            // {
            //     name: 'CopyStack Chrome plugin',
            //     link: 'https://chrome.google.com/webstore/detail/copystack/glkghbammoafngedbmkfhoklnifmfjpc'
            // },
            // {
            //     name: 'Lazy Reader Chrome plugin',
            //     link: 'https://chrome.google.com/webstore/detail/lazy-reader/bacefjcibkjpklnloimkkmhpkihkcmoe'
            // }
        ]
    };

    return (
        <div className="other-detail">

            <h3>Professional Skill</h3>
            <div className="row">
                {data.skill.map((item, i) => (
                    <div className="tech-skill" key={i}>
                        <i className={'left dev-icon ' + item.className}></i>
                        <span className="left">{item.name}</span>
                        <span className="right">10</span>
                        <span className="right progress-bar">
                            <span
                                className="active"
                                style={{ width: 3 * 10 * item.value }}
                            ></span>
                            <div className="progress-bar-count">{item.value}</div>
                        </span>
                    </div>
                ))}
            </div>

            <h3>Professional Experience</h3>
            <div className="row">
                {data.experience.map((item, i) => (
                    <div className={'row company ' + (item.class || '')} key={i}>
                        <div className="row base">
                            <span className="left title">{item.name}</span>
                            <span className="right button">
                                {item.start} to {item.end}
                            </span>
                        </div>
                    </div>
                ))}
            </div>

            {
                data.works.length > 0 && (<>
                    <h3>Work Portfolio</h3>
                    <div className="row">
                        {data.works.map((item, i) => (
                            <div className="row company active" key={i}>
                                <div className="row base">
                                    <span className="left title">{item.name}</span>
                                    <span className="extra-link">
                                        <a href={item.link} target="_blank" rel="noreferrer">
                                            View
                                        </a>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div></>)
            }

            <div className="row">
                <span className="half left">
                    <h3>Education</h3>
                    {data.education.map((item, i) => (
                        <div className="edu-separator" key={i}>
                            <div className="row core-details">
                                <span className="left">{item.name}</span>
                                <span className="right">{item.year}</span>
                            </div>
                            <div className="row extra-details">
                                <span className="left">{item.institute}</span>
                            </div>
                        </div>
                    ))}
                </span>

                <span className="half right">
                    <h3>Hobbies</h3>
                    {data.hobbies.map((item, i) => (
                        <div className="row edu-separator" key={i}>
                            <span className="left">{item.name}</span>
                            <FontAwesome
                                className="right"
                                name={item.icon}
                                size="lg"
                            />
                        </div>
                    ))}
                </span>
            </div>

        </div>
    );
};

export default MySkillComponent;