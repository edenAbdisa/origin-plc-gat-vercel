import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import whitetrack from "../images/whitetrack.jpg"
import silvercylinder from "../images/silvercylinder.jpg"
import front from "../images/front.jpg"
import longblue from "../images/longblue.jpg"
import loaded from "../images/loaded.jpg"
import emp5 from "../images/emp5.jpg"
import emp6 from "../images/emp6.jpg" 
import found1 from "../images/found1.jpg"
import emp1 from "../images/emp1.jpg"
import emp2 from "../images/emp2.jpg"
import emp3 from "../images/emp3.jpg"
import emp4 from "../images/emp4.jpg" 
import "../assets/css/animate.css"
import "../assets/css/animate.css";
import "../assets/css/bootstrap-datepicker.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/flaticon.css";
import "../assets/css/jquery.timepicker.css";
import "../assets/css/magnific-popup.css";
import Image from "react-bootstrap/Image"
import Card from "react-bootstrap/Card"
export default function Gallery() {
	return (
              <Layout>
              <SEO title="Gallery"/>
<section style={{ marginTop: "100px", marginBottom: "50px",wordBreak:"break-word" }}>
      <h2 style={{textAlign:"center"}}>Gallery</h2>
      <div style={{ wordBreak:"break-word",flexWrap: "nowrap",marginTop:"40px",paddingLeft:"24px" }}      >
        
        <Card style={{ width: "18rem", alignItems: "center", border: "none",float:"left" }}>
          <Image variant="top" src={emp1} style={{boxShadow: "8px 4px 15px 3px #9a7746",height:"200px",width:"200px"}} roundedCircle />
          
        </Card>    
        <Card style={{ width: "18rem", alignItems: "center", border: "none",float:"left" }}>
          <Image variant="top" src={emp2} style={{boxShadow: "8px 4px 15px 3px #9a7746",height:"200px",width:"200px"}} roundedCircle />
          
        </Card>
        <Card style={{ width: "18rem", alignItems: "center", border: "none",float:"left" }}>
          <Image variant="top" src={emp3} style={{boxShadow: "8px 4px 15px 3px #9a7746",height:"200px",width:"200px"}} roundedCircle />
          
        </Card>
        <Card style={{ width: "18rem", alignItems: "center", border: "none",float:"left" }}>
          <Image variant="top" src={emp4} style={{boxShadow: "8px 4px 15px 3px #9a7746",height:"200px",width:"200px"}} roundedCircle />
          
        </Card>     
        <Card style={{ width: "18rem", alignItems: "center", border: "none",float:"left" }}>
          <Image variant="top" src={emp5} style={{boxShadow: "8px 4px 15px 3px #9a7746",height:"200px",width:"200px"}} roundedCircle />
          
        </Card>    
        <Card style={{ width: "18rem", alignItems: "center", border: "none",float:"left" }}>
          <Image variant="top" src={emp6} style={{boxShadow: "8px 4px 15px 3px #9a7746",height:"200px",width:"200px"}} roundedCircle />
          
        </Card>
        <Card style={{ width: "18rem", alignItems: "center", border: "none",float:"left" }}>
          <Image variant="top" src={found1} style={{boxShadow: "8px 4px 15px 3px #9a7746",height:"200px",width:"200px"}} roundedCircle />
          
        </Card>
        <Card style={{ width: "18rem", alignItems: "center", border: "none",float:"left" }}>
          <Image variant="top" src={front} style={{boxShadow: "8px 4px 15px 3px #9a7746",height:"200px",width:"200px"}} roundedCircle />
          
        </Card>
        <Card style={{ width: "18rem", alignItems: "center", border: "none",float:"left" }}>
          <Image variant="top" src={silvercylinder} style={{boxShadow: "8px 4px 15px 3px #9a7746",height:"200px",width:"200px"}} roundedCircle />
          
        </Card>
        <Card style={{ width: "18rem", alignItems: "center", border: "none",float:"left" }}>
          <Image variant="top" src={longblue} style={{boxShadow: "8px 4px 15px 3px #9a7746",height:"200px",width:"200px"}} roundedCircle />
          
        </Card>
        <Card style={{ width: "18rem", alignItems: "center", border: "none",float:"left" }}>
          <Image variant="top" src={loaded} style={{boxShadow: "8px 4px 15px 3px #9a7746",height:"200px",width:"200px"}} roundedCircle />
          
        </Card>
        <Card style={{ width: "18rem", alignItems: "center", border: "none",float:"left" }}>
          <Image variant="top" src={whitetrack} style={{boxShadow: "8px 4px 15px 3px #9a7746",height:"200px",width:"200px"}} roundedCircle />
          
        </Card>
      </div>
    </section>
              </Layout>

		)
}