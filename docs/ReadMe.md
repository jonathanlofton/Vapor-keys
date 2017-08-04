## VaporKeys

### Background  

VaporKeys is an electric keyboard emulator. Utilizing the keyboard on your own computer you will be able to create your own sound tracks with a variety of different audio samples. VaporKeys will also let you record your tracks in real time with playback capabilities, and allow you to layer multiple custom soundtracks on top of each other.

### MVP  

- [ ] Render a keyboard on the screen
- [ ] Keys play sounds when pressed
- [ ] Keys produce a visualization
- [ ] Can play a custom soundtrack on a loop
- [ ] A production README

### Wireframes

[wireframes](wireframes/vaporkeys.png)

### Architecture and Technologies

This project will be implemented with the following technologies:

- Javascript
- Canvas
- HTML5 Audio
- HTML5 with Canvas for DOM manipulation and rendering
- CSS for styling

### Implementation Timeline

**Day 1** Setup all necessary modules, including getting webpack up and running and any other libraries that I'll be utilizing. Create a webpack.config.js as well as package.json and gitignore file. Write a basic entry file with core script functionality. Goals for the day:
  - Have some audio files loaded
  - Have a key press produce a sound
  - Have folder structure design made

**Day 2** Dedicate this day to learning how to use the MediaStream Recording API.
Goals for the day:
  - Be able to record a 6 second audio snippet being created by the user
  - Be able to playback recorded audio quickly
  - Add some more styling
  - Add some more keys
  - Add some more audio files

**Day 3** Additional day to work on having the live recording and playback feature functional.

  - Try and add sound loop to design so the user can listen to their custom 6 second soundtrack on a never ending loop
  - Be able to record over the previous recording and layer multiple
  beats together for a more full audio snippet

**Day 4** Polish up final project
  - Finish up any remaining features
  - Do additional styling
  - Add additional audio samples


### Bonus features

I would like to be able to add these features at some point.
- [ ] Audio visualizer
- [ ] Layer beat loops on top of each other
- [ ] Add multiple sound sets
- [ ] Incorporate a backend and include users
