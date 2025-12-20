import './App.css'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';
import { useRef, useState } from 'react';
import flyImage from "../src/assets/image.png"

function App() {
  const secDiv = useRef()

  const moveX = gsap.utils.random(-200, 300, 10);
  const roters = gsap.utils.random(-360, 720, 30)
  const [move, setMove] = useState(0);
  const [roter, setRoter] = useState(0);


  const [X, setX] = useState(0);
  const [Y, setY] = useState(0);
  const [rotate, setRotate] = useState(0);

  const RandomX = gsap.utils.random(-200, 300, 10);
  const RandomY = gsap.utils.random(-300, 300, 10);
  const flyRotate = gsap.utils.random(-360, 720, 30)

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
      x: move,
      duration: 1,
      rotate: roters,
    })
  }, [move, roter])


  //  Fly Animation
  useGSAP(() => {
    gsap.to("#fly", {
      x: X,
      y: Y,
      rotate: rotate
    })
  }, [X, Y, rotate])


  return (
    <div>

      <div>
        <div id="box1">This is 1st div</div>
        <div ref={secDiv} id="box2">This is 2nd div</div>
      </div>

      <div className="secondDiv">
        <div id="box"></div>
        <button id="btn" onClick={() => {
          setMove(moveX)
          setRoter(roters)
        }}>Animate</button>
      </div>

      <div className="thirdDiv">
        <img id="fly" src={flyImage}
          onClick={() => {
            setX(RandomX)
            setY(RandomY)
            setRotate(flyRotate)
          }} />
      </div>


    </div>
  )
}

export default App
