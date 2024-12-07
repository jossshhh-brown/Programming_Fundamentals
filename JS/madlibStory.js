
// Takes in multiple variables and builds a madlib for the user to enjoy
function madlibStory(inputAbout, inputAdverb1, inputName1, inputName2, inputNounPlural1, inputNounPlural2, inputNounSingle1, inputNounSingle2, inputPlace, inputVerbIng1, inputVerbIng2, inputVerbPast1, inputVerbPast2, inputVerbPastEd, inputVerbPresent) {  
  // Properly capitalize the input names
  inputName1 = inputName1.toLowerCase();
  inputName1 = inputName1.charAt(0).toUpperCase() + inputName1.slice(1);
  inputName2 = inputName2.toLowerCase();
  inputName2 = inputName2.charAt(0).toUpperCase() + inputName2.slice(1);

  // Convert all user input to lowercase
  inputAdverb1 = inputAdverb1.toLowerCase();
  inputNounPlural1 = inputNounPlural1.toLowerCase();
  inputNounPlural2 = inputNounPlural2.toLowerCase();
  inputNounSingle1 = inputNounSingle1.toLowerCase();
  inputNounSingle2 = inputNounSingle2.toLowerCase();
  inputPlace = inputPlace.toLowerCase();
  inputVerbIng1 = inputVerbIng1.toLowerCase();
  inputVerbIng2 = inputVerbIng2.toLowerCase();
  inputVerbPast1 = inputVerbPast1.toLowerCase();
  inputVerbPast2 = inputVerbPast2.toLowerCase();
  inputVerbPastEd = inputVerbPastEd.toLowerCase();
  inputVerbPresent = inputVerbPresent.toLowerCase();
  var result = "";

  // Create madlib to return 
  if (inputAdverb1 === "" || inputName1 === "" || inputName2 === "" | inputNounPlural1 === "" ||inputNounPlural2 === "" || inputNounSingle1 ==="" || inputNounSingle2 === "" || inputPlace === "" || inputVerbIng1 === "" || inputVerbIng2 === "" || inputVerbPast1 === "" || inputVerbPast2 === "" || inputVerbPastEd === "" || inputVerbPresent === ""){
    result = document.getElementById("madlib").innerHTML = "<span>Please check that all form fields have been filled in to display the story here!<span>";
    return result;
  } else {
      switch (inputAbout) {
        case "funny duck": 
        // Built the output and return the result
          result = "One day a duck named <span>" + inputName1 + "</span> said to his pet frog, \"<span>" + inputName2 + "</span>, I've got an idea. <br>";
          result += "Let's <span>" + inputVerbPresent + "</span> to the other side of the <span>" + inputPlace + "</span>!\" <br>";
          result += "<br>";
          result += "<span>" + inputName2 + "</span> the frog <span>" + inputVerbPastEd + "</span> at <span>" + inputName1 + "</span> and said, \"You know I'm a frog, right? <br>";
          result += "I can hop <span>" + inputNounPlural1 + "</span> around you!\"<br>";
          result += "<br>";
          result += "<span>" + inputName1 + "</span> <span>" + inputVerbPast1 + "</span>. \"Yeah, but I've got wings!\" <br>";
          result += "<br>";
          result += "They <span>" + inputVerbPast2 + "</span> across the <span>" + inputPlace + "</span>, with <span>" + inputName2 + "</span> <span>" + inputVerbIng1 + "</span> ahead and <span>" + inputName1 + "</span> <span>" + inputVerbIng2 + "</span> his <br>";
          result += "wings <span>" + inputAdverb1 + "</span>. But halfway through, <span>" + inputName1 + "</span> got distracted by a shiny <span>" + inputNounSingle1 + "</span> and <br>";
          result += "crashed into a <span>" + inputNounSingle2 + "</span>.<br>";
          result += "<br>";
          result += "<span>" + inputName2 + "</span> won by a mile... and then just hopped back to the starting line to say <br>"; 
          result += "\"I'm hoppy to be the winner!\"<br>";
          result += "<br>";
          result += "<span>" +inputName1 + "</span> shook his head, \"Next time, no more racing -- unless it's for <span>" + inputNounPlural2 + "</span>!\"";
          return result;
        case "funny turtle":
          // Built the output and return the result
          result = "<span>" + inputName1 + "</span> the turtle and <span>" + inputName2 + "</span> the rabbit planned to <span>" + inputVerbPresent + "</span> to the <span>" + inputPlace + "</span> one afternoon. <span>" + inputName2 + "</span><br>";
          result += "was thrilled, bouncing from <span>" + inputNounSingle1 + "</span> to <span>" + inputNounSingle1 + "</span>, while <span>" + inputName1 + "</span> took his time, <span>" + inputVerbIng1 + "</span> in <br>";
          result += "the lights and the games. <span>" + inputName2 + "</span> <span>" + inputVerbPastEd + "</span> over to the Ferris Wheel and hopped in the seat, <br>";
          result += "shouting, \"Come on, <span>" + inputName1 + "</span>, it'll be fun!\"<br>";
          result += "<br>";
          result += "<span>" + inputName1 + "</span>, looked up at the <span>" + inputNounSingle2 + "</span> and scoffed. \"I think I'll just watch\" he said, <br>";
          result += "<span>" + inputAdverb1 + "</span> <span>" + inputVerbIng2 + "</span> his way to the nearby <span>" + inputNounPlural1 + "</span>. <br>";
          result += "<br>";
          result += "<span>" + inputName2 + "</span>, impatient, <span>" + inputVerbPast2 + "</span> on the ride and zoomed around. Meanwhile, <span>" + inputName1 + "</span> ordered <br>";
          result += "a snack, <span>" + inputVerbPast1 + "</span> down, and started nibbling on some <span>" + inputNounPlural2 + "</span>. By the time <span>" + inputName2 + "</span> <br>";
          result += "finished, <span>" + inputName1 + "</span> had already eaten his entire treat and was taking a nap. <br>";
          result += "<br>";
          result += "<span>" + inputName2 + "</span> laughed. \"I guess some rides are better when you don't rush!\"";
          return result;
        case "sad duck":
          // Built the output and return the result
          result = "Once, there was a duck named <span>" + inputName1 + "</span> and a pig named <span>" + inputName2 + "</span> who lived in a quiet <br>";
          result += "<span>" + inputPlace + "</span>. They had been best friends since they were young, always <span>" + inputVerbIng1 + "</span> their <br>";
          result += "<span>" + inputNounSingle1 + "</span>, <span>" + inputVerbIng2 + "</span> on the <span>" + inputNounSingle2 + "</span>, and watching the <span>" + inputNounPlural1 + "</span> together. <span>" + inputName1 + "</span> loved the <br>";
          result += "water, while <span>" + inputName2 + "</span> enjoyed lying in the sun, and though they were different, <br>";
          result += "they found comfort in each other's company. <br>";
          result += "<br>";
          result += "As the years passed, <span>" + inputName1 + "</span>'s wings grew tired, and he could no longer fly as high <br>";
          result += "or <span>" + inputVerbPresent + "</span> as far. <span>" + inputName2 + "</span>, too, began to slow down, her <span>" + inputNounPlural2 + "</span> aching from years of <br>";
          result += "running in the fields. One chilly morning, <span>" + inputName1 + "</span> waddled to <span>" + inputName2 + "</span>'s side and <br>";
          result += "noticed she was breathing <span>" + inputAdverb1 + "</span>, her eyes dim. He gently <span>" + inputVerbPastEd + "</span> her, but <br>";
          result += "<span>" + inputName2 + "</span> didn't respond. With a heavy heart, <span>" + inputName1 + "</span> stayed by her side all day, knowing <br>";
          result += "that his dear friend's time had come. <br>";
          result += "<br>";
          result += "When the sun set that evening, <span>" + inputName2 + "</span> was no longer there. <span>" + inputName1 + "</span> <span>" + inputVerbPast1 + "</span> by the mud, <br>";
          result += "staring at the spot where they had once <span>" + inputVerbPast2 + "</span>, his heart heavy with the loss of <br>";
          result += "his only companion. From them on, every time <span>" + inputName1 + "</span> swam in the pond or looked out <br>";
          result += "over the fields, he felt the emptiness where <span>" + inputName2 + "</span>'s laughter once echoed.";
          return result;
        case "sad turtle":
          // Capitalize the first character of the adverb
          inputAdverb1 = inputAdverb1.charAt(0).toUpperCase() + inputAdverb1.slice(1);

          // Built the output and return the result
          result = "<span>" + inputName1 + "</span> the turtle had spent his entire life with the gentle <span>" + inputNounSingle1 + "</span> of the seasons <br>";
          result += "always steady and slow. But nothing compared to the joy he felt when he met <span>" + inputName2 + "</span>, <br>";
          result += "a graceful turtle who shared his love for quiet <span>" + inputNounPlural2 + "</span> by the <span>" + inputPlace + "</span> and peaceful <br>";
          result += "swims beneath the <span>" + inputNounPlural1 + "</span>. Together, they <span>" + inputVerbPast1 + "</span> through life at their own <br>";
          result += "pace, content in each other's company. <br>";
          result += "<br>";
          result += "As the years passed, <span>" + inputName2 + "</span> grew weaker. Her once bright eyes began to dim, and <br>";
          result += "she could no longer <span>" + inputVerbPresent + "</span> alongside <span>" + inputName1 + "</span>. One autumn evening, after a long <br>";
          result += "silent <span>" + inputNounSingle2 + "</span>, <span>" + inputName1 + "</span> found <span>" + inputName2 + "</span> <span>" + inputVerbIng1 + "</span> beneath their favorite tree. <br>";
          result += "Her shell was still, and the soft breeze no longer <span>" + inputVerbPast2 + "</span> her. <br>";
          result += "<br>";
          result += "<span>" + inputAdverb1 + "</span>, <span>" + inputName1 + "</span> <span>" + inputVerbPastEd + "</span> her, but he already knew. His heart shattered as he <br>";
          result += "realized he was alone, standing in the same place where they had spent so many <br>";
          result += "happy moments together. The <span>" + inputPlace + "</span>, once full of laughter and love, now felt cold <br>";
          result += "and endless. He stayed there for what seemed like an eternity, <span>" + inputVerbIng2 + "</span> for the <br>";
          result += "life they once had, but knowing he would never feel the warmth of her beside him again.";
          return result;
        default: 
          result = document.getElementById("madlib").innerHTML = "The entry for \"Funny or Sad\" or \"Duck or Turtle\" was not valid. Please try again!";
          return result;
      }
  }
}