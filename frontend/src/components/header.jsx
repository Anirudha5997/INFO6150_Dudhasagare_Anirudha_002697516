import React from 'react'
import './header.css'

// importing bootstrap components
import {Container, Nav, Navbar, Button} from 'react-bootstrap';
const headerarr = ['Home', 'Jobs', "About Us", "Contact"]; 

const header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary align-items-center justify-content-between">
      <Container>
        <Navbar.Brand className='ps-4 font-weight-bold' href="/"> <h2> Jewellery Market</h2>  </Navbar.Brand>    
      </Container>

      <Container className='justify-content-end'>
          <Nav className="align-items-center pe-2">
            {headerarr.map((head, idx) => (
              <Nav.Link key={idx} href={`/${head.replace(" ", "").toLowerCase()}`}> {head} </Nav.Link>
            ))}
 
          <Nav.Link href="/loginPage"><Button> Log In </Button> 
          </Nav.Link>    
        </Nav>
      </Container>
    </Navbar>
  )
}

export default header