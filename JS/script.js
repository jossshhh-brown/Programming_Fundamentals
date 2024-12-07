
// This program was written by Josh Brown on November 23, 2024 
// This program takes input from the user and outputs 1 of 4 madlib stories 

// Declare form element to assign it the values of the form 
  var form = document.getElementById("initialStory_form");

// To begin the program on user clicking "Submit"
  form.addEventListener("submit", function(event){
    // Declare variables and assign value from web form
    var about = "";
    var adverb1 = document.getElementById("adverb1").value;
    var name1 = document.getElementById("name1").value;
    var name2 = document.getElementById("name2").value;
    var nounPlural1 = document.getElementById("nounPlural1").value;
    var nounPlural2 = document.getElementById("nounPlural2").value;
    var nounSingle1 = document.getElementById("nounSingle1").value;
    var nounSingle2 = document.getElementById("nounSingle2").value;
    var output = "";
    var place = document.getElementById("place").value;
    var storyDescription = document.getElementById("funny_or_sad").value;
    var storyOutput = "";
    var storyType = document.getElementById("duck_or_turtle").value;
    var verbIng1 = document.getElementById("verbIng1").value;
    var verbIng2 = document.getElementById("verbIng2").value;
    var verbPast1 = document.getElementById("verbPast1").value;
    var verbPast2 = document.getElementById("verbPast2").value;
    var verbPastEd = document.getElementById("verbPastEd").value;
    var verbPresent = document.getElementById("verbPresent").value;

    // Cancel form submission default behavior
    event.preventDefault();

    // Determine which story type was selected by the user
    about = determineStory(storyDescription, storyType);

    // Send variables to madlib function, to return the final story
    storyOutput = madlibStory(about, adverb1, name1, name2, nounPlural1, nounPlural2, nounSingle1, nounSingle2, place, verbIng1, verbIng2, verbPast1, verbPast2, verbPastEd, verbPresent);

    // Build the output 
    if (about === undefined) {
      document.getElementById("madlib").innerHTML = "The entry for \"Funny or Sad\" or \"Duck or Turtle\" was not valid. Please try again!";
    } else {
      output = "<br>";
      output += "Please enjoy this madlib about the " + about + "!" + "<br>";
      output += "<br><br>";
      output += "<p>" + storyOutput + "</p>";
      document.getElementById("madlib").innerHTML = output;
    }
}
);


