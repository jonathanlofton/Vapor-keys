let down = false;

window.addEventListener('keydown', (e) => {
  if (down) return;
  down = true
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  // stop the function
  if (!audio) return;
  // rewind to the start
  audio.currentTime = 0;
  audio.play();
  console.log(key.classList)
  if (!key.classList.contains('playing')) {
    key.classList.add('playing');
  }

  console.log(key.classList)
}, false)

window.addEventListener('keyup', (e) => {
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.remove('playing');
  down = false;
}, false)
