import { Nav } from 'react-bootstrap'
import React from 'react'
import './sub-menu-component.css'


export class SubMenuComponent extends React.Component {
    render() {
        return (
            <div className="subMenu">
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Nav.Link href="/home" className="textColorWhite">Active</Nav.Link>
                    <Nav.Link eventKey="link-1" className="textColorWhite">Link 1</Nav.Link>
                    <Nav.Link eventKey="link-2" className="textColorWhite">Link 2</Nav.Link>
                    <Nav.Link eventKey="link-3" className="textColorWhite">Link 3</Nav.Link>
                    <Nav.Link eventKey="link-4" className="textColorWhite">Link 4</Nav.Link>
                    <Nav.Link eventKey="link-5" className="textColorWhite">Link 5</Nav.Link>
                    <Nav.Link eventKey="link-6" className="textColorWhite">Link 6</Nav.Link>
                </Nav>
            </div>
        )
    }
}