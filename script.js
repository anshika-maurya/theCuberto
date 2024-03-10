Shery.mouseFollower();
Shery.makeMagnet(".magnet");

// Shery.hoverWithMediaCircle("kispar yakis element p mouse aayega", {passes videos and images} );
Shery.hoverWithMediaCircle(".hvr", {
  videos: ["./0.mp4", "./2.mp4", "./3.mp4"],
});

// imp

gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-400%",
  ease: Power1,
});

gsap.set('#svg', {autoAlpha:1})

var action = gsap.timeline({
  scrollTrigger: {
    trigger: ".container",
    pin: true,   
    start: 'top top', 
    end:'+=2600',
    scrub: 0.3,
   
  },
  defaults:{duration:5, ease:'none'}
})
// .from('#poly0', {attr:{points:"0,200 400,200 400,200 0,200 0,0"} },'1')
.from('#poly01', {attr:{points:"0,200 400,200 400,200 0,200 0,0"} },'1')
.from('#poly02', {attr:{points:"0,200 400,200 400,200 0,200 0,0"} }, '+=1')
.from('#poly03', {attr:{points:"0,200 400,200 400,200 0,200 0,0"} }, '+=1')
.from('#poly04', {attr:{points:"0,200 400,200 400,200 0,200 0,0"} }, '+=1')
.from('#poly05', {attr:{points:"0,200 400,200 400,200 0,200 0,0"} }, '+=1')
.from('#poly06', {attr:{points:"0,200 400,200 400,200 0,200 0,0"} }, '+=1')
.from('#poly07', {attr:{points:"0,200 400,200 400,200 0,200 0,0"} }, '+=1')




// scrub means jese-jese scroll vese-vese animate, ekh dm animate nahi hoga 


