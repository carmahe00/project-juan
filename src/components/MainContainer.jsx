import React from 'react'
import foto from '../assets/Foto-header.svg';
import indicador from '../assets/Indicator.svg';
import sc from './MainContainer.module.scss';

export const MainContainer = () => {
    return (
        <>
            <div className={sc.container} >
                <img src={foto} alt="foto-header" className={sc.container__img} />
                <div className={sc.container__rectangle} />


            </div>
            <div className={sc.container__bottom} >
                <img src={indicador} alt="indicador" className={sc.container__bottom__indicador} />
                <button className={sc.container__bottom__rectangle}>Saber más +</button>
            </div>
        </>
    )
}
