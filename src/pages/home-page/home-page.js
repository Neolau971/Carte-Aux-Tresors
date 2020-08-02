import { Form, FormControl, Navbar, Nav } from 'react-bootstrap'
import './home-page.css'
import React from 'react'
import { ContenuPage } from '../home-page/contenu-page/contenu-page'

export class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <div className="homeSearch">
          <Form inline>
            <FormControl
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </Form>
        </div>
        <div>
          <Navbar bg="primary" variant="dark">
            <Navbar.Brand href="#home">@ Nom du site web</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#Link 1">Link 1</Nav.Link>
              <Nav.Link href="#Link 2">Link 2</Nav.Link>
              <Nav.Link href="#Link 2">Link 3</Nav.Link>
            </Nav>
          </Navbar>
        </div>
        <div className="homeMain">
          <div className="sousMenu">
            <Nav defaultActiveKey="/home" className="flex-column">
              <Nav.Link href="/home">Active</Nav.Link>
              <Nav.Link eventKey="link-1" className="textColorBlack">Link 1</Nav.Link>
              <Nav.Link eventKey="link-2" className="textColorBlack">Link 2</Nav.Link>
              <Nav.Link eventKey="link-3" className="textColorBlack">Link 3</Nav.Link>
              <Nav.Link eventKey="link-4" className="textColorBlack">Link 4</Nav.Link>
            </Nav></div>
          <div className="homeContent"><ContenuPage /></div>
        </div>
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div className="textColorWhite">Copyright 20XX-20XX ... All rights reserved.</div>
            <Nav className="mr-auto">
              <Nav.Link href="#features">FAQ</Nav.Link>
              <Nav.Link href="#pricing">contacts</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Linkedin</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">Autre réseaux</Nav.Link>
            </Nav>
          </Navbar>
        </div>
      </div>
    )
  }
}