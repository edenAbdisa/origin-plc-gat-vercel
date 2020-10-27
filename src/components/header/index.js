import React from "react"
import { HeaderContainer } from "./styles"
import "./styles"
import location from "../../assets/icon/location-outline.svg"
import NavDropdown from "react-bootstrap/NavDropdown"

import logo2crop from "../../images/logo2crop.jpg"
import call from "../../assets/icon/call-outline.svg"
import { Link } from "gatsby"
import mail from "../../assets/icon/mail-outline.svg"
const Header = () => {
  return (
    <HeaderContainer style={{paddingTop:"0px"}}>
      <div
        style={{paddingBottom: "0rem !important" }}
      >
        <div className="container" >
          <div className="row d-flex align-items-start align-items-top px-3 px-md-0">
            <div className="col-md-4 d-flex mb-2 mb-md-0">
              <a className="navbar-brand d-flex" href="/" style={{paddingTop:"0px"}}>
                <img src={logo2crop} style={{ height: "7rem",marginRight:"1rem",paddingTop:"1rem"}} />
                <span
                  style={{
                    paddingTop: "3.6rem",
                    fontSize: "18px",
                    fontWeight: "600",
                    lineHeight: "1",
                    whiteSpace: "nowrap",
                    color:"#2598c2"
                  }}
                >
                  Origin Logistics PLC <br />
                  <small style={{ color: "#ffa931",fontSize: "70%"}}>
                  We strive for customer satisfaction
                  </small>
                </span>
              </a>
            </div>
            <div className="col-md-3 d-flex topper mb-md-0 mb-2 align-items-top" style={{  paddingTop: "2rem"}}>
              <div className="icon d-flex justify-content-center align-items-center" >
                <span className="fa fa-paper-plane">
                  <img
                    src={call}
                    style={{ height: "40px", width: "40px", color: "#ffa931" }}
                  />
                </span>
              </div>
              <div className="textpl-3 pl-md-3">
                <p
                  className="hr"
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    margin: "0em"
                  }}
                >
                  <span>Call us</span>
                </p>
                <p
                  className="con"
                  style={{
                    fontSize: "12px",
                    fontWeight: "300",
                    lineHeight: "1.8",
                    margin: "0em",
                    color: "#999999",
                  }}
                >
                  <span>+251 11 6 14 89 93</span> <br />{" "}
                  <span>+2519 84 79 41 70</span>
                </p>
              </div>
            </div>
            <div className="col-md-3 d-flex topper mb-md-0 align-items-top" style={{  paddingTop: "2rem"}}>
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="fa fa-paper-plane">
                  <img
                    src={location}
                    style={{ height: "40px", width: "40px", color: "#ffa931" }}
                  />
                </span>
              </div>
              <div className=" text pl-3 pl-md-3">
                <p
                  className="hr"
                  style={{ fontSize: "13px", fontWeight: "600", margin: "0em" }}
                >
                  <span>Our Location</span>
                </p>
                <p
                  className="con"
                  style={{
                    fontSize: "12px",
                    fontWeight: "300",
                    lineHeight: "1.8",
                    color: "#999999",
                    marginBottom:"0px"
                  }}
                >
                  Trans Tower 7th floor Saris infront of Nifas silk paint
                  factory
                </p>
              </div>
            </div>
            <div className="col-md-2 d-flex topper mb-md-0 align-items-top" style={{  paddingTop: "2rem"}}>
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="fa fa-paper-plane">
                  <img
                    src={mail}
                    style={{ height: "40px", width: "40px", color: "#ffa931" }}
                  />
                </span>
              </div>
              <div className="text pl-3 pl-md-3">
                <p
                  className="hr"
                  style={{ fontSize: "13px", fontWeight: "600", margin: "0em" }}
                >
                  <span>Email</span>
                </p>
                <p
                  className="con"
                  style={{
                    fontSize: "12px",
                    fontWeight: "300",
                    lineHeight: "1.8",
                    color: "#999999",
                  }}
                >
                    gm@originlogisticsplc.com  
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav
        style={{ backgroundColor: "#042e4f" }}
        className="navbar navbar-expand-lg navbar-dark ftco-navbar-light navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm"
        id="ftco-navbar"
      >
        <div className="container d-flex align-items-center">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#ftco-nav"
            aria-controls="ftco-nav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="fa fa-bars"></span> Menu
          </button>
          <div
            className="collapse navbar-collapse"
            id="ftco-nav"
            style={{
              fontSize: "14px",
              fontWeight: "500",
              textTransform: "uppercase",
              letterSpacing: "2px",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              paddingRight: "25px",
              paddingLeft: "25px",
            }}
          >
            <ul className="navbar-nav m-auto">
              <li className="nav-item active">
                <Link to="/" className="nav-link" style={{color:"#ffffff"}}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about/" className="nav-link" style={{color:"#ffffff"}}>
                  About
                </Link>
              </li>
              <li className="nav-item drop" style={{color:"#ffffff"}}>
                <NavDropdown title={
        <span style={{color:"#ffffff"}}>Service</span>
    } >
                  <NavDropdown.Item >
                    <Link to="/customClearing/">
                    Custom Clearing </Link>
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                   <Link to="/portClearing/">Port Clearing</Link> 
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                  <Link to="/importingEquipments/">Importing goods</Link> 
                  </NavDropdown.Item>
                  <NavDropdown.Item>
                  <Link  to="/transportation/">Transportation</Link> 
                  </NavDropdown.Item>
                  <NavDropdown.Item >
                  <Link to="/consultationAndFacilitation/">Consultation and facilitation</Link> 
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li className="nav-item">
                <Link to="/gallery/" className="nav-link" style={{color:"#ffffff"}}>
                  Gallery
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/customers/" className="nav-link" style={{color:"#ffffff"}}>
                  Customers
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contact/" className="nav-link" style={{color:"#ffffff"}}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </HeaderContainer>
  )
}

export default Header
