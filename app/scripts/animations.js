'use strict';

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
