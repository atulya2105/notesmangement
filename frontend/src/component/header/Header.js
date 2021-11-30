import React from 'react'
import {Navbar,Nav,Container,NavDropdown,Form, FormControl} from "react-bootstrap";
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <Navbar expand="lg" bg="primary" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
          Notes Saver </Link>
          </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                 
                />
              </Form>
           
          </Nav>
          <Nav>
             
              <>
                <Nav.Link href="/mynotes">
                <Link to="/mynotes"> My Notes </Link>
                </Nav.Link>
                <NavDropdown
                  title="Atulya Pandey"
                  id="collasible-nav-dropdown"
                >
                  <NavDropdown.Item href="/profile">
                    {/* <img
                      alt=""
                      src={`${userInfo.pic}`}
                      width="25"
                      height="25"
                      style={{ marginRight: 10 }}
                    /> */}
                    My Profile
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              </>
            
              <Nav.Link href="/login"></Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
}

export default Header
