let menu = document.querySelector("#nav i")
let close = document.querySelector("#sidebar i")


let tl = gsap.timeline();

tl.to("#sidebar",{
    right:0,
    duration:0.7
})
tl.from("#sidebar h3",{
    x:120,
    opacity:0,
    duration:0.7,
    stagger:0.1,
})

tl.from("#sidebar i",{
   opacity:0,
   duration:0.2
})

tl.pause()

menu.addEventListener("click",()=>{
    tl.play();
})

close.addEventListener("click",()=>{
    tl.reverse();
})

// Three properties of timeline
//  1. pause()
//  2. play()
//  3. reverse()