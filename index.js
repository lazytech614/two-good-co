function locomotiveScroll(){
    gsap.registerPlugin(ScrollTrigger);
    const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);
    ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    ScrollTrigger.refresh();
}
locomotiveScroll();

function cursorMove(){
    var crsr = document.querySelector(".cursor");
    var body = document.querySelector("body");
    var items = document.querySelectorAll(".item");
    console.log(items);

    body.addEventListener("mousemove",function(e){
        gsap.to(crsr,{
            top: e.y-100,
            left: e.x-100
        })
    })

    items.forEach(function(elem){
        elem.addEventListener("mouseenter",function(){
            gsap.to(crsr,{
                opacity: 1,
            })
        })
    })

    items.forEach(function(elem){
        elem.addEventListener("mouseleave",function(){
            gsap.to(crsr,{
                opacity: 0,
            })
        })
    })
}
cursorMove();

function headersMove(){
    var head = document.querySelectorAll(".nav .right h4");
    gsap.to(head, {
        transform: "translateY(-100%)",
        opacity: 0,
        scrollTrigger: {
            trigger: head,
            scroller: ".main",
            start: "top 0",
            end: "top -5%",
            scrub: true
        }
    });
}
headersMove();
