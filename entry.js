

document.addEventListener("DOMContentLoaded", () => {
  let ctx = new AudioContext();
  let audio = document.getElementById('myAudio');
  let audioSrc = ctx.createMediaElementSource(audio);
  let analyser = ctx.createAnalyser();
  let canvas = document.getElementById("canvas");
  let context = canvas.getContext("2d");

  audioSrc.connect(analyser);
  audioSrc.connect(ctx.destination);

  analyser.fftSize = 256;

  let frequencyData = new Uint8Array(analyser.frequencyBinCount);

  var WIDTH = canvas.width;
  var HEIGHT = canvas.height;

  let bufferLength = analyser.frequencyBinCount;
  console.log(bufferLength)

  let barWidth = ( WIDTH / bufferLength) * 2.5;
  let barHeight;
  let x = 0;

  let renderFrame = () => {
    requestAnimationFrame(renderFrame);

    x = 0;

    analyser.getByteFrequencyData(frequencyData);

    context.fillStyle = "#000";
    context.fillRect(0, 0, WIDTH, HEIGHT);

    for (let i = 0; i < bufferLength; i ++) {
      barHeight = frequencyData[i];

      let r = barHeight + (25 * (i/bufferLength));
      let g = 250 * (i/bufferLength);
      let b = 50;

      context.fillStyle = `rgb(${r}, ${g}, ${b})`;
      context.fillRect(x, HEIGHT - barHeight, barWidth, barHeight)
    }
  }

  audio.autoplay = true
  renderFrame();
});
