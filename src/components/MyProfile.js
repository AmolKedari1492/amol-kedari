import React from 'react';
import 'normalize.css/normalize.css';
import '../styles/home.css';
import '../styles/font-awesome.css';
import FontAwesome from 'react-fontawesome';

const MyProfile = () => {

  const profile = {
    name: 'Amol Kedari',
    designation: 'Fullstack Developer',
    contact: '97XXXXXX81',
    address: 'Mumbai, Maharashtra',
    status: 'Single',
    email: 'kXXXXXXX@gmail.com',
    about: 'A coder who want to work on cutting-edge technology to develop new products.',
    misc: [
      { key: 'Experience', value: '10 years' },
      { key: 'Prefered Computer', value: 'Mac' },
      { key: 'Resume Updated', value: 'Jan, 2024' }
    ],
    languages: ['Marathi', 'Hindi', 'English'],
    portfolio: [
      { name: 'user', link: 'http://amolkedari.in/' },
      { name: 'wordpress', link: 'https://amolkedari.wordpress.com/' },
      { name: 'github', link: 'https://github.com/AmolKedari1492/' },
      { name: 'linkedin', link: 'https://www.linkedin.com/in/amol-kedari-7b22a7ba/' }
    ]
  };

  return (
    <div>
      <div className="image-wrapper">
        <div className="image"></div>
      </div>

      <div className="personal-info">
        <h2>{profile.name}</h2>
        <h4>{profile.designation}</h4>
      </div>

      <div className="other-detail">
        <div className="default-panel">
          <FontAwesome name="map-marker" size="lg" />
          <span className="address">{profile.address}</span>
        </div>

        <div className="default-panel">
          <FontAwesome name="envelope-open-o" />
          <span className="email">{profile.email}</span>
        </div>

        <div className="default-panel">
          <FontAwesome name="phone" size="lg" />
          <span className="contact">{profile.contact}</span>
        </div>

        <div className="default-panel">
          <FontAwesome name="male" size="lg" />
          <span className="status">{profile.status}</span>
        </div>

        <hr />
        <h5>About</h5>
        <div className="row">{profile.about}</div>

        <hr />
        <h5>Language</h5>
        <div>
          {profile.languages.map((lang, i) => (
            <div className="lang" key={i}>
              <span className="lang-text">{lang}</span>
            </div>
          ))}
        </div>

        <hr />
        <h5>Portfolio</h5>
        <div>
          {profile.portfolio.map((item, i) => (
            <span className="social-link" key={i}>
              <a href={item.link} target="_blank" rel="noreferrer">
                <FontAwesome name={item.name} size="lg" />
              </a>
            </span>
          ))}
        </div>

        <hr />
        <div>
          <h5>Misc</h5>
          <div>
            {profile.misc.map((item, i) => (
              <div className="row" key={i}>
                <span className="left">{item.key}</span>
                <span className="right">{item.value}</span>
              </div>
            ))}
          </div>
        </div>

        <hr />
      </div>
    </div>
  );
};

export default MyProfile;