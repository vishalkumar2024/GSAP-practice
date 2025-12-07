

gsap.from("#page1 #box", {
    scale: 0,
    rotate: 360,
    duration: 2,
    delay: 1

})

gsap.from("#page2 #box", {
    scale: 0,
    rotate: 360,
    duration: 2,
    scrollTrigger: {
        trigger: "#page2 #box",
        scroller: "body",
        // markers:true,
        start: "top 70%",
    }
})

gsap.from("#page3 h1", {
    x: 500,
    y: -100,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page3 h1",
        scroller: "body",

    }
})

gsap.from("#page3 h2", {
    x: -500,
    y: 100,
    duration: 2,
    opacity: 0,
    scrollTrigger: {
        trigger: "#page3 h2",
        scroller: "body",

    }
})



gsap.from("#page4 #box", {
    rotate: 720,
    scale: 0,
    duration: 2,
    scrollTrigger: {
        trigger: "#page4 #box",
        scroller: "body",
        markers: true,
        start: "top 70%", // component animate between start and end defined
        end: "top 55%",
        scrub: true, // animate the component on scrolling
    }
})