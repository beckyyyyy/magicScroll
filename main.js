var controller = new ScrollMagic.Controller()

const myTimeline = gsap.timeline()
myTimeline
  .fromTo("#boxOne", { opacity: 1 }, { opacity: 0 }, "hash1")
  .fromTo("#boxTwo", { opacity: 0 }, { opacity: 1 }, "hash1")
  .to("#boxTwo", { opacity: 0 }, "hash2")
  .fromTo("#boxThree", { opacity: 0 }, { opacity: 1 }, "hash2")

new ScrollMagic.Scene({
  triggerElement: "#blockTwo",
  triggerHook: "onLeave",
  duration: "300%",
})
  .setPin("#blockTwo")
  .setTween(myTimeline)
  .addIndicators()
  .addTo(controller)
