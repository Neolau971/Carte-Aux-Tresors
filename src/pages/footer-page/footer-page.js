import { Image } from 'react-bootstrap'
import React from 'react'
import { MenuComponent } from '../../components/menu/menu-component'
import './footer-page.css'

export class FooterPage extends React.Component {
    render() {
        return (
            <div className="home">
                <MenuComponent />
                <div className="footerMain">
                    <div className="footerContent">
                        <div className="footerElement">
                            < Image src={'./fac.png'} alt="image1" className="imgFooter" />
                            <div>adresse.facebook@hotmail.fr</div>
                        </div>
                        <div className="footerElement">
                            < Image src={'./insta.jpg'} alt="image1" className="imgFooter" />
                            <div>adresse.instagram@gmail.com</div>
                        </div>
                        <div className="footerElement">
                            < Image src={'./linke.png'} alt="image1" className="imgFooter" />
                            <div>adresse.Linkedin@hotmmail.fr</div>
                        </div>
                        <div className="footerElement">
                            <p>@ : nom.société@hotmail.fr</p>
                            <p>tel : 01 83 66 55 23</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}