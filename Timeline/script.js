
// timeline sets the boxes to move synchronously
const timeLine = gsap.timeline();

timeLine.from("h1",{
    y:-20,
    opacity:0,
    duration:1,
    delay:0.5
})

timeLine.from("h4",{
    y:-20,
    opacity:0,
    duration:1,
    stagger:0.3

})

timeLine.to("#box1", {
    x:1000,
    duration:2,
    
})
timeLine.to("#box2", {
    x:1000,
    duration:2,

})
timeLine.to("#box3", {
    x:1000,
    duration:2,
})
