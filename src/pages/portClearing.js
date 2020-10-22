import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import re from "../images/re.jpg"
export default function portClearing() {
	return (
              <Layout>
              <SEO title="Cargo Handling"/>
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
                  fontSize: "1.2 em",
                  borderWidth: "1px",
                  borderColor: "#4c7ba917",
                  borderStyle: "groove",
                  backgroundColor: "#ffa931",
                   color: "#ffffff"
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
                   }}
              >
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
            We do port clearing work at Djibouti port. We have office in Djibouti which follows the work of the Djibouti Transit Company, Djibouti port and shipping agents. We build good relationship with all these stakeholders in Djibouti. This gives us capacity to clear cargoes within a shortest possible time. We have also partner in Djibouti free zone which can give us a free zone services for our client. This makes our service in Djibouti full-fledged.  So far we cleared a huge amount of project, factory raw materials and machineries and trade cargoes of both containerized, RORO & break bulk.       </p>
          </Col>
        </Row>
      </Container>
  
              </Layout>

		)
}