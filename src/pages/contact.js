import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
export default function Contact() {
  return (
    <Layout>
      <SEO title="Contact" />
      <Container
        style={{
          position: "relative",
          paddingRight: "10px",
          paddingLeft: "10px",
          paddingTop: "50px",
          paddingBottom: "50px",
          marginBottom: "10px",
          maxWidth: "fitContent",
        }}
      >
        <Row>
          <Col xs={8} md={6}>
            <iframe
              frameborder="0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3941.1284057778885!2d38.761168414733966!3d8.960313993568521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84761963a8a9%3A0x7423e220f797f65c!2sTrans%20Ethiopia%20Tower!5e0!3m2!1sen!2set!4v1583053348360!5m2!1sen!2set"
              style={{
                border: "0",
                allowfullscreen: "",
                width: "100%",
                height: "80%",
                padding: "20px",
              }}
            ></iframe>
          </Col>
          <Col
            style={{
              maxWidth: "100%",
              borderWidth: "1.5px",
              borderColor: "#4c7ba917",
              borderStyle: "groove",
              paddingTop: "0px",
            }}
          >
            <div className="appointment-wrap  align-items-center">
              <form
                action="#"
                className="appointment-form ftco-animate"
                name="EmailForm"
                method="POST"
                enctype="multipart/form-data"
                action="mailto:eden.abdisa@aiesec.net"
              >
                <h5 className="pb-3 align-left mbr-fonts-style display-4">
                  Contact Us
                </h5>
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
                      value="Send"
                      className="btn btn-primary  form-control"
                    />
                  </div>
                </div>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
