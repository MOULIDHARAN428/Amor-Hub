import React, {useState} from 'react';
import {Navbar, Container,Nav} from "react-bootstrap";
import {Button, Modal, Form} from "react-bootstrap";
function  Header  () {

    const [show, setShow] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [login, setLogin] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
      if(!login){
        setShow(true);
      }
      else{
        setLogin(!login);
      }
      
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        if(email && password){
            alert("Logged in");
            setLogin(!login);
        }
        else if(email){
            alert("Enter Password");
        }
        else if(password){
            alert("Enter Email");
        }
        else{
            alert("Enter Password and Email")
        }
    };

    return (
      <>
        <Navbar expand="lg">
          <Container className="header-navbar">

            <Navbar.Brand href="/home"><img className="d-block d-lg-none" src="/assets/image/logo-2.png" alt="" />
              <span className="navbar-header d-none d-lg-block">
                Amor Hub
              </span></Navbar.Brand>
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                
                <Nav.Link href="/home"><span className="color-header">Home</span></Nav.Link>
                
                <Nav.Link href="/chat"><span className="color-header">Chat</span></Nav.Link>
                
                <Nav.Link href="/video"><span className="color-header">Video</span></Nav.Link>
      
              </Nav>
              <Button className='log-in-btn' variant="danger"  onClick={handleShow} >
                  {login ? "Log out" : "Log in"}
              </Button>
            </Navbar.Collapse>

            

          </Container>
        </Navbar>
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Log in</Modal.Title>
          </Modal.Header>
          <Modal.Body onSubmit={handleSubmit}>
              <Form >
                  <Form.Group className="mb-3" controlId="formBasicEmail" name="email"
                              onChange={e => setEmail(e.target.value)}>
                      <Form.Label>Email address</Form.Label>
                      <Form.Control type="email" placeholder="Enter email" />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formBasicPassword" name="password"
                              onChange={e => setPassword(e.target.value)}>
                      <Form.Label>Password</Form.Label>
                      <Form.Control type="password" placeholder="Password" />
                  </Form.Group>
                  
                  <Form.Group className="mb-3" controlId="formBasicCheckbox" >
                      <Form.Check type="checkbox" label="Remember password" />
                  </Form.Group>
                  <Button variant="secondary" onClick={handleClose}>
                      Close
                  </Button>
                  {' '}
                  <Button variant="primary" type="submit" value="Submit">
                      Log in
                  </Button>
              </Form>
          </Modal.Body>
          <Modal.Footer>
              <p>Or</p>
              <p>Don't have an account ?</p>
              <Button variant="primary" onClick={handleClose} href="#">
                  Sign up
              </Button>
          </Modal.Footer>
      </Modal>
      </>
  );
};

export default Header;