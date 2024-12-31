import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import "../../Assets/css/Custom.css";
import { useSelector } from "react-redux";
import footData from "../../Data/Data.json";

const Footer = () => {
  const { language } = useSelector((state) => state.language);
  const footer = footData[language]?.footers || [];
  const add = footData[language]?.address || [];

  const footerData = {
    socialLinks: [
      {
        icon: <FaFacebook />,
        link: "https://www.facebook.com/people/Tamil-Isai-Kalloori-Tamil-Isai-Sangam/100064832676981",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        icon: <FaYoutube />,
        link: "https://www.youtube.com/channel/UCc52PkQqepI__b2vjg-dOkQ",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        icon: <FaInstagram />,
        link: "https://www.instagram.com/tamil_isai_kalloori?igshid=rzk92bvhobqq",
        target: "_blank",
        rel: "noopener noreferrer",
      },
      {
        icon: <FaPinterest />,
        link: "https://in.pinterest.com/tamilisaisangam/",
        target: "_blank",
        rel: "noopener noreferrer",
      },
    ],
  };

  return (
    <footer
      className="footer"
      style={{
        color: "white",
      }}
    >
      {/* Footer Bottom */}
      <div className="bottom">
        <div className="container1">
          <div className="row">
            {/* Connect with Us Section */}
            <div className="col-sm-4">
              <div className="connect-us">
                <h3>Connect with Us</h3>
                <ul className="follow-us clearfix">
                  {footerData.socialLinks.map((social, idx) => (
                    <li key={idx}>
                      <a
                        href={social.link}
                        target={social.target}
                        rel={social.rel}
                      >
                        {social.icon}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              {footer.map((footerItem, index) => (
                <div key={index}>
                  {footerItem.titles.map((titleItem, titleIndex) => (
                    <div className="foot" key={titleIndex}>
                      <h3>{titleItem.title}</h3>
                      
                      {titleItem.title1 && (
                        <h3 style={{ fontSize: "14px" }}><span>{titleItem.title1}</span>
                          <a
                            href="https://www.guruits.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                            
                              textDecoration: "none",
                              cursor: "pointer",
                              color: "#000000",
                            }}
                          >
                            GITS
                          </a>
                        </h3>
                      )}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Address and Map Section */}
            <div className="col-sm-4">
              <div className="subscribe">
                {add.map((item, index) => {
                  return (
                    <div
                      key={index}
                      className="address"
                      style={{
                        color: "white",
                        fontsize: "16px",
                        borderradius: "8px",
                        flex: 1,
                      }}
                    >
                      <h3>{item.title}</h3>
                      <div
                        className="address-details"
                        style={{ color: "white" }}
                      >
                        <p>
                          <strong>{item.title2}</strong>
                        </p>
                        <p>
                          <strong>{item.title3}</strong>
                        </p>
                        <p>
                          <strong>{item.title4}</strong>
                        </p>
                        <p>
                          <strong>{item.title5}</strong>
                        </p>
                        <p>
                          <strong>{item.title6}</strong>
                        </p>
                        <p>
                          <strong>{item.title7}</strong>
                        </p>
                        <p></p>
                        <a
                          href="mailto:info@tamilisaisangam.in"
                          style={{ color: "white" }}
                        >
                          <strong>{item.title8}</strong>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-sm-4">
              <div className="instagram">
                <div
                  className="map"
                  style={{
                    flex: 1,
                    height: "230px",
                    overflow: "hidden",
                    borderRadius: "8px",
                  }}
                >
                  <div className="map-container" style={{ height: "100%" }}>
                    <iframe
                      title="Google Map Location"
                      src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3886.1979599529645!2d80.27544!3d13.086637000000001!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526f53a6aaac27%3A0x3340167f0f9bd3c7!2sRaja%20Annamalai%20Mandram!5e0!3m2!1sen!2sus!4v1735040443215!5m2!1sen!2sus"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
