'use strict';

/* HASH SCROLLING ANIMATION */
function scrollToHash(hash) {
  if ( hash !== '' ) {
    event.preventDefault();
    let scrollHeight = $(hash)[0].offsetTop;
    TweenLite.to(window, 1.2, {scrollTo: scrollHeight, ease: Power2.easeOut});
    history.pushState('', document.title, hash);
  }
}

/* PARTICLES.JS */
particlesJS.load('particles-landing', 'particles-landing.json');
particlesJS.load('particles-menu', 'particles-menu.json');

/* INTERVALS TO TOGGLE SHINE CLASS ON CRYSTALS */
var shineDivTypes = ['normal', 'reverse'];
var shineTypes = ['shine'];

setInterval(() => {
  let currentShineDiv = $('.shineDiv')[Math.floor((Math.random() * $('.shineDiv').length) + 0)];
  currentShineDiv.className = 'shineDiv ' + shineDivTypes[Math.floor((Math.random() * shineDivTypes.length) + 0)];
  currentShineDiv.classList.toggle('shine');
}, Math.floor((Math.random() * 2900) + 1800));

/* GSAP ANIMATIONS */
TweenLite.to($('.logotype'), 2, { autoAlpha: 1, y: -35, rotation: 0, ease: Power2.easeOut, delay: 0.5 }); // Fade logo in on load.

/* SCROLLMAGIC ANIMATIONS */
var controller = new ScrollMagic.Controller();

/* var testScene = new ScrollMagic.Scene({
  triggerElement: '.menu-about',
  offset: 100
}).setClassToggle('.menu-about', 'fade-out').addTo(controller); */
/* .addIndicators({
  name: 'Fade out',
  colorTrigger: 'black',
  indent: 10
}) */
