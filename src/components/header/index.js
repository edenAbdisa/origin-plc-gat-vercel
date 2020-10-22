import React from "react"
import { HeaderContainer } from "./styles"
import "./styles"
import location from "../../assets/icon/location-outline.svg"
import NavDropdown from "react-bootstrap/NavDropdown"
import "../../assets/css/animate.css"
import "../../assets/css/animate.css"
import "../../assets/css/bootstrap-datepicker.css"
import "../../assets/css/bootstrap.min.css"
import "../../assets/css/flaticon.css"
import "../../assets/css/jquery.timepicker.css"
import "../../assets/css/magnific-popup.css"
import logo2 from "../../images/logo2.jpg"

import gallery from "../../pages/gallery.js"
import about from "../../pages/about.js"
import contact from "../../pages/contact.js"
import customers from "../../pages/customers.js"
import customClearing from "../../pages/customClearing.js"
import cargoHandling from "../../pages/cargoHandling.js"
import otherService from "../../pages/otherService.js"
import portHandling from "../../pages/portHandling.js"
import transportation from "../../pages/transportation.js"
const Header = () => {
  return (
    <HeaderContainer>
      <div
        className="py-3"
        style={{ height: "5.8rem", padding: "1rem !important" }}
      >
        <div className="container">
          <div className="row d-flex align-items-start align-items-top px-3 px-md-0">
            <div className="col-md-4 d-flex mb-2 mb-md-0">
              <a className="navbar-brand d-flex align-items-center" href="/">
                <img src={logo2} style={{ height: "3.8rem" }} />
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    lineHeight: "1",
                    whiteSpace: "nowrap",
                  }}
                >
                  Origin Logistics PLC <br />
                  <small style={{ color: "#ffa931" }}>
                    Standard quality logistic
                  </small>
                </span>
              </a>
            </div>
            <div className="col-md-4 d-flex topper mb-md-0 mb-2 align-items-top">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="fa fa-map">
                  <img
                    src={location}
                    style={{ height: "40px", width: "40px", color: "#ffa931" }}
                  />
                </span>
              </div>
              <div className="pr-md-4 pl-md-3 pl-3 text">
                <p
                  className="hr"
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    margin: "0em",
                    color: "#ffa931",
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
            <div className="col-md-4 d-flex topper mb-md-0 align-items-top">
              <div className="icon d-flex justify-content-center align-items-center">
                <span className="fa fa-paper-plane">
                  <img
                    src={location}
                    style={{ height: "40px", width: "40px", color: "#ffa931" }}
                  />
                </span>
              </div>
              <div className="text pl-3 pl-md-3">
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
                  }}
                >
                  Trans Tower 7th floor Saris infront of Nifas silk paint
                  factory
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
                <a href="/" className="nav-link" style={{color:"#ffffff"}}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href={about} className="nav-link" style={{color:"#ffffff"}}>
                  About
                </a>
              </li>
              <li className="nav-item" style={{color:"#ffffff"}}>
                <NavDropdown title={
        <span style={{color:"#ffffff"}}>Service</span>
    } >
                  <NavDropdown.Item href="customClearing">
                    Custom Clearing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="cargoHandling">
                    Port Clearing
                  </NavDropdown.Item>
                  <NavDropdown.Item href="portHandling">
                    Importing equipments
                  </NavDropdown.Item>
                  <NavDropdown.Item href="transportation">
                    Transportation
                  </NavDropdown.Item>
                  <NavDropdown.Item href="otherService">
                    Consultation and facilitation
                  </NavDropdown.Item>
                </NavDropdown>
              </li>
              <li className="nav-item">
                <a href={gallery} className="nav-link" style={{color:"#ffffff"}}>
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a href={customers} className="nav-link" style={{color:"#ffffff"}}>
                  Customers
                </a>
              </li>
              <li className="nav-item">
                <a href={contact} className="nav-link" style={{color:"#ffffff"}}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </HeaderContainer>
  )
}

export default Header
