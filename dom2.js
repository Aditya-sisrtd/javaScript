// let para = document.querySelector('p');
// console.log(para.setAttribute("class", "new_para"))
// console.log(para.getAttribute("class"));
// let div = document.querySelectorAll("div");
// div[0].style.backgroundColor = "rgb(355,45,2)"
// div[1].style.backgroundColor = "rgb(35,455,2)"
// div[2].style.backgroundColor = "rgb(70,155,200)"

//addition of new element to the dom
// step 1. creation of new element
// step 2. adding new element to the dom
// step 1.
//  let newBtnEle = document.createElement("button");
//  newBtnEle.innerText = 'click me!';
//  console.log(newBtnEle);
//  // step 2.
// let div = document.querySelector("#div");
// // div.append(newBtnEle);
// //div.prepend(newBtnEle);
// //div.before(newBtnEle);
// div.after(newBtnEle)
// newBtnEle.style.backgroundColor = "black";

// let heading = document.querySelector("h1");
// heading.style.visibility="hidden";
// // heading.remove(); to remove some element form the html

// let newBtn = document.createElement("button");
// newBtn.innerText = "click me!";
// newBtn.style.backgroundColor = "yellow";
// newBtn.style.color="black";
// document.querySelector("body").prepend(newBtn);
// let para = document.querySelector("p");
// console.log(para.classList);
// para.classList.add("newClass");
// console.log(para.classList);
// //para.classList.remove("newClass");
// console.log(para.classList);

// events in dom
// let btn1 = document.querySelector(".btn1");
// btn1.onclick = (evt) => {
//     console.log("DarkMode Enabled");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }
// if we try to create another event for btn1 this way the other one will override the first one for the we do need to use addEventListner

// let divBox = document.querySelector(".divBox");
// divBox.onmouseover = (evt) => {
//   console.log("You are inside divBox");
//   console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// }

//Event Listeners
//Recommended way to handle events
// let btn1 = document.querySelector(".btn1");
// btn1.addEventListener("click", () => {
//   console.log("DarkMode Enabled --> throuh Handler 1 ");
// });
// btn1.addEventListener("click", () => {
//   console.log("DarkMode Enabled --> throuh Handler 2 ");
// });
// const handler3 = () => {
//   console.log("DarkMode Enabled --> throuh Handler 3 ");
// };
// btn1.addEventListener("click", handler3);
// btn1.addEventListener("click", () => {
//   console.log("DarkMode Enabled --> throuh Handler 4 ");
// });

// //Revmove a handler through event listner
// btn1.removeEventListener('click', handler3);

//Creating dark mode and ligh mode functionality
//let modeBtn = document.querySelector(".mode1");
// let currMode = "light";
// modeBtn.addEventListener("click", ()=>{
//   if(currMode === "light"){
//     currMode = "dark";
//     document.querySelector("body").style.backgroundColor = "grey";
//   }
// })
//let modeBtnLight = document.querySelector(".mode2");
// modeBtnLight.addEventListener("click", ()=>{
//   if(currMode === "dark"){
//     currMode = "light";
//     document.querySelector("body").style.backgroundColor="rgb(159, 199, 187"
//   }
// })

//creating dark mode and light mode functionality through class
let modeBtn = document.querySelector(".mode1");
let modeBtnLight = document.querySelector(".mode2");
let currMode = "light";
let body = document.querySelector("body");
modeBtn.addEventListener("click", () => {
  if (currMode === "light") {
    currMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
  }
});
modeBtnLight.addEventListener("click", ()=>{
    if(currMode === "dark"){
      currMode = "light";
      body.classList.add("light");
      body.classList.remove("dark");
    }
  })
