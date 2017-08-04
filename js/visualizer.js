
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
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
  analyser.fftSize = 256;
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
    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // bufferLength is going to be the number of
    // of frequencies listed in the frequencyBinCount
    for (let i = 0; i < bufferLength; i ++) {
      // depending on the frequency value the height of
      // each bar is determined
      barHeight = dataArray[i];

      // unique colors depending on the height of the bar
      let r = barHeight + (25 * (i/bufferLength));
      let g = 50 * (i/bufferLength);
      let b = 100;

      ctx.fillStyle = `rgb(${r}, ${g}, ${b}`;
      ctx.fillRect(x,HEIGHT - barHeight, barWidth, barHeight)

      x += barWidth + 1;
    }
  }

  renderFrame();
})
