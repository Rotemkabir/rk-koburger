const totalPriceSpan = document.getElementById("totalPrice");
let totalPriceContent = Number(totalPriceSpan.textContent);
const meatPrice = 4;
const burgerImage = document.getElementById("meatImg");
const tomatoPrice = 2;
const tomatoImage = document.getElementById("tomatoImg");
const lettucePrice = 1;
const lettuceImage = document.getElementById("lettuceImg");
const onionPrice = 1;
const onionImage = document.getElementById("onionImg");
const eggPrice = 3;
const eggImage = document.getElementById("eggImg");
const ketchupPrice = 0.5;
const ketchupImage = document.getElementById("ketchupImg");
const mayonnaisePrice = 0.5;
const mayonnaiseImage = document.getElementById("mayonnaiseImg");

function addMeat() {
  const meatSrc = "./png/meet.png";
  const meatImg = document.createElement("img");
  meatImg.src = meatSrc;
  meatImg.alt = "meat";
  burgerImage.appendChild(meatImg);
  totalPriceContent += meatPrice;
  totalPriceSpan.innerHTML = totalPriceContent;
}
function removeMeat() {
  burgerImage.removeChild(burgerImage.lastChild);
  totalPriceContent -= meatPrice;
  totalPriceSpan.innerHTML = totalPriceContent;
}
function addTomato() {
  const tomatoSrc = "./png/tomato.png";
  const tomatoImg = document.createElement("img");
  tomatoImg.src = tomatoSrc;
  tomatoImg.alt = "tomato";
  tomatoImage.appendChild(tomatoImg);
  totalPriceContent += tomatoPrice;
  totalPriceSpan.innerHTML = totalPriceContent;
}
function removeTomato() {
  tomatoImage.removeChild(tomatoImage.lastChild);
  totalPriceContent -= tomatoPrice;
  totalPriceSpan.innerHTML = totalPriceContent;
}
function addLettuce() {
  const lettuceSrc = "./png/lettuce.png";
  const lettuceImg = document.createElement("img");
  lettuceImg.src = lettuceSrc;
  lettuceImg.alt = "lettuce";
  lettuceImage.appendChild(lettuceImg);
  totalPriceContent += lettucePrice;
  totalPriceSpan.innerHTML = totalPriceContent;
}
function removeLettuce() {
  lettuceImage.removeChild(lettuceImage.lastChild);
  totalPriceContent -= lettucePrice;
  totalPriceSpan.innerHTML = totalPriceContent;
}
function addOnion() {
  const onionSrc = "./png/onion.png";
  const onionImg = document.createElement("img");
  onionImg.src = onionSrc;
  onionImg.alt = "onion";
  onionImage.appendChild(onionImg);
  totalPriceContent += onionPrice;
  totalPriceSpan.innerHTML = totalPriceContent;
}
function removeOnion() {
  onionImage.removeChild(onionImage.lastChild);
  totalPriceContent -= onionPrice;
  totalPriceSpan.innerHTML = totalPriceContent;
}
function addEgg() {
  const eggSrc = "./png/egg.png";
  const eggImg = document.createElement("img");
  eggImg.src = eggSrc;
  eggImg.alt = "egg";
  eggImage.appendChild(eggImg);
  totalPriceContent += eggPrice;
  totalPriceSpan.innerHTML = totalPriceContent;
}
function removeEgg() {
  eggImage.removeChild(eggImage.lastChild);
  totalPriceContent -= eggPrice;
  totalPriceSpan.innerHTML = totalPriceContent;
}
function addKetchup() {
  const ketchupSrc = "./png/ketchup.png";
  const ketchupImg = document.createElement("img");
  ketchupImg.src = ketchupSrc;
  ketchupImg.alt = "ketchup";
  ketchupImage.appendChild(ketchupImg);
  totalPriceContent += ketchupPrice;
  totalPriceSpan.innerHTML = totalPriceContent;
}
function removeKetchup() {
  ketchupImage.removeChild(ketchupImage.lastChild);
  totalPriceContent -= ketchupPrice;
  totalPriceSpan.innerHTML = totalPriceContent;
}
function addMayonnaise() {
  const mayonnaiseSrc = "./png/mayonnaise.png";
  const mayonnaiseImg = document.createElement("img");
  mayonnaiseImg.src = mayonnaiseSrc;
  mayonnaiseImg.alt = "mayonnaise";
  mayonnaiseImage.appendChild(mayonnaiseImg);
  totalPriceContent += mayonnaisePrice;
  totalPriceSpan.innerHTML = totalPriceContent;
}
function removeMayonnaise() {
  mayonnaiseImage.removeChild(mayonnaiseImage.lastChild);
  totalPriceContent -= mayonnaisePrice;
  totalPriceSpan.innerHTML = totalPriceContent;
}
