import './App.css'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';

function App() {
  const secDiv = useRef()

  useGSAP(() => {
    gsap.to("#box1", {
      x: 1000,
      delay:1,
      duration: 2,
      backgroundColor: "green",
    })

    gsap.from(secDiv.current,{
      x: 1000,
      delay:1,
      duration: 2,
      backgroundColor: "green",
    })
  })

  return (
    <div>
      <div id="box1">This is 1st div</div>
      <div ref={secDiv} id="box2">This is 2nd div</div>
    </div>
  )
}

export default App
