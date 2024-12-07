
// Takes in 2 variables and outputs the result of the user's choices
function determineStory(inputStoryDescription, inputStoryType) {
  // Variable declaraiont and manipulation
  var finalAbout = "";

  // Determine which story to load and return it's value
  while (finalAbout === "") {
    // Confirm input is a string and convert to lower case 
    inputStoryDescription = inputStoryDescription.toString();
    inputStoryDescription = inputStoryDescription.toLowerCase();
    inputStoryType = inputStoryType.toString();
    inputStoryType = inputStoryType.toLowerCase();

    // Determine which story will be returned or alert that selection was
    if (inputStoryDescription.includes("funny")) {
        if (inputStoryType.includes("duck")) { 
          finalAbout = "funny duck";
        } else if (inputStoryType.includes("turtle")) {
            finalAbout = "funny turtle";
        } else {
            alert("The entry for \"Funny or Sad\" or \"Duck or Turtle\" was not valid. Please try again!");
          return;
        }
    } else if (inputStoryDescription.includes("sad")) {
        if (inputStoryType.includes("duck")) { 
          finalAbout = "sad duck";
        } else if (inputStoryType.includes("turtle")) {
            finalAbout = "sad turtle";
        } else {
            alert("The entry for \"Funny or Sad\" or \"Duck or Turtle\" was not valid. Please try again!");
            return;
      }
    } else { 
        alert("The entry for \"Funny or Sad\" or \"Duck or Turtle\" was not valid. Please try again!");
        return;
    }
  }
  return finalAbout;
}