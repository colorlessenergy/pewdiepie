// only apply javascript when it is on a desktop
if (window.innerWidth >= 1057) {
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

  let counter = 0;

  window.addEventListener('keyup', function (e) {
    switch (e.keyCode) {
      //  down
      case 38:
        scrollWindow(1);
        break;

      //  up
      case 40:
        scrollWindow(-1);
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

  let playSongButton = document.querySelector('.play');

  function scrollWindow(delta) {
    // if on the bottom level can't go down
    if (counter == 3 && delta == -1) {
      counter = 0;
      playSongButton.classList = "play";
      document.body.classList = "";
      return;
    }
    // if on the top level can't go up
    if (counter === 0 && delta == 1) {
      return;
    }
    counter += (delta == -1 ? 1 : -1);
    playSongButton.classList = "play movePlayer" + counter;
    document.body.classList = "move" + counter;
  }

  /*
  ======================================

    logic for the song
    * button to play the song
    * start playing the song after 2 seconds

  =======================================
  */

  let pewdiepieSong = new Audio();
  pewdiepieSong.src = "song/pewdiepie-song.mp3";
  pewdiepieSong.volume = 0.2;

  let isPlaying = false;

  playSongButton.addEventListener('click', function () {
    if (isPlaying === false) {
      pewdiepieSong.play();
      isPlaying = true;
      playSongButton.textContent = '| |';
    } else {
      pewdiepieSong.pause();
      isPlaying = false;
      playSongButton.textContent = '>';
    }

  });
}