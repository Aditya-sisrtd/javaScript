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
 let newBtnEle = document.createElement("button");
 newBtnEle.innerText = 'click me!';
 console.log(newBtnEle);
 // step 2.
let div = document.querySelector("#div");
// div.append(newBtnEle);
//div.prepend(newBtnEle);
//div.before(newBtnEle);
div.after(newBtnEle)
newBtnEle.style.backgroundColor = "black";
