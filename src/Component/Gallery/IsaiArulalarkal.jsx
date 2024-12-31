import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jsondata from '../../Data/Data.json';

import image18 from '../../Assets/gallery/img18.jpg';
import image19 from '../../Assets/gallery/img19.jpg';
import image20 from '../../Assets/gallery/img20.jpg';

const IsaiArulalarkal = () => {
  const [activeHeader, setActiveHeader] = useState('IsaiArulalarkal');
  const headerNames = [
    { name: 'DeivigaArulalarkal', path: '/DeivigaArulalarkal' },
    { name: 'IsaiArulalarkal', path: '/IsaiArulalarkal' },
    { name: 'IsaiKalaivanarkal', path: '/IsaiKalaivanarkal' },
    { name: 'IsaiPerairignarkal', path: '/IsaiPerairignarkal' },
    { name: 'PannIsaiPerarignarkal', path: '/PannIsaiPerarignarkal' },
  ];

  const { language } = useSelector((state) => state.language);
  const galleryd = jsondata[language]?.blog2 || [];

  const translations = {
    DeivigaArulalarkal: 'தெய்வீக அருளாளர்கள்',
    IsaiArulalarkal: 'இசை அருளாளர்கள்',
    IsaiKalaivanarkal: 'இசை கலைவாணர்கள்',
    IsaiPerairignarkal: 'இசைப் பேரறிஞர்கள்',
    PannIsaiPerarignarkal: 'பண் இசைப் பேரறிஞர்கள்',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '30px',
    marginBottom: '40px',
    padding: '15px 30px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    position: 'relative',
    animation: 'fadeIn 1s ease-in-out',
  };

  const headerItemStyle = (name) => ({
    fontSize: '12px',
    fontWeight: '600',
    color: activeHeader === name ? '#2D7C9E' : '#333333',
    textTransform: 'capitalize',
    cursor: 'pointer',
    padding: '12px 24px',
    borderRadius: '5px',
    transition: 'color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease',
    boxShadow: activeHeader === name ? '0 0 10px rgba(28, 181, 205, 0.6)' : 'none',
  });

  const images = [
    { src: image18 },
    { src: image19 },
    { src: image20 },
  ];

  const galleryContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
 
  };

  const galleryItemStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    textAlign: 'center',
    flex: '1 1 calc(33.33% - 30px)',
    margin: '10px',
  };

  const galleryImageStyle = {
    width: '100%',
    height: '200px',
    objectFit: 'contain',
    transition: 'transform 0.3s ease',
  };

  const imageNameStyle = {
    marginTop: '10px',
    fontSize: '13px',
    fontWeight: '600',
    color: '#FFF',
    textShadow: '0px 1px 1px ',
    color: 'rgba(11, 47, 57, 0.6)',
    padding: '8px 12px',
    borderRadius: '5px',
    maxWidth: '100%',
    textAlign: 'center',
    transition: 'background 0.3s ease, transform 0.3s ease',
  };

  return (
    <div>
      <div style={headerStyle} className="header-container">
        {headerNames.map(({ name, path }) => (
          <Link
            key={name}
            to={path}
            style={headerItemStyle(name)}
            onClick={() => setActiveHeader(name)}
          >
            {language === 'tamil' && translations[name] ? translations[name] : name}
          </Link>
        ))}
      </div>

      <div style={{ textAlign: 'center' }}>
        <h6 style={{ fontSize: '26px', fontWeight: '500', color: '#2D7C9E', marginBottom: '40px' }}>
          {language === 'tamil' && translations[activeHeader] ? translations[activeHeader] : activeHeader}
        </h6>
      </div>

      <div style={galleryContainerStyle} className="gallery-container">
        {images.map((image, index) => (
          <div key={index} className="gallery-item" style={galleryItemStyle}>
            <img src={image.src} alt={`Gallery ${index + 1}`} style={galleryImageStyle} />
            <div style={imageNameStyle}>
              {galleryd[0]?.gallery2?.[index]?.title || 'No Title Available'}
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .header-container {
              flex-direction: column;
              align-items: center;
            }

            .header-container a {
              margin-bottom: 10px;
            }
            .gallery-container {
              flex-direction: column;
              gap: 20px;
            }

            .gallery-item {
              flex: 1 1 100%;
              margin: 0 auto;
              width: 90%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default IsaiArulalarkal;
