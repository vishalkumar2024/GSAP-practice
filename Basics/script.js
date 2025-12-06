// gsap.to - Animation starts from actual place of the component
// gsap.from - Animation starts from where the components will finally reache 


gsap.to("#box1",{
    x:1000,
    delay:1,
    duration:3

})

gsap.from("#box2",{
    x:1000,
    delay:1,
    duration:3,
    rotation:"360" // properties are written in camel case
})

gsap.to("#box3",{
    x:1000,
    delay:1,
    duration:2,
    backgroundColor:"white", 
    borderRadius:"50%"
})

