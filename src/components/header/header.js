import React from "react" 
import { Link } from "gatsby" 
import  './styles'
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';

export default function Header(){
	return (	
		<HeaderContainer >
<nav className="navbar navbar-expand-lg navbar-dark bg-dark ftco-navbar-light navbar navbar-expand beta-menu navbar-dropdown align-items-center navbar-fixed-top navbar-toggleable-sm" id="ftco-navbar">
		<div className="container d-flex align-items-center">
			<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
				<span className="fa fa-bars"></span> Menu
			</button>
			<div className="collapse navbar-collapse" id="ftco-nav">
				<ul className="navbar-nav m-auto">
					<li className="nav-item active"><a href="/" className="nav-link">Home</a></li>
					<li className="nav-item"><a href="about" className="nav-link">About</a></li>
					<li className="nav-item">
						<div className="btn-group" >
							<a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Services</a>
							<ul className="dropdown-menu" >
		                     <li>
		                          <a  href="portClearing" >
		                            Port Clearing
		                          </a>
		                     </li>
		                      <li>
		                          <a  href="customClearing"  >
		                            Custom Clearing
		                          </a>
		                      </li>
		                      <li>
		                          <a  href="transportation" >
		                            Transportation
		                          </a>
		                      </li>
		                      <li>
		                          <a href="importingEquipments">
								  Importation of industrial and construction machineries, equipment and spare parts
		                          </a>
		                      </li>
		                      <li>
		                          <a  href="consultationAndFacilitation" >
		                            Consultation and facilitation
		                          </a>
		                      </li>
		                    </ul>
	                    </div>  
                    </li>
					<li className="nav-item"><a href="gallery" className="nav-link">Gallery</a></li>
					<li className="nav-item"><a href="blog" className="nav-link">Customers</a></li>
					<li className="nav-item"><a href="contact" className="nav-link">Contact</a></li>
				</ul>
			</div>
		</div>
	</nav>

	<Navbar bg="light"  expand="lg">
	  <a className="navbar-brand" href="/">
		<img src={logo2} width="100" height="100" alt="logo " loading="lazy"/>
	  </a>
	  <Navbar.Brand href="/">Origin Logistics PLC</Navbar.Brand>
	  <Navbar.Toggle aria-controls="basic-navbar-nav" />
	  <Navbar.Collapse id="basic-navbar-nav">
		<Nav className="mr-auto">
		  <Nav.Link href="/">Home</Nav.Link>
		  <Nav.Link href="about">About</Nav.Link>
		  <NavDropdown title="Service" id="basic-nav-dropdown">
			<NavDropdown.Item href="customClearing">Custom Clearing</NavDropdown.Item>
			<NavDropdown.Item href="portClearing">Cargo Handling</NavDropdown.Item>
			<NavDropdown.Item href="consultationAndFacilitation">Other Service</NavDropdown.Item>
			<NavDropdown.Item href="importingEquipments">Port Handling</NavDropdown.Item>
			<NavDropdown.Item href="transportation">Transportation</NavDropdown.Item>
			<NavDropdown.Divider />
			<NavDropdown.Item href="gallery">Gallery</NavDropdown.Item>
			<NavDropdown.Item href="contact">Contact</NavDropdown.Item>
		  </NavDropdown>
		</Nav>
		<Form inline>
		  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
		  <Button variant="outline-success">Search</Button>
		</Form>
	  </Navbar.Collapse>
	</Navbar>
</HeaderContainer>
		
    )
}
