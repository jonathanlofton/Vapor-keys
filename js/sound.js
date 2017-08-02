window.addEventListener('keydown', (e) => {
  console.log(e.keyCode);
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return; // stop the function
  audio.currentTime = 0; // rewing to the start
  audio.play();
  key.classList.add('playing');
})

removeTransition = (e) => {
  if (e.type === 'transitionend') {
    e.target.classList.remove('playing')
  }
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
