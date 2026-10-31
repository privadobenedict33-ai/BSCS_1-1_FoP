/* =====================================================================
   story.js - the whole story lives here. It is only DATA, no game code.

   One "scene" = one video clip. The scene name is also the file name:
   scene "q3a" plays "videos/q3a.mp4".

   NAMES USED
     intro        the intro video
     q1 ... q10   a clip where QUESTION 1...10 appears (buttons + time bar)
     q1a, q1b     the clip played after picking A or B on question 1
     act5         the long clip with no question
     ending_good / ending_bad

   EVERY SCENE ENDS IN ONE OF THREE WAYS. Copy a block and change it.

   (A) A question appears while the clip plays:
       choice: {
         start: 40,        <- second when the buttons + time bar appear
         end: 55,          <- second when time runs out
         prompt: "What do you do?",
         options: [
           { text: "Run",  next: "q1a", default: true },  <- default = used if time runs out
           { text: "Hide", next: "q1b" }
         ]
       }

   (B) The clip just continues into another clip:
       next: "q2"
       button: "Start"     <- OPTIONAL: show a button and wait for a click first

   (C) The game ends:
       ending: true,
       endingTitle: "Good Ending",    <- optional
       endingText: "You made it."     <- optional

   TODO markers below = replace with the real text / seconds from the editors.
   (The 4 and 9 are for 10-second placeholder clips, so testing works.)
   ===================================================================== */

const STORY = {
  start: "intro",

  scenes: {

    // ---------------- INTRO ----------------
    // After the intro ends, a "Start" button appears, then the story begins.

    // ---------------- QUESTION 1 (Prologue + Act 1) ----------------
 
    // ---------------- QUESTION 2 (rest of Act 1, shared clip) ----------------
  
    // ---------------- QUESTION 3 (Act 2) ----------------
 
    // ---------------- QUESTION 4 ----------------
  
    // ---------------- QUESTION 5 ----------------

    // ---------------- QUESTION 6 (Act 3) ----------------
   
    // ---------------- QUESTION 7 (Act 4) ----------------

    // ---------------- QUESTION 8 ----------------
 


    // Both q8 goes to the SAME long Act 5 clip (no question inside it)
    // ---------------- ACT 5 (no question) ----------------


    // ---------------- QUESTION 9 (Act 6) ----------------
   
    // ---------------- QUESTION 10 (Act 7, last choice) ----------------
 
    // ---------------- ENDINGS ----------------
  }
}