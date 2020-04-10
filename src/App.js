import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import PlayerShip from './components/PlayerShip/PlayerShip';
import PlayerShot from './components/PlayerShot/PlayerShot';

function App() {
  const [shipPosition, setShipPosition] = useState(0)
  const [shotHorizontal, setShotHorizontal] = useState(0)
  const [shotFired, setShotFired] = useState(false)
  const [shotFiring, setShotFiring] = useState(false)

  const shipPositionListener = (event) => {
    if (event.keyCode === 65 || event.keyCode === 37) {
      setShipPosition(prevShipPosition => prevShipPosition - 20)
    } else if (event.keyCode === 68 || event.keyCode === 39) {
      setShipPosition(prevShipPosition => prevShipPosition + 20)
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', shipPositionListener, false)
  }, [])

  const shotFiredListener = useCallback((event) => {
    if (event.keyCode === 32 && !shotFired) {
      setShotHorizontal(shipPosition)
      setShotFired(true)
    }
  }, [shotFired, shipPosition])

  useEffect(() => {
    document.addEventListener('keydown', shotFiredListener, false)
  }, [shotFiredListener])

  useEffect(() => {
    if (shotFired) {
      setShotFiring(true)
      setShotFired(false)
      setTimeout(() => { setShotFiring(false) }, 1000)
    }
  }, [shotFired, shotHorizontal])

  return (
    <div className='play-area-container'>
      <div className='play-area'>
        <PlayerShip position={shipPosition} />
        <PlayerShot show={shotFiring} horizontal={shotHorizontal} />
      </div>
    </div>
  );
}

export default App;
