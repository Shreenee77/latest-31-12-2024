import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jsondata from '../../Data/Data.json';
import image21 from '../../Assets/gallery/img32.jpg';
import image22 from '../../Assets/gallery/img27 (1).jpg';
import image23 from '../../Assets/gallery/img27 (2).jpg';
import image24 from '../../Assets/gallery/img27 (3).jpg';
import image25 from '../../Assets/gallery/img27 (4).jpg';
import image26 from '../../Assets/gallery/img27 (5).jpg';
import image27 from '../../Assets/gallery/img27 (6).jpg';
import image28 from '../../Assets/gallery/img27 (7).jpg';
import image29 from '../../Assets/gallery/img27 (8).jpg';
import image30 from '../../Assets/gallery/img27 (9).jpg';
import image31 from '../../Assets/gallery/img27 (10).jpg';
import image32 from '../../Assets/gallery/img27 (11).jpg';
import image33 from '../../Assets/gallery/img27 (12).jpg';
import image34 from '../../Assets/gallery/img27 (13).jpg';
import image35 from '../../Assets/gallery/img27 (14).jpg';
import image36 from '../../Assets/gallery/img27 (15).jpg';
import image37 from '../../Assets/gallery/img27 (16).jpg';
import image38 from '../../Assets/gallery/img27 (17).jpg';
import image39 from '../../Assets/gallery/img27 (18).jpg';
import image40 from '../../Assets/gallery/img27 (19).jpg';
import image41 from '../../Assets/gallery/img27 (20).jpg';
import image42 from '../../Assets/gallery/img27 (21).jpg';
import image43 from '../../Assets/gallery/img27 (22).jpg';
import image44 from '../../Assets/gallery/img27 (23).jpg';
import image45 from '../../Assets/gallery/img27 (24).jpg';
import image46 from '../../Assets/gallery/img27 (25).jpg';
import image47 from '../../Assets/gallery/img27 (26).jpg';
import image48 from '../../Assets/gallery/img27 (27).jpg';
import image50 from '../../Assets/gallery/img27 (28).jpg';
import image51 from '../../Assets/gallery/img27 (29).jpg';
import image52 from '../../Assets/gallery/img27 (30).jpg';
import image53 from '../../Assets/gallery/img27 (31).jpg';
import image54 from '../../Assets/gallery/img27 (32).jpg';
import image55 from '../../Assets/gallery/img27 (33).jpg';
import image56 from '../../Assets/gallery/img27 (34).jpg';
import image57 from '../../Assets/gallery/img27 (35).jpg';
import image58 from '../../Assets/gallery/img27 (36).jpg';
import image59 from '../../Assets/gallery/img27 (37).jpg';
import image60 from '../../Assets/gallery/img27 (38).jpg';
import image61 from '../../Assets/gallery/img27 (39).jpg';
import image62 from '../../Assets/gallery/img27 (40).jpg';

import image64 from '../../Assets/gallery/img27 (42).jpg';
import image65 from '../../Assets/gallery/img27 (43).jpg';
import image66 from '../../Assets/gallery/img27 (44).jpg';
import image67 from '../../Assets/gallery/img27 (45).jpg';

const IsaiKalaivanarkal = () => {
  const [activeHeader, setActiveHeader] = useState('IsaiKalaivanarkal');

  const headerNames = [
    { name: 'DeivigaArulalarkal', path: '/DeivigaArulalarkal' },
    { name: 'IsaiArulalarkal', path: '/IsaiArulalarkal' },
    { name: 'IsaiKalaivanarkal', path: '/IsaiKalaivanarkal' },
    { name: 'IsaiPerairignarkal', path: '/IsaiPerairignarkal' },
    { name: 'PannIsaiPerarignarkal', path: '/PannIsaiPerarignarkal' },
  ];

  const translations = {
    'DeivigaArulalarkal': 'தெய்வீக அருளாளர்கள்',
    'IsaiArulalarkal': 'இசை அருளாளர்கள்',
    'IsaiKalaivanarkal': 'இசை கலைவாணர்கள்',
    'IsaiPerairignarkal': 'இசைப் பேரறிஞர்கள்',
    'PannIsaiPerarignarkal': 'பண் இசைப் பேரறிஞர்கள்',
  };

  const images = [
    image21, image22, image23, image24, image25, image26, image27, image28, image29,
    image30, image31, image32, image33, image34, image35, image36, image37, image38, 
    image39, image40, image41, image42, image43, image44, image45, image46, image47,
    image48, image50, image51, image52, image53, image54, image55, image56, image57,
    image58, image59, image60, image61, image62,  image64, image65, image66, 
    image67
  ];

  const { language } = useSelector((state) => state.language);
  const galleryd = jsondata[language]?.blog3 || [];

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

  const [visibleImages, setVisibleImages] = useState([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleImages((prev) => [...prev, entry.target]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const imageElements = document.querySelectorAll('.gallery-item');
    imageElements.forEach((image) => observer.observe(image));

    return () => observer.disconnect();
  }, []);

  const galleryContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
    gap: '20px',
    padding: '20px',
  };

  const galleryItemStyle = (isVisible, index) => ({
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: isVisible ? '0 4px 12px rgba(0, 0, 0, 0.2)' : 'none',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    textAlign: 'center',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateX(0)' : (index % 2 === 0 ? 'translateX(-100px)' : 'translateX(100px)'),
    transition: `opacity 1s ease, transform 1s ease, transition-delay ${index * 0.3}s`,
  });

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

  const renderImages = (images) =>
    images.map((src, index) => (
      <div
        key={index}
        className="gallery-item"
        style={galleryItemStyle(
          visibleImages.includes(document.querySelector(`.gallery-item:nth-child(${index + 1})`)),
          index
        )}
      >
        <img src={src} alt={`Gallery ${index + 1}`} style={galleryImageStyle} />
        <div style={imageNameStyle}>
          {galleryd[0]?.gallery3?.[index]?.title || 'No Title Available'}
        </div>
      </div>
    ));

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

      <div style={galleryContainerStyle}>{renderImages(images.slice(0,64))}</div>

      <div
  style={{
    display: 'flex',
    gap: '80px',
    justifyContent: 'center',
    padding: '20px',
  }}
  className="lastone"
>
  <div className="gallery-item" style={{ ...galleryItemStyle(true, 16), padding: '30px' }}>
    <img src={image65} alt="Nammalvaar" style={galleryImageStyle} />
    <div style={imageNameStyle}>
      {language === 'tamil' ? 'நம்மாழ்வார்' : 'Nammalvaar'}
    </div>
  </div>
  <div className="gallery-item" style={{ ...galleryItemStyle(true, 17), padding: '30px' }}>
    <img src={image66} alt="Arunagirinathar" style={galleryImageStyle} />
    <div style={imageNameStyle}>
      {language === 'tamil' ? 'அருணகிரிநாதர்' : 'Arunagirinathar'}
    </div>
  </div>
  <div className="gallery-item" style={{ ...galleryItemStyle(true, 17), padding: '30px' }}>
    <img src={image67} alt="Arunagirinathar" style={galleryImageStyle} />
    <div style={imageNameStyle}>
      {language === 'tamil' ? 'அருணகிரிநாதர்' : 'Arunagirinathar'}
    </div>
  </div>
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

          /* Ensure static layout for small screens */
          @media (max-width: 768px) {
            .header-container {
              flex-direction: column;
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

export default IsaiKalaivanarkal;
