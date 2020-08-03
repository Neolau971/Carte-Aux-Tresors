import { Navbar, Nav } from 'react-bootstrap'
import './home-page.css'
import React from 'react'
import { ContenuPage } from '../home-page/contenu-page/contenu-page'
import { MenuComponent } from '../../components/menu/menu-component'
import { SubMenuComponent } from '../../components/sub-menu/sub-menu-component'

export class HomePage extends React.Component {
  render() {
    return (
      <div className="home">
        <MenuComponent />
        <div className="homeMain">
          <SubMenuComponent />
          <div className="homeContent"><ContenuPage /></div>
        </div>
        <div>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div className="textColorWhite" style={{ paddingRight: '2%' }}>Copyright 2017-2021 Société.com. All rights reserved.</div>
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