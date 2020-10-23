import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import re from "../images/re.jpg" 
export default function Transportation() {
	return (
              <Layout>
              <SEO title="Transportation"/>
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
                href="/portClearing/"
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
              <Nav.Link href="/customClearing/"
                eventKey="link-1"
                style={{
                     fontSize: "1.2 em",
                     borderWidth: "1px",
                     borderColor: "#4c7ba917",
                     borderStyle: "groove", 
                      color: "#000000"
                   }}  >
                Custom Clearing
              </Nav.Link>
              <Nav.Link href="/transportation/"
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
                Transportation
              </Nav.Link>
              <Nav.Link href="/consultationAndFacilitation/"
                eventKey="link-2"
                style={{
                     fontSize: "1.2 em",
                     borderWidth: "1px",
                     borderColor: "#4c7ba917",
                     borderStyle: "groove",
                      color: "#000000"
                   }}
              >
                Consultation and facilitation
              </Nav.Link>
              <Nav.Link href="/importingEquipments/"
                eventKey="link-2"
                style={{
                  color: "#000000",
                  fontSize: "1.2 em",
                  borderWidth: "1px",
                  borderColor: "#4c7ba917",
                  borderStyle: "groove",
                }}
              >
               Importing goods
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs={8} md={8}>
            <img className="d-block w-100" src={re} alt="Origin Details" />
            <p style={{ paddingTop: "20px" }}>
            We do transport work for factories, traders and big Ethiopian projects which gave us experience of handling normal and huge cargoes.  In addition of using normal trucks, we did transport work using a special high bed trailer trucks which can extend up to 21 meters and special low bed trailer trucks which can extend up to 24 meters length. We have built good relationship with different transport associations which able us to transport any amount of cargoes to different parts of the country.  </p>
          </Col>
        </Row>
      </Container>
  
              </Layout>

		)
}