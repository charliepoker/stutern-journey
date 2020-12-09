// Write a function to create a new string adding "Sc" in front of a given string. If the given string begins with "Sc" then return the original string.

function newString(string) {
  const arr = string.toLowerCase().split("");
  console.log(arr);
  if (string[0] !== "s" && string[1] !== "c") {
    const addString = "sc" + string;
    console.log(addString);
  } else {
    console.log(string);
  }
}

newString("Schinder");
