import { Navbar, Nav, Image } from 'react-bootstrap'
import React from 'react'
import './menu-component.css'
import '../../pages/home-page/home-page.css'


export class MenuComponent extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" fixed="top">
                    <Navbar.Brand href="#home"><Image src={'logo192.png'} alt="image1" /><div>Nom société</div></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home"><div className="textColorBlue">Home</div></Nav.Link>
                        <Nav.Link href="#Link 1">Link 1</Nav.Link>
                        <Nav.Link href="#Link 2">Link 2</Nav.Link>
                        <Nav.Link href="#Link 2">Link 3</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}