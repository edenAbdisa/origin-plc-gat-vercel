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
      <Carousel interval="2000">
        <Carousel.Item>
          <img className="d-block w-100" src={re} alt="Origin Details" />
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
        style={{ padding: "50px", paddingRight: "0px", paddingLeft: "150px" }}      >
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
        paddingLeft: "50px",
        boxShadow: "6px 8px 12px #805416",
      }}
    >
      <div className="container" style={{ margin: "0px" }}>
        <div className="row d-flex">
          <div className="col-md-7">
            <div className="py-lg-3">
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
                      <h3 className="heading mb-3">Wide Networks</h3>
                      <p>
                      We have people in china and also in the ports who are constantly updating us on the progress of our work. Our international
                       partners working in different countries are also widening our networks. 
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
                      <h3 className="heading mb-3">Modern System & Technology</h3>
                      <p>We use well-crafted modern system and technologies that shows 
                        the work flow and performance measurement of each steps of the process.</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate">
                  <div className="media block-6 services d-flex">
                    <div className="icon justify-content-center align-items-center d-flex">
                      <span className="flaticon-road-roller"></span>
                    </div>
                    <div className="media-body pl-4">
                      <h3 className="heading mb-3">Experienced staff</h3>
                      <p>
                      We have highly educated and professional
                      staffs that have experience in logistic work of
                      big projects, factories and traders.  
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
                className="appointment-form ftco-animate"
                name="EmailForm"
                method="POST"
                enctype="multipart/form-data"
                action="mailto:eden.abdisa@aiesec.net"
                style={{ paddingTop: "3rem" }}
              >
                <h3 style={{ color: "white" }}>Contact Us</h3>
                <div className="">
                  <div className="form-group">
                    <input
                      type="text"
                      name="firstname"
                      className="form-control"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="lastname"
                      className="form-control"
                      placeholder="Last Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="phone"
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
                        <select name="service" id="" className="form-control">
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
                      name="message"
                      id=""
                      cols="30"
                      rows="4"
                      className="form-control"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  
                </div>
                <div className="">
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
                  </div></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      style={{
        marginTop: "50px",
        marginBottom: "50px",
        wordBreak: "break-word",
      }}
    >
      <h2 style={{ textAlign: "center" }}>OUR VALUES</h2>
      <div
        style={{
          wordBreak: "break-word",
          flexWrap: "nowrap",
          marginTop: "40px",
          paddingLeft: "24px",
        }}
      >
        <Card
          style={{
            width: "18rem",
            alignItems: "center",
            border: "none",
            float: "left",
          }}
        >
          <Image
            variant="top"
            src={socialresponsibility}
            style={{
              boxShadow: "8px 4px 15px 3px #9a7746",
              height: "130px",
              width: "130px",
            }}
            roundedCircle
          />
          <Card.Body>
            <Card.Title style={{ textAlign: "center" }}>
              Social responsibility
            </Card.Title>
            <Card.Text style={{ textAlign: "center", wordBreak: "break-word" }}>
            Benefit the society by discharging social responsibilities
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            alignItems: "center",
            border: "none",
            float: "left",
          }}
        >
          <Image
            variant="top"
            src={customercentric}
            style={{
              boxShadow: "8px 4px 15px 3px #9a7746",
              height: "130px",
              width: "130px",
            }}
            roundedCircle
          />
          <Card.Body style={{ marginLeft: "30px" }}>
            <Card.Title style={{ textAlign: "center" }}>
              Customer Oriented
            </Card.Title>
            <Card.Text style={{ textAlign: "center", wordBreak: "break-word" }}>
            Focus on customer need and strive to satisfy
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            alignItems: "center",
            border: "none",
            float: "left",
          }}
        >
          <Image
            variant="top"
            src={respect}
            style={{
              boxShadow: "8px 4px 15px 3px #9a7746",
              height: "130px",
              width: "130px",
            }}
            roundedCircle
          />
          <Card.Body style={{ marginLeft: "30px" }}>
            <Card.Title style={{ textAlign: "center" }}>Respect</Card.Title>
            <Card.Text style={{ textAlign: "center", wordBreak: "break-word" }}>
            Respecting the society, customers and employees. 
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            alignItems: "center",
            border: "none",
            float: "left",
          }}
        >
          <Image
            variant="top"
            src={teamworking}
            style={{
              boxShadow: "8px 4px 15px 3px #9a7746",
              height: "130px",
              width: "130px",
            }}
            roundedCircle
          />
          <Card.Body style={{ marginLeft: "30px" }}>
            <Card.Title style={{ textAlign: "center" }}>
              Team working
            </Card.Title>
            <Card.Text style={{ textAlign: "center", wordBreak: "break-word" }}>
            Participating, developing team spirit and a culture of discussion.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card
          style={{
            width: "18rem",
            alignItems: "center",
            border: "none",
            float: "left",
          }}
        >
          <Image
            variant="top"
            src={continousimprovement}
            style={{
              boxShadow: "8px 4px 15px 3px #9a7746",
              height: "130px",
              width: "130px",
            }}
            roundedCircle
          />
          <Card.Body style={{ marginLeft: "30px" }}>
            <Card.Title style={{ textAlign: "center" }}>
              Continuous improvement
            </Card.Title>
            <Card.Text style={{ textAlign: "center", wordBreak: "break-word" }}>
            Improve working system, use modern technologies and give trainings. 
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </section>
  </Layout>
)

export default IndexPage
