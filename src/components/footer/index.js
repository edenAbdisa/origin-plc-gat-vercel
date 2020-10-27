import React from "react"
import { FooterContainer } from "./styles" 
import location from "../../assets/icon/location-outline.svg"
import startbullet from "../../assets/icon/star-outline.svg"
import mobile from "../../assets/icon/phone-portrait-outline.svg"
import call from "../../assets/icon/call-outline.svg"
import mail from "../../assets/icon/mail-outline.svg"
import { Link } from "gatsby"
export const Footer = () => {
  return (
    <FooterContainer style={{paddingTop:"2em"}}> 
      <footer className="ftco-footer" >
        <div className="container pb-4">
          <div className="row">
            <div className="col-lg col-md-6">
              <div className="ftco-footer-widget">
                <h2
                  className="ftco-heading-2 logo d-flex align-items-center"
                  style={{
                    fontSize: "22px",
                    fontWeight: "900",
                    lineHeight: "1",
                    whiteSpace: "nowrap",
                    color: "#ffa931",
                  }}
                >
                  Origin Logistics PLC
                </h2>
                <p
                  style={{
                    color: "#868482",
                    fontSize: "16px",
                    fontWeight: "600",
                    lineHeight: "24px",
                  }}
                >
                  We strive for customer's satisfaction
                </p>
              </div>
            </div>

            <div className="col-lg col-md-6">
              <div className="ftco-footer-widget">
                <h2
                  className="ftco-heading-2"
                  style={{
                    color: "white",
                    fontSize: "22px",
                    fontWeight: "900",
                    lineHeight: "1",
                    whiteSpace: "nowrap",
                  }}
                >
                  Links
                </h2>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="/"
                      style={{
                        color: "#868482",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "24px",
                      }}
                    >
                      <span className="fa fa-chevron-right mr-2">
                        <img
                          src={startbullet}
                          style={{
                            height: "10px",
                            width: "10px",
                            color: "#ffa931",
                          }}
                        />
                      </span>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/about/"
                      style={{
                        color: "#868482",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "24px",
                      }}
                    >
                      <span className="fa fa-chevron-right mr-2">
                        <img
                          src={startbullet}
                          style={{
                            height: "10px",
                            width: "10px",
                            color: "#ffa931",
                          }}
                        />
                      </span>
                      About
                    </Link>
                  </li>
                  <li>
                    <Link to="/gallery/"
                      style={{
                        color: "#868482",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "24px",
                      }}
                    >
                      <span className="fa fa-chevron-right mr-2">
                        <img
                          src={startbullet}
                          style={{
                            height: "10px",
                            width: "10px",
                            color: "#ffa931",
                          }}
                        />
                      </span>
                      Gallery
                    </Link>
                  </li>
                  <li>
                    <Link to="/customers/"
                      style={{
                        color: "#868482",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "24px",
                      }}
                    >
                      <span className="fa fa-chevron-right mr-2">
                        <img
                          src={startbullet}
                          style={{
                            height: "10px",
                            width: "10px",
                            color: "#ffa931",
                          }}
                        />
                      </span>
                      Customer
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact/"
                      style={{
                        color: "#868482",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "24px",
                      }}
                    >
                      <span className="fa fa-chevron-right mr-2">
                        <img
                          src={startbullet}
                          style={{
                            height: "10px",
                            width: "10px",
                            color: "#ffa931",
                          }}
                        />
                      </span>
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg col-md-6">
              <div className="ftco-footer-widget">
                <h2
                  className="ftco-heading-2"
                  style={{
                    color: "white",
                    fontSize: "22px",
                    fontWeight: "900",
                    fontWeight: "600",
                    lineHeight: "1",
                    whiteSpace: "nowrap",
                  }}
                >
                  Services
                </h2>
                <ul className="list-unstyled">
                  <li>
                    <Link
                      to="/customClearing/"
                      style={{
                        color: "#868482",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "24px",
                      }}
                    >
                      Custom Clearing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/portClearing/"
                      style={{
                        color: "#868482",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "24px",
                      }}
                    >
                      Port Clearing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/importingEquipments/"
                      style={{
                        color: "#868482",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "24px",
                      }}
                    >
                      Importing Goods
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/transportation/"
                      style={{
                        color: "#868482",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "24px",
                      }}
                    >
                      Transportation
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/consultationAndFacilitation/"
                      style={{
                        color: "#868482",
                        fontSize: "16px",
                        fontWeight: "600",
                        lineHeight: "24px",
                      }}
                    >
                      Other Services
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg col-md-6">
              <div className="ftco-footer-widget">
                <h2
                  className="ftco-heading-2"
                  style={{
                    color: "white",
                    fontSize: "22px",
                    fontWeight: "900",
                    fontWeight: "600",
                    lineHeight: "1",
                    whiteSpace: "nowrap",
                  }}
                >
                  Visit/Contact us
                </h2>
                <div className="block-23 mb-3">
                  <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
                    <li>
                      <a
                        href="#"
                        style={{
                          color: "#868482",
                          fontSize: "16px",
                          fontWeight: "600",
                          lineHeight: "24px",
                        }}
                      >
                        <span className="fa fa-phone mr-3">
                          <img
                            src={call}
                            style={{
                              height: "14px",
                              width: "14px",
                              color: "#868482",
                            }}
                          />
                        </span>
                        +251 11 6 14 89 93
                        <br />
                        <span className="fa fa-phone mr-3">
                          <img
                            src={mobile}
                            style={{
                              height: "14px",
                              width: "14px",
                              color: "#ffa931",
                            }}
                          />
                        </span>
                        +2519 84 79 41 70
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        style={{
                          color: "#868482",
                          fontSize: "16px",
                          fontWeight: "600",
                          lineHeight: "24px",
                        }}
                      >
                        <span className="fa fa-paper-plane mr-3">
                          <img
                            src={mail}
                            style={{
                              height: "14px",
                              width: "14px",
                              color: "#ffa931",
                            }}
                          />
                        </span>
                        gm@originlogisticsplc.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        style={{
                          color: "#868482",
                          fontSize: "16px",
                          fontWeight: "600",
                          lineHeight: "24px",
                        }}
                      >
                        <span className="fa fa-phone mr-3">
                          <img
                            src={location}
                            style={{
                              height: "14px",
                              width: "14px",
                              color: "#868482",
                            }}
                          />
                        </span>
                        Addis Ababa, Nefas Silk <br /> subcity, Saris Kadisco,  <br />Trans Ethiopia Building 7th floor
                        
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="container-fluid "
          style={{ backgroundColor: "black", color: "#868482" }}
        >
          <div className="row">
            <div className="col-md-12 text-center">
              <p className="mb-0">
                Copyright &copy;2020 All rights reserved | Origin Logistics PLC{" "}
                <i className="fa fa-heart" aria-hidden="true"></i>
              </p>
            </div>
          </div>
        </div>
      </footer>
      <script src="https://unpkg.com/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://unpkg.com/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>
    </FooterContainer>
  )
}
