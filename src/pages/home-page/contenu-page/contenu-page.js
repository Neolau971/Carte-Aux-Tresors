import { Image } from 'react-bootstrap'
import './contenu-page.css';
import React from 'react'

const contenuliste = [
    {
        text: "En réalité, les gouvernements détiennent une large souveraineté sur le cyberespace. On croit souvent qu’Internet est partout et nulle part à la fois, flottant comme un nuage, mais, après tout, il est assujetti à la géographie et, par conséquent, à la loi […] Bien qu’il soit grisant de le considérer comme une infosphère sans lieu, Internet fait partie du monde réel. Comme tous les nouveaux mondes, il est resté sauvage pour un temps, mais la police finit toujours par se pointer.1",
        titre: "titre 1 blabla",
        image: < Image src={'./images.png'} alt="image1" />,
        date: "02/04/2020"
    },
    {
        text: "Selon Klein, marque et publicité se définissent ainsi : «On peut considérer la marque comme la principale raison d’être de l’entreprise moderne, et la publicité, comme l’un des véhicules de cette raison d’être dans le monde!»1",
        titre: "titre 2 blabla",
        image: < Image src={'./imagesTest2.jpg'} alt="image1" />,
        date: "15/06/2020"
    },
    {
        text: "La publicité ne servait plus à «annoncer l’existence du produit, mais [à] élaborer une image autour de la version d’une marque particulière d’un produit 1».",
        titre: "titre 3 blabla",
        image: < Image src={'./images.jpg'} alt="image1" />,
        date: "23/06/2020"
    },
    {
        text: "Janet Juhnke, dans un article qui traite du roman Le Magicien d’Oz de L. Frank Baume et de sa version cinématographique faite par Victor Fleming, souligne la qualité de l’adaptation : «Le film Le Magicien d’Oz produit par MGM est l’une des adaptations les plus réussies d’un roman au cinéma.1»",
        titre: "titre 4 blabla",
        image: < Image src={'./download.jpg'} alt="image1" />,
        date: "03/07/2020"
    },
]

export class ContenuPage extends React.Component {
    render() {
        return (
            <div>
                {contenuliste.map((element, index) => {
                    return (
                        <div key={index} className="contenuContainer">
                            <h3>{element.titre}</h3>
                            <div className="clearfix">
                                <div className="imgContainer">{element.image}</div>
                                <div className="textContainer">{element.text}</div>
                            </div>
                            <div className="dateContainer"><h6>{element.date}</h6></div>
                        </div>
                    )
                })
                }
            </div>
        )
    }
}