const text = document.querySelector(".fancy");
const strText = text.textContent;
const splitTxt = strText.split("");
text.textContent = "";

for (let i = 0; i < splitTxt.length; i++) {
  text.innerHTML += "<span>" + splitTxt[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 50);

function onTick() {
  const span = text.querySelectorAll("span")[char];
  span.style.animation = "anim1 5s forwards ease-out";
  char++;
  if (char === splitTxt.length) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}
