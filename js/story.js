/* =====================================================================
   engine.js - runs the game. It reads the scenes from story.js.
   You normally do NOT need to edit this file.

   HOW IT WORKS (5 sentences)
   1. The page has ONE <video>.
   2. goTo("q1") gives that video the clip of scene "q1" and plays it.
   3. Many times per second, tick() looks at the video's time. When the time
      reaches the question's "start", the buttons and time bar appear on top.
   4. Clicking a button (or running out of time) calls goTo() with the next scene.
   5. Every 2 seconds the game saves the scene + time, so "Continue" works after a refresh.
   ===================================================================== */


// ---------- (1) Things from index.html that we control ----------
const video         = document.querySelector("#player");
//(all the page elements)

// ---------- (2) What the game remembers while running ----------
//(4 variables as said above)


// ---------- SAVING (uses the browser's localStorage) ----------
const SAVE_KEY = "decisionFilmSave";

function saveGame(id, time) {
}

function loadGame() {
}

function clearSave() {
}

// Save the current spot every 2 seconds while a clip is playing
setInterval(function () {



}, 2000);


// ---------- PLAY A SCENE ---------- (UNAHIN nyo toh tas yung iba halos optional nga lang eh)
// id      = the scene name, like "q3a"
// startAt = second to start from (0 normally, a saved time when continuing)

function goTo(id, startAt) {
  startAt = startAt || 0;

  hideChoices();
            // wait until the new clip has loaded

   video.play();

  saveGame(id, startAt);
  preloadNext();
}


// ---------- PRELOAD: quietly download the clips that could come next ----------
let preloaders = [];

function preloadNext() {
  // throw away the old ones to save memory
 }


// ---------- THE QUESTION (buttons + time bar over the video) ----------
function showChoices() {

}

function hideChoices() {
 
}

// The option marked default: true (or the first one if walang napili)
function defaultOption(choice) {
 
}


// ---------- tick(): runs about 60 times per second ----------
function tick() {

 }


// ---------- WHEN A CLIP ENDS ----------
video.onended = function () {

};


// ---------- SCREENS ----------
function showMessage(title, text, buttonLabel, whenClicked) {

    whenClicked();

  messageScreen.classList.remove("hidden");
}

function showTitle() {
  video.pause();


  hideChoices();


  // Only show "Continue" if there is a saved game
  const save = loadGame();

 }

playBtn.onclick = function () {
  clearSave();                                  // Play = brand new game

};

continueBtn.onclick = function () {
 
};


// ---------- START ----------
showTitle();
requestAnimationFrame(tick); 

