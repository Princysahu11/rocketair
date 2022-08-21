
function show() {
    gsap.registerPlugin(ScrollTrigger);

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    locoScroll.on("scroll", ScrollTrigger.update);

    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    ScrollTrigger.refresh();

}
show();



var page2 = document.querySelector("#page2")

page2.addEventListener("mousemove",
    function (dets) {

        document.querySelector("#circle").style.top = `${dets.y}px`;
        document.querySelector("#circle").style.left = `${dets.x}px`;

    })

const text = document.getElementById("do");
text.innerHTML = text.textContent.replace(/\S/g, "<span> $& </span>");
const ele = document.querySelectorAll("span");
for (var i = 1; i < ele.length; i++) {
    ele[i].style.transform = "rotate(" + i * 12.95 + "deg)"
}

var video = document.querySelector("#vido");
var done = document.querySelector("#do");
var part1 = document.querySelector("#part1");
var part2 = document.querySelector("#part2");
var part3 = document.querySelector("#part3");
var brand = document.querySelector("#brand");
var product = document.querySelector("#product");
var motion = document.querySelector("#motion");
var one = document.querySelector("#arrow1");
var two = document.querySelector("#arrow2");
var three = document.querySelector("#arrow3");


document.querySelector("#part1")
    .addEventListener("mouseenter", function (dets) {
        // console.log(dets.target.id)
        video.style.display = "inline";
        done.style.display = "none";
        part1.style.backgroundColor = "#fff";
        brand.style.color = "#000";
        one.innerHTML = `<i class="ri-arrow-right-up-line"></i>`;


    })

document.querySelector("#part1")
    .addEventListener("mouseleave", function (dets) {
        // console.log(dets.target.id)
        video.style.display = "none";
        done.style.display = "inline";
        part1.style.backgroundColor = "#000";
        brand.style.color = "#fff";
        one.innerHTML = `<i class="ri-arrow-right-line"></i>`;


    })

document.querySelector("#part2")
    .addEventListener("mouseenter", function (dets) {
        // console.log(dets.target.id)
        video.style.display = "inline";
        done.style.display = "none";
        part2.style.backgroundColor = "#fff";
        product.style.color = "#000";
        two.innerHTML = `<i class="ri-arrow-right-up-line"></i>`;


    })

document.querySelector("#part2")
    .addEventListener("mouseleave", function (dets) {
        // console.log(dets.target.id)
        video.style.display = "none";
        done.style.display = "inline";
        part2.style.backgroundColor = "#000";
        product.style.color = "#fff";
        two.innerHTML = `<i class="ri-arrow-right-line"></i>`;

    })



document.querySelector("#part3")
    .addEventListener("mouseenter", function (dets) {
        // console.log(dets.target.id)
        video.style.display = "inline";
        done.style.display = "none";
        part3.style.backgroundColor = "#fff";
        motion.style.color = "#000";
        three.innerHTML = `<i class="ri-arrow-right-up-line"></i>`;


    })

document.querySelector("#part3")
    .addEventListener("mouseleave", function (dets) {
        // console.log(dets.target.id)
        video.style.display = "none";
        done.style.display = "inline";
        part3.style.backgroundColor = "#000";
        motion.style.color = "#fff";
        three.innerHTML = `<i class="ri-arrow-right-line"></i>`;

    })




gsap.from("#left>h1", {
    x: -360,
    duration: 1,
})


gsap.from("#right>h2", {
    x: -360,
    duration: 1,
})
gsap.from("#right>h3", {
    x: -360,
    duration: 1,
})


gsap.from("#page3>h3", {
    scrollTrigger: {
        trigger: "#page3>h3",
        scrub: true,
        scroller: "#main",
        
    },
    opacity:0,
    x:-360,
    duration: 0.8,
    scale:1.1
        
})

gsap.from("#page6>h2", {
    scrollTrigger: {
        trigger: "#page6>h2",
        scrub: true,
        scroller: "#main",
        
    },
    opacity:0,
    x:360,
    duration: 0.4,
    scale:1.1
        
})

gsap.from("#page10>h1", {
    scrollTrigger: {
        trigger: "#page10>h1",
        scrub: true,
        scroller: "#main",
        
    },
    x: -60,
    duration: 1,
    scale:1.1
})


gsap.from("#page10>h2", {
    scrollTrigger: {
        trigger: "#page10>h2",
        scrub: true,
        scroller: "#main",
        
    },
   x:-90,
    duration: 1,
    scale:1.3
})


































