import './App.css'
import Nav from './components/Nav/Nav'
import Player from './components/Player/Player'
import { useRef } from 'react'

function App() {
  const multitrackRef = useRef(null);
  return (
    <>
      <div id="app">
        <Nav multitrackRef={multitrackRef}/>
        <Player multitrackRef={multitrackRef}/>
        {/* <TryMultitrack/> */}
      </div>
    </>
  )
}

export default App
