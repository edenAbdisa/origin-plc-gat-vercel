import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Container from "react-bootstrap/Container"
import Nav from "react-bootstrap/Nav"
import re from "../images/re.jpg"
export default function CustomClearing() {
  return (
    <Layout>
      <SEO title="Custom Clearing" />
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
                style={{ backgroundColor: "#ffa931", color: "#ffffff" }}
              >
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
                  color: "#000000",
                  fontSize: "1.2 em",
                  borderWidth: "1px",
                  borderColor: "#4c7ba917",
                  borderStyle: "groove",
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
              We do customs clearing operations in all customs branches of
              Ethiopia for both import & export and tax free & tax paid cargoes.
              The main customs offices that we did most of our customs clearing
              works are Addis Ababa airport customs branch office, Addis Ababa
              Kality customs office, Adama, Modjo, Dire Dawa, Kombolcha, Mekele
              and Mile customs offices. This makes us familiar with the working
              culture, rules & regulations of the different customs branches.
            </p>
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}
