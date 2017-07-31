export const SOUNDS = ['../assets/rick-ross-gruntmp3.mp3']


class Audio {
  constructor() {
    this.keyDown = false;
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleKeyUp = this.handleKeyUp.bind(this);

    window.addEventListener("keydown", this.handleKeyDown);
    window.addEventListener("keyup", this.handleKeyUp);
  }

  handleKeyDown(e) {
    const KeyCode = e.keyCode;
    this.keyDown = true;
  }

  handleKeyUp(e) {
    this.keyDown = false;
  }

}
