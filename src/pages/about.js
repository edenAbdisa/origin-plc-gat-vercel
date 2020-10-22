import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import "../assets/icon/mobirise-icons.css"

export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <section
        className="hero-wrap js-fullheight"
        style={{ position: "relative" }}
        dataStellarBackgroundRatio="0.5"
      >
        <Container
          style={{
            position: "relative",
            paddingRight: "5px",
            paddingLeft: "5px", 
            paddingTop: "50px",
            maxWidth: "fitContent",
          }}
        >
          <Row style={{width:"100%"}}>
            <Col xs={8} md={6}>
              <h2 className="align-left mbr-fonts-style ">
                ORIGIN LOGISTICS PLC
              </h2>{" "}
              <p
                className=" align-left  "
                style={{ fontSize: "1.3rem", textAlign: "justify" }}
              >
                Origin Logistics PLC established on May 2016 G.C by Ethiopian
                Shareholders. The main shareholder own more than 10 companies in
                Ethiopia & in different countries. These companies are engaged
                in different sectors by having a huge capitals. <br />
                <br />
                Among the companies Belayab Moter PLC, Belayab Cable
                Manufacturing PLC, Belayab Geepass electronics manufacturing
                PLC, Belayab foods PLC, Lewis Construction PLC, Lecon
                Construction, Lewis Retails and Golden Tulip Hotel are the main
                once working in Ethiopia. <br />
                <br />
                Origin Logistics PLC mainly engage in giving a quality logistics
                services for both international & Local Companies. It has
                customs clearing & Forwarding licenses which makes it able to
                give a various form of logistic works.
                <br /> <br />
                The main logistic services that our company is providing are
                port clearing, customs clearing and transporting, warehousing,
                cargo handling equipment, Distribution, Consultation and
                facilitation.
                <br />
                <br /> The company has also an importing license of industrial
                and construction machineries, equipment and spare parts. This
                makes the company ideal to provide a full package of door to
                door services for individuals and companies which require buying
                industrial and construction machineries, equipment and spare
                parts.
              </p>
            </Col>
            <Col xs={6} md={6}>
              <Row>
                <Col >
                  <div className="card-img pb-3">
                    <span
                      className="mbri-flag mbr-iconfont pr-2"
                      style={{ color: "#ffa931", fontSize: "4em" }}
                    ></span>
                    <h4 className="mbr-content-title mbr-bold mbr-fonts-style display-7">
                      Mission
                    </h4>
                  </div>

                  <p
                    className="mbr-content-text mbr-fonts-style display-7"
                    style={{ fontSize: "1.3rem" }}
                  >
                    To be Origin of society benefit.
                    <br />
                    <br />
                    By supplying a standard quality and customer oriented Goods
                    and services for local and foreign companies having high
                    performer employees and implementing modern system and
                    technologies, contribute for the success of our customers
                    and society at large.
                  </p>
                </Col>
                <Col >
                  <div className="card-img pb-3">
                    <span
                      className="mbri-globe-2 mbr-iconfont pr-2"
                      style={{ color: "#ffa931", fontSize: "4em" }}
                    ></span>
                    <h4 className="mbr-content-title mbr-bold mbr-fonts-style display-7">
                      Vision
                    </h4>
                  </div>

                  <p
                    className="mbr-content-text mbr-fonts-style "
                    style={{ fontSize: "1.3rem" }}
                  >
                    Upgrading the quality and types of logistics services to get
                    customers satisfaction and become a chosen logistic service
                    provider in Ethiopia.
                  </p>
                </Col>
              </Row>
              <Row>
                <Col >
                  <div className="card-img pb-3">
                    <span
                      className="mbri-user mbr-iconfont pr-2"
                      style={{ color: "#ffa931", fontSize: "4em" }}
                    ></span>
                    <h4 className="mbr-content-title mbr-bold mbr-fonts-style display-7">
                      Customers
                    </h4>
                  </div>
                  <p
                    className="mbr-content-text mbr-fonts-style display-7"
                    style={{ fontSize: "1.3rem" }}>
                  Belayab Geepas Electronics Manufacturing PLC <br/>
                  	Yongtai Meat food and Casing processing PLC<br/>
                  	Lewis Construction PLC<br/>
                  	Vita Hydro Agro Processing PLC  <br/>
                  	Belayab Foods Production PLC <br/>
                  	WU KE SONG Wood products Manufacturing PLC<br/>
                  	 DX industries PLC<br/>
                  	Jianxin  Zhang Crust and finished Leather production<br/>
                  	Jianxin Zhang<br/>
                  	Hudao Chen<br/>
                  	Tanamru chemical industrial PLC
                  
                  </p>
                </Col>
                <Col >
                  <div className="card-img pb-3">
                    <span
                      className="mbri-extension mbr-iconfont pr-2"
                      style={{ color: "#ffa931", fontSize: "4em" }}
                    ></span>
                  </div>
                  <h4
                    className="mbr-content-title mbr-bold mbr-fonts-style display-7"
                    style={{ fontSize: "1.3rem" }}
                  >
                    Sister company of
                  </h4>
                  <p className="mbr-content-text mbr-fonts-style display-7" style={{ fontSize: "1.3rem" }}>
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
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  )
}
