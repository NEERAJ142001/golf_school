var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur");

function nav(){
  document.addEventListener("mousemove", function (dets) {
    crsr.style.left = dets.x + "px";
    crsr.style.top = dets.y + "px";
    blur.style.left = dets.x - 250 + "px";
    blur.style.top = dets.y - 250 + "px";
  });
  
  var h4all = document.querySelectorAll(".nav h4");
  h4all.forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      crsr.style.scale = 3;
      crsr.style.border = "1px solid #fff";
      crsr.style.backgroundColor = "transparent";
    });
    elem.addEventListener("mouseleave", function () {
      crsr.style.scale = 1;
      crsr.style.border = "0px solid #95C11E";
      crsr.style.backgroundColor = "#95C11E";
    });
  });
}
nav()

function animation(){
  // navigartion bar
  gsap.to(".nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "12vh",
    scrollTrigger: {
      trigger: "#nav",
      scroller: "body",
      // markers:true,
      start: "top -10%",
      end: "top -11%",
      scrub: 1,
    },
  });
  // changing bgc color to black
  gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: ".main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });
  // page2
  gsap.from("#about-us .img1", {
    x: -110,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 50%",
      end: "top 25%",
      scrub: 3,
    },
  });
  // page2
  gsap.from("#about-us .img2", {
    x: 110,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 50%",
      end: "top 25%",
      scrub: 3,
    },
  });
  // [age2]
  gsap.from("#about-us-in", {
    y: -180,
    opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#about-us",
      scroller: "body",
      // markers:true,
      start: "top 50%",
      end: "top 25%",
      scrub: 3,
    },
  });
  // page2
  gsap.from(".card", {
    scale: 0.8,
    opacity: 0,
    duration: 1,
    stagger: 0.4,
    scrollTrigger: {
      trigger: ".card",
      scroller: "body",
      // markers:true,
      start: "top 50%",
      end: "top 30%",
      scrub: 1,
    },
  });
  // page2
  gsap.from("#green-div h4", {
    y: -200,
    opacity: 0,
    duration: 2,
    scrollTrigger: {
      trigger: "#green-div h4",
      scroller: "body",
      // markers:true,
      start: "top 30%",
      end: "bottom 30%",
      scrub: 1,
    },
  });
  // page3
  gsap.from("#colon1", {
    opacity: 0,
    y: -50,
    x: -50,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 35%",
      end: "top 20%",
      scrub: 4,
    },
  });
  // page3
  gsap.from("#colon2", {
    opacity: 0,
    y: 50,
    x: 50,
    duration: 0.5,
    scrollTrigger: {
      trigger: "#colon1",
      scroller: "body",
      // markers:true,
      start: "top 40%",
      end: "top 20%",
      scrub: 4,
    },
  });
  // page3
  gsap.from(".page3>p", {
    y: 50,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: ".page3>p",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 20%",
      scrub: 4,
    },
  });
  // page4
  gsap.from(".page4 h1", {
    y: 100,
    scrollTrigger: {
      trigger: ".page4 h1",
      scroller: "body",
      // markers:true,
      start: "top 55%",
      end: "top 35%",
      scrub: 3,
    },
  });
}
animation();

// swapper.js

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerView: 1,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
