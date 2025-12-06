
gsap.from("#heading1",{
    y:15,
    opacity:0,
    duration:1.5,
   
})

gsap.from("#heading2",{
    y:15,
    opacity:0,
    duration:1.5,  
    stagger:1 // If we have multiple elements (e.g. several <div>s with the same id, class) instead of all elements animating simultaneously, they animate in a sequence after a specific time. stagger: -1 animate from last to start
})

