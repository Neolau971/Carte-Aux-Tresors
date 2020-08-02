import { Navbar, Nav } from 'react-bootstrap'
import React from 'react'
import './menu-component.css'


export class MenuComponent extends React.Component {
    render() {
        return (
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
        )
    }
}