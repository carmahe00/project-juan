import React from 'react'
import fotocar from '../assets/Foto-car-1.svg';
import sc from'./Card.module.scss';

const Card = () => {
    return (
        <div className={sc.card}>
            <img src={fotocar} alt="foto car" className={sc.card__car} />
            <div className={sc.card__info}>
                <div className={sc.card__info__title} >Lorem ipsum dolor sit amet consectetur adipisicing elit. </div>
                <div className={sc.card__info__paragraph} ><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur odit veritatis aut eaque! Nesciunt dolores explicabo at, facere possimus veritatis hic molestiae, ratione nam illum assumenda quam sit tempora repellat?</p></div>
                <button className={sc.card__info__botton}>Ver articulos +</button>
            </div>
        </div>
    )
}

export default Card
