import './App.css'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';

function App() {
  const secDiv = useRef()
  const [random, setRandom] = useState(0);
  const [roter, setRoter] = useState(0);

  const Random = gsap.utils.random(-200, 300, 10);
  const roters = gsap.utils.random(-360, 720, 30)

  useGSAP(() => {
    gsap.to("#box1", {
      x: 1000,
      delay: 1,
      duration: 2,
      repeat: -1,
      backgroundColor: "green",
    })

    gsap.from(secDiv.current, {
      x: 1000,
      delay: 1,
      duration: 2,
      repeat: -1,
      backgroundColor: "green",
    })
  })

  useGSAP(() => {
    gsap.to("#box", {
      x:Random,
      duration:1,
      rotate:roters,
    })
  },[random, roter ])

   
  return (
    <div>

      <div>
        <div id="box1">This is 1st div</div>
        <div ref={secDiv} id="box2">This is 2nd div</div>
      </div>

      <div className="secondDiv">
        <div id="box"></div>
        <button id="btn" onClick={() => {
          setRandom(Random)
         setRoter(roters)
        }}>Animate</button>
      </div>

    </div>
  )
}

export default App
