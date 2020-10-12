const addNoteBtn = document.querySelector(".note-btn");
let displayCounter = document.getElementById("counts");
const modal = document.querySelector(".modal");
const cancelBtn = document.querySelector("#cancel");
const okBtn = document.querySelector("#ok");
const form = document.querySelector("form");
const mainContent = document.querySelector(".main-content");

let counter = 0;

function displayCount() {
  counter++;
  displayCounter.innerHTML = "You have " + counter + " notes.";
}

// Open modal function
function openModal() {
  modal.style.display = "block";
}

// Close modal function
function closeModal() {
  modal.style.display = "none";
}

//clear form values
function clearForm() {
  form.reset();
}

//create new content
function newContent() {
  let formInput = document.querySelector("#input").value;
  let formTextArea = document.querySelector("#text").value;

  let date = new Date();

  let content = `<article class="main-content-top">
        <h2>${date.getDate()}/${
    date.getMonth() + 1
  }/${date.getFullYear()}: ${formInput}</h2>
        <p>${formTextArea}</p>
      </article>`;

  if (formInput !== "" || formTextArea !== "") {
    mainContent.insertAdjacentHTML("afterbegin", content);
    closeModal();
    clearForm();
    displayCount();
  } else {
    alert("Form input must have a value");
  }
}

//Execute functions
addNoteBtn.addEventListener("click", openModal);
cancelBtn.addEventListener("click", closeModal);
okBtn.addEventListener("click", newContent);
