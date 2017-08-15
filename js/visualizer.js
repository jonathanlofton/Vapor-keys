
let canvas = document.getElementById("canvas");
let contex = canvas.getContext("2d");
let analyser = context.createAnalyser();
const keyCodeExcludeList = []
const availableKeys = [65, 83, 68, 70, 71, 72, 74, 75, 76, 81, 87, 69, 82, 84, 89, 85, 73, 79, 80,
90, 88, 67, 86, 66, 78, 77]



window.addEventListener('keydown', (e) => {
  // avoid creating a visualization for a key that
  // that is not associated with a sound
  if (!availableKeys.includes(e.keyCode)) {
    return
  }

  let src;
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  // create mediaelementsource for context and connect to
  // analyser if key hasn't been pressed yet.
  if (!keyCodeExcludeList.includes(e.keyCode)) {
      src = context.createMediaElementSource(audio);
      src.connect(analyser);
  }
  // add keycode to exclude list for creating a media
  // element & analyzer connection
  keyCodeExcludeList.push(e.keyCode);



  analyser.connect(context.destination);
  //
  analyser.fftSize = 128;
  // an array of 8-bit unsigned integers
  let dataArray = new Uint8Array(analyser.frequencyBinCount);
  let bufferLength = analyser.frequencyBinCount;

  var WIDTH = canvas.width;
  var HEIGHT = canvas.height;


  // uses the barwidth
  let barWidth = ( WIDTH / bufferLength) * 2.5;
  let barHeight;
  let x = 0;

  let renderFrame = () => {
    // repaints the animation when hit,
    // so anytime that a keydown is registered
    requestAnimationFrame(renderFrame);

    x = 0;
    // updates the dataArray with the current
    // frequency and uses that
    // value to update the height of the bar
    analyser.getByteFrequencyData(dataArray);
    contex.fillStyle = "white"
    contex.fillRect(0, 0, WIDTH, HEIGHT);

    // Credit to Nick Jones for how to render the frequencies
    // https://codepen.io/awesomecoding/pen/rVBaab?editors=0010
    for (let i = 0; i < bufferLength; i ++) {
      // depending on the frequency value the height of
      // each bar is determined

      barHeight = dataArray[i];
      contex.fillStyle = `black`;
      contex.fillRect(x,HEIGHT - barHeight, barWidth, barHeight)

      x += barWidth + 1;
    }
  }

  renderFrame();
})
