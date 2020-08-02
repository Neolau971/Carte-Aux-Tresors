import { Nav } from 'react-bootstrap'
import React from 'react'
import './sub-menu-component.css'


export class SubMenuComponent extends React.Component {
    render() {
        return (
            <div className="subMenu">
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home">Active</Nav.Link>
                    <Nav.Link eventKey="link-1" className="textColorBlack">Link 1</Nav.Link>
                    <Nav.Link eventKey="link-2" className="textColorBlack">Link 2</Nav.Link>
                    <Nav.Link eventKey="link-3" className="textColorBlack">Link 3</Nav.Link>
                    <Nav.Link eventKey="link-4" className="textColorBlack">Link 4</Nav.Link>
                </Nav>
            </div>
        )
    }
}