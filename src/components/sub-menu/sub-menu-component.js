import { Nav } from 'react-bootstrap'
import React from 'react'
import './sub-menu-component.css'


export class SubMenuComponent extends React.Component {
    render() {
        return (
            <div className="subMenu">
                <Nav defaultActiveKey="/" className="flex-column">
                    <Nav.Link href="/first-page" className="textColorWhite">Link 0</Nav.Link>
                    <Nav.Link href="/first-page" className="textColorWhite">Link 1</Nav.Link>
                    <Nav.Link href="/first-page" className="textColorWhite">Link 2</Nav.Link>
                    <Nav.Link href="/first-page" className="textColorWhite">Link 3</Nav.Link>
                    <Nav.Link href="/first-page" className="textColorWhite">Link 4</Nav.Link>
                    <Nav.Link href="/first-page" className="textColorWhite">Link 5</Nav.Link>
                    <Nav.Link href="/first-page" className="textColorWhite">Link 6</Nav.Link>
                </Nav>
            </div>
        )
    }
}