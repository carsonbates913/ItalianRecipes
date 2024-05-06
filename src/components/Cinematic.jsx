import React from 'react'
import './Cinematic.css'

function Cinematic() {
  return (
    <div className="cinematic-container">
      <video className="cinematic-video" src="./Italian_Cooking_Cinematic.mp4" autoPlay loop muted></video>
      <div className="cinematic-title">
        <h1 className="cinematic-title-style1">Cucina</h1>
        <h1 className="cinematic-title-style2"><span className="special-d">D</span>'Italia</h1>
      </div>
    </div>
  )
}

export default Cinematic