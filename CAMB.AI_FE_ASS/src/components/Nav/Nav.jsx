import React, { useRef, useState } from 'react'
import Logo from '../../assets/logo.png'


export default function Nav({multitrackRef}) {
    const [ppIcon, setPpIcon] = useState('https://img.icons8.com/ios/50/play--v1.png')
    const sliderRef = useRef(null)
    const handlePlay=()=>{
      if(multitrackRef.current){
        multitrackRef.current.isPlaying() ? setPpIcon('https://img.icons8.com/ios/50/play--v1.png') : setPpIcon('https://img.icons8.com/ios/50/pause--v1.png')
        multitrackRef.current.isPlaying() ? multitrackRef.current.pause() : multitrackRef.current.play()
      }
    }

    const sliderInput = () => {
      if(multitrackRef.current){
        multitrackRef.current.zoom(slider.valueAsNumber)
      }
    }

  return (
    <div id='nav'>
      <div id='nav-logo'><img src={Logo} alt="logo" /></div>
        <div id='size-slider' style={{position:'fixed', right:130,zIndex:'100', top:50}}>
          <input id='slider' type="range" min="1" max="100" defaultValue={1} ref={sliderRef} onInput={sliderInput} />
        </div>
        <div id='download-button-container' style={{position:'fixed', right:20,zIndex:'100'}} onClick={handlePlay}>
          <button id='download-button' ><img width="20" height="20" src={'https://img.icons8.com/ios/50/play--v1.png'} alt="pause-play"/><div style={{fontSize:'20px'}}>/</div><img width="20" height="20" src={'https://img.icons8.com/ios/50/pause--v1.png'} alt="pause-play"/> </button>
        </div>
    </div>
  )
}
