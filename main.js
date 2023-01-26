let fonts = document.querySelector("select");
let plus = document.querySelector("#plus");
let size = document.querySelector("#font-size");
let negative = document.querySelector("#negative");
let paragh = document.querySelector("p");
let bold = document.querySelector("#bold");
let invertColor = document.querySelector("#invert-color");

console.log(fonts);

fonts.onclick = function () {
  if (fonts.value == "cairo") {
    paragh.classList.add("cairo");
    paragh.classList.remove("dongle");
    paragh.classList.remove("Ubuntu");
  } else if (fonts.value == "dongle") {
    paragh.classList.add("dongle");
    paragh.classList.remove("cairo");
    paragh.classList.remove("Ubuntu");
  } else if (fonts.value == "Ubuntu") {
    paragh.classList.add("Ubuntu");
    paragh.classList.remove("cairo");
    paragh.classList.remove("dongle");
  }
};

const font = () => {
  paragh.style.fontSize = `${size.textContent.toString()}px`;
};

font();

plus.onclick = function () {
  if (size.textContent < 22) {
    ++size.textContent;
    font();
    if (size.textContent >= 22) {
      plus.classList.add("disabled");
    }
  }
  if (size.textContent >= 16) {
    negative.classList.remove("disabled");
  }
};

negative.onclick = function () {
  if (size.textContent > 16) {
    --size.textContent;
    font();
    if (size.textContent <= 16) {
      negative.classList.add("disabled");
    }
  }
  if (size.textContent <= 22) {
    plus.classList.remove("disabled");
  }
};

bold.onclick = function () {
  paragh.classList.toggle("bold");
  bold.classList.toggle("bold-btn");
};

invertColor.onclick = function () {
  invertColor.classList.toggle("invert-color");
  paragh.classList.toggle("paragh-toggle");
  paragh.classList.toggle("paragh");
};
