// console.log(window);
// // console.log('hello');
// // window.console.log('hello_window');
// console.dir(window);
// console.log('hello');
// console.dir("hello");
// let heading = document.getElementById('heading');
// console.dir(heading);
// let box = document.getElementsByClassName('box');
// console.dir(box);
// let heading = document.getElementsByTagName('h1');
// console.dir(heading);
// let obj = document.querySelector('div');
// console.dir(obj);
// let objects = document.querySelectorAll('div');
// console.dir(objects);
// let heading = document.querySelector("#heading");
// console.dir(heading);
// let firstEl = document.querySelector("#heading");
// console.dir(firstEl);
//console.log(firstEl.innerHTML);
// let h2 = document.querySelector('h2');
// console.dir(h2.innerText);
// h2.innerText = h2.innerText + 'from apna college students';
// console.dir(h2.innerText);
let divs = document.querySelectorAll('.box');
divs[0].innerText = 'new Unique Value one';
divs[1].innerText = 'new Unique Value two'
divs[2].innerText = 'new Unique Value three'
let index = 1;
for(let div of divs){
  // using the concept of string interpolation
 div.innerText = `new unique value ${index}`;
 index++;
}
console.log(divs[1].innerText)