import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
export default function Customers() {
  return (
    <Layout>
      <SEO title="Customers" />
      <section
        className="hero-wrap js-fullheight"
        style={{ position: "relative",marginBottom:"50px" }}
      
      >
        {" "}
        <Container
          style={{
            position: "relative",
            paddingRight: "5px",
            paddingLeft: "5px",
            paddingTop: "50px",
            maxWidth: "fitContent",
          }}
        >
          <Row>
            <Col>
               
                <h2
                  className="mbr-content-title mbr-bold mbr-fonts-style display-7"
                   
                >
                  Major Customers
                </h2>
               
              <p
                className="mbr-content-text mbr-fonts-style display-7"
                style={{ fontSize: "1.1 rem",borderRightStyle:"inset", borderRightColor:"#ffab37",borderRightWidth:"3px" }}
              >
                <ul className="mbr-content-text mbr-fonts-style display-7">
                  <li>Belayab Geepas Electronics Manufacturing PLC</li>
                  <li>Yongtai Meat food and Casing processing PLC</li>
                  <li>Lewis Construction PLC</li>
                  <li>Vita Hydro Agro Processing PLC</li>
                  <li>Belayab Foods Production PLC</li>
                  <li>WU KE SONG Wood products Manufacturing PLC</li>
                  <li>DX industries PLC</li>
                  <li>Jianxin Zhang Crust and finished Leather production</li>
                  <li>Jianxin Zhang</li>
                  <li>Hudao Chen</li>
                  <li>Tanamru chemical industrial PLC</li>
                </ul>
              </p>
            </Col>
            <Col>
              
              <h2
                className="mbr-content-title mbr-bold mbr-fonts-style display-7"
               
              >
                Sister company of
              </h2>
              <p
                className="mbr-content-text mbr-fonts-style display-7"
                style={{ fontSize: "1.1 rem" }}
              >
                <ul className="mbr-content-text mbr-fonts-style display-7">
                  <li>Belayab Moter PLC</li>
                  <li>Belayab Cable Manufacturing PLC</li>
                  <li>Belayab Foods plc (Pizza Hut)</li>
                  <li>Belayab Gepas Electronics plc</li>
                  <li>Lewis Construction PLC</li>
                  <li>Lecon Construction PLC </li>
                  <li>Vita Agro Processing PLC</li>
                  <li>Golden Tulip Hotel</li>
                  <li>Lewis Retail (Bambis supermarket)</li>
                </ul>
              </p>
            </Col>
          </Row>
          <Row style={{marginTop:"50px"}}>
            <Col>
              <h2
                className="mbr-content-title mbr-bold mbr-fonts-style display-7"
               
              >
                Big projects and customers that we did logistics works are
              </h2>
              <p
                className="mbr-content-text mbr-fonts-style display-7"
                style={{ fontSize: "1.1 rem" }}
              >
                <ul className="mbr-content-text mbr-fonts-style display-7">
                  <li>Omo Kuraz 5 Sugar Factory </li>
                  <li>Welkaiyte Suger Development Project </li>
                  <li>
                    Calub & Hilala, Somali State Natural Gas Field’s Development
                    Project
                  </li>
                  <li>Cccc Arerti Industry Park Plc</li>
                  <li>
                    Ethiopian Electric Utility Rural Electrification Projects
                  </li>
                  <li>Jiangxi Jianglian International Engineering Co., Ltd </li>
                  <li>
                    Poly –Gcl Petroleum Investments Limited Ethiopian Branch
                  </li>
                  <li>China Railway Group Limited Lit Project (Crec)</li>
                  <li>Arerti Ceramic Manufacturing Plc </li>
                  <li>China Camc Engineering Co.,Ltd</li>
                  <li>Ethiopian Electric Power (Eep)</li>
                  <li>Ethiopian Electric Utility (Eeu)</li>
                  <li>
                    China Civil Engineering Construction Corporation Ethiopian
                    Branch (Ccecc)
                  </li>
                  <li>Ethiopian Sugar Corporation</li>
                </ul>
              </p>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}
