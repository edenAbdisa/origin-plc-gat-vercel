import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
export default function About() {
  return (
    <Layout>
      <SEO title="About" />
      <section
        className="hero-wrap js-fullheight"
        style={{ position: "relative" }} 
      >
        <Container
          style={{
            position: "relative",
            paddingRight: "5px",
            paddingLeft: "5px",
            paddingTop: "50px",
            marginBottom:"40px",
            margin: "auto",
          }}
        >
<Row style={{margin:"auto"}}>
<h2 className="align-left mbr-fonts-style" style={{
    paddingRight: "7px",borderRightStyle:"inset", borderRightColor:"#ffab37",borderRightWidth:"3px"}}>
                ORIGIN LOGISTICS PLC
              </h2>
</Row>
          <Row style={{margin:"auto"}}>
          
              <p
                className=" align-left  "
                style={{ fontSize: "1.1rem" }}
              > <br/><br/>
                Origin Logistics PLC established on May 2016 G.C by Ethiopian
                Shareholders. The main shareholder own more than 10 companies in
                Ethiopia & in different countries. These companies are engaged
                in different sectors by having a huge capitals. 
                Among the companies Belayab Moter PLC, Belayab Cable
                Manufacturing PLC, Belayab Geepass electronics manufacturing
                PLC, Belayab foods PLC, Lewis Construction PLC, Lecon
                Construction, Lewis Retails and Golden Tulip Hotel are the main
                once working in Ethiopia. <br />
                <br />
                Origin Logistics PLC mainly engage in giving a quality logistics
                services for both international & Local Companies. It has
                customs clearing & Forwarding licenses which makes it able to
                give a various form of logistic service.
                
                The main logistic services that our company is providing are
                <ul>
               <li> Port clearing</li><li> Customs clearing and transporting </li><li> Warehousing
               </li><li> Cargo handling equipment</li><li> Distribution</li><li> Consultation and
                facilitation</li>
                </ul>
                 
                 The company has also an importing license of industrial
                and construction machineries, equipment and spare parts. This
                makes the company ideal to provide a full package of door to
                door services for individuals and companies which require buying
                industrial and construction machineries, equipment and spare
                parts.
                <br/><br/>
              </p> 
          </Row>
           
              <Row style={{margin:"auto"}}>
                <Col style={{padding:"0px",marginRight: "50px"}}>
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
                    style={{ fontSize: "1.1rem", textAlign: "left",borderRightStyle:"inset", borderRightColor:"#ffab37",borderRightWidth:"3px" }}
                  >
                    To be Origin of society benefit.<br/>
                    By supplying a standard quality and customer oriented Goods
                    and services for local and foreign companies having high
                    performer employees and implementing modern system and
                    technologies, contribute for the success of our customers
                    and society at large.
                  </p>
                </Col> 
                <Col style={{padding:"0px"}}>
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
                    style={{ fontSize: "1.1rem", textAlign: "left" }}
                  >
                    Get customers satisfaction and become a chosen logistic service provider in Ethiopia by
                    <ul>
                      <li>Adding LCL and importing services from two additional ports.</li>
                      <li>Upgrading our capacity to service more customers and big volume of cargoes.</li>
                      <li>Reduce service time and avoidable costs of logistic.</li>
                    </ul>
                  </p>
                </Col>
              </Row>
            
        </Container>
      </section>
    </Layout>
  )
}
