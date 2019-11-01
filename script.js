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

const keySound = audio => {
  const clone = audio.cloneNode();
  clone.play();
  setTimeout(() => (clone.volume = 0.8), 400);
  setTimeout(() => (clone.volume = 0.6), 800);
  setTimeout(() => (clone.volume = 0.4), 1200);
  setTimeout(() => (clone.volume = 0.2), 1600);
  setTimeout(() => (clone.volume = 0), 2000);
};

/** C4 KEY **/
const C4key = document.querySelector(".C4-key");
const playC4 = () => {
  keySound(C4);
  C4key.classList.add("active");
  setTimeout(() => C4key.classList.remove("active"), 200);
};
C4key.addEventListener("click", playC4);

/** Db4 KEY **/
const Db4key = document.querySelector(".Db4-key");
const playDb4 = () => {
  keySound(Db4);
  Db4key.classList.add("active");
  setTimeout(() => Db4key.classList.remove("active"), 200);
};
Db4key.addEventListener("click", playDb4);

/** D4 KEY **/
const D4key = document.querySelector(".D4-key");
const playD4 = () => {
  keySound(D4);
  D4key.classList.add("active");
  setTimeout(() => D4key.classList.remove("active"), 200);
};
D4key.addEventListener("click", playD4);

/** Eb4 KEY **/
const Eb4key = document.querySelector(".Eb4-key");
const playEb4 = () => {
  keySound(Eb4);
  Eb4key.classList.add("active");
  setTimeout(() => Eb4key.classList.remove("active"), 200);
};
Eb4key.addEventListener("click", playEb4);

/** E4 KEY **/
const E4key = document.querySelector(".E4-key");
const playE4 = () => {
  keySound(E4);
  E4key.classList.add("active");
  setTimeout(() => E4key.classList.remove("active"), 200);
};
E4key.addEventListener("click", playE4);

/** F4 KEY **/
const F4key = document.querySelector(".F4-key");
const playF4 = () => {
  keySound(F4);
  F4key.classList.add("active");
  setTimeout(() => F4key.classList.remove("active"), 200);
};
F4key.addEventListener("click", playF4);

/** Gb4 KEY **/
const Gb4key = document.querySelector(".Gb4-key");
const playGb4 = () => {
  keySound(Gb4);
  Gb4key.classList.add("active");
  setTimeout(() => Gb4key.classList.remove("active"), 200);
};
Gb4key.addEventListener("click", playGb4);

/** G4 KEY **/
const G4key = document.querySelector(".G4-key");
const playG4 = () => {
  keySound(G4);
  G4key.classList.add("active");
  setTimeout(() => G4key.classList.remove("active"), 200);
};
G4key.addEventListener("click", playG4);

/** Ab4 KEY **/
const Ab4key = document.querySelector(".Ab4-key");
const playAb4 = () => {
  keySound(Ab4);
  Ab4key.classList.add("active");
  setTimeout(() => Ab4key.classList.remove("active"), 200);
};
Ab4key.addEventListener("click", playAb4);

/** A4 KEY **/
const A4key = document.querySelector(".A4-key");
const playA4 = () => {
  keySound(A4);
  A4key.classList.add("active");
  setTimeout(() => A4key.classList.remove("active"), 200);
};
A4key.addEventListener("click", playA4);

/** Bb4 KEY **/
const Bb4key = document.querySelector(".Bb4-key");
const playBb4 = () => {
  keySound(Bb4);
  Bb4key.classList.add("active");
  setTimeout(() => Bb4key.classList.remove("active"), 200);
};
Bb4key.addEventListener("click", playBb4);

/** B4 KEY **/
const B4key = document.querySelector(".B4-key");
const playB4 = () => {
  keySound(B4);
  B4key.classList.add("active");
  setTimeout(() => B4key.classList.remove("active"), 200);
};
B4key.addEventListener("click", playB4);
