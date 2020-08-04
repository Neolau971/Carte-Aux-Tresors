import React from 'react'
import { MenuComponent } from '../../components/menu/menu-component'
import { SubMenuComponent } from '../../components/sub-menu/sub-menu-component'
import { ContenuFirstPage } from '../first-page/contenu-first-page/contenu-first-page'
import './first-page.css'

export class FirstPage extends React.Component {
    render() {
        return (
            <div className="home">
                <MenuComponent />
                <div className="homeMain">
                    <div className="homeContentPage"><ContenuFirstPage /></div>
                    <div className="subMenuPage"><SubMenuComponent /></div>
                </div>
            </div>
        )
    }
}