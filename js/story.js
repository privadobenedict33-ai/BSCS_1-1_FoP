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
  intro: {
      video: "videos/intro.mp4",
      next: "q1",
      button: "Start"
  },

    // ---------------- QUESTION 1 (Prologue + Act 1) ----------------
  q1: {
      video: "videos/q1.mp4",
      choice: {
        start: 4, // 4 placeholder: replace with editor's timestamp
        end: 9, // 9 placeholder: replace with editor's timestamp
        prompt: "TODO question 1",
        options: [
          { text: "TODO option A",  next: "q1a", default: true },
          { text: "TODO option B", next: "q1b" }
        ]
      }
    },

    q1a: { video: "videos/q1a.mp4", next: "q2" },
    q1b: { video: "videos/q1b.mp4", next: "q2" },

    // ---------------- QUESTION 2 (rest of Act 1, shared clip) ----------------
  q2: {
      video: "videos/q2.mp4",
      choice: {
        start: 0, // 0 placeholder
        end: 0, // 0 placeholder
        prompt: "TODO question 2",
        options: [
          { text: "TODO option A",  next: "q2a", default: true },
          { text: "TODO option B", next: "q2b" }
        ]
      }
    },

    q2a: { video: "videos/q2a.mp4", next: "q3" },
    q2b: { video: "videos/q2b.mp4", next: "q3" },

    // ---------------- QUESTION 3 (Act 2) ----------------
  q3: {
      video: "videos/q3.mp4",
      choice: {
        start: 0, // 0 placeholder
        end: 0, // 0 placeholder
        prompt: "TODO question 3",
        options: [
          { text: "TODO option A",  next: "q3a", default: true },
          { text: "TODO option B", next: "q3b" }
        ]
      }
    },

    q3a: { video: "videos/q3a.mp4", next: "q4" },
    q3b: { video: "videos/q3b.mp4", next: "q4" },

    // ---------------- QUESTION 4 ----------------
  q4: {
      video: "videos/q4.mp4",
      choice: {
        start: 0, // 0 placeholder
        end: 0, // 0 placeholder
        prompt: "TODO question 4",
        options: [
          { text: "TODO option A",  next: "q4a", default: true },
          { text: "TODO option B", next: "q4b" }
        ]
      }
    },

    q4a: { video: "videos/q4a.mp4", next: "q5" },
    q4b: { video: "videos/q4b.mp4", next: "q5" },

    // ---------------- QUESTION 5 ----------------
  q5: {
      video: "videos/q5.mp4",
      choice: {
        start: 0, // 0 placeholder
        end: 0, // 0 placeholder
        prompt: "TODO question 5",
        options: [
          { text: "TODO option A",  next: "q5a", default: true },
          { text: "TODO option B", next: "q5b" }
        ]
      }
    },

    q5a: { video: "videos/q5a.mp4", next: "q6" },
    q5b: { video: "videos/q5b.mp4", next: "q6" },

    // ---------------- QUESTION 6 (Act 3) ----------------
  q6: {
      video: "videos/q6.mp4",
      choice: {
        start: 0, // 0 placeholder
        end: 0, // 0 placeholder
        prompt: "TODO question 6",
        options: [
          { text: "TODO option A",  next: "q6a", default: true },
          { text: "TODO option B", next: "q6b" }
        ]
      }
    },

    q6a: { video: "videos/q6a.mp4", next: "q7" },
    q6b: { video: "videos/q6b.mp4", next: "q7" },

    // ---------------- QUESTION 7 (Act 4) ----------------
  q7: {
      video: "videos/q7.mp4",
      choice: {
        start: 0, // 0 placeholder
        end: 0, // 0 placeholder
        prompt: "TODO question 7",
        options: [
          { text: "TODO option A",  next: "q7a", default: true },
          { text: "TODO option B", next: "q7b" }
        ]
      }
    },

    q7a: { video: "videos/q7a.mp4", next: "q8" },
    q7b: { video: "videos/q7b.mp4", next: "q8" },

    // ---------------- QUESTION 8 ----------------
  q8: {
      video: "videos/q8.mp4",
      choice: {
        start: 0, // 0 placeholder
        end: 0, // 0 placeholder
        prompt: "TODO question 8",
        options: [
          { text: "TODO option A",  next: "q8a", default: true },
          { text: "TODO option B", next: "q8b" }
        ]
      }
    },

    // Both q8 goes to the SAME long Act 5 clip (no question inside it)
    q8a: { video: "videos/q8a.mp4", next: "act5" },
    q8b: { video: "videos/q8b.mp4", next: "act5" },
    
    // ---------------- ACT 5 (no question) ----------------
  act5: { 
    video: "videos/act5.mp4", 
    next: "q9" 
  },

    // ---------------- QUESTION 9 (Act 6) ----------------
  q9: {
      video: "videos/q9.mp4",
      choice: {
        start: 0, // 0 placeholder
        end: 0, // 0 placeholder
        prompt: "TODO question 9",
        options: [
          { text: "TODO option A",  next: "q9a", default: true },
          { text: "TODO option B", next: "q9b" }
        ]
      }
    },

    q9a: { video: "videos/q9a.mp4", next: "q10" },
    q9b: { video: "videos/q9b.mp4", next: "q10" },

    // ---------------- QUESTION 10 (Act 7, last choice) ----------------
  q10: {
      video: "videos/q10.mp4",
      choice: {
        start: 0, // 0 placeholder
        end: 0, // 0 placeholder
        prompt: "TODO question 10",
        options: [
          { text: "TODO option A",  next: "ending_good", default: true },
          { text: "TODO option B", next: "ending_bad" }
        ]
      }
    },

    // ---------------- ENDINGS ----------------
  ending_good: {
      video: "videos/ending_good.mp4",
      ending: true,
      endingTitle: "Good Ending",
      endingText: "TODO good ending text"
    },

    ending_bad: {
      video: "videos/ending_bad.mp4",
      ending: true,
      endingTitle: "Bad Ending",
      endingText: "TODO bad ending text"
    }
    
  }
}