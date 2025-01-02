import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import jsondata from '../../Data/Data.json';
import image38 from '../../Assets/gallery/img30.jpg'
import image39 from '../../Assets/gallery/img902.jpg'
import image40 from '../../Assets/gallery/img29 (50).jpg'
import image41 from '../../Assets/gallery/img29 (49).jpg'
import image42 from '../../Assets/gallery/img29 (48).jpg'
import image43 from '../../Assets/gallery/img29 (47).jpg'
import image44 from '../../Assets/gallery/img29 (46).jpg'
import image45 from '../../Assets/gallery/img29 (45).jpg'
import image46 from '../../Assets/gallery/img29 (44).jpg'
import image47 from '../../Assets/gallery/img29 (43).jpg'
import image48 from '../../Assets/gallery/img29 (42).jpg'
import image49 from '../../Assets/gallery/img29 (41).jpg'
import image51 from '../../Assets/gallery/img29 (40).jpg'
import image50 from '../../Assets/gallery/img29 (39).jpg'
import image90 from '../../Assets/gallery/img29 (38).jpg'
import image52 from '../../Assets/gallery/img29 (37).jpg'
import image53 from '../../Assets/gallery/img29 (36).jpg'
import image55 from '../../Assets/gallery/img29 (35).jpg'
import image56 from '../../Assets/gallery/img29 (34).jpg'
import image57 from '../../Assets/gallery/img29 (33).jpg'
import image58 from '../../Assets/gallery/img29 (32).jpg'
import image59 from '../../Assets/gallery/img29 (31).jpg'
import image60 from '../../Assets/gallery/img29 (30).jpg'
import image61 from '../../Assets/gallery/img29 (29).jpg'
import image62 from '../../Assets/gallery/img29 (28).jpg'
import image63 from '../../Assets/gallery/img29 (27).jpg'
import image64 from '../../Assets/gallery/img29 (26).jpg'
import image65 from '../../Assets/gallery/img29 (25).jpg'
import image66 from '../../Assets/gallery/img29 (24).jpg'
import image67 from '../../Assets/gallery/img29 (23).jpg'
import image68 from '../../Assets/gallery/img29 (22).jpg'
import image69 from '../../Assets/gallery/img29 (21).jpg'
import image70 from '../../Assets/gallery/img29 (20).jpg'
import image71 from '../../Assets/gallery/img29 (19).jpg'
import image72 from '../../Assets/gallery/img29 (18).jpg'
import image73 from '../../Assets/gallery/img29 (17).jpg'
import image74 from '../../Assets/gallery/img29 (16).jpg'
import image75 from '../../Assets/gallery/img29 (15).jpg'
import image76 from '../../Assets/gallery/img29 (14).jpg'
import image77 from '../../Assets/gallery/img29 (13).jpg'
import image78 from '../../Assets/gallery/img29 (12).jpg'
import image79 from '../../Assets/gallery/img29 (11).jpg'
import image80 from '../../Assets/gallery/img29 (10).jpg'
import image81 from '../../Assets/gallery/img29 (9).jpg'
import image82 from '../../Assets/gallery/img29 (8).jpg'
import image83 from '../../Assets/gallery/img29 (7).jpg'
import image84 from '../../Assets/gallery/img29 (6).jpg'
import image85 from '../../Assets/gallery/img29 (5).jpg'
import image86 from '../../Assets/gallery/img29 (4).jpg'
import image87 from '../../Assets/gallery/img29 (3).jpg'
import image88 from '../../Assets/gallery/img29 (2).jpg'


const Gallery4 = () => {
  const [activeHeader, setActiveHeader] = useState('IsaiPerairignarkal');

  const headerNames = [
    { name: 'DeivigaArulalarkal', path: '/DeivigaArulalarkal' },
    { name: 'IsaiArulalarkal', path: '/IsaiArulalarkal' },
    { name: 'IsaiKalaivanarkal', path: '/IsaiKalaivanarkal' },
    { name: 'IsaiPerairignarkal', path: '/IsaiPerairignarkal' },
    { name: 'PannIsaiPerarignarkal', path: '/PannIsaiPerarignarkal' },
  ];

  const images = [
     image38 ,
     image39 ,
      image40 ,
     image41 ,
     image42 ,
     image43 ,
    image44 ,
     image45 ,
     image46 ,
     image47 ,
     image48 ,
     image49 ,
     image50 ,
     image90 ,
image51,
    image52 ,
     image53 ,
     image55 ,
     image56 ,
     image57 ,
     image58 ,
     image59 ,
     image60 ,
     image61 ,
     image62 ,
     image63 ,
     image64 ,
     image65 ,
     image66 ,
     image67 ,
     image68 ,
     image69 ,
     image70 ,
     image71 ,
     image72 ,
     image73 ,
     image74 ,
     image75 ,
      image76 ,
 image77 ,
 image78,
image79 ,
 image80 ,
 image81 ,
 image82,
 image83 ,
 image84 ,
 image85 ,
 image86 ,
 image87 ,
 image88 



  ];

  const { language } = useSelector((state) => state.language);
  const galleryd = jsondata[language]?.blog4 || [];

  const translations = {
    'DeivigaArulalarkal': 'தெய்வீக அருளாளர்கள்', 
    'IsaiArulalarkal': 'இசை அருளாளர்கள்',
    'IsaiKalaivanarkal': 'இசை கலைவாணர்கள்',
    'IsaiPerairignarkal': 'இசைப் பேரறிஞர்கள்',
    'PannIsaiPerarignarkal': 'பண் இசைப் பேரறிஞர்கள்',
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
      {
        threshold: 0.2,
      }
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

   transform: isVisible
      ? index % 2 === 0
        ? 'translateX(0)'
        : 'translateX(0)'
      : index % 2 === 0
      ? 'translateX(-100px)'
      : 'translateX(100px)',
    transition: `opacity 1s ease, transform 1s ease, transition-delay ${index * 0.3}s`, // Sequential delay for each image
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
          {galleryd[0]?.gallery4?.[index]?.title || 'No Title Available'}
        </div>
      </div>
      
    ));

  return (
    <div>
      <div className="header-container" style={headerStyle}>
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

      <div style={galleryContainerStyle}>{renderImages(images.slice(0,48))}</div>

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
    <img src={image86} alt="Nammalvaar" style={galleryImageStyle} />
    <div style={imageNameStyle}>
      {language === 'tamil' ? 'திரு.சஞ்சய் சுப்பிரமணியம்' : 'Mr. Sanjay Subrahmanyan'}
    </div>
  </div>
  <div className="gallery-item" style={{ ...galleryItemStyle(true, 16), padding: '30px' }}>
    <img src={image87} alt="Nammalvaar" style={galleryImageStyle} />
    <div style={imageNameStyle}>
      {language === 'tamil' ? 'திரு.டி.எம்.கிரிஷ்ணா' : 'Mr. T.M. Krishna'}
    </div>
  </div>
  <div className="gallery-item" style={{ ...galleryItemStyle(true, 16), padding: '30px' }}>
    <img src={image88} alt="Nammalvaar" style={galleryImageStyle} />
    <div style={imageNameStyle}>
      {language === 'tamil' ? 'உமையாள்புரம் திரு. கே. சிவராமன்' : 'Umayalpuram Thiru. K. Sivaraman'}
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
                 align-items: center;
            }

            .header-container a {
              margin-bottom: 10px;
            }

            .gallery-item {
              transform: none !important;  /* Disable shake on small screens */
              opacity: 1 !important;        /* Ensure image is visible */
              transition: none !important;  /* Disable transition effects */
            }
               .lastone {
              flex-direction: column;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Gallery4;
