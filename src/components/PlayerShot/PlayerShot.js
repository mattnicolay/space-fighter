import React from 'react';
import shot from '../../assets/ship-shot-2.png'
import './PlayerShot.css'

const PlayerShot = ({ show, horizontal }) => (
    show
        ? <img
            style={{
                left: `${295 + horizontal}px`
            }}
            className='shot'
            src={shot}
            height='30px'
            width='30px'
            alt='player shot' />
        : null
)

export default PlayerShot