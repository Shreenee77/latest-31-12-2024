import React, { useState, useEffect } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import homeData from "../../Data/Data.json";
import { Link } from "react-router-dom";
import image3 from "../../Assets/img/33.jpg";
import image2 from "../../Assets/img/44.jpg";
import image1 from "../../Assets/img/55.jpg";
import image4 from "../../Assets/img/junior.png";
import image6 from "../../Assets/img/Senior.png";
import image5 from "../../Assets/img/Subjunior.png";
import image7 from "../../Assets/img/Subsenior.png";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const { language } = useSelector((state) => state.language);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const home = [
    {
      margazhispecial: [
        {
          cardsd: [
            {
              id: 1,
              image: image1,
            },
            {
              id: 2,
              image: image2,
            },
            {
              id: 3,
              image: image3,
            },
          ],
        },
        {
          cardsd1: [
            {
              id: 1.1,
              image: image4,
            },
            {
              id: 2.1,
              image: image5,
            },
            {
              id: 3.1,
              image: image6,
            },
            {
              id: 4.1,
              image: image7,
            },
          ],
        },
      ],
    },
  ];

  const slides = [
    {
      title: "Explore the World of",
      spatitile: "Our Graduates",
      description: "",
      buttonLink: "about.html",
      Image: require("../../Assets/banner/slider_01.jpg"),
    },
    {
      title: "Join the Journey of",
      spatitile: "Innovation",
      description:
        "Experience the pinnacle of technology and creativity with us.",
      buttonLink: "services.html",
      Image: require("../../Assets/banner/slider_02.jpg"),
    },
    {
      title: "Build Your",
      spatitile: "Dream Career",
      description: "Empower your future with our world-class education.",
      buttonLink: "career.html",
      Image: require("../../Assets/banner/slider_03.jpg"),
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const margazhiSpecial = homeData[language]?.home[0]?.margazhispecial || [];
  const categorys = homeData[language]?.home[1]?.margazhispecial || [];
  const head = homeData[language]?.cardtitle || [];

  return (
    <>
      <div className="slides11"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="slides1" style={{ position: "relative"}}>
          {slides.map((slide, index) => (
            <div
            className={`slides ${index === currentSlide ? "active" : "inactive"}`}
            key={index}
            style={{
              backgroundImage: `url(${slide.Image})`,
            }}
          ></div>
          ))}
        </div>
      </div>
      {head.map((item, index) => (
        <div className="about" key={index}>
          <div className="container1">
            <ul
              className="row our-links"
             
            >
              <li
                className="col-sm-4 apply-online clearfix equal-hight"
                style={{
                  textAlign: "center",
                  background:
                    "linear-gradient(135deg, #00A6D6,rgb(53, 81, 110))",
                  borderRadius: "12px",
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  flex: "1 1 calc(33.333% - 20px)",
                }}
              >
                <Link to="/competition-form" style={{ textDecoration: "none" }}>
                  <div className="detail">
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        color: "#fff",
                        fontWeight: "600",
                        textAlign: "center",
                        marginTop: "40px",
                        width: "190px",
                        marginLeft: "20px",
                      }}
                    >
                      {item.title1}
                    </h3>
                  </div>
                </Link>
              </li>

              
              <li
                className="col-sm-4 prospects clearfix equal-hight"
                style={{
                  textAlign: "center",
                  background: "linear-gradient(135deg, #FF6A00, #FFA500)",
                  borderRadius: "12px",
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  flex: "1 1 calc(33.333% - 20px)", 
                }}
              >
                <Link to="/prospects" style={{ textDecoration: "none" }}>
                  <div className="detail">
                    <h3
                      style={{
                        marginTop: "40px",
                        fontSize: "1.5rem",
                        color: "#fff",
                        fontWeight: "600",
                        marginBottom: "10px",
                        width: "250px",
                        marginRight: "20px",
                        textAlign: "center",
                      }}
                    >
                      {item.title2}
                    </h3>
                  </div>
                </Link>
              </li>
              <li
                className="col-sm-4 certification clearfix equal-hight"
                style={{
                  textAlign: "center",
                  background:
                    "linear-gradient(135deg, #00A6D6,rgb(53, 81, 110))",
                  borderRadius: "12px",
                  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  flex: "1 1 calc(33.333% - 20px)", 
                }}
              >
                <Link to="/pay" style={{ textDecoration: "none" }}>
                  <div className="detail">
                    <h3
                      style={{
                        fontSize: "1.5rem",
                        color: "#fff",
                        fontWeight: "600",
                        marginTop: "40px",
                        textAlign: "center",
                        marginLeft: "40px",
                        width: "200px",
                      }}
                    >
                      {item.title3}
                    </h3>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ))}
      <div className="news-events padding-lg">
        <div className="container1">
          {margazhiSpecial.map((special, index) => (
            <div key={index}>
              <h2
                style={{
                  fontSize: "2.5rem", 
                  color: "#00A6D6",
                  fontWeight: "700", 
                  marginBottom: "20px",
                  textAlign: "center",
                  letterSpacing: "1px",
                }}
              >
                <span>{special.title}</span> {special.subtitle}
              </h2>
              <ul className="row cs-style-3">
                {home[0].margazhispecial.map((section, sectionIndex) =>
                  (section.cardsd || section.cardsd1).map((cardm) => (
                    <li
                      key={cardm.id}
                      className="col-sm-4"
                      style={{
                        listStyle: "none",
                        padding: "15px",
                        transition: "transform 0.3s ease",
                      }}
                    >
                      <div className="inner" style={{ position: "relative" }}>
                        <figure
                          className="card-figure"
                          style={{ position: "relative" }}
                        >
                          {special.card
                            ?.filter((card) => card.id === cardm.id) 
                            .map((filteredCard) => (
                              <div key={filteredCard.id} className="card">
                                <img
                                  src={cardm.image} 
                                  alt="Card Image"
                                  className="card-image"
                                  style={{
                                    width: "100%",
                                    height: "auto",
                                    borderRadius: "10px",
                                    transition: "transform 0.3s ease",
                                  }}
                                />

                                <div
                                  className="card"
                                  style={{
                                    position: "absolute",
                                    bottom: "0",
                                    left: "0",
                                    right: "0",
                                    background:
                                      "linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8))",
                                    color: "#fff",
                                    borderRadius: "0 0 10px 10px",
                                    // padding: "20px",
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-end",
                                    width: "100%",
                                    height: "100px",
                                    boxSizing: "border-box",
                                  }}
                                >
                                  <h5
                                    className="card-title"
                                    style={{
                                      listStyle: "none",
                                      padding: "15px",
                                      transition: "transform 0.3s ease",
                                    }}
                                  >
                                    {filteredCard.cardtitle || "Title"}
                                  </h5>
                                  <h6
                                    className="card-content"
                                    style={{
                                      fontSize: "1.1rem",
                                      lineHeight: "1.6",
                                      color: "#f1f1f1",
                                      marginTop: "5px",
                                      letterSpacing: "0.5px",
                                    }}
                                  >
                                    {filteredCard.cardcontent || "Content"}
                                  </h6>
                                </div>
                              </div>
                            ))}
                        </figure>
                      </div>
                    </li>
                  ))
                )}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Banner;
