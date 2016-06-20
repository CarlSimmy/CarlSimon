'use strict';

/* GSAP ANIMATIONS */
TweenLite.to($('.logotype'), 2, {autoAlpha: 1, y: 80, rotation: 0, ease: Power2.easeOut, delay: 0.5}); // Fade logo in on load.

/* SCROLLMAGIC ANIMATIONS */
var controller = new ScrollMagic.Controller();

var testScene = new ScrollMagic.Scene({
  triggerElement: '.menu-about',
  offset: -50
})
.setClassToggle('.menu-about', 'fade-out')
.addIndicators({
  name: 'Fade out',
  colorTrigger: 'black',
  indent: 10,
})
.addTo(controller);
