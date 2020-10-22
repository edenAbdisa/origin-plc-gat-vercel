import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import re from "../images/re.jpg"
import { Link } from "gatsby"
export default function ImportingEquipments() {
	return (
              <Layout>
              <SEO title="Port Handline"/>
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
                   }} >
                Custom Clearing
              </Nav.Link>
              <Nav.Link href="/transportation/"
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
              <Nav.Link href="/consultationAndFacilitation/"
                eventKey="link-2"
                style={{
                  color: "#000000",
                  fontSize: "1.2 em",
                  borderWidth: "1px",
                  borderColor: "#4c7ba917",
                  borderStyle: "groove",
                }}
              >
                Consultation and facilitation
              </Nav.Link>
              <Nav.Link href="/importingEquipments/"
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
                Importation of industrial and construction machineries,
                equipment and spare par
              </Nav.Link>
            </Nav>
          </Col>
          <Col xs={8} md={8}>
            <img className="d-block w-100" src={re} alt="Origin Details" />
            <p style={{ paddingTop: "20px" }}>
            we provide a full package of door to door services for individuals and companies which require buying especially industrial and construction machineries, equipment and spare parts. Our partners and sister companies reside in China and Djibouti play a vital role in supplying goods and logistics services mainly from and to China.
               </p>
          </Col>
        </Row>
      </Container>
  
              </Layout>

		)
}