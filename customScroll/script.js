let cursor = document.querySelector("#cursor");
let page = document.querySelector("#page1")

page.addEventListener("mousemove",(val)=>{
    gsap.to(cursor,{
        x:val.x,
        y:val.y,
        delay:0,
        ease:"slow"
    })
})