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

function clearSave() {
  try{
    const text = localStorage.removeItem(SAVE_KEY);
  }
  catch (error) {
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

  sceneId = id;
  scene = STORY.scenes[id];
  ready = false;

  video.onloadedmetadata = function () {
    video.currentTime = startAt;
    ready = true;
    video.play();
  };

  video.src = scene.video;

  saveGame(id, startAt);
  preloadNext();
}



// ---------- PRELOAD: quietly download the clips that could come next ----------

let preloaders = [];

function preloadNext() {
  for (let i = 0; i < preloaders.length; i++) {
    document.body.removeChild(preloaders[i]);
  }

  preloaders = [];

  const nextScenes = [];

  if (scene.next) {
    nextScenes.push(scene.next);
  }

  if (scene.choice) {

    for (let i = 0; i < scene.choice.options.length; i++) {

      const option = scene.choice.options[i];

      nextScenes.push(option.next);
    }
  }

  for (let i = 0; i < nextScenes.length; i++) {

    const nextId = nextScenes[i];

    const nextScene = STORY.scenes[nextId];

    if (nextScene) {

      const hiddenVideo = document.createElement("video");

      hiddenVideo.preload = "auto";
      hiddenVideo.src = nextScene.video;

      hiddenVideo.style.display = "none";

      document.body.appendChild(hiddenVideo);

      preloaders.push(hiddenVideo);
    }
  }
}



// ---------- THE QUESTION (buttons + time bar over the video) ----------

function showChoices() {
  choiceShown = true;

  const choice = scene.choice;

  choicePrmpt.textContent = choice.prompt;

  choiceBtn.innerHTML = ""; //removs the content of choiceBtn div

  for (let i = 0; i < choice.options.length; i++) {

    const option = choice.options[i];

    const button = document.createElement("button");

    button.className = "choice-btn";

    button.textContent = option.text;

    button.onclick = function () {
      goTo(option.next);
    };

    choiceBtn.appendChild(button);

  }

  choiceLayer.classList.remove("hidden");

}


function hideChoices() {

  choiceShown = false;

  choiceLayer.classList.add("hidden");

  choiceBtn.innerHTML = "";

}

function defaultOption(choice) {

  for (let i = 0; i < choice.options.length; i++) {

    if (choice.options[i].default === true) {

      return choice.options[i];

    }

  }

  return choice.options[0];

}


// ---------- tick(): runs about 60 times per second ----------

function tick() {

  requestAnimationFrame(tick);

  if (!ready || !scene.choice) {
  return;
  }

  const choice = scene.choice;

  const time = video.currentTime;

  if (!choiceShown && time >= choice.start) {
    showChoices();
  }

  if (choiceShown) {

    const left = choice.end - time;

    const total = choice.end - choice.start;

    barfill.style.transform = "scaleX(" + (left / total) + ")";

    bartxt.textContent = Math.ceil(left) + " seconds";

    if (time >= choice.end - 0.02) {

      const option = defaultOption(choice);

      goTo(option.next);

    }
  }

}



// ---------- WHEN A CLIP ENDS ----------

video.onended = function () {

  if (scene.choice) { //this is for going to default when scene end

    const option = defaultOption(scene.choice);

    goTo(option.next);

  }

  else if (scene.ending) { 

    clearSave();

    showMessage(
      scene.endingTitle,
      scene.endingText,
      "Play Again",
      function () {
        showTitle();
      }
    );

  }

  else if (scene.button) {

    saveGame(scene.next, 0);

    showMessage(
      "Ready?",
      "Click Start to continue.",
      scene.button,
      function () {
        goTo(scene.next);
      }
    );

  }

  else if (scene.next) {

    goTo(scene.next);

  }

};



// ---------- SCREENS ----------
function showMessage(title, text, buttonLabel, whenClicked) {

  msgTitle.textContent = title;

  msgTxt.textContent = text;

  msgBtn.textContent = buttonLabel;

  msgBtn.onclick = function () {

    msgScreen.classList.add("hidden");

    whenClicked();

  };

  msgScreen.classList.remove("hidden");

}

function showTitle() {

  video.pause();

  scene = null;
  sceneId = null;
  ready = false;

  hideChoices();

  msgScreen.classList.add("hidden");

  title.classList.remove("hidden");

  const save = loadGame();

  if (save) {
    continueBtn.classList.remove("hidden");
  } else {
    continueBtn.classList.add("hidden");
  }

}

playBtn.onclick = function () {

  clearSave();

  title.classList.add("hidden");

  const params = new URLSearchParams(window.location.search); //since sa instruction, sabi "?scene= value from the address".. i think for debugging lang ba dis?

  const startScene = params.get("scene") || STORY.start;

  goTo(startScene);

};

continueBtn.onclick = function () {

  const save = loadGame();

  if (save) {

    title.classList.add("hidden");

    let startTime = save.time - 2;

    if (startTime < 0) {
      startTime = 0;
    }

    goTo(save.scene, startTime);

  }

};


// ---------- START ----------
showTitle();
requestAnimationFrame(tick); 

