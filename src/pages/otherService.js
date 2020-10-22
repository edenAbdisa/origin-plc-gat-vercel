import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import re from "../images/re.jpg"
export default function OtherService() {
	return (
              <Layout>
              <SEO title="Other Service"/>
              <Container
        style={{
          position: "relative",
          paddingRight: "10px",
          paddingLeft: "10px",
          paddingTop: "50px",
          maxWidth: "fitContent",
        }}
      >
        <Row>
          <Col xs={8} md={4}>
            <p
              style={{
                backgroundColor: "#4e4a3540",
                color: "black",
                textAlign: "center",
                fontSize: "1.5em",
              }}
            >
              SERVICES
            </p>
            <Nav
              defaultActiveKey="/home"
              className="flex-column"
              style={{
                borderWidth: "1px",
                borderColor: "#4c7ba917",
                borderStyle: "groove",
              }}
            >
              <Nav.Link
                href="/"
                style={{
                  color: "#000000",
                  fontSize: "1.2 em",
                  borderWidth: "1px",
                  borderColor: "#4c7ba917",
                  borderStyle: "groove",
                }}
              >
                Port clearing
              </Nav.Link>
              <Nav.Link
                eventKey="link-1"
                style={{
                     fontSize: "1.2 em",
                     borderWidth: "1px",
                     borderColor: "#4c7ba917",
                     borderStyle: "groove",
                      color: "#000000"
                   }} >
                Custom Clearing
              </Nav.Link>
              <Nav.Link
                eventKey="link-2"
                style={{
                  color: "#000000",
                  fontSize: "1.2 em",
                  borderWidth: "1px",
                  borderColor: "#4c7ba917",
                  borderStyle: "groove",
                }}
              >
                Transportation
              </Nav.Link>
              <Nav.Link
                eventKey="link-2"
                style={{
                     fontSize: "1.2 em",
                     borderWidth: "1px",
                     borderColor: "#4c7ba917",
                     borderStyle: "groove",
                     backgroundColor: "#ffa931",
                      color: "#ffffff"
                   }}
              >
                Consultation and facilitation
              </Nav.Link>
              <Nav.Link
                eventKey="link-2"
                style={{
                  color: "#000000",
                  fontSize: "1.2 em",
                  borderWidth: "1px",
                  borderColor: "#4c7ba917",
                  borderStyle: "groove",
                }}
              >
                Importation of industrial and construction machineries,
                equipment and spare par
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs={8} md={8}>
            <img className="d-block w-100" src={re} alt="Origin Details" />
            <p style={{ paddingTop: "20px" }}>
            we consult about the customs regulations and the different requirements to get services in different governmental and private organizations. We also assist customers to get services easily from these institutions. We facilitate client’s cases mainly in Ethiopian Customs commission, Transport authority, Ethiopian Air Lines, Ethiopian Railway Corporations, Ethiopian Investment Commission, Commercial Banks and Ethiopian Shipping and Logistics service Enterprises.
              </p>
          </Col>
        </Row>
      </Container>
  
              </Layout>

		)
}