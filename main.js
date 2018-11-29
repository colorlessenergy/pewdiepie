// https://stackoverflow.com/questions/14926366/mousewheel-event-in-modern-browsers

if (window.addEventListener) {
  // IE9, Chrome, Safari, Opera
  window.addEventListener("mousewheel", MouseWheelHandler, false);
  // Firefox
  window.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
}
// IE 6/7/8
else {
  window.attachEvent("onmousewheel", MouseWheelHandler);
}

window.addEventListener('keyup', function (e) {
  switch (e.keyCode) {
    //  down
    case 38:
      scrollWindow(1)
      break;

      //  up
    case 40:
      scrollWindow(-1)
      break;
    default:
      break;
  }
});


//  move on mouse wheel

function MouseWheelHandler(e) {
  // cross-browser wheel delta
  var e = window.event || e; // old IE support
  var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

  scrollWindow(delta);

  return false;
}

function scrollWindow(delta) {
  window.scrollBy({
    top: (delta == -1 ? 1 : -1) * window.innerHeight,
    left: 0,
    behavior: 'smooth'
  });
}
