/** VARIABLES FOR KEYS **/

const C4 = new Audio("sounds/C4.wav");
const Db4 = new Audio("sounds/Db4.wav");
const D4 = new Audio("sounds/D4.wav");
const Eb4 = new Audio("sounds/Eb4.wav");
const E4 = new Audio("sounds/E4.wav");
const F4 = new Audio("sounds/F4.wav");
const Gb4 = new Audio("sounds/Gb4.wav");
const G4 = new Audio("sounds/G4.wav");
const Ab4 = new Audio("sounds/Ab4.wav");
const A4 = new Audio("sounds/A4.wav");
const Bb4 = new Audio("sounds/Bb4.wav");
const B4 = new Audio("sounds/B4.wav");

const playKey = audio => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
};
