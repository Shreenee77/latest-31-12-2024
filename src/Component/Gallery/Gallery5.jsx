import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jsondata from '../../Data/Data.json';
import image55 from '../../Assets/gallery/img31 (10).jpg';
import image56 from '../../Assets/gallery/img31 (9).jpg';
import image57 from '../../Assets/gallery/img31 (8).jpg';
import image58 from '../../Assets/gallery/img31 (7).jpg';
import image59 from '../../Assets/gallery/img31 (6).jpg';
import image60 from '../../Assets/gallery/img31 (5).jpg';
import image61 from '../../Assets/gallery/img31 (4).jpg';
import image62 from '../../Assets/gallery/img31 (3).jpg';
import image63 from '../../Assets/gallery/img31 (2).jpg';
import image64 from '../../Assets/gallery/img31 (1).jpg';

const Gallery5 = () => {
  const [activeHeader, setActiveHeader] = useState('PannIsaiPerarignarkal');

  const headerNames = [
    { name: 'DeivigaArulalarkal', path: '/DeivigaArulalarkal' },
    { name: 'IsaiArulalarkal', path: '/IsaiArulalarkal' },
    { name: 'IsaiKalaivanarkal', path: '/IsaiKalaivanarkal' },
    { name: 'IsaiPerairignarkal', path: '/IsaiPerairignarkal' },
    { name: 'PannIsaiPerarignarkal', path: '/PannIsaiPerarignarkal' },
  ];

  const translations = {
    DeivigaArulalarkal: 'தெய்வீக அருளாளர்கள்',
    IsaiArulalarkal: 'இசை அருளாளர்கள்',
    IsaiKalaivanarkal: 'இசை கலைவாணர்கள்',
    IsaiPerairignarkal: 'இசைப் பேரறிஞர்கள்',
    PannIsaiPerarignarkal: 'பண் இசைப் பேரறிஞர்கள்',
  };

  const { language } = useSelector((state) => state.language);
  const galleryd = jsondata[language]?.blog5 || [];

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
    fontSize: '14px',
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
    { src: image55 },
    { src: image56 },
    { src: image57 },
    { src: image58 },
    { src: image59 },
    { src: image60 },
    { src: image61 },
    { src: image62 },
    { src: image63 },
    { src: image64 },
  ];

  const galleryContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
    justifyContent: 'center',
  };

  const galleryItemStyle = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#fff',
    transition: 'transform 0.3s ease',
  };

  const galleryImageStyle = {
    width: '100%',
    padding:"20px",
    height: '280px',
    objectFit: 'cover',
    borderRadius: '8px',
  };

  const imageNameStyle = {
    marginTop: '10px',
    fontSize: '14px',
    fontWeight: '600',
    color: '#2D7C9E',
    textAlign: 'center',
    padding: '10px 0',
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

      <div style={galleryContainerStyle}>
        {images.map((image, index) => (
          <div key={index} style={galleryItemStyle}>
            <img src={image.src} alt={`Gallery ${index}`} style={galleryImageStyle} />
            <div style={imageNameStyle}>
              {galleryd[0]?.gallery5?.[index]?.title || 'No Title Available'}
            </div>
          </div>
        ))}
      </div>

      <style>
        {`
         @keyframes fadeIn {
              0% {
                opacity: 0;
                transform: translateY(-20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
  
            @keyframes slideInFromLeft {
              0% {
                opacity: 0;
                transform: translateX(-100px);
              }
              100% {
                opacity: 1;
                transform: translateX(0);
              }
            }
  
            @keyframes slideInFromRight {
              0% {
                opacity: 0;
                transform: translateX(100px);
              }
              100% {
                opacity: 1;
                transform: translateX(0);
              }
            }
  

          @media (max-width: 768px) {
            .header-container {
              flex-direction: column;
              align-items: center;
            }

            .header-container a {
              margin-bottom: 10px;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Gallery5;
