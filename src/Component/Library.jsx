import React, { useState } from 'react';
import jsondata from '../Data/Data.json';
import { useSelector } from 'react-redux';

const Library = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setOpenIndex(index);
  };

  const handleMouseLeave = () => {
    setOpenIndex(null);
  };

  const { language } = useSelector((state) => state.language);
  const galleryd = jsondata[language]?.library || [];
  const categories = galleryd[0]?.categories || [];
  const rows = Math.ceil(categories.length / 3);

  const headingText =
    language === 'tamil' ? 'தமிழ் இசை நூல் நிலையம்' : 'Tamil Isai Library';

    const headingTexts =
    language === 'tamil' ? 'புத்தகக் கூடத்தில் பின்வரும் தலைப்புகளுக்குட்பட்ட 3000க்கும் மேற்பட்ட புத்தகக் கூடங்கள் உள்ளன' : 'The Library has a collection of over 3000 books under the following heads';

  return (
    <div className="library-container">
      <style>
        {`
          .library-container {
            width: 100%;
            padding: 20px;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }

          .panel-group .panel {
            margin-bottom: 15px;
            padding: 10px;
            box-shadow: 0 2px 5px rgba(0,0,0,0.1);
            transition: transform 0.2s ease-in-out;
            background-color: transparent;
          }

          .panel-heading {
            text-align: left;
            padding: 10px 15px;
          }

          .panel-title {
            font-size: 18px;
            font-weight: bold;
            margin: 0;
            display: flex;
            align-items: center;
          }

          .panel-body {
            margin-top: 15px;
            padding: 15px;
            font-size: 14px;
            line-height: 1.5;
          }

          .panel-collapse {
            transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
            overflow: hidden;
            opacity: 0;
            transform: scaleY(0);
            transform-origin: top;
          }

          .panel-collapse.show {
            opacity: 1;
            transform: scaleY(1);
          }

          .panel-title a {
            display: flex;
            justify-content: space-between;
            width: 100%;
            color: #333;
            text-decoration: none;
          }

          .panel-title a:hover {
            color: #0682c4;
          }

          .panel-title a span {
            font-size: 14px;
            font-weight: bold;
            margin-left: 10px;
          }

          .panel-title a span:first-child {
            margin-left: 0;
          }

          .header-gradient {
            color: white;
            text-align: center;
            padding: 20px;
            font-size: 20px;
            font-weight: bold;
            border-radius: 10px;
            margin-bottom: 30px;
          }

          .nope {
            display: flex;
            flex-wrap: wrap;
            margin: 0 -15px;
          }

          .pan {
            padding: 0 15px;
            flex: 0 0 33.333%;
            max-width: 33.333%;
            margin-bottom: 15px;
          }

          .panel {
            position: relative;
          }

          .panel:hover .panel-collapse {
            display: block;
          }

          .panel-collapse {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            z-index: 1;
            background-color: #fff;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
          }

          @media (max-width: 768px) {
            .nope {
              flex-direction: column;
              margin: 0;
            }

            .pan {
              flex: 0 0 100%;
              max-width: 100%;
              margin-bottom: 10px;
            }
          }
        `}
      </style>

      <div className="col-sm-12" style={{ backgroundColor: 'white' }}>

        <div
          style={{
            textAlign: 'center',
            padding: '20px',
            fontSize: '20px',
            color: "white",
            fontWeight: 'bold',
            borderRadius: '10px',
            marginBottom: '30px',
            background: "linear-gradient(to right, #3fa3e0,rgb(58, 133, 173),rgb(20, 61, 126))",
          }}
        >
          {headingText}
        </div>

        <div
          style={{
            textAlign: 'center',

            padding: '5px',
            fontSize: '13px',
            color: "black",
            fontWeight: 'bold',
            borderRadius: '10px',
            marginBottom: '30px',
            // background: "linear-gradient(to right, #3fa3e0,rgb(58, 133, 173),rgb(20, 61, 126))",
          }}
        >
          {headingTexts}
        </div>

        <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
          {[...Array(rows)].map((_, rowIndex) => (
            <div className="row nope" key={rowIndex}>
              {Array.from({ length: 3 }).map((_, colIndex) => {
                const categoryIndex = rowIndex * 3 + colIndex;
                if (categoryIndex < categories.length) {
                  const category = categories[categoryIndex];
                  return (
                    <div className="col-md-4 pan" key={colIndex}>
                      <div
                        className="panel panel-default"
                        onMouseEnter={() => handleMouseEnter(categoryIndex)}
                        onMouseLeave={handleMouseLeave}
                      >
                        <div className="panel-heading" role="tab" id={`heading${categoryIndex}`}>
                          <h4 className="panel-title">
                            <a
                              role="button"
                              aria-expanded={openIndex === categoryIndex ? 'true' : 'false'}
                              aria-controls={`collapse${categoryIndex}`}
                              style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                              }}
                            >
                              <span>{openIndex === categoryIndex ? '- ' : '+ '}{category?.title || 'No Title Available'}</span>
                            </a>
                          </h4>
                        </div>
                        {openIndex === categoryIndex && (
                          <div
                            id={`collapse${categoryIndex}`}
                            className={`panel-collapse show`}
                            role="tabpanel"
                            aria-labelledby={`heading${categoryIndex}`}
                          >
                            <div className="panel-body">
                              <p>{category?.description || 'No Description Available'}</p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                }
                return null;
              })}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Library;
