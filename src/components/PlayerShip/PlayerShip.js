import React, { useEffect, useState } from 'react';
import playerShipFrame0 from '../../assets/pixil-frame-0.png';
import playerShipFrame1 from '../../assets/pixil-frame-1.png';
import './PlayerShip.css';

const PlayerShip = ({ position }) => {
    const [shipFrame, setShipFrame] = useState(playerShipFrame0)

    useEffect(() => {
        setTimeout(() => {
            setShipFrame(prevShipFrame =>
                prevShipFrame === playerShipFrame0
                    ? playerShipFrame1
                    : playerShipFrame0)
        }, 100)
    }, [shipFrame])

    return <img
        className='ship'
        src={shipFrame}
        height='60px'
        width='60px'
        style={{
            transform: `translateX(${position}px)`
        }}
        alt='player ship' />
}

export default PlayerShip