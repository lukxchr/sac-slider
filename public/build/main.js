console.log("hello");

function updatePercentage() {
  tl.progress();
  console.log(tl.progress());
}

var tl = new TimelineMax({ onUpdate: updatePercentage }); //for scroll based animations
var tl2 = new TimelineMax(); //for NOT scroll based animations

const controller = new ScrollMagic.Controller();

tl.from("#frame2-img", 0.5, { scale: 1.25 });
tl.from("#farmer-circle-img", 1, { x: 200, opacity: 0 });
tl.from("#beans-circle-img", 1, { x: -200, opacity: 0 }, "-=1");
tl.from("#coffee-bag", 1, { x: 200, opacity: 0 }, "-=1");

// tl.from("#frame2-text-header", 0.5, { x: 500, opacity: 0 });
tl2.from("#frame2-text-header", 0.5, { scale: 0 });
tl2.to("#frame2-text-header", 0.5, { y: -25 });

tl2.from("#frame2-text", 0.5, { x: 500, opacity: 0 });
tl2.to("#frame2-text", 0.5, { y: -25 });

tl.from("#frame2-btns", 1, { x: 300, opacity: 0 });

tl.from("#frame2-beans", 3, { y: -50 }, "-=3");
tl.to("#frame2-beans2", 3, { y: 150 }, "-=3");

tl.from("#frame2-progress-bar", 3, { width: 0 }, "-=3");

const scene = new ScrollMagic.Scene({
  triggerElement: "#frame2",
  triggerHook: "onLeave",
  duration: "100%",
})
  .setPin("#frame2")
  .setTween(tl)
  .addTo(controller);

const scene2 = new ScrollMagic.Scene({
  triggerElement: "#frame2",
})
  .setTween(tl2)
  .addTo(controller);

// frame1

var tl3 = new TimelineMax(); //for NOT scroll based animations
tl3.from("#frame1-header", 1, { y: 200 });
tl3.from("#frame1-subheader", 2, { y: 200 }, "-=1");
tl3.from("#shovel", 1, { y: -50 }, "-=1.75");

const scene3 = new ScrollMagic.Scene({
  triggerElement: "#frame1",
})
  .setTween(tl3)
  .addTo(controller);
