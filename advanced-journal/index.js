var counter = 0;
var addNew = document.getElementById("button");
var displayCounter = document.getElementById("counts");

button.onclick = function () {
  prompt("Write your note.");
  counter++;
  displayCounter.innerHTML = "You have " + counter + " notes.";
};
