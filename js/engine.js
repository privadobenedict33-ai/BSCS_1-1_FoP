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
const video= document.querySelector("#player");
const playBtn = document.querySelector("#play-btn");
const continueBtn = document.querySelector("#continue-btn");
const msgBtn = document.querySelector("#msg-btn");
const choiceLayer = document.querySelector("#choice-layer");
const choicePrmpt = document.querySelector("#choice-prompt");
const choiceBtn = document.querySelector("#choice-buttons");
const timebar = document.querySelector("#timebar");
const barfill = document.querySelector("#timebar-fill");
const bartxt = document.querySelector("#timebar-text");
const title = document.querySelector("#title-screen");
const msgScreen = document.querySelector("#message-screen");
const msgTitle = document.querySelector("#msg-title");
const msgTxt = document.querySelector("#msg-text");

// ---------- (2) What the game remembers while running ----------
let sceneId;
let scene;
let choiceShown;
let ready;


// ---------- SAVING (uses the browser's localStorage) ----------
const SAVE_KEY = "decisionFilmSave";

function saveGame(id, time) {
  try{
    const data = {
      scene: id,
      time: time
    };

    const text = JSON.stringify(data);
    localStorage.setItem(SAVE_KEY, text);

  } 
  catch(error){
    console.log("Cant save game:");
  }
}

function loadGame() {
  function loadGame() {
  try {
    const text = localStorage.getItem(SAVE_KEY);

    if (text == null){
      return null;
    }
    else{
      return JSON.parse(text);
    }

  } catch (error) {
    console.log("Could not load game:", error);
  }
}
}

function clearSave() {
  try{
    const text = localStorage.removeItem(SAVE_KEY);
  }
  catch{
    console.log("Could not save", error);
  }
  
}

// Save the current spot every 2 seconds while a clip is playing
setInterval(function () {
 if (scene && ready && !video.paused && !video.ended) {
    saveGame(sceneId, video.currentTime);
  }
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

