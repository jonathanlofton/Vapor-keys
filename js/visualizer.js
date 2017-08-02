
let context = new AudioContext();
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let analyser = context.createAnalyser();

arrayOfSound = ["assets/rick-ross-gruntmp3.mp3", "assets/boomin-rimshot-hard.wav"]
const keyCodes = []



window.addEventListener('keydown', (e) => {
  let src;
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);

  // create mediaelementsource for context and connect to
  // analyser if key hasn't been pressed yet.
  if (!keyCodes.includes(e.keyCode)) {
      src = context.createMediaElementSource(audio);
      src.connect(analyser);
  }
  // add keycode to exclude list for creating a media element
  keyCodes.push(e.keyCode);



  analyser.connect(context.destination);

  analyser.fftSize = 256;

  let dataArray = new Uint8Array(analyser.frequencyBinCount);
  let bufferLength = analyser.frequencyBinCount;

  var WIDTH = canvas.width;
  var HEIGHT = canvas.height;


  let barWidth = ( WIDTH / bufferLength) * 2.5;
  let barHeight;
  let x = 0;

  let renderFrame = () => {
    requestAnimationFrame(renderFrame);

    x = 0;

    analyser.getByteFrequencyData(dataArray);

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    for (let i = 0; i < bufferLength; i ++) {
      barHeight = dataArray[i];

      let r = barHeight + (25 * (i/bufferLength));
      let g = 105 * (i/bufferLength);
      let b = 180;

      ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
      ctx.fillRect(x, HEIGHT - barHeight, barWidth, barHeight)

      x += barWidth + 1;
    }
  }

  audio.autoplay = true
  renderFrame();
})
