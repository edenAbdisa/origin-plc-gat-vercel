import React from "react"
import effsaa from "../images/effsaa.jpg"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Carousel from "react-bootstrap/Carousel"
import Button from "react-bootstrap/Button"
import ListGroup from "react-bootstrap/ListGroup"
import ListGroupItem from "react-bootstrap/ListGroupItem"
import trackloaded2 from "../images/trackloaded2.jpg"
import trackloaded from "../images/trackloaded.jpg"
import bluetrack from "../images/bluetrack.jpg"
import silvercylinder from "../images/silvercylinder.jpg"
import re from "../images/re.jpg"
import bondex from "../images/bondexbiglogo.jpg"
import aaccsalogo from "../images/aaccsalogo.png"
import socialresponsibility from "../images/socialresponsibility.png"
import continousimprovement from "../images/continousimprovement.png"
import customercentric from "../images/customercentric.jpg"
import respect from "../images/respect.png"
import teamworking from "../images/teamworking.png"
import Image from "react-bootstrap/Image"
import Card from "react-bootstrap/Card"
const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section
      className="hero-wrap js-fullheight"
      style={{ position: "relative", boxShadow: "-1px 6px 19px 0px #1b415f" }}
      dataStellarBackgroundRatio="0.5"
    >
      <Carousel interval="2000" >
        <Carousel.Item  >
          <img
            className="d-block w-100"
            src={re}
            alt="Origin Details" 
            
          />
          <Carousel.Caption style={{color:"#ffa931"}}>
            <h3>Origin Logistics PLC </h3>
            <p>To be Origin of society benefit </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={silvercylinder}
            alt="Third slide"
            style={{ height: "550px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={bluetrack}
            alt="Third slide"
            style={{ height: "550px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={trackloaded}
            alt="trackloaded"
            style={{ height: "550px" }}
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={trackloaded2}
            alt="trackloaded2"
            style={{ height: "550px" }}
          />
        </Carousel.Item>
      </Carousel>
    </section>
    <section className="ftco-section ftco-no-pt ftco-no-pb ftco-services-2">
      <div
        className="row d-flex"
        style={{ padding: "50px", paddingRight: "0px", paddingLeft: "150px" }}
      >
        <div className="col-md " style={{ height: "350px" }}>
          <Card style={{ width: "18rem", boxShadow: "6px 8px 12px #805416" }}>
            <ListGroup className="list-group-flush">
              <ListGroupItem
                style={{ backgroundColor: "#1b415f", color: "white" }}
              >
                Partner with
              </ListGroupItem>
            </ListGroup>

            <Card.Img variant="top" src={bondex} style={{ height: "170px" }} />
            <Card.Body>
              <Card.Text>
                Bondex project Logistics Co. Ltd <br />
                <br />
              </Card.Text>
            </Card.Body>
            <Card.Body style={{ paddingLeft: "20px", paddingRight: "20px" }}>
              <Button
                style={{ backgroundColor: "#ffa931", width: "100%" }}
                href="http://www.bondex.com.cn/en/"
              >
                Visit
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md " style={{ height: "350px" }}>
          <Card style={{ width: "18rem", boxShadow: "6px 8px 12px #805416" }}>
            <ListGroup className="list-group-flush">
              <ListGroupItem
                style={{ backgroundColor: "#1b415f", color: "white" }}
              >
                Member of
              </ListGroupItem>
            </ListGroup>

            <Card.Img variant="top" src={effsaa} style={{ height: "170px" }} />
            <Card.Body>
              <Card.Text>
                Ethiopian Freight Forwarders and Shipping Agents Association
              </Card.Text>
            </Card.Body>
            <Card.Body style={{ paddingLeft: "20px", paddingRight: "20px" }}>
              <Button
                style={{ backgroundColor: "#ffa931", width: "100%" }}
                href="http://www.effsaa.org/"
              >
                Visit
              </Button>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md " style={{ height: "350px" }}>
          <Card style={{ width: "18rem", boxShadow: "6px 8px 12px #805416" }}>
            <ListGroup
              className="list-group-flush"
              style={{ backgroundColor: "#1b415f" }}
            >
              <ListGroupItem
                style={{ backgroundColor: "#1b415f", color: "white" }}
              >
                Member of
              </ListGroupItem>
            </ListGroup>

            <Card.Img
              variant="top"
              src={aaccsalogo}
              style={{ height: "170px" }}
            />
            <Card.Body>
              <Card.Text>
                Addis Ababa Chamber of Commerce Sectorial Associations
              </Card.Text>
            </Card.Body>
            <Card.Body style={{ paddingLeft: "20px", paddingRight: "20px" }}>
              <Button
                style={{ backgroundColor: "#ffa931", width: "100%" }}
                href="https://addischamber.com/"
              >
                Visit
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
    <section
      className="ftco-section ftco-no-pt ftco-no-pb ftco-services-2"
      style={{
        backgroundColor: "#ffa931",
        padding: "50px",
        paddingLeft: "150px",
        boxShadow: "6px 8px 12px #805416",
      }}
    >
      <div className="container" style={{ margin: "0px" }}>
        <div className="row d-flex">
          <div className="col-md-7 py-5">
            <div className="py-lg-5">
              <div className="row justify-content-center pb-5">
                <div className="col-md-12 heading-section ftco-animate">
                  <h2 className="mb-3">Why Choose Origin Logistics PLC</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                  <div className="media block-6 services d-flex">
                    <div className="icon justify-content-center align-items-center d-flex">
                      <span className="flaticon-customer-service"></span>
                    </div>
                    <div className="media-body pl-4">
                      <h3 className="heading mb-3"> Customer Service</h3>
                      <p>
                        As our motto we strive to make our customer have the
                        best experience.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                  <div className="media block-6 services d-flex">
                    <div className="icon justify-content-center align-items-center d-flex">
                      <span className="flaticon-road-roller"></span>
                    </div>
                    <div className="media-body pl-4">
                      <h3 className="heading mb-3">Networks</h3>
                      <p>
                        We have people in china and also in the ports who are
                        constantly updating us on the progress of our work.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                  <div className="media block-6 services d-flex">
                    <div className="icon justify-content-center align-items-center d-flex">
                      <span className="flaticon-road-roller"></span>
                    </div>
                    <div className="media-body pl-4">
                      <h3 className="heading mb-3">Reliable Equipment</h3>
                      <p>
                        NEW TEXT HERE 
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                  <div className="media block-6 services d-flex">
                    <div className="icon justify-content-center align-items-center d-flex">
                      <span className="flaticon-road-roller"></span>
                    </div>
                    <div className="media-body pl-4">
                      <h3 className="heading mb-3">Experience</h3>
                      <p>
                        We have worked in big projects and we are always on time
                        to deliver all the materials.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="col-md-5"
            style={{
              backgroundColor: "#1b415f",
              alignItems: "center",
              boxShadow: "6px 8px 12px #1b415f",
            }}
          >
            <div
              className="appointment-wrap align-items-center"
              style={{ height: "100%" }}
            >
              <div className="overlay"></div>
              <form
                action="#"
                className="appointment-form ftco-animate"
                name="EmailForm"
                method="POST"
                enctype="multipart/form-data"
                action="mailto:eden.abdisa@aiesec.net"
                style={{ paddingTop: "6rem" }}
              >
                <h3 style={{ color: "white" }}>Contact Us</h3>
                <div className="">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone"
                    />
                  </div>
                </div>
                <div className="">
                  <div className="form-group">
                    <div className="form-field">
                      <div className="select-wrap">
                        <div className="icon">
                          <span className="fa fa-chevron-down"></span>
                        </div>
                        <select name="" id="" className="form-control">
                          <option value="">Select the Service you want</option>
                          <option value="">Cargo Handling</option>
                          <option value="">Custome Clearing</option>
                          <option value="">Port Handling</option>
                          <option value="">Transportation</option>
                          <option value="">Other Services</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="form-group">
                    <textarea
                      name=""
                      id=""
                      cols="30"
                      rows="4"
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <div className="form-group">
                    <input
                      style={{
                        backgroundColor: "#ffa931",
                        textAlign: "center",
                      }}
                      type="submit"
                      value="Send "
                      className="btn btn-primary form-control"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section style={{ marginTop: "100px", marginBottom: "50px",wordBreak:"break-word" }}>
      <h2 style={{textAlign:"center"}}>OUR VALUES</h2>
      <div style={{ wordBreak:"break-word",flexWrap: "nowrap",marginTop:"40px",paddingLeft:"24px" }}      >
        
        <Card style={{ width: "18rem", alignItems: "center", border: "none",float:"left" }}>
          <Image variant="top" src={socialresponsibility} style={{boxShadow: "8px 4px 15px 3px #9a7746",height:"130px",width:"130px"}} roundedCircle />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Social responsibility
            </Card.Title>
            <Card.Text style={{ textAlign: "center",wordBreak:"break-word" }}>
              Insuring that our works and way 
              of doing our activites benefit the 
              society and discharge our 
              social responsibilities.
            </Card.Text>
          </Card.Body>
        </Card>    
        <Card style={{ width: "18rem", alignItems: "center", border: "none",float:"left" }}>
          <Image variant="top" src={customercentric} style={{boxShadow: "8px 4px 15px 3px #9a7746",height:"130px",width:"130px"}} roundedCircle />
          <Card.Body style={{marginLeft:"30px"}}>
            <Card.Title style={{ textAlign: "center" }}>
            Customer Oriented
            </Card.Title>
            <Card.Text style={{ textAlign: "center",wordBreak:"break-word" }}>
            our services tailored by the need 
             of our customers and we strive 
              for customers satisfaction.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", alignItems: "center", border: "none",float:"left" }}>
          <Image variant="top" src={respect} style={{boxShadow: "8px 4px 15px 3px #9a7746",height:"130px",width:"130px"}} roundedCircle />
          <Card.Body style={{marginLeft:"30px"}}>
            <Card.Title style={{ textAlign: "center" }}>
            Respect
            </Card.Title>
            <Card.Text style={{ textAlign: "center",wordBreak: "break-word" }}>
            We believes and executes that respecting the
                    society, our customers and employees are the basis for our
                    company sustainability. 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", alignItems: "center", border: "none",float:"left" }}>
          <Image variant="top" src={teamworking} style={{boxShadow: "8px 4px 15px 3px #9a7746",height:"130px",width:"130px"}} roundedCircle />
          <Card.Body style={{marginLeft:"30px"}}>
            <Card.Title style={{ textAlign: "center" }}>
            Team working
            </Card.Title>
            <Card.Text style={{ textAlign: "center",wordBreak: "break-word" }}>
            we do our activities by participating our
                    customers, stakeholders and employees in a way that develop
                    a one team spirit and a culture of discussion.
              
            </Card.Text>
          </Card.Body>
        </Card>
        <Card style={{ width: "18rem", alignItems: "center", border: "none",float:"left" }}>
          <Image variant="top" src={continousimprovement} style={{boxShadow: "8px 4px 15px 3px #9a7746",height:"130px",width:"130px"}} roundedCircle />
          <Card.Body style={{marginLeft:"30px"}}>
            <Card.Title style={{ textAlign: "center" }}>
            Continuous improvement
            </Card.Title>
            <Card.Text style={{ textAlign: "center",wordBreak: "break-word"}} >
            The Company evaluate its performance
                    and improve its system and use modern technologies.
                    Employees take on job and off job trainings to continuously
                    improve their performances. Yesterday performance is a
                    baseline for todays work.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </section>
  </Layout>
)

export default IndexPage
