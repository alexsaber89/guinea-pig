//DOM select
var h1 = document.getElementById("page-title");
var sections = document.querySelectorAll(".article-section");
var textInput = document.getElementById("keypress-input");
var guineaPig = document.getElementById("guinea-pig");
var output = document.getElementById("output-target");
var colorButton = document.getElementById("add-color");
var hulkifyButton = document.getElementById("make-large");
var captureButton = document.getElementById("add-border");
var roundedButton = document.getElementById("add-rounding");

//H1 event listeners
h1.addEventListener("mouseover",function onH1Mouseover() {
  output.innerHTML = "You moved your mouse over the header";
});

h1.addEventListener("mouseout",function onH1Mouseout() {
  output.innerHTML = "You left me!!";
});

//Sections event listener
for (var i = 0; i < sections.length; i++) {
  sections[i].addEventListener("click",clickedSectionToOutput,false);
}

function clickedSectionToOutput() {
  var clicked = event.target.innerHTML;
  output.innerHTML = "You clicked on the " + clicked + " section.";
}

//Text input event listener
textInput.addEventListener("keyup",function mirrorTextInput() {
  output.innerHTML = textInput.value;
});

//Guinea pig event listeners
colorButton.addEventListener("click",function addColor() {
  guineaPig.classList.add("blue");
});

hulkifyButton.addEventListener("click",function addSize() {
  guineaPig.classList.add("bigger");
});

captureButton.addEventListener("click",function addBorder() {
  guineaPig.classList.add("border");
});

roundedButton.addEventListener("click",function addRoundedBorder() {
  guineaPig.classList.add("border_rounded");
});