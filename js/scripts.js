

 /*Código para o mouse*/

let clientX = 100;
let clientY = 100;
let innerCursor = document.querySelector(".cursor--small");

let initCursor = () => {
  document.addEventListener("mousemove", e => {
    clientX = e.clientX;
    clientY = e.clientY;
  });
  let render = () => {
    innerCursor.style.transform = `translate(${clientX}px, ${clientY}px)`;
    
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);
};

initCursor();




/*Código esconde o menu do desktop e faz aparecer o menu do mobile, não consegui fazer funcionar.
Coloquei a funcionar atravês do CSS


function navbar(){
 let win = this; /*supostamente pelo que li o "this" seria a janela do browser
 if (win.width() <= 700) { 
  menu.classList.add("hidden");
  hamburger.classList.remove("hidden");} 
}

*/


/*Código que revela os ingredientes e transforma o "+" em "-"*/

let info = document.querySelector("#info");
info.addEventListener("click", topics);


function topics() {
  let information = document.querySelector("#information");
  let plus = document.querySelector("#plus");
  let minus = document.querySelector("#minus");
  if (information.classList.contains("hidden")) {
    information.classList.remove("hidden");
    plus.classList.contains("block");
    plus.classList.add("hidden");
    minus.classList.contains("hidden");
    minus.classList.add("block");
  }
}


/*Código que esconde os ingredientes*/

let button2 = document.querySelector("#minus");
button2.addEventListener("click", hideinfo);

function hideinfo() {

let toHide = document.querySelector("#information");
let minus = document.querySelector("#minus");
  if (toHide.style.display === "none") {
    toHide.style.display = "block";
  } else {
    toHide.style.display = "none";
  }
}

/*Código que deveria mostrar o ingredientes seguintes. Eu cometi um erro no html que foi ter criado um container que 
engloba a informação toda.*/

let buttonPrev = document.querySelector("#prevInfo");
buttonPrev.addEventListener("click", prv);

function prv() {
  
let fiveInfo = document.querySelector("#information");
let shoeInfo = document.querySelector("#info2");
if (fiveInfo.classList.contains("hidden")) {
  fiveInfo.classList.add("block");
  shoeInfo.classList.remove("block");
  }
}


/*next info*/

let info2 = document.querySelector("#nextInfo");
info2.addEventListener("click", nxt);

function nxt() {

let fiveInfo = document.querySelector("#information");
let shoeInfo = document.querySelector("#info2");
let prevInfo = document.querySelector("#prevInfo");
if (fiveInfo.classList.add("hidden")) {
    shoeInfo.contains("hidden");
    shoeInfo.classList.add("block");  
  }
}


/*Este código deveria seleccionar cada ingrediente idividualmente, mas não consegui completar o mesmo.
Ele está a seleccionar todos*/

let bullets = document.querySelectorAll(".smp-list li");

function active() {
  let circle = document.querySelectorAll(".circle_form")
  for (i = 0; i < circle.length; ++i) {
    if (circle[i].classList.contains("circle_form"))
      circle[i].classList.add("active_form");
  }
}

for (i = 0; i < bullets.length; ++i) {
  bullets[i].addEventListener("click", active);
}


 /*Este código acresta um valor ao carrinho*/

let cartCount = 0;
let addToCartBtn = document.getElementById("add-btn");
let cartBadge = document.getElementById("cart-count");

addToCartBtn.addEventListener("click", soma);


function soma() {
  cartCount++;
  setTimeout((e) => {
    cartBadge.innerHTML = cartCount;
  }, 500);
}



 /*Carrousel do index, mas entra em conflito com o restante código.
 Se este código for o unico na página funciona perfeitamente */

let next = document.querySelector("#next");
next.addEventListener("click", nextImageArray);

let prev = document.querySelector("#prev");
prev.addEventListener("click", prevImageArray);


function nextImageArray() {
  allImages = document.querySelectorAll(".main div");
  for (i = 0; i < allImages.length; ++i) {
    if (allImages[i].classList.contains("show")) {
      allImages[i].classList.remove("show");
      allImages[i].classList.add("hidden");
      if (i + 1 == allImages.length) {
        allImages[0].classList.add("show");
        allImages[0].classList.remove("hidden");
      } else {
        allImages[i + 1].classList.add("show");
        allImages[i + 1].classList.remove("hidden");
      }
      break;
    }
  }
}

function prevImageArray() {
  allImages = document.querySelectorAll("main div");
  for (i = 0; i < allImages.length; ++i) {
    if (allImages[i].classList.contains("show")) {
      allImages[i].classList.remove("show");
      allImages[i].classList.add("hidden");
      if (i == 0) {
        allImages[allImages.length - 1].classList.add("show");
        allImages[allImages.length - 1].classList.remove("hidden");
      } else {
        allImages[i - 1].classList.add("show");
        allImages[i - 1].classList.remove("hidden");
      }
      break;
    }
  }
}

/*api.....não sei como resolver

fetch('https://SECRET.mockapi.io/:endpoint')
.then(T => T.json())
.then(console.log)

*/



