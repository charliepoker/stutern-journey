// If Else Statement

let grade = prompt("What is your score?");

if (grade >= 1 && grade < 40) {
  alert(`Your grade is ${grade} which means you Failed.`);
} else if (grade >= 40 && grade <= 49) {
  alert(`Your grade is ${grade} which means you Passed.`);
} else if (grade >= 50 && grade <= 59) {
  alert(`Your grade is ${grade} which means you have an Average score.`);
} else if (grade >= 60 && grade <= 69) {
  alert(`Your grade is ${grade} which means you have a Good score.`);
} else if (grade >= 70 && grade <= 79) {
  alert(`Your grade is ${grade} which means you have a very Good score.`);
} else if (grade >= 80 && grade <= 89) {
  alert(`Your grade is ${grade} which means you have an Excellent score.`);
} else if (grade >= 90 && grade <= 100) {
  alert(`Your grade is ${grade} which means you have a Distinction.`);
} else if (grade <= 0 || grade > 100) {
  alert(`Your input is not accepted`);
} else {
  alert(`Can i have your score`);
}

// Switch Statement

let grade = prompt("What is your score?");

switch (true) {
  case grade >= 1 && grade < 40:
    alert(`Your grade is ${grade} which means you Failed.`);
    break;
  case grade >= 40 && grade <= 49:
    alert(`Your grade is ${grade} which means you Passed.`);
    break;
  case grade >= 50 && grade <= 59:
    alert(`Your grade is ${grade} which means you have an Average score.`);
    break;
  case grade >= 60 && grade <= 69:
    alert(`Your grade is ${grade} which means you have a Good score.`);
    break;
  case grade >= 70 && grade <= 79:
    alert(`Your grade is ${grade} which means you have a very Good score.`);
    break;
  case grade >= 80 && grade <= 89:
    alert(`Your grade is ${grade} which means you have an Excellent score.`);
    break;
  case grade >= 90 && grade <= 100:
    alert(`Your grade is ${grade} which means you have a Distinction.`);
    break;
  case grade <= 0 || grade > 100:
    alert(`Your input is not accepted`);
    break;
  default:
    alert(`Can i have your score`);
}
