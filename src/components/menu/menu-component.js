import { Navbar, Nav, Image } from 'react-bootstrap'
import React from 'react'
import './menu-component.css'
import '../../pages/home-page/home-page.css'

export class MenuComponent extends React.Component {
    render() {
        return (
            <div>
                <Navbar bg="primary" variant="dark" fixed="top">
                    <Navbar.Brand href="/"><Image src={'logo192.png'} alt="image1" className="imgContainer" /><div>Nom société</div></Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="/first-page">Link 0</Nav.Link>
                        <Nav.Link href="/first-page">Link 1</Nav.Link>
                        <Nav.Link href="/first-page">Link 2</Nav.Link>
                        <Nav.Link href="/first-page">Link 3</Nav.Link>
                    </Nav>
                </Navbar>
            </div>
        )
    }
}