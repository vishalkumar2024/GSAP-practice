
gsap.to("#page2 h1",{
    transform:"translate(-34%)",
    // duration:3,
    delay:1,
    scrollTrigger:{
       trigger:"#page2 ",
       scroller:"body",
       markers:true,
       start:"top 0%",
       end:"top -50%",
       scrub:2,
       pin:true, // to use pin the parent div should be give to trigger attribute  
    }

})